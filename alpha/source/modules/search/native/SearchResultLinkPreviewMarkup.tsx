// Module ID: 18017
// Function ID: 18018
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5968, 5969, 18018, 8329, 2]

// Module 18017 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5969 */;
import combineMarkupRules from "combineMarkupRules" /* 5968 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 18018 */;
import MarkupParser from "MarkupParser" /* 8329 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
