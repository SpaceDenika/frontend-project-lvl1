import readlineSync from 'readline-sync';

export const greetings = () => {
  const name = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${name}!`);
};
