import readlineSync from 'readline-sync';
import { player } from '../src/cli.js';

export const getRandomInt = (min, max) => {
  const ceilMinNumber = Math.ceil(min);
  const floorMaxNumber = Math.floor(max);
  return Math.floor(Math.random() * (floorMaxNumber - ceilMinNumber + 1)) + ceilMinNumber;
};

export const evenGame = () => {
  let result = '';
  // let bye = '';
  let randomNumber;
  // Правила игры
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    randomNumber = getRandomInt(1, 20);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const lowerCaseAnswer = answer.toLowerCase();
    if ((randomNumber % 2 === 0 && lowerCaseAnswer === 'yes') || (randomNumber % 2 !== 0 && lowerCaseAnswer === 'no')) {
      console.log('Correct!');
    } else if ((randomNumber % 2 !== 0 && lowerCaseAnswer === 'yes') || (randomNumber % 2 === 0 && lowerCaseAnswer === 'no')) {
      if (lowerCaseAnswer === 'yes') {
        result = '"yes" is wrong answer ;(. Correct answer was "no".';
        console.log(result);
        console.log(`Let's try again, ${player}`);
        return;
      } if (lowerCaseAnswer === 'no') {
        result = '"no" is wrong answer ;(. Correct answer was "yes".';
        console.log(result);
        console.log(`Let's try again, ${player}`);
        return;
      }
    } else if (lowerCaseAnswer !== 'yes' && lowerCaseAnswer !== 'no') {
      if (randomNumber % 2 === 0) {
        result = `"${lowerCaseAnswer}" is wrong answer ;(. Correct answer was "yes".`;
        console.log(result);
        return;
      }
      if (randomNumber % 2 !== 0) {
        result = `"${lowerCaseAnswer}" is wrong answer ;(. Correct answer was "no".`;
        console.log(result);
        return;
      }
    }
  }
  result = `Congratulations, ${player}`;
  console.log(result);
};
