// Module ID: 17947
// Function ID: 17948
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5961, 5962, 17948, 8320, 2]

// Module 17947 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5962 */;
import combineMarkupRules from "combineMarkupRules" /* 5961 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 17948 */;
import MarkupParser from "MarkupParser" /* 8320 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
