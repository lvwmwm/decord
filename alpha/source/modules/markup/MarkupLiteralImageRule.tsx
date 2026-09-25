// Module ID: 8472
// Function ID: 8473
// Name: MarkupLiteralImageRule
// Dependencies: [1929, 5295, 2]

// Module 8472 (MarkupLiteralImageRule)
import _modDef1929 from "module_1929" /* 1929 */;
import MarkupTypes from "MarkupTypes" /* 5295 */;

require = fn;
const obj = {};
const merged = Object.assign(_modDef1929.defaultRules.image);
obj.order = _modDef1929.defaultRules.link.order - 0.5;
obj.requiredFirstCharacters = ["!"];
obj.parse = function parse(content) {
  return { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
