/* eslint-disable no-console */
// Функция для проверки длины строки.
const detectStringLength = (string, maxLength) => {
  if(string.length <= maxLength) {
    return true;
  }
  return false;
};

detectStringLength('wwww',5);

//Функция для проверки, является ли строка палиндромом.

const detectStringPalindrom = (string) => {
  const newString = string.replaceAll(' ', '').toLowerCase();
  let reverseString = '';

  for(let i = newString.length - 1; i >= 0; i = i - 1) {
    reverseString += newString.at(i).toLowerCase();
  }

  if(reverseString === newString) {
    return 'Это палиндром';
  }
  return 'Это не палиндром';
};

detectStringPalindrom('ШалаШ');
detectStringPalindrom('Леша на полке клопа нашел');
detectStringPalindrom('ТАНЯ');
