  const images = document.querySelectorAll('.image');
let draggedImage = null;
images.forEach(image => {
  image.addEventListener('dragstart', (e) => {
    draggedImage = image;
    setTimeout(() => {
      image.style.display = 'none';
    }, 0);
  });
  image.addEventListener('dragend', (e) => {
    setTimeout(() => {
      draggedImage = null;
      image.style.display = 'block';
    }, 0);
  });
});

const parent = document.getElementById('parent');
parent.addEventListener('dragover', (e) => {
  e.preventDefault();
});

parent.addEventListener('drop', (e) => {
  e.preventDefault();
  if (draggedImage) {
    const target = e.target;
    if (target && target !== draggedImage && target.classList.contains('image')) {
      const temp = document.createElement('div');
      parent.insertBefore(temp, target);
      parent.insertBefore(target, draggedImage);
      parent.insertBefore(draggedImage, temp);
      temp.remove();
    }
  }
});