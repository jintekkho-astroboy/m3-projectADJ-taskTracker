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
        <div class="row">
            <div class="col-2">ID</div>
            <div class="col-2">Author</div>
            <div class="col-6">Content</div>
            <div class="col-3">Timestamp</div>
            <div class="col-1">Likes</div>
        </div>
    `;
    taskListUl.appendChild(headerLi);

    // add data rows for each task
    for (let t of tasks) {
        const liElement = document.createElement("li");
        liElement.className = "list-group-item";
        liElement.innerHTML = `
        <div class="row">
        <div class="col-2">${t.id}</div>
            <div class="col-2">${t.task}</div>
            <div class="col-6">${t.category}</div>
            <div class="col-3">${t.deadline}</div>
            <div class="col-1">Likes: ${t.priority}</div>
        </div>

        
        `
        taskListUl.appendChild(liElement);
    }
}


