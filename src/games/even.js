import randomNumber from '../utilits.js';
import run from '../index.js';

const minNumber = 1;
const maxNumber = 200;
const discription =
  'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

export const getGameData = () => {
  const number = randomNumber(minNumber, maxNumber);
  const answer = isEven(number) ? 'yes' : 'no';
  const question = String(number);
  return { answer, question };
};

const start = () => {
  run(discription, getGameData);
};

export default start;
