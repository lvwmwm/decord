// Module ID: 18644
// Function ID: 18645
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5816, 5817, 18645, 8606, 2]

// Module 18644 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5817 */;
import combineMarkupRules from "combineMarkupRules" /* 5816 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 18645 */;
import MarkupParser from "markup/MarkupParser" /* 8606 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
