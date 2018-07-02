class TaskList {
  constructor() {
    this.tList = [];
  }
  add(task) {
    this.tList.push(task);
  }
  getList() {
    return [...this.tList];
  }
}
