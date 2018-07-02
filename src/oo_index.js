
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  const submitButton = document.querySelector("input[type=submit]");
  const taskDescription = document.querySelector("#new-task-description");
  const listOfTasks = document.querySelector("#tasks");

  submitButton.addEventListener("click", function(event){
    event.preventDefault();
    console.log(taskDescription.value);
    const taskValue = taskDescription.value;
    const taskItem = createTaskItem(taskValue);
    listOfTasks.appendChild(taskItem);
  });

  function createTaskItem(taskValue){
    taskList.addTask(taskValue);
    const taskElement = document.createElement("li");
    taskElement.innerHTML = taskValue;
    return taskElement;
  }
});
