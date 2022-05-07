#!/usr/bin/env node

import getRandomNumber from '../utils.js';
import { startGame, roundsCount } from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const startBrainEvenGame = () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }
  startGame(rounds, gameDescription);
};

export default startBrainEvenGame;
