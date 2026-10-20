// Module ID: 11848
// Function ID: 11849
// Name: MarkupLiteralImageRule
// Dependencies: [1951, 5935, 2]

// Module 11848 (MarkupLiteralImageRule)
import _modDef1951 from "module_1951" /* 1951 */;
import MarkupTypes from "MarkupTypes" /* 5935 */;
import size from "module_2" /* 2 */;

let obj = {
  order: _modDef1951.defaultRules.link.order - 0.5,
  requiredFirstCharacters: ["!"],
  parse(content) {
    const obj = { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
    return obj;
  }
};
const merged = Object.assign(_modDef1951.defaultRules.image);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
