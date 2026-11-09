// Module ID: 19137
// Function ID: 19138
// Name: useSearchMessages
// Dependencies: [6918, 14134, 504, 14127, 2]
// Exports: useSearchMessages

// Module 19137 (useSearchMessages)
import SearchUtils from "SearchUtils" /* 14127 */;
import SearchMessageStore from "SearchMessageStore" /* 6918 */;
import SearchQueryStore from "SearchQueryStore" /* 14134 */;
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
