// Module ID: 11918
// Function ID: 11919
// Name: create
// Dependencies: [11916, 11917, 2]

// Module 11918 (create)
import set from "set" /* 2 */;
import cleanUp from "cleanUp" /* 11916 */;
import fetch from "fetch" /* 11917 */;

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
