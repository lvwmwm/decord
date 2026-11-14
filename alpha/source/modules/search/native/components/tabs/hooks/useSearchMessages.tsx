// Module ID: 19540
// Function ID: 19541
// Name: useSearchMessages
// Dependencies: [7037, 14754, 504, 14747, 2]
// Exports: useSearchMessages

// Module 19540 (useSearchMessages)
import SearchUtils from "SearchUtils" /* 14747 */;
import SearchMessageStore from "SearchMessageStore" /* 7037 */;
import SearchQueryStore from "SearchQueryStore" /* 14754 */;
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
