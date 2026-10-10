// Module ID: 17371
// Function ID: 17372
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5401, 5402, 17372, 8004, 2]

// Module 17371 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5402 */;
import combineMarkupRules from "combineMarkupRules" /* 5401 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 17372 */;
import MarkupParser from "MarkupParser" /* 8004 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
