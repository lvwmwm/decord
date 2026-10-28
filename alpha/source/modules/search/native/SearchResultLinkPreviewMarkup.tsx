// Module ID: 18402
// Function ID: 18403
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [6017, 6018, 18403, 8377, 2]

// Module 18402 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 6018 */;
import combineMarkupRules from "combineMarkupRules" /* 6017 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 18403 */;
import MarkupParser from "MarkupParser" /* 8377 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
