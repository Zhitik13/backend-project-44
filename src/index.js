import readlineSync from 'readline-sync';

const totalRounds = 3;

const run = (discription, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${discription}`);

  for (let i = 0; i < totalRounds; i += 1) {
    const [answer, question] = getGameData();
    console.log(`Question: ${question}`);
    const reply = readlineSync.question('Your answer: ');

    if (answer !== reply.toLowerCase()) {
      console.log(
        `'${reply}' is wrong answer ;(. Correct answer was '${answer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Current!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default run;
