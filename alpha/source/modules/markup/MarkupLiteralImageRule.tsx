// Module ID: 12206
// Function ID: 12207
// Name: MarkupLiteralImageRule
// Dependencies: [1943, 6032, 2]

// Module 12206 (MarkupLiteralImageRule)
import _modDef1943 from "module_1943" /* 1943 */;
import MarkupTypes from "MarkupTypes" /* 6032 */;
import size from "module_2" /* 2 */;

let obj = {
  order: _modDef1943.defaultRules.link.order - 0.5,
  requiredFirstCharacters: ["!"],
  parse(content) {
    const obj = { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
    return obj;
  }
};
const merged = Object.assign(_modDef1943.defaultRules.image);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
