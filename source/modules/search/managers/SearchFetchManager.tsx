// Module ID: 11723
// Function ID: 11724
// Name: create
// Dependencies: [11721, 11722, 2]

// Module 11723 (create)
import { AbstractSearchFetchManager } from "cleanUp";

class SearchFetchManager extends AbstractSearchFetchManager {
}
SearchFetchManager.prototype["create"] = function create(arg0) {
  let id;
  let searchQuery;
  let searchType;
  ({ id, searchType, searchQuery } = arg0);
  this.cancel(id);
  const searchFetcherImpl = new require(11722) /* fetch */.SearchFetcherImpl(id, searchType, searchQuery);
  const result = this.set(id, searchFetcherImpl);
  return searchFetcherImpl;
};
const searchFetchManager = new SearchFetchManager();
let result = require("set").fileFinishedImporting("modules/search/managers/SearchFetchManager.tsx");

export default searchFetchManager;
