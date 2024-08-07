export default {
  welcome() {
    console.log('Welcome to the Brain Games!');
  },
  sayHello(userName) {
    console.log(`Hello, ${userName}!`);
  },
  showInstruction(game) {
    if (game === 'brain-even') {
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
    } else if (game === 'brain-calc') {
      console.log('What is the result of the expression?');
    } else if (game === 'brain-gcd') {
      console.log('Find the greatest common divisor of given numbers.');
    } else if (game === 'brain-progression') {
      console.log('What number is missing in the progression?');
    } else if (game === 'brain-prime') {
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    }
  },
  askQuestion(expression) {
    console.log(`Question: ${expression}`);
  },
  showCorrectMsg() {
    console.log('Correct!');
  },
  showWrongMsg(userAnswer, correctAnswer, userName) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
  },
  congratulate(userName) {
    console.log(`Congratulations, ${userName}!`);
  },
};
