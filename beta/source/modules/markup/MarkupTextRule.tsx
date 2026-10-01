// Module ID: 5312
// Function ID: 5313
// Name: MarkupTextRule
// Dependencies: [1930, 2]
// Exports: textMarkupPatternWithExclusions

// Module 5312 (MarkupTextRule)
import _modDef1930 from "module_1930" /* 1930 */;
import size from "module_2" /* 2 */;

const module_1930_mod = _modDef1930;

let module_1930;
const tmp2 = /^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/;
const obj = { match: module_1930.anyScopeRegex(tmp2) };
const merged = Object.assign(_modDef1930.defaultRules.text);
module_1930 = module_1930_mod;
const result = size.fileFinishedImporting("modules/markup/MarkupTextRule.tsx");

export default obj;
export const textRegexp = tmp2;
export const textMarkupPatternWithExclusions = function textMarkupPatternWithExclusions(textExclusions) {
  const regExp = new RegExp("^[\\s\\S]+?(?=" + textExclusions + "|[^0-9A-Za-z\\s\\u00ff-\\uffff]|\\n\\n| {2,}\\n|\\w+:\\S|[0-9]+\\.|$)");
  return regExp;
};
