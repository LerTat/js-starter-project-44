import getEvenQuestion from './brain-even/get-even-question.js';
import getCalcQuestion from './brain-calc/get-calc-question.js';

export default (game) => {
  let question; let
    correctAnswer;

  switch (game) {
    case 'brain-even':
      [question, correctAnswer] = getEvenQuestion();
      break;
    case 'brain-calc':
      [question, correctAnswer] = getCalcQuestion();
      break;
    default:
      break;
  }

  return [question, correctAnswer];
};