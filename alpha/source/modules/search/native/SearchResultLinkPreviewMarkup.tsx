// Module ID: 18039
// Function ID: 18040
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5967, 5968, 18040, 8330, 2]

// Module 18039 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5968 */;
import combineMarkupRules from "combineMarkupRules" /* 5967 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 18040 */;
import MarkupParser from "MarkupParser" /* 8330 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
