// Module ID: 7053
// Function ID: 7054
// Name: markup/MarkupParser
// Dependencies: [6943, 2, 6944, 7054]

// Module 7053 (markup/MarkupParser)
import MarkupParser from "MarkupParser" /* 6943 */;
import MarkupASTUtils from "MarkupASTUtils" /* 6944 */;
import MarkupParserTypes from "MarkupParserTypes" /* 7054 */;
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
