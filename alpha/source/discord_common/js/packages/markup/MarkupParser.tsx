// Module ID: 8288
// Function ID: 8289
// Name: MarkupParser
// Dependencies: [8289, 2, 8290, 8291]

// Module 8288 (MarkupParser)
import markup_MarkupParser from "markup/MarkupParser" /* 8289 */;
import MarkupASTUtils from "MarkupASTUtils" /* 8290 */;
import MarkupParserTypes from "MarkupParserTypes" /* 8291 */;
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
