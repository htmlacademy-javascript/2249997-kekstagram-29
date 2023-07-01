import {getPhotos} from './data.js';

// Место куда будем загружать фото
const photoList = document.querySelector('.pictures');

// Шаблон по которому будем создавать фото
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const getThumbnail = getPhotos();

// Ящик куда будем складывать созданные элементы перед тем как поместить их в photoList
const thumbnailFragment = document.createDocumentFragment();

getThumbnail.forEach(({url, description, likes, comments}) => {
  // Клонирую шаблон
  const photoElement = pictureTemplate.cloneNode(true);

  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__img').alt = description;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  thumbnailFragment.appendChild(photoElement);
});

photoList.appendChild(thumbnailFragment);

