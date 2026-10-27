// Module ID: 18162
// Function ID: 18163
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5982, 5983, 18163, 8343, 2]

// Module 18162 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5983 */;
import combineMarkupRules from "combineMarkupRules" /* 5982 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 18163 */;
import MarkupParser from "MarkupParser" /* 8343 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
