import {getThumbnails} from './thumbnail-rendering.js';
getThumbnails();
import {isEscapeKey, isEnterKey} from './util.js';

const thumbnailOpenElement = document.querySelectorAll('.picture');
const fullImageCloseElement = document.querySelector('.big-picture__cancel');
const fullImage = document.querySelector('.big-picture');


const onDocumentKeyDown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeFullImage();
  }
};

// Функция открытия полноразмерного изображения
function openFullImage () {
  fullImage.classList.remove('hidden');

  document.addEventListener('keydown', onDocumentKeyDown);
}

// Функция закрытия полноразмерного изображения
function closeFullImage () {
  fullImage.classList.add('hidden');

  document.removeEventListener('keydown', onDocumentKeyDown);
}

// закрываем фото c клика по крестику
fullImageCloseElement.addEventListener('click', () => {
  closeFullImage();
});

// перебираем миниатюры
thumbnailOpenElement.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    openFullImage();
  });

  thumbnail.addEventListener('keydown', (evt) => {
    if(isEnterKey(evt)) {
      openFullImage();
    }
  });

  // const picture = document.querySelector('.picture__img');
  // заполняем данные для окна полноразмерного изображения
  fullImage.querySelector('.big-picture__img img').src = thumbnail.src;
  fullImage.querySelector('.likes-count').textContent = thumbnail.likes;
  // fullImage.querySelector('.comments-count').textContent = thumbnail.comments.length;
  // fullImage.querySelector('.social__caption') = thumbnail.description;
// const fullImageCommentsList = document.querySelector('.social__comments');
});

