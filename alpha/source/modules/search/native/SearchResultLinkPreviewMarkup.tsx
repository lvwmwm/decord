// Module ID: 17706
// Function ID: 17707
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5461, 5462, 17707, 8222, 2]

// Module 17706 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5462 */;
import combineMarkupRules from "combineMarkupRules" /* 5461 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 17707 */;
import MarkupParser from "MarkupParser" /* 8222 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
