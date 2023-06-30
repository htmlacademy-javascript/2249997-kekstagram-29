import {getPhotos} from './data.js';

// Место куда будем загружать фото
const photoList = document.querySelector('pictures');

// Шаблон по которому будем создавать фото
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const getThumbnail = getPhotos();

// Ящик куда будем складывать созданные элементы перед тем как поместить их в photoList
const thumbnailFragment = document.createDocumentFragment();

getThumbnail.forEach((photo) => {
  // Клонирую шаблон
  const photoElement = pictureTemplate.cloneNode(true);

  photoElement.querySelector('.picture__img').src = photo.url;
  photoElement.querySelector('.picture__img').alt = photo.description;
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photoElement.querySelector('.picture__comments').textContent = photo.comments;
  // console.log(photoElement);
  thumbnailFragment.appendChild(photoElement);
  // console.log(thumbnailFragment);
});

photoList.appendChild(thumbnailFragment);

