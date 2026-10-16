// Module ID: 5473
// Function ID: 5474
// Name: MarkupTextRule
// Dependencies: [1951, 2]
// Exports: textMarkupPatternWithExclusions

// Module 5473 (MarkupTextRule)
import _modDef1951 from "module_1951" /* 1951 */;
import size from "module_2" /* 2 */;

const module_1951_mod = _modDef1951;

let module_1951;
const tmp2 = /^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/;
const obj = { match: module_1951.anyScopeRegex(tmp2) };
const merged = Object.assign(_modDef1951.defaultRules.text);
module_1951 = module_1951_mod;
const result = size.fileFinishedImporting("modules/markup/MarkupTextRule.tsx");

export default obj;
export const textRegexp = tmp2;
export const textMarkupPatternWithExclusions = function textMarkupPatternWithExclusions(textExclusions) {
  const regExp = new RegExp("^[\\s\\S]+?(?=" + textExclusions + "|[^0-9A-Za-z\\s\\u00ff-\\uffff]|\\n\\n| {2,}\\n|\\w+:\\S|[0-9]+\\.|$)");
  return regExp;
};
