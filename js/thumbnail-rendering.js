import {getPhotos} from './data.js';
import { isEscapeKey } from './util.js';
import { closeFullImage, openFullImage } from './full-screen-rendering.js';

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
  thumbnails.forEach((photoData) => {
    const {url, description, likes, comments} = photoData;
    // Клонирую шаблон
    const photoElement = pictureTemplateElement.cloneNode(true);

    // заполняем данные для миниатюры
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__img').alt = description;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;

    // Вешаем обработчики клика для открытия из миниатюры большой картинки
    photoElement.addEventListener('click', (evt) => {
      openFullImage();
      // Вешаем обработчики на клавишу ESC
      document.addEventListener('keydown', () => {
        if(isEscapeKey(evt)) {
          evt.preventDefault();
          closeFullImage();
        }
      });

      // Заполняем данные для большой картинки
      document.querySelector('.big-picture__img img').src = url;
      document.querySelector('.likes-count').textContent = likes;
      document.querySelector('.comments-count').textContent = comments.length;
      document.querySelector('.social__caption').textContent = description;

      // СПИСОК КОММЕНТАРИЕВ
      comments.forEach((commentData) => {
        const {avatar, message, name} = commentData;
        const commentBox = document.querySelector('.social__comments');
        const commentElement = document.querySelector('.social__comment');

        // заполняем данные для комментария
        commentElement.querySelector('img').src = avatar;
        commentElement.querySelector('img').alt = name;
        commentElement.querySelector('p').textContent = message;

        // СОЗДАЕМ НОВЫЕ КОММЕНТЫ
        const createDomElement = (tag, className, text) => {
          const domElement = document.createElement(tag);
          domElement.classList.add(className);

          if(text) {
            domElement.textContent = text;
          }
          return domElement;
        };

        const imageSize = 35;

        const listItem = createDomElement('li', 'social__comment');
        const paragraph = createDomElement('p', 'social__text', message);
        const image = createDomElement('img', 'social__picture');

        image.src = avatar;
        image.alt = name;
        image.style.width = `${imageSize}px`;
        image.style.height = `${imageSize}px`;

        listItem.append(image, paragraph);

        commentBox.appendChild(listItem);
        commentBox.appendChild(commentElement);
      });
    });

    thumbnailFragment.appendChild(photoElement);
  });

  photoListElement.appendChild(thumbnailFragment);

};

export {getThumbnails};
