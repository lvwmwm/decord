// Module ID: 16496
// Function ID: 16497
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5303, 5304, 16497, 7429, 2]

// Module 16496 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5304 */;
import combineMarkupRules from "combineMarkupRules" /* 5303 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 16497 */;
import MarkupParser from "MarkupParser" /* 7429 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
