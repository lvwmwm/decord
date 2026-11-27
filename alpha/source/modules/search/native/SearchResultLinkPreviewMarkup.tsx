// Module ID: 19005
// Function ID: 19006
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [7071, 7072, 19006, 7179, 2]

// Module 19005 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 7072 */;
import combineMarkupRules from "combineMarkupRules" /* 7071 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 19006 */;
import MarkupParser from "markup/MarkupParser" /* 7179 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
