// Module ID: 7179
// Function ID: 7180
// Name: markup/MarkupParser
// Dependencies: [7069, 2, 7070, 7180]

// Module 7179 (markup/MarkupParser)
import MarkupParser from "MarkupParser" /* 7069 */;
import MarkupASTUtils from "MarkupASTUtils" /* 7070 */;
import MarkupParserTypes from "MarkupParserTypes" /* 7180 */;
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
