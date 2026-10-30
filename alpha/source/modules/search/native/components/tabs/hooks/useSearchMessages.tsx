// Module ID: 18730
// Function ID: 18731
// Name: useSearchMessages
// Dependencies: [6857, 13850, 504, 13843, 2]
// Exports: useSearchMessages

// Module 18730 (useSearchMessages)
import SearchUtils from "SearchUtils" /* 13843 */;
import SearchMessageStore from "SearchMessageStore" /* 6857 */;
import SearchQueryStore from "SearchQueryStore" /* 13850 */;
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
