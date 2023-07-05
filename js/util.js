// Функция для нахождения массива случайных неповторяющихся чисел
function generateArrayRandomNumber (min, max) {
  let totalNumbers = max - min + 1,
    // eslint-disable-next-line prefer-const
    arrayTotalNumbers = [],
    // eslint-disable-next-line prefer-const
    arrayRandomNumbers = [],
    tempRandomNumber;
  while (totalNumbers--) {
    arrayTotalNumbers.push(totalNumbers + min);
  }
  while (arrayTotalNumbers.length) {
    tempRandomNumber = Math.round(Math.random() * (arrayTotalNumbers.length - 1));
    arrayRandomNumbers.push(arrayTotalNumbers[tempRandomNumber]);
    arrayTotalNumbers.splice(tempRandomNumber, 1);
  }
  return arrayRandomNumbers;
}

// Функция для нахождения случайного числа
function getRandomInteger(a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const isEscapeKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';

export {generateArrayRandomNumber};
export {getRandomInteger};
export {isEscapeKey, isEnterKey};
