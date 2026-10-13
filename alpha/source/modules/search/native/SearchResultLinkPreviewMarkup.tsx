// Module ID: 17432
// Function ID: 17433
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5401, 5402, 17433, 8005, 2]

// Module 17432 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5402 */;
import combineMarkupRules from "combineMarkupRules" /* 5401 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 17433 */;
import MarkupParser from "MarkupParser" /* 8005 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
