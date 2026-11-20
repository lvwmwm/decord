// Module ID: 5826
// Function ID: 5827
// Name: MarkupTextRule
// Dependencies: [2068, 2]
// Exports: textMarkupPatternWithExclusions

// Module 5826 (MarkupTextRule)
import _modDef2068 from "module_2068" /* 2068 */;
import size from "module_2" /* 2 */;

const module_2068_mod = _modDef2068;

let module_2068;
const tmp2 = /^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/;
const obj = { match: module_2068.anyScopeRegex(tmp2) };
const merged = Object.assign(_modDef2068.defaultRules.text);
module_2068 = module_2068_mod;
const result = size.fileFinishedImporting("modules/markup/MarkupTextRule.tsx");

export default obj;
export const textRegexp = tmp2;
export function textMarkupPatternWithExclusions(textExclusions) {
  const regExp = new RegExp("^[\\s\\S]+?(?=" + textExclusions + "|[^0-9A-Za-z\\s\\u00ff-\\uffff]|\\n\\n| {2,}\\n|\\w+:\\S|[0-9]+\\.|$)");
  return regExp;
}
