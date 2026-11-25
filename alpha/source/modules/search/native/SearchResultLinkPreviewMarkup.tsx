// Module ID: 18926
// Function ID: 18927
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [7040, 7041, 18927, 7148, 2]

// Module 18926 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 7041 */;
import combineMarkupRules from "combineMarkupRules" /* 7040 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 18927 */;
import MarkupParser from "markup/MarkupParser" /* 7148 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
