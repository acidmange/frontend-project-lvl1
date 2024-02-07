// eslint-disable-next-line import/no-extraneous-dependencies
import random from 'random';
import readlineSync from 'readline-sync';
import cli from './cli.js';

const calcGCD = (a, b) => {
  let [firstNum, secondNum] = [a, b];
  while (firstNum !== secondNum) {
    if (firstNum === 0 || secondNum === 0) {
      return firstNum === 0 ? secondNum : firstNum;
    }
    if (firstNum > secondNum) {
      firstNum %= secondNum;
    } else {
      secondNum %= firstNum;
    }
  }
  return firstNum;
};

const gcdGame = () => {
  const userName = cli();
  let isWrongAnswer = false;
  let counter = 0;

  while ((!isWrongAnswer) && (counter < 3)) {
    const firstNum = random.int(1, 100);
    const secondNum = random.int(1, 100);
    const correctAnswer = calcGCD(firstNum, secondNum);

    console.log('Find the greatest common divisor of given numbers.\n');
    console.log(`Question: ${firstNum} ${secondNum}\n`);
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

export default gcdGame;
