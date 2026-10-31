// Module ID: 18737
// Function ID: 18738
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [6033, 6034, 18738, 8444, 2]

// Module 18737 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 6034 */;
import combineMarkupRules from "combineMarkupRules" /* 6033 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 18738 */;
import MarkupParser from "MarkupParser" /* 8444 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
