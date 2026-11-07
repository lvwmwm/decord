// Module ID: 19124
// Function ID: 19125
// Name: useSearchMessages
// Dependencies: [6918, 14133, 504, 14126, 2]
// Exports: useSearchMessages

// Module 19124 (useSearchMessages)
import SearchUtils from "SearchUtils" /* 14126 */;
import SearchMessageStore from "SearchMessageStore" /* 6918 */;
import SearchQueryStore from "SearchQueryStore" /* 14133 */;
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
