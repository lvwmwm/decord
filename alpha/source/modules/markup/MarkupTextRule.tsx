// Module ID: 6290
// Function ID: 6291
// Name: MarkupTextRule
// Dependencies: [2067, 2]
// Exports: textMarkupPatternWithExclusions

// Module 6290 (MarkupTextRule)
import _modDef2067 from "module_2067" /* 2067 */;
import size from "module_2" /* 2 */;

const module_2067_mod = _modDef2067;

let module_2067;
const tmp2 = /^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/;
const obj = { match: module_2067.anyScopeRegex(tmp2) };
const merged = Object.assign(_modDef2067.defaultRules.text);
module_2067 = module_2067_mod;
const result = size.fileFinishedImporting("modules/markup/MarkupTextRule.tsx");

export default obj;
export const textRegexp = tmp2;
export function textMarkupPatternWithExclusions(textExclusions) {
  const regExp = new RegExp("^[\\s\\S]+?(?=" + textExclusions + "|[^0-9A-Za-z\\s\\u00ff-\\uffff]|\\n\\n| {2,}\\n|\\w+:\\S|[0-9]+\\.|$)");
  return regExp;
}
