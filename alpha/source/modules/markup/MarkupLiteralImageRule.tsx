// Module ID: 13192
// Function ID: 13193
// Name: MarkupLiteralImageRule
// Dependencies: [1948, 5396, 2]

// Module 13192 (MarkupLiteralImageRule)
import _modDef1948 from "module_1948" /* 1948 */;
import MarkupTypes from "MarkupTypes" /* 5396 */;
import size from "module_2" /* 2 */;

let obj = {
  order: _modDef1948.defaultRules.link.order - 0.5,
  requiredFirstCharacters: ["!"],
  parse(content) {
    const obj = { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
    return obj;
  }
};
const merged = Object.assign(_modDef1948.defaultRules.image);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
