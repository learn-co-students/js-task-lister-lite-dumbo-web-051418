document.addEventListener("DOMContentLoaded", () => {
  //grabbing my elements off the DOM
  const form = document.getElementById('create-task-form');
  const taskDescription = document.getElementById("new-task-description");
  const taskUl = document.getElementById('tasks');

  //handling interactions with the form
    const createNewTask = (event) => {
      event.preventDefault();
      newListItem(taskDescription);
      form.reset();
    }

    const newListItem = (taskDescription) => {
      let unorderedList = document.querySelector('#tasks');
      let listItem = document.createElement('li');
      listItem.innerText = taskDescription.value;
      listItem.innerHTML += ` <button id='deleteTask'>X</button>`

      //adds event listener to new delete button
      //this += isn't problematic because i'm only doing it once for each element
      //then i am adding the listener
      document.addEventListener('click', function(e){
        if(e.target.id=="deleteTask"){
          deleteListItem(e.target.parentNode);
        }
      });

      //adds my new list element to the ul
      unorderedList.appendChild(listItem);
    }

    const deleteListItem = (deleteButton) => {
      deleteButton.remove();
    }

 //actual running
  form.addEventListener('submit', createNewTask);
});
