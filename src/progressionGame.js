// eslint-disable-next-line import/no-extraneous-dependencies
import random from 'random';
import readlineSync from 'readline-sync';
import cli from './cli.js';

const progressionGame = () => {
  const userName = cli();
  let isWrongAnswer = false;
  let counter = 0;

  while ((!isWrongAnswer) && (counter < 3)) {
    const arrLength = random.int(5, 10);
    const startNum = random.int(0, 20);
    const adder = random.int(1, 9);
    const zeroArr = new Array(arrLength).fill(startNum);
    const numArr = zeroArr.map((value, ind) => value + ind * adder);
    const randomInd = random.int(0, arrLength - 1);
    const correctAnswer = numArr[randomInd];
    numArr[randomInd] = '..';

    console.log('What number is missing in the progression?\n');
    console.log(`Question: ${numArr.join(' ')}\n`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) !== correctAnswer) {
      isWrongAnswer = true;
      console.log(`\n${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\n`);
      console.log(`Let's try again, ${userName}!\n`);
      return;
    }

    console.log('Correct!\n');
    counter += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};

export default progressionGame;
