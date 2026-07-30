// Module ID: 10110
// Function ID: 10111
// Name: create
// Dependencies: [10108, 10109, 2]

// Module 10110 (create)
import { AbstractSearchFetchManager } from "cleanUp";

class SearchFetchManager extends AbstractSearchFetchManager {
}
SearchFetchManager.prototype["create"] = function create(arg0) {
  let id;
  let searchQuery;
  let searchType;
  ({ id, searchType, searchQuery } = arg0);
  this.cancel(id);
  const searchFetcherImpl = new require(10109) /* fetch */.SearchFetcherImpl(id, searchType, searchQuery);
  const result = this.set(id, searchFetcherImpl);
  return searchFetcherImpl;
};
const searchFetchManager = new SearchFetchManager();
let result = require("set").fileFinishedImporting("modules/search/managers/SearchFetchManager.tsx");

export default searchFetchManager;
