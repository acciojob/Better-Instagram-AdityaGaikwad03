// Select all draggable image divs
const images = document.querySelectorAll(".image");
let draggedItem = null;

// Assign unique IDs to each image div
images.forEach((img, index) => {
  img.id = `div${index + 1}`;
});

// Add drag-and-drop functionality
images.forEach((img) => {
  img.addEventListener("dragstart", (e) => {
    draggedItem = e.target;
    e.target.classList.add("selected");
  });

  img.addEventListener("dragend", (e) => {
    e.target.classList.remove("selected");
    draggedItem = null;
  });

  img.addEventListener("dragover", (e) => {
    e.preventDefault(); // Allow drop
  });

  img.addEventListener("drop", (e) => {
    e.preventDefault();
    if (draggedItem && draggedItem !== e.target) {
      // Swap IDs — this swaps background images (since they come from CSS)
      const tempId = draggedItem.id;
      draggedItem.id = e.target.id;
      e.target.id = tempId;

      // Swap text too
      const tempText = draggedItem.textContent;
      draggedItem.textContent = e.target.textContent;
      e.target.textContent = tempText;
    }
  });
});
