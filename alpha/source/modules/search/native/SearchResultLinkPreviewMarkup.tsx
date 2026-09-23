// Module ID: 17222
// Function ID: 17223
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5293, 5294, 17223, 8331, 2]

// Module 17222 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5294 */;
import combineMarkupRules from "combineMarkupRules" /* 5293 */;
import MarkupParser from "MarkupParser" /* 8331 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(17223).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(17223);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));
