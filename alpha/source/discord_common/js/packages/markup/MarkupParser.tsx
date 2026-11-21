// Module ID: 8726
// Function ID: 8727
// Name: markup/MarkupParser
// Dependencies: [5639, 2, 5640, 8727]

// Module 8726 (markup/MarkupParser)
import MarkupParser from "MarkupParser" /* 5639 */;
import MarkupASTUtils from "MarkupASTUtils" /* 5640 */;
import MarkupParserTypes from "MarkupParserTypes" /* 8727 */;
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
