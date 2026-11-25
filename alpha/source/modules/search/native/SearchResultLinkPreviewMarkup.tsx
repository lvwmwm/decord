// Module ID: 18927
// Function ID: 18928
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [7040, 7041, 18928, 7148, 2]

// Module 18927 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 7041 */;
import combineMarkupRules from "combineMarkupRules" /* 7040 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 18928 */;
import MarkupParser from "markup/MarkupParser" /* 7148 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
