// Module ID: 19552
// Function ID: 19553
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [6341, 6342, 19553, 9227, 2]

// Module 19552 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 6342 */;
import combineMarkupRules from "combineMarkupRules" /* 6341 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 19553 */;
import MarkupParser from "markup/MarkupParser" /* 9227 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
