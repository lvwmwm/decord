// Module ID: 9149
// Function ID: 9150
// Name: MarkupParser
// Dependencies: [9150, 2, 9151, 9152]

// Module 9149 (MarkupParser)
import markup_MarkupParser from "markup/MarkupParser" /* 9150 */;
import MarkupASTUtils from "MarkupASTUtils" /* 9151 */;
import MarkupParserTypes from "MarkupParserTypes" /* 9152 */;
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
