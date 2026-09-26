// Module ID: 17154
// Function ID: 17155
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5240, 5241, 17155, 8277, 2]

// Module 17154 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5241 */;
import combineMarkupRules from "combineMarkupRules" /* 5240 */;
import MarkupParser from "MarkupParser" /* 8277 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(17155).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(17155);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));
