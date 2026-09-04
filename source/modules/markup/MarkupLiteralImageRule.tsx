// Module ID: 8946
// Function ID: 8947
// Name: parse
// Dependencies: [4192, 4957, 2]

// Module 8946 (parse)
import tDefault from "t" /* 4192 */;
import AST_KEY from "AST_KEY" /* 4957 */;

require = arg1;
const obj = {};
const merged = Object.assign(tDefault.defaultRules.image);
obj.order = tDefault.defaultRules.link.order - 0.5;
obj.requiredFirstCharacters = ["!"];
obj.parse = function parse(content) {
  return { type: AST_KEY.AST_KEY.TEXT, content: content[0] };
};
const result = require("set").fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
