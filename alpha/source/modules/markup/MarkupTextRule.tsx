// Module ID: 6038
// Function ID: 6039
// Name: MarkupTextRule
// Dependencies: [1944, 2]
// Exports: textMarkupPatternWithExclusions

// Module 6038 (MarkupTextRule)
import _modDef1944 from "module_1944" /* 1944 */;
import size from "module_2" /* 2 */;

const module_1944_mod = _modDef1944;

let module_1944;
const tmp2 = /^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/;
const obj = { match: module_1944.anyScopeRegex(tmp2) };
const merged = Object.assign(_modDef1944.defaultRules.text);
module_1944 = module_1944_mod;
const result = size.fileFinishedImporting("modules/markup/MarkupTextRule.tsx");

export default obj;
export const textRegexp = tmp2;
export function textMarkupPatternWithExclusions(textExclusions) {
  const regExp = new RegExp("^[\\s\\S]+?(?=" + textExclusions + "|[^0-9A-Za-z\\s\\u00ff-\\uffff]|\\n\\n| {2,}\\n|\\w+:\\S|[0-9]+\\.|$)");
  return regExp;
}
