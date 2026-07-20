// Module ID: 4567
// Function ID: 40002
// Name: textRegexp
// Dependencies: []
// Exports: textMarkupPatternWithExclusions

// Module 4567 (textRegexp)
const tmp2 = /^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/;
const obj = {};
const merged = Object.assign(importDefault(dependencyMap[0]).defaultRules.text);
obj["match"] = arg1(dependencyMap[0]).anyScopeRegex(tmp2);
const obj2 = arg1(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/markup/MarkupTextRule.tsx");

export default obj;
export const textRegexp = tmp2;
export const textMarkupPatternWithExclusions = function textMarkupPatternWithExclusions(textExclusions) {
  const regExp = new RegExp("^[\\s\\S]+?(?=" + textExclusions + "|[^0-9A-Za-z\\s\\u00ff-\\uffff]|\\n\\n| {2,}\\n|\\w+:\\S|[0-9]+\\.|$)");
  return regExp;
};
