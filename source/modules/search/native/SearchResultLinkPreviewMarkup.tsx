// Module ID: 16512
// Function ID: 16513
// Name: NativeSearchResultLinkPreviewParser
// Dependencies: [4951, 4952, 16513, 7908, 2]

// Module 16512 (NativeSearchResultLinkPreviewParser)
import parseLinkDefault from "parseLink" /* 4952 */;
import importDefaultResult from "combineMarkupRules" /* 4951 */;
import createSearchResultLinkPreviewReactRules from "createSearchResultLinkPreviewReactRules" /* 16513 */;
import importAllResult from "reactParserFor" /* 7908 */;

const items = [parseLinkDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = require("createSearchResultLinkPreviewReactRules").createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = importDefaultResult(items);
const reactParserForResult = importAllResult.reactParserFor(importDefaultResultResult);
const result = require("set").fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
