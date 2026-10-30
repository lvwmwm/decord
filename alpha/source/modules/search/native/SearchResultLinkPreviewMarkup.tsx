// Module ID: 18695
// Function ID: 18696
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [6028, 6029, 18696, 8436, 2]

// Module 18695 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 6029 */;
import combineMarkupRules from "combineMarkupRules" /* 6028 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 18696 */;
import MarkupParser from "MarkupParser" /* 8436 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
