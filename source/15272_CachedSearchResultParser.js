// Module ID: 15272
// Function ID: 116149
// Name: CachedSearchResultParser
// Dependencies: []

// Module 15272 (CachedSearchResultParser)
let closure_0 = importDefault(dependencyMap[1]);
class CachedSearchResultParser {
  constructor() {
    closure_0 = this;
    tmp = closure_0(this, CachedSearchResultParser);
    map = new Map();
    this.resultsCache = map;
    this.parse = (id) => {
      const resultsCache = self.resultsCache;
      const value = resultsCache.get(id.id);
      if (null != value) {
        return value;
      } else {
        const searchResults = self.getSearchResults(id);
        const resultsCache2 = self.resultsCache;
        const result = resultsCache2.set(id.id, searchResults);
        return searchResults;
      }
    };
    return;
  }
}
const importDefaultResult = importDefault(dependencyMap[0]);
const importDefaultResultResult = importDefault(dependencyMap[0])(CachedSearchResultParser);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/search/native/message_parsers/CachedSearchResultParser.tsx");

export const CachedSearchResultParser = importDefaultResultResult;
