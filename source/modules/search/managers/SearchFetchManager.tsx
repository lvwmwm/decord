// Module ID: 11798
// Function ID: 11799
// Name: create
// Dependencies: [11796, 11797, 2]

// Module 11798 (create)
import { AbstractSearchFetchManager } from "cleanUp";

class SearchFetchManager extends AbstractSearchFetchManager {
}
SearchFetchManager.prototype["create"] = function create(arg0) {
  let id;
  let searchQuery;
  let searchType;
  ({ id, searchType, searchQuery } = arg0);
  this.cancel(id);
  const searchFetcherImpl = new require(11797) /* fetch */.SearchFetcherImpl(id, searchType, searchQuery);
  const result = this.set(id, searchFetcherImpl);
  return searchFetcherImpl;
};
const searchFetchManager = new SearchFetchManager();
let result = require("set").fileFinishedImporting("modules/search/managers/SearchFetchManager.tsx");

export default searchFetchManager;
