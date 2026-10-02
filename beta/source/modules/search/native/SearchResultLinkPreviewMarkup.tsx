// Module ID: 16498
// Function ID: 16499
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5304, 5305, 16499, 7433, 2]

// Module 16498 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5305 */;
import combineMarkupRules from "combineMarkupRules" /* 5304 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 16499 */;
import MarkupParser from "MarkupParser" /* 7433 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
