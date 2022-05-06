import readlineSync from 'readline-sync';

export const roundsCount = 3;

// Итерация по раундам

export const startGame = (gameData, description) => {
  console.log('Welcome to the Brain Games!');
  const player = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${player}!`);
  console.log(description);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = gameData[i];
    console.log('Question:', question);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === answer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${answer}".\nLet's try again, ${player}!`);
      return;
    }
  }
  console.log(`Congratulations, ${player}!`);
};
