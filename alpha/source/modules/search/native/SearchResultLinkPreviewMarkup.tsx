// Module ID: 19019
// Function ID: 19020
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [6168, 6169, 19020, 8585, 2]

// Module 19019 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 6169 */;
import combineMarkupRules from "combineMarkupRules" /* 6168 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 19020 */;
import MarkupParser from "MarkupParser" /* 8585 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
