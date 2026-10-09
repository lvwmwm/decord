// Module ID: 7986
// Function ID: 7987
// Name: MarkupParser
// Dependencies: [7987, 2, 7988, 7989]

// Module 7986 (MarkupParser)
import markup_MarkupParser from "markup/MarkupParser" /* 7987 */;
import MarkupASTUtils from "MarkupASTUtils" /* 7988 */;
import MarkupParserTypes from "MarkupParserTypes" /* 7989 */;
import size from "module_2" /* 2 */;

const reactParserFor = markup_MarkupParser.default.reactParserFor;
const astParserFor = markup_MarkupParser.default.astParserFor;
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
