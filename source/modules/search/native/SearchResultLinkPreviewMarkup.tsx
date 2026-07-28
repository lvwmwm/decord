// Module ID: 15479
// Function ID: 117976
// Name: NativeSearchResultLinkPreviewParser
// Dependencies: [4599, 4600, 15480, 7745, 2]

// Module 15479 (NativeSearchResultLinkPreviewParser)
import importDefaultResult from "_createForOfIteratorHelperLoose";
import createSearchResultLinkPreviewReactRules from "createSearchResultLinkPreviewReactRules";
import importAllResult from "reactParserFor";

const items = [require("parseLink").NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = require("createSearchResultLinkPreviewReactRules").createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = importDefaultResult(items);
const reactParserForResult = require("reactParserFor").reactParserFor(importDefaultResultResult);
const result = require("createSearchResultLinkPreviewReactRules").fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
