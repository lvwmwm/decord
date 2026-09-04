// Module ID: 16598
// Function ID: 16599
// Name: NativeSearchResultLinkPreviewParser
// Dependencies: [4958, 4959, 16599, 7918, 2]

// Module 16598 (NativeSearchResultLinkPreviewParser)
import parseLinkDefault from "parseLink" /* 4959 */;
import importDefaultResult from "combineMarkupRules" /* 4958 */;
import createSearchResultLinkPreviewReactRules from "createSearchResultLinkPreviewReactRules" /* 16599 */;
import importAllResult from "reactParserFor" /* 7918 */;

const items = [parseLinkDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = require("createSearchResultLinkPreviewReactRules").createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = importDefaultResult(items);
const reactParserForResult = importAllResult.reactParserFor(importDefaultResultResult);
const result = require("set").fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
