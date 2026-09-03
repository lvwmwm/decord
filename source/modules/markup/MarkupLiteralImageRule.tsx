// Module ID: 12992
// Function ID: 12993
// Name: parse
// Dependencies: [4192, 4950, 2]

// Module 12992 (parse)
import tDefault from "t" /* 4192 */;
import AST_KEY from "AST_KEY" /* 4950 */;

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
