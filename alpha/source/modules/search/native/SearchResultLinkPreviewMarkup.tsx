// Module ID: 17299
// Function ID: 17300
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5398, 5399, 17300, 7986, 2]

// Module 17299 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5399 */;
import combineMarkupRules from "combineMarkupRules" /* 5398 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 17300 */;
import MarkupParser from "MarkupParser" /* 7986 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
