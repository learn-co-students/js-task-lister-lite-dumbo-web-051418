
document.addEventListener("DOMContentLoaded", () => {
  // const taskList = new TaskList();

  const form = document.querySelector('#create-task-form')

  form.addEventListener('submit',addToDo)

  function addToDo(e) {
    e.preventDefault()
    // console.log('adding list')
    const taskDescription = document.querySelector('#new-task-description').value
    // console.log(taskDescription)
    const li = document.createElement('li')
    li.innerHTML = taskDescription
    document.querySelector('#tasks').appendChild(li)

  }

});
