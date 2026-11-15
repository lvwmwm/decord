// Module ID: 19195
// Function ID: 19196
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [6197, 6198, 19196, 8548, 2]

// Module 19195 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 6198 */;
import combineMarkupRules from "combineMarkupRules" /* 6197 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 19196 */;
import MarkupParser from "MarkupParser" /* 8548 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
