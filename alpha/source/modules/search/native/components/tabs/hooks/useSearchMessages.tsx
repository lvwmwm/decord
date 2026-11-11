// Module ID: 19353
// Function ID: 19354
// Name: useSearchMessages
// Dependencies: [6974, 14645, 504, 14638, 2]
// Exports: useSearchMessages

// Module 19353 (useSearchMessages)
import SearchUtils from "SearchUtils" /* 14638 */;
import SearchMessageStore from "SearchMessageStore" /* 6974 */;
import SearchQueryStore from "SearchQueryStore" /* 14645 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const result = size.fileFinishedImporting("modules/search/native/components/tabs/hooks/useSearchMessages.tsx");

export function useSearchMessages(searchContext, tab) {
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
}
