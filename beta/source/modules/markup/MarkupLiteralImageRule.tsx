// Module ID: 9292
// Function ID: 9293
// Name: MarkupLiteralImageRule
// Dependencies: [1933, 5209, 2]

// Module 9292 (MarkupLiteralImageRule)
import _modDef1933 from "module_1933" /* 1933 */;
import MarkupTypes from "MarkupTypes" /* 5209 */;

require = fn;
const obj = {};
const merged = Object.assign(_modDef1933.defaultRules.image);
obj.order = _modDef1933.defaultRules.link.order - 0.5;
obj.requiredFirstCharacters = ["!"];
obj.parse = function parse(content) {
  return { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
