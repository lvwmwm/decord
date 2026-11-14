// Module ID: 6353
// Function ID: 6354
// Name: MarkupTextRule
// Dependencies: [2070, 2]
// Exports: textMarkupPatternWithExclusions

// Module 6353 (MarkupTextRule)
import _modDef2070 from "module_2070" /* 2070 */;
import size from "module_2" /* 2 */;

const module_2070_mod = _modDef2070;

let module_2070;
const tmp2 = /^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/;
const obj = { match: module_2070.anyScopeRegex(tmp2) };
const merged = Object.assign(_modDef2070.defaultRules.text);
module_2070 = module_2070_mod;
const result = size.fileFinishedImporting("modules/markup/MarkupTextRule.tsx");

export default obj;
export const textRegexp = tmp2;
export function textMarkupPatternWithExclusions(textExclusions) {
  const regExp = new RegExp("^[\\s\\S]+?(?=" + textExclusions + "|[^0-9A-Za-z\\s\\u00ff-\\uffff]|\\n\\n| {2,}\\n|\\w+:\\S|[0-9]+\\.|$)");
  return regExp;
}
