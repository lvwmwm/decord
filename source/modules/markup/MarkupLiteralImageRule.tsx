// Module ID: 12672
// Function ID: 12673
// Name: parse
// Dependencies: [4160, 4901, 2]

// Module 12672 (parse)
import tDefault from "t" /* 4160 */;
import AST_KEY from "AST_KEY" /* 4901 */;

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
