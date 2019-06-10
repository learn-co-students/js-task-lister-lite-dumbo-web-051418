// The ChoreController is responsible for manipulating the DOM.
// It achieves this task by being the middle person between the Adapter,
// the Chore model, and the DOM itself. While the Adapter knows how to
// talk to the backend and the Chore model knows what it's supposed to look like,
// the ChoreController is what notifies each one when it's time to do their thang.

class taskController {
// This function is called on DOMContentLoaded. It initializes the two main
// components of the application that must happen at the beginning-
// add an event listener to the form so that new chores can be created and
// render all of the chores currently in the database.
  static init() {
    const taskForm = document.getElementById("create-task-form")
    taskForm.addEventListener("submit", taskController.onNewTaskSubmission)

    // taskController.renderAllTasks()
  }
  
  static onNewTaskSubmission(e){
  // this gets called once the submit button is clicked.
  // this allows the form to know to look for these specific id's and pass them to the adapter
  // After this, it goes over to the POST request
  e.preventDefault()
  // this is saying to give me the input
  const description = document.querySelector("#description")

  // this choreObj is coming from the form and storing the info that we POST
  // this is me finding the value of the input
  const taskObj = {
    description: description.value
  }
}

}
