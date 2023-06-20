const PHOTO_DESCRIPTION = [
  'Крутое фото',
  'еще одно фото',
  'фото красивое',
  'кто это тут?',
  'вот это супер',
  'фото меня',
  'общее фото',
  'лучшее фото',
];

const COMMENTS_AUTHOR = [
  'Коля',
  'Миша',
  'Катя',
  'Гриша',
  'Вася',
  'Петя',
  'Ваня',
  'Настя',
];

const COMMENTS_MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// объект комментария
const COMMENT = () => ({
  id: getRandomInteger(1, 1000),
  avatar: `img/avatar-${ getRandomInteger(1, 6) }.svg`,
  message: COMMENTS_MESSAGE[getRandomInteger(0, COMMENTS_MESSAGE.length - 1)],
  name: COMMENTS_AUTHOR[getRandomInteger(0, COMMENTS_AUTHOR.length - 1)]
});

const SIMILAR_GALLERY_OBJECT = 25;

// Функция для нахождения случайного числа
function getRandomInteger(a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// Обьект галереи
const createObject = () => ({

  id: getRandomInteger(1, 25),
  url: `photos/${ getRandomInteger(1, 25) }.jpg`,
  description: PHOTO_DESCRIPTION[getRandomInteger(0, PHOTO_DESCRIPTION.length - 1)],
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0, 30)}, COMMENT),

});


const similarObjects = () => (Array.from({length: SIMILAR_GALLERY_OBJECT}, createObject));

similarObjects();
