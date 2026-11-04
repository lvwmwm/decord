// Module ID: 18157
// Function ID: 18158
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [6013, 6014, 18158, 8376, 2]

// Module 18157 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 6014 */;
import combineMarkupRules from "combineMarkupRules" /* 6013 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 18158 */;
import MarkupParser from "MarkupParser" /* 8376 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
