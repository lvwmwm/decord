// Module ID: 8606
// Function ID: 8607
// Name: markup/MarkupParser
// Dependencies: [5520, 2, 5521, 8607]

// Module 8606 (markup/MarkupParser)
import MarkupParser from "MarkupParser" /* 5520 */;
import MarkupASTUtils from "MarkupASTUtils" /* 5521 */;
import MarkupParserTypes from "MarkupParserTypes" /* 8607 */;
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
