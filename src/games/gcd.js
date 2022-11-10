import randomNumber from '../utilits.js';
import run from '../index.js';

const minNumber = 1;
const maxNumber = 200;
const discription = 'Find the greatest common divisor of given numbers.';

const findGreatestDivisor = (x, y) =>
  y === 0 ? x : findGreatestDivisor(y, x % y);

export const getGameData = () => {
  const number1 = randomNumber(minNumber, maxNumber);
  const number2 = randomNumber(minNumber, maxNumber);
  const answer = findGreatestDivisor(number1, number2).toString();
  const question = `${number1} ${number2}`;
  return [answer, question];
};

const start = () => {
  run(discription, getGameData);
};

export default start;
