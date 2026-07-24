// Module ID: 15416
// Function ID: 117640
// Name: NativeSearchResultLinkPreviewParser
// Dependencies: [4564, 4565, 15417, 7763, 2]

// Module 15416 (NativeSearchResultLinkPreviewParser)
import importDefaultResult from "_createForOfIteratorHelperLoose";
import createSearchResultLinkPreviewReactRules from "createSearchResultLinkPreviewReactRules";
import importAllResult from "reactParserFor";

const items = [require("parseLink").NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = require("createSearchResultLinkPreviewReactRules").createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = importDefaultResult(items);
const reactParserForResult = require("reactParserFor").reactParserFor(importDefaultResultResult);
const result = require("createSearchResultLinkPreviewReactRules").fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
