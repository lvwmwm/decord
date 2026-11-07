// Module ID: 19089
// Function ID: 19090
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [6165, 6166, 19090, 8515, 2]

// Module 19089 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 6166 */;
import combineMarkupRules from "combineMarkupRules" /* 6165 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 19090 */;
import MarkupParser from "MarkupParser" /* 8515 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
