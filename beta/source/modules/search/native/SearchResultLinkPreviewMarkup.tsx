// Module ID: 17164
// Function ID: 17165
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5242, 5243, 17165, 8282, 2]

// Module 17164 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5243 */;
import combineMarkupRules from "combineMarkupRules" /* 5242 */;
import MarkupParser from "MarkupParser" /* 8282 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(17165).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(17165);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));
