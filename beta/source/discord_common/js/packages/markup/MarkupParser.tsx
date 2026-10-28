// Module ID: 8376
// Function ID: 8377
// Name: MarkupParser
// Dependencies: [8377, 2, 8378, 8379]

// Module 8376 (MarkupParser)
import markup_MarkupParser from "markup/MarkupParser" /* 8377 */;
import MarkupASTUtils from "MarkupASTUtils" /* 8378 */;
import MarkupParserTypes from "MarkupParserTypes" /* 8379 */;
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
