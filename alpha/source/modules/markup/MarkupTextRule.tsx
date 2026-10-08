// Module ID: 5407
// Function ID: 5408
// Name: MarkupTextRule
// Dependencies: [1948, 2]
// Exports: textMarkupPatternWithExclusions

// Module 5407 (MarkupTextRule)
import _modDef1948 from "module_1948" /* 1948 */;
import size from "module_2" /* 2 */;

const module_1948_mod = _modDef1948;

let module_1948;
const tmp2 = /^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/;
const obj = { match: module_1948.anyScopeRegex(tmp2) };
const merged = Object.assign(_modDef1948.defaultRules.text);
module_1948 = module_1948_mod;
const result = size.fileFinishedImporting("modules/markup/MarkupTextRule.tsx");

export default obj;
export const textRegexp = tmp2;
export const textMarkupPatternWithExclusions = function textMarkupPatternWithExclusions(textExclusions) {
  const regExp = new RegExp("^[\\s\\S]+?(?=" + textExclusions + "|[^0-9A-Za-z\\s\\u00ff-\\uffff]|\\n\\n| {2,}\\n|\\w+:\\S|[0-9]+\\.|$)");
  return regExp;
};
