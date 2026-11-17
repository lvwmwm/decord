// Module ID: 11004
// Function ID: 11005
// Name: MarkupLiteralImageRule
// Dependencies: [2070, 6340, 2]

// Module 11004 (MarkupLiteralImageRule)
import _modDef2070 from "module_2070" /* 2070 */;
import MarkupTypes from "MarkupTypes" /* 6340 */;
import size from "module_2" /* 2 */;

let obj = {
  order: _modDef2070.defaultRules.link.order - 0.5,
  requiredFirstCharacters: ["!"],
  parse(content) {
    const obj = { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
    return obj;
  }
};
const merged = Object.assign(_modDef2070.defaultRules.image);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
