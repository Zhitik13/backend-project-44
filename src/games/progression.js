import { randomNumber, randomIndex } from "../utilits.js";
import run from "../index.js";

const minLength = 2;
const maxLength = 5;
const minStart = 1;
const maxStart = 10;
const minStep = 1;
const maxStep = 15;
const discription = "What number is missing in the progression?";

const numberProgression = (step, starts, length) => {
  const progression = [];
  for (let i = 0; i <= length; i += 1) {
    const item = starts + i * step;
    progression.push(item);
  }
  return progression;
};

export const generateNumber = () => {
  const length = randomNumber(minLength, maxLength);
  const starts = randomNumber(minStep, maxStep);
  const step = randomNumber(minStart, maxStart);
  const progression = numberProgression(step, starts, length);
  const indexNumber = randomIndex(progression);
  const answer = progression[indexNumber].toString();
  progression[indexNumber] = "..";
  const question = String(progression.join(" "));
  return { answer, question };
};

const start = () => {
  run(discription, generateNumber);
};

export default start;
