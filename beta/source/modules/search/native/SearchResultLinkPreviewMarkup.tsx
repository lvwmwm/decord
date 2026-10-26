// Module ID: 18120
// Function ID: 18121
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5981, 5982, 18121, 8344, 2]

// Module 18120 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5982 */;
import combineMarkupRules from "combineMarkupRules" /* 5981 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 18121 */;
import MarkupParser from "MarkupParser" /* 8344 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
