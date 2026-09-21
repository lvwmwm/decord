// Module ID: 17153
// Function ID: 17154
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5210, 5211, 17154, 8250, 2]

// Module 17153 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5211 */;
import combineMarkupRules from "combineMarkupRules" /* 5210 */;
import MarkupParser from "MarkupParser" /* 8250 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(17154).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(17154);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));
