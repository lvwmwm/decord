// Module ID: 19348
// Function ID: 19349
// Name: useSearchMessages
// Dependencies: [6974, 14641, 504, 14634, 2]
// Exports: useSearchMessages

// Module 19348 (useSearchMessages)
import SearchUtils from "SearchUtils" /* 14634 */;
import SearchMessageStore from "SearchMessageStore" /* 6974 */;
import SearchQueryStore from "SearchQueryStore" /* 14641 */;
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
