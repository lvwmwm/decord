// Module ID: 17154
// Function ID: 17155
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5210, 5211, 17155, 8250, 2]

// Module 17154 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5211 */;
import combineMarkupRules from "combineMarkupRules" /* 5210 */;
import MarkupParser from "MarkupParser" /* 8250 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(17155).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(17155);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));
