// Module ID: 15675
// Function ID: 15676
// Name: NativeSearchResultLinkPreviewParser
// Dependencies: [4733, 4734, 15676, 8034, 2]

// Module 15675 (NativeSearchResultLinkPreviewParser)
import importDefaultResult from "combineMarkupRules";
import createSearchResultLinkPreviewReactRules from "createSearchResultLinkPreviewReactRules";
import importAllResult from "reactParserFor";

const items = [require("parseLink").NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = require("createSearchResultLinkPreviewReactRules").createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = importDefaultResult(items);
const reactParserForResult = require("reactParserFor").reactParserFor(importDefaultResultResult);
const result = require("createSearchResultLinkPreviewReactRules").fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
