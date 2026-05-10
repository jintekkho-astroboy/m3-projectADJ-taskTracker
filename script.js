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
                <button class="btn btn-danger btn-sm delete-btn">Delete</button>
                <button class="btn btn-success btn-sm update-btn">Edit</button>
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


            taskListUl.appendChild(liElement);
        }
}


