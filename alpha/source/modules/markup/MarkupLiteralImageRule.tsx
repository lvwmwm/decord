// Module ID: 12486
// Function ID: 12487
// Name: MarkupLiteralImageRule
// Dependencies: [2072, 6152, 2]

// Module 12486 (MarkupLiteralImageRule)
import _modDef2072 from "module_2072" /* 2072 */;
import MarkupTypes from "MarkupTypes" /* 6152 */;
import size from "module_2" /* 2 */;

let obj = {
  order: _modDef2072.defaultRules.link.order - 0.5,
  requiredFirstCharacters: ["!"],
  parse(content) {
    const obj = { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
    return obj;
  }
};
const merged = Object.assign(_modDef2072.defaultRules.image);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
