// Module ID: 19277
// Function ID: 19278
// Name: useCanShowNoSearchResults
// Dependencies: [14645, 504, 2]
// Exports: useCanShowNoSearchResults

// Module 19277 (useCanShowNoSearchResults)
import SearchQueryStore from "SearchQueryStore" /* 14645 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/search/native/components/tabs/hooks/useCanShowNoSearchResults.tsx");

export function useCanShowNoSearchResults(searchContext, visibleTabCounts) {
  _require = searchContext;
  const obj = require("get initialized");
  const items = [SearchQueryStore];
  const items1 = [searchContext];
  let stateFromStores = obj.useStateFromStores(items, () => {
    const isInitialSearchQueryResult = SearchQueryStore.isInitialSearchQuery(searchContext);
    let tmp3 = !isInitialSearchQueryResult && !obj.isAutocompleteVisible(tmp);
    if (tmp3) {
      const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
      tmp3 = searchResultsQuery === obj.getQueryString(tmp);
    }
    return tmp3;
  }, items1);
  if (stateFromStores) {
    let tmp3 = null;
    stateFromStores = null != visibleTabCounts;
  }
  return stateFromStores;
}
