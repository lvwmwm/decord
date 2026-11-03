// Module ID: 18902
// Function ID: 18903
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [6153, 6154, 18903, 8568, 2]

// Module 18902 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 6154 */;
import combineMarkupRules from "combineMarkupRules" /* 6153 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 18903 */;
import MarkupParser from "MarkupParser" /* 8568 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
