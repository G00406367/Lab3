interface toDointerface{
      Tasks:string[];
      addTask(task:string):number;

        
}


class toDo implements toDointerface{
    constructor(){}
    Tasks: string[]=[];
    addTask(task: string): number{
        this.Tasks.push(task);
        console.log("Task "+ task + " add to my tasks array. ");
        return this.Tasks.length;
    }
 listAllTasks:(): void{

        this.Tasks.forEach((item)=>{
            console.log(item);
        })
           }
}
let class1 = new taskClass();
let mytoDo = new toDo();
mytoDo.addTask("GHI");
mytoDo.addTask("JKL");
class1.listAllTasks();