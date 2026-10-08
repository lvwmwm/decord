// Module ID: 17149
// Function ID: 17150
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5397, 5398, 17150, 7978, 2]

// Module 17149 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5398 */;
import combineMarkupRules from "combineMarkupRules" /* 5397 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 17150 */;
import MarkupParser from "MarkupParser" /* 7978 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
