// Module ID: 11749
// Function ID: 11750
// Name: MarkupLiteralImageRule
// Dependencies: [1951, 5462, 2]

// Module 11749 (MarkupLiteralImageRule)
import _modDef1951 from "module_1951" /* 1951 */;
import MarkupTypes from "MarkupTypes" /* 5462 */;
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
