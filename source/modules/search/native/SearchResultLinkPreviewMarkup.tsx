// Module ID: 15426
// Function ID: 117768
// Name: NativeSearchResultLinkPreviewParser
// Dependencies: [4565, 4566, 15427, 7709, 2]

// Module 15426 (NativeSearchResultLinkPreviewParser)
import importDefaultResult from "_createForOfIteratorHelperLoose";
import createSearchResultLinkPreviewReactRules from "createSearchResultLinkPreviewReactRules";
import importAllResult from "reactParserFor";

const items = [require("parseLink").NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = require("createSearchResultLinkPreviewReactRules").createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = importDefaultResult(items);
const reactParserForResult = require("reactParserFor").reactParserFor(importDefaultResultResult);
const result = require("createSearchResultLinkPreviewReactRules").fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
