// To start an events listener for when the DOM content is loaded.
document.addEventListener("DOMContentLoaded", function () {

    displayTasks(tasks);


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
            <div class="col-1">ID</div>
            <div class="col-3">Task</div>
            <div class="col-2">Category</div>
            <div class="col-2">Deadline</div>
            <div class="col-1">Priority</div>
            <div class="col-1">Status</div>
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
            <div class="col-1">${t.id}</div>
            <div class="col-3">${t.task}</div>
            <div class="col-2">${t.category}</div>
            <div class="col-2">${t.deadline}</div>
            <div class="col-1">${t.priority}</div>
            <div class="col-1">${t.isCompleted ? "Completed" : "Pending"}</div>
            <div class="col-2 text-end">
                <button class="m-1 btn btn-danger btn-sm delete-btn">Delete</button>
                <button class="m-1 btn btn-success btn-sm update-btn">Edit</button>
            </div>
        </div>
        `

        // Add event listeners for the buttons
        const deleteBtn = liElement.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", function () {
            // alert("Delete task with ID: " + t.task);
            deleteTask(tasks, t.id);
            displayTasks(tasks);
        })


        // using SweetAlert
        const updateBtn = liElement.querySelector(".update-btn");
        updateBtn.addEventListener("click", function () {
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
                preConfirm: function () {
                    // preConfirm is called when the user pressed on the confirm button
                    let newTask = document.querySelector("#newTask").value;
                    let newCategory = document.querySelector("#newCategory").value;
                    let newDeadline = document.querySelector("#newDeadline").value;
                    let newPriority = document.querySelector("#newPriority").value;
                    let newStatus = document.querySelector("#newStatus").value;

                    updateTask(tasks, t.id, newTask, newCategory, newDeadline, newPriority, newStatus);
                    displayTasks(tasks);
                }
            });
        })


        taskListUl.appendChild(liElement);
    }
}


