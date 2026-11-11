// Module ID: 19318
// Function ID: 19319
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [6280, 6281, 19319, 9150, 2]

// Module 19318 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 6281 */;
import combineMarkupRules from "combineMarkupRules" /* 6280 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 19319 */;
import MarkupParser from "MarkupParser" /* 9150 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
