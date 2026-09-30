// Module ID: 7624
// Function ID: 7625
// Name: MarkupParser
// Dependencies: [7625, 2, 7626, 7627]

// Module 7624 (MarkupParser)
import markup_MarkupParser from "markup/MarkupParser" /* 7625 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("../discord_common/js/packages/markup/MarkupParser.tsx");
for (const key10026 in require("MarkupASTUtils")) {
  arg5[key10026] = require("MarkupASTUtils")[key10026];
  continue;
}
for (const key10030 in require("MarkupParserTypes")) {
  arg5[key10030] = require("MarkupParserTypes")[key10030];
  continue;
}

export const reactParserFor = markup_MarkupParser.default.reactParserFor;
export const astParserFor = markup_MarkupParser.default.astParserFor;
