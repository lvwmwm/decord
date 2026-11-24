// Module ID: 18815
// Function ID: 18816
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [6945, 6946, 18816, 7053, 2]

// Module 18815 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 6946 */;
import combineMarkupRules from "combineMarkupRules" /* 6945 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 18816 */;
import MarkupParser from "markup/MarkupParser" /* 7053 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
