// Module ID: 8477
// Function ID: 8478
// Name: MarkupLiteralImageRule
// Dependencies: [1936, 5303, 2]

// Module 8477 (MarkupLiteralImageRule)
import _modDef1936 from "module_1936" /* 1936 */;
import MarkupTypes from "MarkupTypes" /* 5303 */;
import size from "module_2" /* 2 */;

let obj = {
  order: _modDef1936.defaultRules.link.order - 0.5,
  requiredFirstCharacters: ["!"],
  parse(content) {
    const obj = { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
    return obj;
  }
};
const merged = Object.assign(_modDef1936.defaultRules.image);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
