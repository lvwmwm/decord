// Module ID: 8480
// Function ID: 8481
// Name: MarkupLiteralImageRule
// Dependencies: [1930, 5302, 2]

// Module 8480 (MarkupLiteralImageRule)
import _modDef1930 from "module_1930" /* 1930 */;
import MarkupTypes from "MarkupTypes" /* 5302 */;
import size from "module_2" /* 2 */;

let obj = {
  order: _modDef1930.defaultRules.link.order - 0.5,
  requiredFirstCharacters: ["!"],
  parse(content) {
    const obj = { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
    return obj;
  }
};
const merged = Object.assign(_modDef1930.defaultRules.image);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
