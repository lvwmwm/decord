// Module ID: 11656
// Function ID: 11657
// Name: create
// Dependencies: [11654, 11655, 2]

// Module 11656 (create)
import { AbstractSearchFetchManager } from "cleanUp";

class SearchFetchManager extends AbstractSearchFetchManager {
}
SearchFetchManager.prototype["create"] = function create(arg0) {
  let id;
  let searchQuery;
  let searchType;
  ({ id, searchType, searchQuery } = arg0);
  this.cancel(id);
  const searchFetcherImpl = new require(11655) /* fetch */.SearchFetcherImpl(id, searchType, searchQuery);
  const result = this.set(id, searchFetcherImpl);
  return searchFetcherImpl;
};
const searchFetchManager = new SearchFetchManager();
let result = require("set").fileFinishedImporting("modules/search/managers/SearchFetchManager.tsx");

export default searchFetchManager;
