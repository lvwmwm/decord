// Module ID: 17740
// Function ID: 17741
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5463, 5464, 17741, 8225, 2]

// Module 17740 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5464 */;
import combineMarkupRules from "combineMarkupRules" /* 5463 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 17741 */;
import MarkupParser from "MarkupParser" /* 8225 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
