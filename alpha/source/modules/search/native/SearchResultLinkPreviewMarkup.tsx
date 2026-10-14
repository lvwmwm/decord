// Module ID: 17466
// Function ID: 17467
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5406, 5407, 17467, 8012, 2]

// Module 17466 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5407 */;
import combineMarkupRules from "combineMarkupRules" /* 5406 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 17467 */;
import MarkupParser from "MarkupParser" /* 8012 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
