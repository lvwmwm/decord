// Module ID: 18989
// Function ID: 18990
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [7071, 7072, 18990, 7179, 2]

// Module 18989 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 7072 */;
import combineMarkupRules from "combineMarkupRules" /* 7071 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 18990 */;
import MarkupParser from "markup/MarkupParser" /* 7179 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
