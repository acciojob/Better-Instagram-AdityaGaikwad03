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
      // Swap background images if using CSS backgrounds
      const tempBg = e.target.style.backgroundImage;
      e.target.style.backgroundImage = draggedItem.style.backgroundImage;
      draggedItem.style.backgroundImage = tempBg;

      // If <img> elements are inside, swap their 'src' attributes
      const dragImg = draggedItem.querySelector("img");
      const dropImg = e.target.querySelector("img");
      if (dragImg && dropImg) {
        const tempSrc = dragImg.src;
        dragImg.src = dropImg.src;
        dropImg.src = tempSrc;
      }

      // Swap text content too
      const tempText = e.target.textContent;
      e.target.textContent = draggedItem.textContent;
      draggedItem.textContent = tempText;
    }
  });
});
