// Module ID: 19175
// Function ID: 19176
// Name: useSearchMessages
// Dependencies: [6951, 14166, 504, 14159, 2]
// Exports: useSearchMessages

// Module 19175 (useSearchMessages)
import SearchUtils from "SearchUtils" /* 14159 */;
import SearchMessageStore from "SearchMessageStore" /* 6951 */;
import SearchQueryStore from "SearchQueryStore" /* 14166 */;
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
