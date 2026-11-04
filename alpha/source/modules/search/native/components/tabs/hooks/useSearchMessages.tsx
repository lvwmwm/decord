// Module ID: 19054
// Function ID: 19055
// Name: useSearchMessages
// Dependencies: [6998, 14118, 504, 14111, 2]
// Exports: useSearchMessages

// Module 19054 (useSearchMessages)
import SearchUtils from "SearchUtils" /* 14111 */;
import SearchMessageStore from "SearchMessageStore" /* 6998 */;
import SearchQueryStore from "SearchQueryStore" /* 14118 */;
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
