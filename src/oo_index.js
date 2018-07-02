
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const taskForm = document.getElementById("create-task-form");
  taskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let taskDesc = event.target["new-task-description"].value;
    taskList.add(new Task(taskDesc));
    const taskEl = document.getElementById("tasks");

    updateListDisplay(taskList, taskEl)
  });

  function updateListDisplay(taskList, taskEl) {
    while (taskEl.firstChild) {
      taskEl.removeChild(taskEl.firstChild);
    }
    for (task of taskList.getList()) {
      const liEl = document.createElement("li");
      const textEl = document.createTextNode(task.getDescription());
      const deleteButtonEl = document.createElement("button");
      liEl.append(textEl);
      taskEl.append(liEl);
    }
  }
});
