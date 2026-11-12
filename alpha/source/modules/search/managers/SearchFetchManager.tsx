// Module ID: 14663
// Function ID: 14664
// Name: SearchFetchManager
// Dependencies: [14661, 14662, 2]

// Module 14663 (SearchFetchManager)
import AbstractSearchFetchManager2 from "AbstractSearchFetchManager" /* 14661 */;
import SearchFetcher from "SearchFetcher" /* 14662 */;
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
