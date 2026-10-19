// Module ID: 13026
// Function ID: 13027
// Name: SearchFetchManager
// Dependencies: [13024, 13025, 2]

// Module 13026 (SearchFetchManager)
import AbstractSearchFetchManager2 from "AbstractSearchFetchManager" /* 13024 */;
import SearchFetcher from "SearchFetcher" /* 13025 */;
import size from "module_2" /* 2 */;

const AbstractSearchFetchManager = AbstractSearchFetchManager2.AbstractSearchFetchManager;
class SearchFetchManager extends AbstractSearchFetchManager {
  create(arg0) {
    let id;
    let searchQuery;
    let searchType;
    ({ id, searchType, searchQuery } = arg0);
    this.cancel(id);
    const searchFetcherImpl = new SearchFetcher.SearchFetcherImpl(id, searchType, searchQuery);
    const result = this.set(id, searchFetcherImpl);
    return searchFetcherImpl;
  }
}
const prototype = SearchFetchManager.prototype;
const searchFetchManager = new SearchFetchManager();
let result = size.fileFinishedImporting("modules/search/managers/SearchFetchManager.tsx");

export default searchFetchManager;
