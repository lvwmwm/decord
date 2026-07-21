// Module ID: 10073
// Function ID: 77965
// Name: ANSWER_IN_REGEX
// Dependencies: []
// Exports: makeRegexForOptionsWithNegation, validateForMapWithNegation

// Module 10073 (ANSWER_IN_REGEX)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/search/tokens/SearchTokensUtils.tsx");

export const ANSWER_IN_REGEX = /(?:\s*#?((?:"(\\\\|\\"|[^\\"])*")|(?:[^\s]+)))/i;
export const GENERIC_REGEX = /(?:\s*([^\s]+))/;
export const makeRegexForOptionsWithNegation = function makeRegexForOptionsWithNegation(items) {
  items = [...items];
  const sorted = items.sort((arg0, arg1) => arg1.length - arg0.length);
  const mapped = sorted.map((arg0) => callback(closure_1[0]).escape(arg0));
  const regExp = new RegExp("(?:\\s*(-?(?:" + mapped.join("|") + ")))", "i");
  return regExp;
};
export const validateForMapWithNegation = function validateForMapWithNegation(author_type, authorTypeMap, getMatch) {
  const match = getMatch.getMatch(1);
  const startsWithResult = match.startsWith("-");
  let substr = match;
  if (startsWithResult) {
    substr = match.slice(1);
  }
  let flag = null != tmp3;
  if (flag) {
    flag = "" !== tmp3;
  }
  if (flag) {
    let combined = tmp3;
    if (startsWithResult) {
      const _HermesInternal = HermesInternal;
      combined = "-" + tmp3;
    }
    getMatch.setData(author_type, combined);
    flag = true;
  }
  return flag;
};
