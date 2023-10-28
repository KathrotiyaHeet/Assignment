document.addEventListener("DOMContentLoaded", function () {
    const itemList = document.getElementById("itemList");
    const addItemButton = document.getElementById("addItemButton");
  
    addItemButton.addEventListener("click", function () {
      // Create a new list item
      const newItem = document.createElement("li");
      newItem.textContent = "New Item";
  
      // Append the new item to the list
      itemList.appendChild(newItem);
    });
  });
  