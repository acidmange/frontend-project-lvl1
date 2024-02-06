import readlineSync from 'readline-sync';
import cli from './cli.js';

const isEven = (num) => ((num % 2 === 0) === true);

const evenGame = () => {
    const userName = cli();
    let isWrongAnswer = false;
    let counter = 0;
    console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
    while ((!isWrongAnswer) && (counter < 3)) {
        const randomNumber = Math.trunc(Math.random() * (100));
        const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
        console.log(`Question: ${randomNumber}\n`);
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

export default evenGame;
