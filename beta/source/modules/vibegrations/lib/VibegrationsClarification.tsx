// Module ID: 16382
// Function ID: 16383
// Name: VibegrationsClarification
// Dependencies: [2]
// Exports: formatClarificationAnswers, isClarificationComplete, nextClarificationStep

// Module 16382 (VibegrationsClarification)
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsClarification.tsx");

export const isClarificationComplete = function isClarificationComplete(questions, arg1) {
  let closure_0 = arg1;
  questions = questions.questions;
  return questions.every((item) => {
    let tmp2 = null != tmp;
    if (tmp2) {
      const str = closure_0[item.id].text;
      tmp2 = "" !== str.trim();
    }
    return tmp2;
  });
};
export const nextClarificationStep = function nextClarificationStep(clarification, arg1, bound) {
  const questions = clarification.questions;
  let num = 1;
  if (1 <= questions.length) {
    const result = (bound + num) % questions.length;
    while (null != arg1[questions[result].id]) {
      let str = tmp2.text;
      if ("" === str.trim()) {
        break;
      } else {
        num = num + 1;
      }
    }
    return result;
  }
  return null;
};
export const formatClarificationAnswers = function formatClarificationAnswers(clarification, arg1) {
  let closure_0 = arg1;
  const questions = clarification.questions;
  const mapped = questions.map((question, index) => ({ question, index, answer: closure_0[question.id] }));
  const found = mapped.filter((answer) => {
    let tmp = null != answer.answer;
    if (tmp) {
      const str = answer.answer.text;
      tmp = "" !== str.trim();
    }
    return tmp;
  });
  const mapped1 = found.map((answer) => {
    const sum = answer.index + 1;
    const str = answer.answer.text;
    return "" + sum + ". " + answer.question.question + " \u2192 " + str.trim();
  });
  return mapped1.join("\n");
};
