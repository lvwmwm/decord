// Module ID: 7079
// Function ID: 7080
// Name: MarkupTextRule
// Dependencies: [2069, 2]
// Exports: textMarkupPatternWithExclusions

// Module 7079 (MarkupTextRule)
import _modDef2069 from "module_2069" /* 2069 */;
import size from "module_2" /* 2 */;

const module_2069_mod = _modDef2069;

let module_2069;
const tmp2 = /^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/;
const obj = { match: module_2069.anyScopeRegex(tmp2) };
const merged = Object.assign(_modDef2069.defaultRules.text);
module_2069 = module_2069_mod;
const result = size.fileFinishedImporting("modules/markup/MarkupTextRule.tsx");

export default obj;
export const textRegexp = tmp2;
export function textMarkupPatternWithExclusions(textExclusions) {
  const regExp = new RegExp("^[\\s\\S]+?(?=" + textExclusions + "|[^0-9A-Za-z\\s\\u00ff-\\uffff]|\\n\\n| {2,}\\n|\\w+:\\S|[0-9]+\\.|$)");
  return regExp;
}
