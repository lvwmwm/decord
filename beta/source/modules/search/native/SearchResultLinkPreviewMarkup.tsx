// Module ID: 18771
// Function ID: 18772
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5935, 5936, 18772, 8726, 2]

// Module 18771 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5936 */;
import combineMarkupRules from "combineMarkupRules" /* 5935 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 18772 */;
import MarkupParser from "markup/MarkupParser" /* 8726 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
