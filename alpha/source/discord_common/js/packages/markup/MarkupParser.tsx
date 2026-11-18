// Module ID: 8638
// Function ID: 8639
// Name: markup/MarkupParser
// Dependencies: [5549, 2, 5550, 8639]

// Module 8638 (markup/MarkupParser)
import MarkupParser from "MarkupParser" /* 5549 */;
import MarkupASTUtils from "MarkupASTUtils" /* 5550 */;
import MarkupParserTypes from "MarkupParserTypes" /* 8639 */;
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
