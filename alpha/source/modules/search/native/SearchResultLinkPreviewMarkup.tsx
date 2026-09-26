// Module ID: 16492
// Function ID: 16493
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5303, 5304, 16493, 7429, 2]

// Module 16492 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5304 */;
import combineMarkupRules from "combineMarkupRules" /* 5303 */;
import MarkupParser from "MarkupParser" /* 7429 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(16493).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(16493);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));
