// Module ID: 19050
// Function ID: 19051
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [6171, 6172, 19051, 8590, 2]

// Module 19050 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 6172 */;
import combineMarkupRules from "combineMarkupRules" /* 6171 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 19051 */;
import MarkupParser from "MarkupParser" /* 8590 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
