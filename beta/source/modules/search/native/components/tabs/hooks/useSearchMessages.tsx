// Module ID: 18821
// Function ID: 18822
// Name: useSearchMessages
// Dependencies: [6641, 13217, 504, 13210, 2]
// Exports: useSearchMessages

// Module 18821 (useSearchMessages)
import SearchUtils from "SearchUtils" /* 13210 */;
import SearchMessageStore from "SearchMessageStore" /* 6641 */;
import SearchQueryStore from "SearchQueryStore" /* 13217 */;
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
