import { randomNumber } from "../utilits.js";
import run from "../index.js";

const minNumber = 1;
const maxNumber = 50;
const discription =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const IsPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  const limit = Math.sqrt(number);
  for (let i = 2; i <= limit; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export const generateNumber = () => {
  const number = randomNumber(minNumber, maxNumber);
  const answer = IsPrime(number) ? "yes" : "no";
  const question = String(number);
  return { answer, question };
};

const start = () => {
  run(discription, generateNumber);
};

export default start;
