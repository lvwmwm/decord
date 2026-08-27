// Module ID: 16172
// Function ID: 16173
// Name: NativeSearchResultLinkPreviewParser
// Dependencies: [4902, 4903, 16173, 7828, 2]

// Module 16172 (NativeSearchResultLinkPreviewParser)
import parseLinkDefault from "parseLink" /* 4903 */;
import importDefaultResult from "combineMarkupRules" /* 4902 */;
import createSearchResultLinkPreviewReactRules from "createSearchResultLinkPreviewReactRules" /* 16173 */;
import importAllResult from "reactParserFor" /* 7828 */;

const items = [parseLinkDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = require("createSearchResultLinkPreviewReactRules").createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = importDefaultResult(items);
const reactParserForResult = importAllResult.reactParserFor(importDefaultResultResult);
const result = require("set").fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
