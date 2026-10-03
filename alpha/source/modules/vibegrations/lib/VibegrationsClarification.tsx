// Module ID: 16705
// Function ID: 16706
// Name: VibegrationsClarification
// Dependencies: [2]
// Exports: clarificationAnswersPayload, followingClarificationStep, formatClarificationAnswers, isClarificationComplete, multiSelectAnswer, nextClarificationStep, toggleClarificationOption

// Module 16705 (VibegrationsClarification)
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
export const nextClarificationStep = function nextClarificationStep(questions, arg1, arg2) {
  questions = questions.questions;
  let num = 1;
  if (1 <= questions.length) {
    const result = (arg2 + num) % questions.length;
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
export const followingClarificationStep = function followingClarificationStep(clarification, arg1, bound) {
  let sum;
  if (bound < clarification.questions.length - 1) {
    sum = bound + 1;
  } else {
    const questions = clarification.questions;
    let num = 1;
    sum = null;
    if (1 <= questions.length) {
      const result = (bound + num) % questions.length;
      sum = result;
      while (null != arg1[questions[result].id]) {
        let str2 = tmp4.text;
        sum = result;
        if ("" === str2.trim()) {
          break;
        } else {
          let sum1 = num + 1;
          num = sum1;
          sum = null;
          if (sum1 > questions.length) {
            break;
          }
        }
      }
    }
  }
  return sum;
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
export const toggleClarificationOption = function toggleClarificationOption(options, arr, id) {
  let closure_0 = id;
  if (arr.includes(id)) {
    let found = arr.filter((item) => item !== id);
  } else {
    const items = [];
    items[HermesBuiltin.arraySpread(items, arr, 0)] = id;
    found = items;
  }
  options = options.options;
  const found1 = options.filter((id) => found.includes(id.id));
  return found1.map((id) => id.id);
};
export const multiSelectAnswer = function multiSelectAnswer(options, bound, str) {
  let items;
  let items1;
  let obj2;
  const trimmed = str.trim();
  options = options.options;
  const found = options.filter((id) => bound.includes(id.id));
  const mapped = found.map((label) => label.label);
  const obj = { kind: "multi", optionIds: bound, text: items.join(", ") };
  if ("" === trimmed) {
    obj2 = {};
  } else {
    obj2 = { custom: trimmed };
  }
  const merged = Object.assign(obj2);
  items = [...mapped];
  if ("" === trimmed) {
    items1 = [];
  } else {
    items1 = [trimmed];
  }
  HermesBuiltin.arraySpread(items, items1, tmp6);
  return obj;
};
export const clarificationAnswersPayload = function clarificationAnswersPayload(clarification, arg1) {
  let closure_0 = arg1;
  const questions = clarification.questions;
  const flatMapResult = questions.flatMap((id) => {
    if (null != closure_0[id.id]) {
      const str5 = closure_0[id.id].text;
      if ("" !== str5.trim()) {
        let tmp2;
        let custom;
        if ("option" === closure_0[id.id].kind) {
          const items = [closure_0[id.id].optionId];
          tmp2 = items;
        } else {
          tmp2 = "multi" === tmp.kind ? tmp.optionIds : [];
        }
        if ("custom" === closure_0[id.id].kind) {
          const str4 = closure_0[id.id].text;
          custom = str4.trim();
        } else if ("multi" === closure_0[id.id].kind) {
          custom = tmp.custom;
        }
        const obj = { question_id: id.id, option_ids: tmp2 };
        if (null != custom) {
          let obj3;
          if ("" !== custom) {
            obj3 = { custom };
            const obj2 = { custom };
          }
          const merged = Object.assign(obj3);
          const items1 = [obj];
          return items1;
        }
        obj3 = {};
      }
    }
    return [];
  });
  let tmp = null;
  if (flatMapResult.length > 0) {
    let obj = { clarification_id: clarification.id, answers: flatMapResult };
    tmp = obj;
  }
  return tmp;
};
