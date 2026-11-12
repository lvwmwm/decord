// Module ID: 19313
// Function ID: 19314
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [6280, 6281, 19314, 9149, 2]

// Module 19313 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 6281 */;
import combineMarkupRules from "combineMarkupRules" /* 6280 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 19314 */;
import MarkupParser from "MarkupParser" /* 9149 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
