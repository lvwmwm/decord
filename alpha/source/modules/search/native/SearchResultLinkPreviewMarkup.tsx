// Module ID: 18820
// Function ID: 18821
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5814, 5815, 18821, 8607, 2]

// Module 18820 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5815 */;
import combineMarkupRules from "combineMarkupRules" /* 5814 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 18821 */;
import MarkupParser from "markup/MarkupParser" /* 8607 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
