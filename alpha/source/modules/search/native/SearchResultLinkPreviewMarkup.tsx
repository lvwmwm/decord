// Module ID: 16496
// Function ID: 16497
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5303, 5304, 16497, 7429, 2]

// Module 16496 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5304 */;
import combineMarkupRules from "combineMarkupRules" /* 5303 */;
import MarkupParser from "MarkupParser" /* 7429 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(16497).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(16497);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));
