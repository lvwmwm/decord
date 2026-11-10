// Module ID: 19131
// Function ID: 19132
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [6167, 6168, 19132, 8521, 2]

// Module 19131 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 6168 */;
import combineMarkupRules from "combineMarkupRules" /* 6167 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 19132 */;
import MarkupParser from "MarkupParser" /* 8521 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
