// Module ID: 19085
// Function ID: 19086
// Name: useSearchMessages
// Dependencies: [7001, 14131, 504, 14124, 2]
// Exports: useSearchMessages

// Module 19085 (useSearchMessages)
import SearchUtils from "SearchUtils" /* 14124 */;
import SearchMessageStore from "SearchMessageStore" /* 7001 */;
import SearchQueryStore from "SearchQueryStore" /* 14131 */;
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
