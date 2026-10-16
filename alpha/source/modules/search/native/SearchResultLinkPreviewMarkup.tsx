// Module ID: 17750
// Function ID: 17751
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5464, 5465, 17751, 8226, 2]

// Module 17750 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5465 */;
import combineMarkupRules from "combineMarkupRules" /* 5464 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 17751 */;
import MarkupParser from "MarkupParser" /* 8226 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
