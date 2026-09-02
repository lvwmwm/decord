// Module ID: 16491
// Function ID: 16492
// Name: NativeSearchResultLinkPreviewParser
// Dependencies: [4950, 4951, 16492, 7905, 2]

// Module 16491 (NativeSearchResultLinkPreviewParser)
import parseLinkDefault from "parseLink" /* 4951 */;
import importDefaultResult from "combineMarkupRules" /* 4950 */;
import createSearchResultLinkPreviewReactRules from "createSearchResultLinkPreviewReactRules" /* 16492 */;
import importAllResult from "reactParserFor" /* 7905 */;

const items = [parseLinkDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = require("createSearchResultLinkPreviewReactRules").createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = importDefaultResult(items);
const reactParserForResult = importAllResult.reactParserFor(importDefaultResultResult);
const result = require("set").fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
