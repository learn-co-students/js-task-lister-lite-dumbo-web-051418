// The Chore model is responsible for holding the information
// for the individual chore (ie title, priority, duration), as well as
// knowing what it should look like (ie creating its own DOMObject or HTML string)

class Task {
  consructor(taskObj) {
    this.description = taskObj.description
    this.id = taskObj.id
  }

  el() {
      const taskDiv = document.createElement("div")
      taskDiv.className = "task-card"
      taskDiv.id = `task-card-${this.id}`

      const button = document.createElement("button")
      button.className = "delete-button"
      button.innerText = "X"
      button.dataset.id = this.id

      button.addEventListener("click", taskController.onDelete )

      const choreDescription = document.createElement("input")
      choreDescription.type = "text"
      choreDescription.value = this.description

      taskDiv.append(button, choreDescription)

      return taskDiv
  }
}
