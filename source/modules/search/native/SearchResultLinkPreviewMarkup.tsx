// Module ID: 15253
// Function ID: 115148
// Name: NativeSearchResultLinkPreviewParser
// Dependencies: []

// Module 15253 (NativeSearchResultLinkPreviewParser)
const items = [importDefault(dependencyMap[1]).NATIVE_SEARCH_RESULT_LINK_RULES, ];
const importDefaultResult = importDefault(dependencyMap[0]);
items[1] = arg1(dependencyMap[2]).createSearchResultLinkPreviewReactRules();
const obj = arg1(dependencyMap[2]);
const importDefaultResultResult = importDefaultResult(items);
const importAllResult = importAll(dependencyMap[3]);
const reactParserForResult = importAll(dependencyMap[3]).reactParserFor(importDefaultResultResult);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
