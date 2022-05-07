import getRandomNumber from '../utils.js';
import { startGame, roundsCount } from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const generateRound = () => {
  const randomNumber = getRandomNumber(1, 100);
  const question = randomNumber;
  const answer = isPrime(randomNumber);

  return [question, answer];
};

const startBrainPrimeGame = () => {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }

  startGame(rounds, gameDescription);
};

export default startBrainPrimeGame;
