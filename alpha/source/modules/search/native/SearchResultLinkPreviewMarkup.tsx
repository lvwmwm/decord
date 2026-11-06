// Module ID: 19039
// Function ID: 19040
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [6191, 6192, 19040, 8536, 2]

// Module 19039 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 6192 */;
import combineMarkupRules from "combineMarkupRules" /* 6191 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 19040 */;
import MarkupParser from "MarkupParser" /* 8536 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
