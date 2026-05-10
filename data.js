const tasks = [
    {
        "id": 1,
        "task": "Refill Acrylic Paints",
        "category": "Inventory",
        "deadline": "2026-05-11 09:00 AM",
        "priority": 12
    },
    {
        "id": 2,
        "task": "Wash Ceramic Brushes",
        "category": "Cleanup",
        "deadline": "2026-05-10 05:00 PM",
        "priority": 4
    },
    {
        "id": 3,
        "task": "Prep Grade 1 Canvases",
        "category": "Classroom Prep",
        "deadline": "2026-05-12 08:30 AM",
        "priority": 3
    },
    {
        "id": 4,
        "task": "Email Parent Invoices",
        "category": "Admin",
        "deadline": "2026-05-15 12:00 PM",
        "priority": 2
    },
    {
        "id": 5,
        "task": "Update Gallery Lighting",
        "category": "Maintenance",
        "deadline": "2026-05-20 03:00 PM",
        "priority": 1
    },
    {
        "id": 6,
        "task": "Sanitize Pottery Wheels",
        "category": "Cleanup",
        "deadline": "2026-05-10 06:00 PM",
        "priority": 5
    },
    {
        "id": 7,
        "task": "Order Sketchbooks",
        "category": "Procurement",
        "deadline": "2026-05-14 10:00 AM",
        "priority": 4
    },
    {
        "id": 8,
        "task": "Print Grading Rubrics",
        "category": "Teaching",
        "deadline": "2026-05-11 08:00 AM",
        "priority": 3
    },
    {
        "id": 9,
        "task": "Organize Drying Rack",
        "category": "Organize Drying Rack",
        "deadline": "2026-05-10 04:30 PM",
        "priority": 4
    },
    {
        "id": 10,
        "task": "Mount Student Artwork",
        "category": "Exhibition",
        "deadline": "2026-05-18 01:00 PM",
        "priority": 2
    }
]


function addTask(tasks, newTask, newCategory, newDeadline, newPriority) {
    let newTaskItem = {
        id: Math.floor(Math.random() * 10000) + 1,
        task: newTask,
        category: newCategory,
        deadline: newDeadline,
        priority: newPriority
    }
    tasks.push(newTaskItem);
    console.log("New task added: ", newTaskItem.id);
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

function updateTask(tasks, idToUpdate, newTask, newCategory, newDeadline, newPriority) {
    let modifiedTask = {
        id: idToUpdate,
        task: newTask,
        category: newCategory,
        deadline: newDeadline,
        priority: newPriority
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