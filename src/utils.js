// Функция для получения рандомного числа в диапазоне
const getRandomNumber = (min, max) => {
  const ceilMinNumber = Math.ceil(min);
  const floorMaxNumber = Math.floor(max);
  return Math.floor(Math.random() * (floorMaxNumber - ceilMinNumber + 1)) + ceilMinNumber;
};

export default getRandomNumber;
