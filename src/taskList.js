class TaskList {
  constructor(){
    this.tasks = [];
  }

  addTask(taskName){
    const task = new Task(taskName);
    this.tasks.push(task);
  }
}
