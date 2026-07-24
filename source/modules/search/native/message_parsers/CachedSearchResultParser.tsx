// Module ID: 15454
// Function ID: 118746
// Name: CachedSearchResultParser
// Dependencies: [7, 6, 2]

// Module 15454 (CachedSearchResultParser)
import _classCallCheck from "_classCallCheck";
import importDefaultResult from "_defineProperties";

class CachedSearchResultParser {
  constructor() {
    self = this;
    tmp = self(this, CachedSearchResultParser);
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
const importDefaultResultResult = require("_defineProperties")(CachedSearchResultParser);
let result = require("set").fileFinishedImporting("modules/search/native/message_parsers/CachedSearchResultParser.tsx");

export const CachedSearchResultParser = importDefaultResultResult;
