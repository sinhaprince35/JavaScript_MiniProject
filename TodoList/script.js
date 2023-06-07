function addTask() {
  var inputTask = document.getElementById("inputTask");
  var displayList = document.getElementById("displayList");

  if (inputTask.value.trim() !== "") {
    // Trim functions removes the white space.
    var task = document.createElement("li");
    task.innerText = inputTask.value;
    task.classList.add("task-item"); // Making a class of list item under ul tag.

    var deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.classList.add("delete-button"); // Making a class of Delete-Button.
    deleteButton.addEventListener("click", function () {
      displayList.removeChild(task);
    });

    task.appendChild(deleteButton); //appendChild() method is used to add a new child element to an existing parent element in the HTML DOM (Document Object Model)
    displayList.appendChild(task);
    inputTask.value = "";
  }
}
