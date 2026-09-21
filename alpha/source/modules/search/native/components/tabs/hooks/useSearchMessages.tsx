// Module ID: 17168
// Function ID: 17169
// Name: useSearchMessages
// Dependencies: [7523, 12593, 504, 12594, 2]
// Exports: useSearchMessages

// Module 17168 (useSearchMessages)
import SearchUtils from "SearchUtils" /* 12594 */;
import SearchMessageStore from "SearchMessageStore" /* 7523 */;
import SearchQueryStore from "SearchQueryStore" /* 12593 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/hooks/useSearchMessages.tsx");

export const useSearchMessages = function useSearchMessages(searchContext, tab) {
  _require = searchContext;
  dependencyMap = tab;
  const items = [SearchQueryStore, SearchMessageStore];
  const items1 = [searchContext, tab];
  return require("initialize").useStateFromStores(items, () => {
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(closure_0);
    return SearchMessageStore.getMessages(SearchUtils.getSearchTabFetchId(closure_0, closure_1, searchResultsQuery));
  }, items1);
};
