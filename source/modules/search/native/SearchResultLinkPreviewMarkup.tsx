// Module ID: 15849
// Function ID: 15850
// Name: NativeSearchResultLinkPreviewParser
// Dependencies: [4798, 4799, 15850, 8160, 2]

// Module 15849 (NativeSearchResultLinkPreviewParser)
import importDefaultResult from "combineMarkupRules";
import createSearchResultLinkPreviewReactRules from "createSearchResultLinkPreviewReactRules";
import importAllResult from "reactParserFor";

const items = [require("parseLink").NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = require("createSearchResultLinkPreviewReactRules").createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = importDefaultResult(items);
const reactParserForResult = require("reactParserFor").reactParserFor(importDefaultResultResult);
const result = require("createSearchResultLinkPreviewReactRules").fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
