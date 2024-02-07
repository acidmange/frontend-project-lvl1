// eslint-disable-next-line import/no-extraneous-dependencies
import random from 'random';
import readlineSync from 'readline-sync';
import cli from './cli.js';

const sumCmd = (a, b) => (a + b);
const subCmd = (a, b) => (a - b);
const multCmd = (a, b) => (a * b);

const calcGame = () => {
  const userName = cli();
  const operationsArr = ['+', '-', '*'];
  const operationHandler = {
    '+': sumCmd,
    '-': subCmd,
    '*': multCmd,
  };
  let isWrongAnswer = false;
  let counter = 0;

  while ((!isWrongAnswer) && (counter < 3)) {
    const randomOperation = random.int(0, 2);
    const operation = operationsArr[randomOperation];
    const firstNum = random.int(0, 100);
    const secondNum = (operation === '*') ? random.int(0, 10) : random.int(0, 100);
    const correctAnswer = operationHandler[operation](firstNum, secondNum);

    console.log('What is the result of the expression?\n');
    console.log(`Question: ${firstNum} ${operation} ${secondNum}\n`);
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

export default calcGame;
