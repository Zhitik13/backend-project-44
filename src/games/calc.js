import { randomNumber } from "../utilits.js";
import run from "../index.js";

const minNumber = 1;
const maxNumber = 200;
const operations = ["+", "-", "*"];
const discription = "What is the result of the expression?";

const calculate = (x, y, operation) => {
  switch (operation) {
    case "-":
      return x - y;
    case "+":
      return x + y;
    case "*":
      return x * y;
    default:
      return null;
  }
};

export const generatePuzzle = () => {
  const operation = operations[randomNumber(0, operations.length)];
  const number1 = randomNumber(minNumber, maxNumber);
  const number2 = randomNumber(minNumber, maxNumber);
  const answer = calculate(number1, number2, operation).toString();
  const question = `${number1}${operation}${number2}`;
  return { answer, question };
};

const start = () => {
  run(discription, generatePuzzle);
};

export default start;
