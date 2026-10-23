// Module ID: 18083
// Function ID: 18084
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5979, 5980, 18084, 8342, 2]

// Module 18083 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5980 */;
import combineMarkupRules from "combineMarkupRules" /* 5979 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 18084 */;
import MarkupParser from "MarkupParser" /* 8342 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
