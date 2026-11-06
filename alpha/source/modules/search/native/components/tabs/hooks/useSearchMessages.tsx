// Module ID: 19074
// Function ID: 19075
// Name: useSearchMessages
// Dependencies: [6943, 14108, 504, 14101, 2]
// Exports: useSearchMessages

// Module 19074 (useSearchMessages)
import SearchUtils from "SearchUtils" /* 14101 */;
import SearchMessageStore from "SearchMessageStore" /* 6943 */;
import SearchQueryStore from "SearchQueryStore" /* 14108 */;
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
