import './thumbnail-rendering.js';


const fullImage = document.querySelector('.big-picture');
const thumbnailOpenElement = document.querySelectorAll('.picture');
const fullImageCloseElement = document.querySelector('.big-picture__cancel');

console.log(thumbnailOpenElement);

// Открываем фото
thumbnailOpenElement.forEach((photo) => {
  photo.addEventListener('click', () => {
    fullImage.classList.remove('hidden');
  });
});


