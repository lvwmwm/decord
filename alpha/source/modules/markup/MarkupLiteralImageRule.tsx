// Module ID: 12168
// Function ID: 12169
// Name: MarkupLiteralImageRule
// Dependencies: [1944, 6027, 2]

// Module 12168 (MarkupLiteralImageRule)
import _modDef1944 from "module_1944" /* 1944 */;
import MarkupTypes from "MarkupTypes" /* 6027 */;
import size from "module_2" /* 2 */;

let obj = {
  order: _modDef1944.defaultRules.link.order - 0.5,
  requiredFirstCharacters: ["!"],
  parse(content) {
    const obj = { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
    return obj;
  }
};
const merged = Object.assign(_modDef1944.defaultRules.image);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
