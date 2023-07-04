import {getPhotos} from './data.js';
import './full-screen-rendering.js';

// Место куда будем загружать фото
const photoListElement = document.querySelector('.pictures');

// Шаблон по которому будем создавать фото
const pictureTemplateElement = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const thumbnails = getPhotos();

// Ящик куда будем складывать созданные элементы перед тем как поместить их в photoListElement
const thumbnailFragment = document.createDocumentFragment();

const getThumbnails = () => {
  thumbnails.forEach(({url, description, likes, comments}) => {
    // Клонирую шаблон
    const photoElement = pictureTemplateElement.cloneNode(true);

    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__img').alt = description;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    thumbnailFragment.appendChild(photoElement);
  });

  photoListElement.appendChild(thumbnailFragment);

};

export {getThumbnails};
