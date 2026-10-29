// Module ID: 18636
// Function ID: 18637
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [6021, 6022, 18637, 8399, 2]

// Module 18636 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 6022 */;
import combineMarkupRules from "combineMarkupRules" /* 6021 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 18637 */;
import MarkupParser from "MarkupParser" /* 8399 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
