// Module ID: 16525
// Function ID: 16526
// Name: useSearchMessages
// Dependencies: [6699, 11822, 504, 11823, 2]
// Exports: useSearchMessages

// Module 16525 (useSearchMessages)
import SearchUtils from "SearchUtils" /* 11823 */;
import SearchMessageStore from "SearchMessageStore" /* 6699 */;
import SearchQueryStore from "SearchQueryStore" /* 11822 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const result = size.fileFinishedImporting("modules/search/native/components/tabs/hooks/useSearchMessages.tsx");

export const useSearchMessages = function useSearchMessages(searchContext, tab) {
  _require = searchContext;
  dependencyMap = tab;
  let obj = require("get initialized");
  const items = [SearchQueryStore, SearchMessageStore];
  const items1 = [searchContext, tab];
  return obj.useStateFromStores(items, () => {
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
    const obj = SearchUtils;
    return SearchMessageStore.getMessages(obj.getSearchTabFetchId(searchContext, tab, searchResultsQuery));
  }, items1);
};
