import readlineSync from 'readline-sync';

const cli = () => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`\nHello, ${userName}\n`);
  return userName;
};

export default cli;
