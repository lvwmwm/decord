// Module ID: 13335
// Function ID: 13336
// Name: MarkupLiteralImageRule
// Dependencies: [1949, 5400, 2]

// Module 13335 (MarkupLiteralImageRule)
import _modDef1949 from "module_1949" /* 1949 */;
import MarkupTypes from "MarkupTypes" /* 5400 */;
import size from "module_2" /* 2 */;

let obj = {
  order: _modDef1949.defaultRules.link.order - 0.5,
  requiredFirstCharacters: ["!"],
  parse(content) {
    const obj = { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
    return obj;
  }
};
const merged = Object.assign(_modDef1949.defaultRules.image);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
