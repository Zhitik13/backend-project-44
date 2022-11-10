import randomNumber from '../utilits.js';
import run from '../index.js';

const minLength = 2;
const maxLength = 5;
const minStart = 1;
const maxStart = 10;
const minStep = 1;
const maxStep = 15;
const discription = 'What number is missing in the progression?';

const raiseNumber = (step, starts, length) => {
  const progression = [];
  for (let i = 0; i <= length; i += 1) {
    const item = starts + i * step;
    progression.push(item);
  }
  return progression;
};

export const getGameData = () => {
  const length = randomNumber(minLength, maxLength);
  const starts = randomNumber(minStep, maxStep);
  const step = randomNumber(minStart, maxStart);
  const progression = raiseNumber(step, starts, length);
  const indexNumber = randomNumber(0, progression.length);
  const answer = progression[indexNumber].toString();
  progression[indexNumber] = '..';
  const question = String(progression.join(' '));
  return [answer, question];
};

const start = () => {
  run(discription, getGameData);
};

export default start;
