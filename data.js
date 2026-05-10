const tasks = [
    {
        "id": 1,
        "task": "Refill Acrylic Paints",
        "category": "Inventory",
        "deadline": "2026-05-11",
        "priority": 5,
        "isCompleted": false
    },
    {
        "id": 2,
        "task": "Wash Ceramic Brushes",
        "category": "Cleanup",
        "deadline": "2026-05-10",
        "priority": 4,
        "isCompleted": false
    },
    {
        "id": 3,
        "task": "Prep Grade 1 Canvases",
        "category": "Classroom Prep",
        "deadline": "2026-05-12",
        "priority": 3,
        "isCompleted": true
    },
    {
        "id": 4,
        "task": "Email Parent Invoices",
        "category": "Admin",
        "deadline": "2026-05-15",
        "priority": 2,
        "isCompleted": true
    },
    {
        "id": 5,
        "task": "Update Gallery Lighting",
        "category": "Maintenance",
        "deadline": "2026-05-20",
        "priority": 1,
        "isCompleted": false
    },
    {
        "id": 6,
        "task": "Sanitize Pottery Wheels",
        "category": "Cleanup",
        "deadline": "2026-05-10",
        "priority": 5,
        "isCompleted": false
    },
    {
        "id": 7,
        "task": "Order Sketchbooks",
        "category": "Procurement",
        "deadline": "2026-05-14",
        "priority": 4,
        "isCompleted": true
    },
    {
        "id": 8,
        "task": "Print Grading Rubrics",
        "category": "Teaching",
        "deadline": "2026-05-11",
        "priority": 3,
        "isCompleted": false
    },
    {
        "id": 9,
        "task": "Organize Drying Rack",
        "category": "Organize Drying Rack",
        "deadline": "2026-05-10",
        "priority": 4,
        "isCompleted": false
    },
    {
        "id": 10,
        "task": "Mount Student Artwork",
        "category": "Exhibition",
        "deadline": "2026-05-18",
        "priority": 2,
        "isCompleted": false
    }
]


function addTask(tasks, newTask, newCategory, newDeadline, newPriority) {
    let newTaskItem = {
        id: Math.floor(Math.random() * 10000) + 1,
        task: newTask,
        category: newCategory,
        deadline: newDeadline,
        priority: newPriority,
        isCompleted: false
    }
    tasks.push(newTaskItem);
    // console.log("New task added: ", newTaskItem.id);
}


function deleteTask(tasks, idToDelete) {

    let i = 0;
    let wantedIndex = -1;  // -1 does not found
    while (i < tasks.length) {

        if (tasks[i].id == idToDelete) {
            wantedIndex = i;
            break;
        }

        i = i + 1;
    }

    // if wantedIndex is not -1 then we have the found index to delete
    if (wantedIndex != -1) {
        tasks.splice(wantedIndex, 1);
    }
}

function updateTask(tasks, idToUpdate, newTask, newCategory, newDeadline, newPriority, newStatus) {
    let modifiedTask = {
        id: idToUpdate,
        task: newTask,
        category: newCategory,
        deadline: newDeadline,
        priority: newPriority,
        isCompleted: newStatus == "Completed" ? true : false
    }

    let indexToUpdate = -1;
    let i = 0;
    while (i < tasks.length) {
        if (tasks[i].id == idToUpdate) {
            indexToUpdate = i;
            break;
        }
        i = i + 1;
    }

    if (indexToUpdate != -1) {
        tasks[indexToUpdate] = modifiedTask;
    }
}