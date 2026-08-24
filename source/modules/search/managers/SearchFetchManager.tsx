// Module ID: 11571
// Function ID: 11572
// Name: create
// Dependencies: [11569, 11570, 2]

// Module 11571 (create)
import set from "set" /* 2 */;
import cleanUp from "cleanUp" /* 11569 */;
import fetch from "fetch" /* 11570 */;

const AbstractSearchFetchManager = cleanUp.AbstractSearchFetchManager;
class SearchFetchManager extends AbstractSearchFetchManager {
}
SearchFetchManager.prototype["create"] = function create(arg0) {
  ({ id, searchType, searchQuery } = arg0);
  this.cancel(id);
  const searchFetcherImpl = new fetch.SearchFetcherImpl(id, searchType, searchQuery);
  const result = this.set(id, searchFetcherImpl);
  return searchFetcherImpl;
};
const searchFetchManager = new SearchFetchManager();
let result = set.fileFinishedImporting("modules/search/managers/SearchFetchManager.tsx");

export default searchFetchManager;
