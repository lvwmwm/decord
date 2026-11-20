// Module ID: 10204
// Function ID: 10205
// Name: MarkupLiteralImageRule
// Dependencies: [2068, 5815, 2]

// Module 10204 (MarkupLiteralImageRule)
import _modDef2068 from "module_2068" /* 2068 */;
import MarkupTypes from "MarkupTypes" /* 5815 */;
import size from "module_2" /* 2 */;

let obj = {
  order: _modDef2068.defaultRules.link.order - 0.5,
  requiredFirstCharacters: ["!"],
  parse(content) {
    const obj = { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
    return obj;
  }
};
const merged = Object.assign(_modDef2068.defaultRules.image);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
