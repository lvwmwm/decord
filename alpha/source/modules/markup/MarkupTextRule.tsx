// Module ID: 5411
// Function ID: 5412
// Name: MarkupTextRule
// Dependencies: [1949, 2]
// Exports: textMarkupPatternWithExclusions

// Module 5411 (MarkupTextRule)
import _modDef1949 from "module_1949" /* 1949 */;
import size from "module_2" /* 2 */;

const module_1949_mod = _modDef1949;

let module_1949;
const tmp2 = /^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/;
const obj = { match: module_1949.anyScopeRegex(tmp2) };
const merged = Object.assign(_modDef1949.defaultRules.text);
module_1949 = module_1949_mod;
const result = size.fileFinishedImporting("modules/markup/MarkupTextRule.tsx");

export default obj;
export const textRegexp = tmp2;
export const textMarkupPatternWithExclusions = function textMarkupPatternWithExclusions(textExclusions) {
  const regExp = new RegExp("^[\\s\\S]+?(?=" + textExclusions + "|[^0-9A-Za-z\\s\\u00ff-\\uffff]|\\n\\n| {2,}\\n|\\w+:\\S|[0-9]+\\.|$)");
  return regExp;
};
