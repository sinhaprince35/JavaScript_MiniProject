document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".item");
    const rightContainer = document.querySelector(".right-container");
    const resetBtn = document.getElementById("reset-btn");
  
    let draggedItem = null;
  
    // Add event listeners to draggable items
    items.forEach(function (item) {
      item.addEventListener("dragstart", dragStart);
      item.addEventListener("dragend", dragEnd);
    });
  
    // Add event listeners to the right container
    rightContainer.addEventListener("dragover", dragOver);
    rightContainer.addEventListener("dragenter", dragEnter);
    rightContainer.addEventListener("dragleave", dragLeave);
    rightContainer.addEventListener("drop", drop);
  
    // Reset button event listener
    resetBtn.addEventListener("click", resetContainers);
  
    // Drag functions
    function dragStart() {
      draggedItem = this;
      setTimeout(() => (this.style.display = "none"), 0);
    }
  
    function dragEnd() {
      setTimeout(() => (this.style.display = "block"), 0);
      draggedItem = null;
    }
  
    function dragOver(e) {
      e.preventDefault();
    }
  
    function dragEnter(e) {
      e.preventDefault();
      this.style.backgroundColor = "#e9e9e9";
    }
  
    function dragLeave() {
      this.style.backgroundColor = "initial";
    }
  
    function drop() {
      this.style.backgroundColor = "initial";
      this.appendChild(draggedItem);
      showSuccessMessage("Item dropped successfully!");
    }
  
    function resetContainers() {
      rightContainer.innerHTML = "<h3>Dropped Items</h3>";
    }
  
    function showSuccessMessage(message) {
      const successMessage = document.createElement("div");
      successMessage.className = "success-message";
      successMessage.textContent = message;
      rightContainer.appendChild(successMessage);
    }
  });
  