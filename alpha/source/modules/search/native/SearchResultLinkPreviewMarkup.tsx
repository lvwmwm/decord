// Module ID: 18828
// Function ID: 18829
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5843, 5844, 18829, 8638, 2]

// Module 18828 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5844 */;
import combineMarkupRules from "combineMarkupRules" /* 5843 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 18829 */;
import MarkupParser from "markup/MarkupParser" /* 8638 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
