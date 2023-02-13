//array
let Tasks:string[]=[];

function addTask(task:string):number{
    Tasks.push(task);
    return Tasks.length;
}
function listAllTasks(){

Tasks.forEach((item)=>{
    console.log(item);
})
   }

function deleteTasks(task:string): number{
    let index : number = Tasks.indexOf(task);
    if(index > -1){
        Tasks.splice(index, 1);
        console.log("Task "+ task + " removed from array. ");
    }else{
        console.log("Task "+ task + " no present in array. ");

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