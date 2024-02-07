// eslint-disable-next-line import/no-extraneous-dependencies
import random from 'random';
import readlineSync from 'readline-sync';
import cli from './cli.js';

const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
        if (num % i === 0) return false;
    }
    return num > 1;
};

const primeGame = () => {
    const userName = cli();
    let isWrongAnswer = false;
    let counter = 0;

    while ((!isWrongAnswer) && (counter < 3)) {
        const randomNum = random.int(0, 100);
        const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';

        console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');
        console.log(`Question: ${randomNum}\n`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer !== correctAnswer) {
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

export default primeGame;
