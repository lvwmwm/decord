// Module ID: 8436
// Function ID: 8437
// Name: MarkupParser
// Dependencies: [8437, 2, 8438, 8439]

// Module 8436 (MarkupParser)
import markup_MarkupParser from "markup/MarkupParser" /* 8437 */;
import MarkupASTUtils from "MarkupASTUtils" /* 8438 */;
import MarkupParserTypes from "MarkupParserTypes" /* 8439 */;
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
