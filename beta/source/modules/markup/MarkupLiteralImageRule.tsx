// Module ID: 12568
// Function ID: 12569
// Name: MarkupLiteralImageRule
// Dependencies: [2067, 6196, 2]

// Module 12568 (MarkupLiteralImageRule)
import _modDef2067 from "module_2067" /* 2067 */;
import MarkupTypes from "MarkupTypes" /* 6196 */;
import size from "module_2" /* 2 */;

let obj = {
  order: _modDef2067.defaultRules.link.order - 0.5,
  requiredFirstCharacters: ["!"],
  parse(content) {
    const obj = { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
    return obj;
  }
};
const merged = Object.assign(_modDef2067.defaultRules.image);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
