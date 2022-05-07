import getRandomNumber from '../utils.js';
import { startGame, roundsCount } from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  let result;
  if (num1 > num2) {
    if (num1 % num2 === 0) {
      return num2;
    }
    if (num1 % num2 !== 0) {
      for (let i = 1; i < num2; i += 1) {
        if (num1 % i === 0 && num2 % i === 0) {
          result = i;
        }
      }
    }
  } else if (num1 < num2) {
    if (num2 % num1 === 0) {
      return num1;
    }
    if (num2 % num1 !== 0) {
      for (let i = 1; i < num1; i += 1) {
        if (num1 % i === 0 && num2 % i === 0) {
          result = i;
        }
      }
    }
  }
  return result;
};

const generateRound = () => {
  const randomNumber1 = getRandomNumber(1, 50);
  const randomNumber2 = getRandomNumber(1, 50);
  const answer = gcd(randomNumber1, randomNumber2);
  const question = `${randomNumber1} ${randomNumber2}`;

  return [question, answer];
};

const startBrainGcdGame = () => {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }
  startGame(rounds, gameDescription);
};

export default startBrainGcdGame;
