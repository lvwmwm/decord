// Module ID: 19510
// Function ID: 19511
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [6333, 6334, 19511, 9216, 2]

// Module 19510 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 6334 */;
import combineMarkupRules from "combineMarkupRules" /* 6333 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 19511 */;
import MarkupParser from "MarkupParser" /* 9216 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
