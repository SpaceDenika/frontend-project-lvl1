import getRandomNumber from '../utils.js';
import { startGame, roundsCount } from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const getHiddenProgressionWithHiddenNumber = (arr) => {
  const hiddenIndex = getRandomNumber(1, arr.length - 1);
  const newArr = [];
  let hiddenNumber;
  for (let i = 0; i < arr.length; i += 1) {
    if (i === hiddenIndex) {
      newArr.push('..');
      hiddenNumber = arr[i];
    } else {
      newArr.push(arr[i]);
    }
  }
  return [newArr, hiddenNumber];
};

const getProgression = (length) => {
  const arr = [];
  arr[0] = getRandomNumber(1, 20);
  const index = getRandomNumber(1, 5);
  for (let i = 0; i < length; i += 1) {
    arr.push(arr[i] + index);
  }
  return arr;
};

const generateRound = () => {
  const length = getRandomNumber(5, 10);
  const progression = getProgression(length);
  const progressionWithHiddenNumber = getHiddenProgressionWithHiddenNumber(progression);
  const [arr, answer] = progressionWithHiddenNumber;
  const question = arr.join(' ');
  return [question, answer];
};

const startBrainProgressionGame = () => {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }
  startGame(rounds, gameDescription);
};

export default startBrainProgressionGame;
