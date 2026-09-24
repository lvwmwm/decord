// Module ID: 17248
// Function ID: 17249
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5295, 5296, 17249, 8335, 2]

// Module 17248 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5296 */;
import combineMarkupRules from "combineMarkupRules" /* 5295 */;
import MarkupParser from "MarkupParser" /* 8335 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(17249).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(17249);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));
