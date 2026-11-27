// Module ID: 19040
// Function ID: 19041
// Name: useSearchMessages
// Dependencies: [6953, 13308, 504, 13301, 2]
// Exports: useSearchMessages

// Module 19040 (useSearchMessages)
import SearchUtils from "SearchUtils" /* 13301 */;
import SearchMessageStore from "SearchMessageStore" /* 6953 */;
import SearchQueryStore from "SearchQueryStore" /* 13308 */;
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
