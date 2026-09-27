//  Create an array of strings
let Tasks = ["work", "Eat", "Study"];

//  Create an addTask function
let addTask = (task) => {
    Tasks.push(task);
    console.log(task + " has been added to my Tasks.");
    return Tasks.length;
};

// Test addTask
addTask("sleep");

//  Create a listAllTasks function
let listAllTasks = () => {
    Tasks.forEach((task) => {
        console.log(task);
    });
};

// Test listAllTasks
listAllTasks();

//  Create a deleteTask function
let deleteTask = (task) => {
    let index = Tasks.indexOf(task);

    if (index !== -1) {
        Tasks.splice(index, 1);
        console.log(task + " has been deleted.");
    }

    return Tasks.length;
};

// Test deleteTask
deleteTask("Eat");
