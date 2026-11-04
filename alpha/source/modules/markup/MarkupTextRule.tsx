// Module ID: 6178
// Function ID: 6179
// Name: MarkupTextRule
// Dependencies: [2072, 2]
// Exports: textMarkupPatternWithExclusions

// Module 6178 (MarkupTextRule)
import _modDef2072 from "module_2072" /* 2072 */;
import size from "module_2" /* 2 */;

const module_2072_mod = _modDef2072;

let module_2072;
const tmp2 = /^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/;
const obj = { match: module_2072.anyScopeRegex(tmp2) };
const merged = Object.assign(_modDef2072.defaultRules.text);
module_2072 = module_2072_mod;
const result = size.fileFinishedImporting("modules/markup/MarkupTextRule.tsx");

export default obj;
export const textRegexp = tmp2;
export function textMarkupPatternWithExclusions(textExclusions) {
  const regExp = new RegExp("^[\\s\\S]+?(?=" + textExclusions + "|[^0-9A-Za-z\\s\\u00ff-\\uffff]|\\n\\n| {2,}\\n|\\w+:\\S|[0-9]+\\.|$)");
  return regExp;
}
