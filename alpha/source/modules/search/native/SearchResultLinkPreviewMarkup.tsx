// Module ID: 17866
// Function ID: 17867
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5939, 5940, 17867, 8292, 2]

// Module 17866 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5940 */;
import combineMarkupRules from "combineMarkupRules" /* 5939 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 17867 */;
import MarkupParser from "MarkupParser" /* 8292 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
