// Module ID: 16224
// Function ID: 16225
// Name: NativeSearchResultLinkPreviewParser
// Dependencies: [4918, 4919, 16225, 7864, 2]

// Module 16224 (NativeSearchResultLinkPreviewParser)
import parseLinkDefault from "parseLink" /* 4919 */;
import importDefaultResult from "combineMarkupRules" /* 4918 */;
import createSearchResultLinkPreviewReactRules from "createSearchResultLinkPreviewReactRules" /* 16225 */;
import importAllResult from "reactParserFor" /* 7864 */;

const items = [parseLinkDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = require("createSearchResultLinkPreviewReactRules").createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = importDefaultResult(items);
const reactParserForResult = importAllResult.reactParserFor(importDefaultResultResult);
const result = require("set").fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
