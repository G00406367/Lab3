var toDo = /** @class */ (function () {
    function toDo() {
        this.Tasks = [];
    }
    toDo.prototype.addTask = function (task) {
        this.Tasks.push(task);
        console.log("Task " + task + " add to my tasks array. ");
        return this.Tasks.length;
    };
    return toDo;
}());
void {
    "this": .Tasks.forEach(function (item) {
        console.log(item);
    })
};
var mytoDo = new toDo();
mytoDo.addTask("GHI");
mytoDo.addTask("JKL");
class1.listAllTasks();
