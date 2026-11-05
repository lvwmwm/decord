// Module ID: 8590
// Function ID: 8591
// Name: MarkupParser
// Dependencies: [8591, 2, 8592, 8593]

// Module 8590 (MarkupParser)
import markup_MarkupParser from "markup/MarkupParser" /* 8591 */;
import MarkupASTUtils from "MarkupASTUtils" /* 8592 */;
import MarkupParserTypes from "MarkupParserTypes" /* 8593 */;
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
