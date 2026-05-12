// To start an events listener for when the DOM content is loaded.
document.addEventListener("DOMContentLoaded", async function () {

    // this tasks is get data from jsonbin and store in the tasks variable
    tasks = await fetchTasksFromJSONBin();
    displayTasks(tasks);

    // Add event listener for the Add Button submission
    const addBtn = document.querySelector("#addTaskBtn");
    addBtn.addEventListener("click", function () {
        // alert("Add new task");
        Swal.fire({
            "title": `Add New Task`,
            "html": `
                    <div>
                        <div class="m-2">
                            <label>Task</label>
                            <input type="text" id="addTask" class="form-control" placeholder="Enter task" />
                        </div>
                        <div class="m-2">
                            <label>Category</label>
                            <input type="text" id="addCategory" class="form-control" placeholder="Enter category" />
                        </div>
                        <div class="m-2">
                            <label>Deadline</label>
                            <input type="date" id="addDeadline" class="form-control"/>
                        </div>
                        <div class="m-2">
                            <label>Priority</label>
                            <select id="addPriority" class="form-control">
                            <option value="1">1 (Low)</option>
                            <option value="2"}>2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5 (High)</option>
                            </select>
                        </div>
                    </div>
                   `,
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: `Add Task`,
            confirmButtonColor: "#3085d6",
            preConfirm: async function () {
                // preConfirm is called when the user pressed on the Add Task button
                let newTask = document.querySelector("#addTask").value;
                let newCategory = document.querySelector("#addCategory").value;
                let newDeadline = document.querySelector("#addDeadline").value;
                let newPriority = document.querySelector("#addPriority").value;

                if (newTask.trim() === "" || newCategory.trim() === "" || newDeadline.trim() === "") {
                    Swal.showValidationMessage("Please fill in all fields");
                    return false; // Prevent the modal from closing
                }
                // Call the addTask function to add the new task to the list
                addTask(tasks, newTask, newCategory, newDeadline, newPriority);
                await saveTasksToJSONBin(tasks);
                displayTasks(tasks);
            }
        });
    })
})

function displayTasks(tasks) {
    const taskListUl = document.querySelector("#tasklist");

    taskListUl.innerText = "";  // clear the list before displaying   

    // Create and append the Header Row
    // Insert the header row right before you start the loop. 
    // This ensures that every time you refresh the feed, the titles appear first.
    const headerLi = document.createElement("li");
    headerLi.className = "list-group-item bg-light fw-bold"; // Added background and bold
    headerLi.innerHTML = `
        <div class="row align-items-center">   
            <div class="col-2">Task</div>
            <div class="col-2">Category</div>
            <div class="col-2">Deadline</div>
            <div class="col-2">Priority</div>
            <div class="col-2">Status</div>
            <div class="col-2 text-center">Actions</div>
        </div>
    `
    taskListUl.appendChild(headerLi);

    // add data rows for each task
    for (let t of tasks) {
        const liElement = document.createElement("li");
        liElement.className = "list-group-item";
        liElement.innerHTML = `
        <div class="row align-items-center">   
            <div class="col-2">${t.task}</div>
            <div class="col-2">${t.category}</div>
            <div class="col-2">${t.deadline}</div>
            <div class="col-2">${t.priority}</div>
            <div class="col-2">${t.isCompleted ? "Completed" : "Pending"}</div>
            <div class="col-2 text-end">
                <button class="m-1 btn btn-danger btn-sm delete-btn">Delete</button>
                <button class="m-1 btn btn-success btn-sm update-btn">Edit</button>
            </div>
        </div>
        `

        // Add event listeners for the buttons using SweetAlert
        const deleteBtn = liElement.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", async function () {
            // // alert("Delete task with ID: " + t.task);
            // deleteTask(tasks, t.id);
            // await saveTasksToJSONBin(tasks);
            // displayTasks(tasks);
            Swal.fire({
                "title": `Please confirm to delete task: ${t.task}`,
                "html": `
                <div class="text-center">
                <p>You are about to delete the task</p>
                <h5 class="text-danger">${t.task}</h5>
                <p class="small text-muted">Deadline: ${t.deadline}</p>
                </div>
                `,
                icon: "warning",
                showCancelButton: true,
                showCloseButton: true,
                confirmButtonColor: "#d33",
                confirmButtonText: "Yes, delete this task",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    deleteTask(tasks, t.id);
                    await saveTasksToJSONBin(tasks);
                    displayTasks(tasks);
                }
            });
        })


        // using SweetAlert
        const updateBtn = liElement.querySelector(".update-btn");
        updateBtn.addEventListener("click", async function () {
            // alert("Update task with ID: " + t.task);
            // console.log("Update task with ID: " + t.deadline);

            Swal.fire({
                "title": `Task to update: ${t.task}`,
                "html": `
                    <div>
                        <div class="m-2">
                            <label>Task</label>
                            <input type="text" id="newTask" class="form-control" value="${t.task}" />
                        </div>
                        <div class="m-2">
                            <label>Category</label>
                            <input type="text" id="newCategory" class="form-control" value="${t.category}" />
                        </div>
                        <div class="m-2">
                            <label>Deadline</label>
                            <input type="date" id="newDeadline" class="form-control" value="${t.deadline}"/>
                        </div>
                        <div class="m-2">
                            <label>Priority</label>
                            <select id="newPriority" class="form-control">
                            <option value="1" ${t.priority == 1 ? "selected" : ""}>1</option>
                            <option value="2" ${t.priority == 2 ? "selected" : ""}>2</option>
                            <option value="3" ${t.priority == 3 ? "selected" : ""}>3</option>
                            <option value="4" ${t.priority == 4 ? "selected" : ""}>4</option>
                            <option value="5" ${t.priority == 5 ? "selected" : ""}>5</option>
                            </select>
                        </div>
                        <div class="m-2">
                            <label>Status</label>
                            <select id="newStatus" class="form-control">
                            <option value="Pending" ${t.isCompleted == false ? "selected" : ""}>Pending</option>
                            <option value="Completed" ${t.isCompleted == true ? "selected" : ""}>Completed</option>
                            </select>
                        </div>
                    </div>
                                    `,
                showCancelButton: true,
                showCloseButton: true,
                confirmButtonColor: "#198754",
                confirmButtonText: "Yes, update this task",
                preConfirm: async function () {
                    // preConfirm is called when the user pressed on the confirm button
                    let newTask = document.querySelector("#newTask").value;
                    let newCategory = document.querySelector("#newCategory").value;
                    let newDeadline = document.querySelector("#newDeadline").value;
                    let newPriority = document.querySelector("#newPriority").value;
                    let newStatus = document.querySelector("#newStatus").value;

                    updateTask(tasks, t.id, newTask, newCategory, newDeadline, newPriority, newStatus);
                    await saveTasksToJSONBin(tasks);
                    displayTasks(tasks);
                }
            });
        })


        taskListUl.appendChild(liElement);
    }
}


