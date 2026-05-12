// This is the test data file stored in JSONBIN. It is imported in script.js 
// and used as the initial data for the task tracker application.
const JSONBIN_API_URL = "https://api.jsonbin.io/v3";
const JSONBIN_ID = "6a017b1badc21f119a81af1b";
const MASTER_KEY = "$2a$10$oW9fRvv5.CVupxjR922zYOTeoInKqLTkMcQTGaZJlj/CqMtC0BCoe";

// this task is responsible for storing data and it has moved to jsonbin
let tasks = [

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

// This function is responsible for fetching the tasks data from JSONBIN. 
// It makes a GET request to the JSONBIN API and returns the tasks data stored 
// in the specified JSONBIN ID.
async function fetchTasksFromJSONBin() {
    const jsonBinUrl = `${JSONBIN_API_URL}/b/${JSONBIN_ID}/latest`;
    const response = await axios.get(jsonBinUrl);
    console.log("Fetched tasks from JSONBIN: ", response.data.record);
    return response.data.record;
}

// This function is responsible for saving the tasks data to JSONBIN. 
// It makes a PUT request to the JSONBIN API with the updated tasks data, 
// allowing us to persist changes made to the tasks in the application.
async function saveTasksToJSONBin(tasks) {
    console.log("Saving tasks to JSONBIN... ", tasks);
    const jsonBinUrl = `${JSONBIN_API_URL}/b/${JSONBIN_ID}`;
    const response = await axios.put(jsonBinUrl, tasks, {
        headers: {
            "Content-Type": "application/json",
            "X-Master-Key": MASTER_KEY
        }
    })
    console.log("Saved tasks to JSONBIN! ", response.data);
    return response.data.record;
}