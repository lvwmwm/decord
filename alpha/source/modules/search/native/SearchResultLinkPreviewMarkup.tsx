// Module ID: 19505
// Function ID: 19506
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [6343, 6344, 19506, 9216, 2]

// Module 19505 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 6344 */;
import combineMarkupRules from "combineMarkupRules" /* 6343 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 19506 */;
import MarkupParser from "MarkupParser" /* 9216 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
