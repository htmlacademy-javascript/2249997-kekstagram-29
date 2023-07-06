import {isEscapeKey} from './util.js';


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

  // Навесил класс чтобы контейнер с фотографиями позади не прокручивался при скролле
  document.querySelector('body').classList.add('modal-open');

  // спрячьте блоки счётчика комментариев
  document.querySelector('.social__comment-count').classList.add('hidden');

  // спрячьте блоки загрузки новых комментариев
  document.querySelector('.comments-loader').classList.add('hidden');
}

// Функция закрытия полноразмерного изображения
function closeFullImage () {
  fullImage.classList.add('hidden');

  document.removeEventListener('keydown', onDocumentKeyDown);

  // Убрал класс чтобы контейнер с фотографиями позади не прокручивался при скролле
  document.querySelector('body').classList.remove('.modal-open');
}

// закрываем фото c клика по крестику
fullImageCloseElement.addEventListener('click', () => {
  closeFullImage();
});

export {openFullImage, closeFullImage};
