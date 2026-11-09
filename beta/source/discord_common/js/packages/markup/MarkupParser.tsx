// Module ID: 8515
// Function ID: 8516
// Name: MarkupParser
// Dependencies: [8516, 2, 8517, 8518]

// Module 8515 (MarkupParser)
import markup_MarkupParser from "markup/MarkupParser" /* 8516 */;
import MarkupASTUtils from "MarkupASTUtils" /* 8517 */;
import MarkupParserTypes from "MarkupParserTypes" /* 8518 */;
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
