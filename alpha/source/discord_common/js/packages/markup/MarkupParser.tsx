// Module ID: 7148
// Function ID: 7149
// Name: markup/MarkupParser
// Dependencies: [7038, 2, 7039, 7149]

// Module 7148 (markup/MarkupParser)
import MarkupParser from "MarkupParser" /* 7038 */;
import MarkupASTUtils from "MarkupASTUtils" /* 7039 */;
import MarkupParserTypes from "MarkupParserTypes" /* 7149 */;
import size from "module_2" /* 2 */;

const reactParserFor = MarkupParser.default.reactParserFor;
const astParserFor = MarkupParser.default.astParserFor;
const result = size.fileFinishedImporting("../discord_common/js/packages/markup/MarkupParser.tsx");
for (const key10026 in MarkupASTUtils) {
  exports[key10026] = MarkupASTUtils[key10026];
  continue;
}
for (const key10030 in MarkupParserTypes) {
  exports[key10030] = MarkupParserTypes[key10030];
  continue;
}

export { reactParserFor };
export { astParserFor };
