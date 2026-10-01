// Module ID: 16742
// Function ID: 16743
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5487, 5488, 16743, 7602, 2]

// Module 16742 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5488 */;
import combineMarkupRules from "combineMarkupRules" /* 5487 */;
import MarkupParser from "MarkupParser" /* 7602 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(16743).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(16743);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));
