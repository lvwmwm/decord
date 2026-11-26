// Module ID: 9216
// Function ID: 9217
// Name: MarkupParser
// Dependencies: [9217, 2, 9218, 9219]

// Module 9216 (MarkupParser)
import markup_MarkupParser from "markup/MarkupParser" /* 9217 */;
import MarkupASTUtils from "MarkupASTUtils" /* 9218 */;
import MarkupParserTypes from "MarkupParserTypes" /* 9219 */;
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
