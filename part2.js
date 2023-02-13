//array
var Tasks = [];
function addTask(task) {
    Tasks.push(task);
    return Tasks.length;
}
function listAllTasks() {
    //for(let i = 0; i < Tasks.length; i++){
    //console.log(Tasks[i]);
    Tasks.forEach(function (item) {
        console.log(item);
    });
}
function deleteTasks(task) {
    var index = Tasks.indexOf(task);
    if (index > -1) {
        Tasks.splice(index, 1);
        console.log("Task " + task + " removed from array. ");
    }
    else {
        console.log("Task " + task + " no present in array. ");
    }
    return Tasks.length;
}
console.log("Hello");
console.log(addTask("ABC"));
console.log(addTask("DEF"));
console.log("List all tasks");
listAllTasks();
console.log("Delete task");
console.log(deleteTasks("DEF"));
listAllTasks();
