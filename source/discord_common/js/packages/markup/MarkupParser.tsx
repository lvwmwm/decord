// Module ID: 7896
// Function ID: 7897
// Name: reactParserFor
// Dependencies: [7897, 2, 7898, 7899]

// Module 7896 (reactParserFor)
import set from "set" /* 2 */;
import saferParse from "saferParse" /* 7897 */;

const result = set.fileFinishedImporting("../discord_common/js/packages/markup/MarkupParser.tsx");
for (const key10026 in require("collectAst")) {
  let tmp3 = key10026;
  arg5[key10026] = require("collectAst")[key10026];
  continue;
}
for (const key10030 in require("set")) {
  let tmp4 = key10030;
  arg5[key10030] = require("set")[key10030];
  continue;
}

export const reactParserFor = saferParse.default.reactParserFor;
export const astParserFor = saferParse.default.astParserFor;
