// Module ID: 17843
// Function ID: 17844
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5936, 5937, 17844, 8288, 2]

// Module 17843 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5937 */;
import combineMarkupRules from "combineMarkupRules" /* 5936 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 17844 */;
import MarkupParser from "MarkupParser" /* 8288 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
