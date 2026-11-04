// Module ID: 6043
// Function ID: 6044
// Name: MarkupTextRule
// Dependencies: [1943, 2]
// Exports: textMarkupPatternWithExclusions

// Module 6043 (MarkupTextRule)
import _modDef1943 from "module_1943" /* 1943 */;
import size from "module_2" /* 2 */;

const module_1943_mod = _modDef1943;

let module_1943;
const tmp2 = /^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/;
const obj = { match: module_1943.anyScopeRegex(tmp2) };
const merged = Object.assign(_modDef1943.defaultRules.text);
module_1943 = module_1943_mod;
const result = size.fileFinishedImporting("modules/markup/MarkupTextRule.tsx");

export default obj;
export const textRegexp = tmp2;
export function textMarkupPatternWithExclusions(textExclusions) {
  const regExp = new RegExp("^[\\s\\S]+?(?=" + textExclusions + "|[^0-9A-Za-z\\s\\u00ff-\\uffff]|\\n\\n| {2,}\\n|\\w+:\\S|[0-9]+\\.|$)");
  return regExp;
}
