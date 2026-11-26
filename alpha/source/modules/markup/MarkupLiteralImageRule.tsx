// Module ID: 14657
// Function ID: 14658
// Name: MarkupLiteralImageRule
// Dependencies: [2069, 6120, 2]

// Module 14657 (MarkupLiteralImageRule)
import _modDef2069 from "module_2069" /* 2069 */;
import MarkupTypes from "MarkupTypes" /* 6120 */;
import size from "module_2" /* 2 */;

let obj = {
  order: _modDef2069.defaultRules.link.order - 0.5,
  requiredFirstCharacters: ["!"],
  parse(content) {
    const obj = { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
    return obj;
  }
};
const merged = Object.assign(_modDef2069.defaultRules.image);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
