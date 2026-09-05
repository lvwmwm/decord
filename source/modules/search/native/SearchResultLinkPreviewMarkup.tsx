// Module ID: 16675
// Function ID: 16676
// Name: NativeSearchResultLinkPreviewParser
// Dependencies: [4997, 4998, 16676, 7987, 2]

// Module 16675 (NativeSearchResultLinkPreviewParser)
import parseLinkDefault from "parseLink" /* 4998 */;
import importDefaultResult from "combineMarkupRules" /* 4997 */;
import createSearchResultLinkPreviewReactRules from "createSearchResultLinkPreviewReactRules" /* 16676 */;
import importAllResult from "reactParserFor" /* 7987 */;

const items = [parseLinkDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = require("createSearchResultLinkPreviewReactRules").createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = importDefaultResult(items);
const reactParserForResult = importAllResult.reactParserFor(importDefaultResultResult);
const result = require("set").fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
