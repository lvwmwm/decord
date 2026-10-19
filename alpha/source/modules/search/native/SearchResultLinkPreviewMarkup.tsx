// Module ID: 17814
// Function ID: 17815
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5501, 5502, 17815, 8272, 2]

// Module 17814 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5502 */;
import combineMarkupRules from "combineMarkupRules" /* 5501 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 17815 */;
import MarkupParser from "MarkupParser" /* 8272 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
