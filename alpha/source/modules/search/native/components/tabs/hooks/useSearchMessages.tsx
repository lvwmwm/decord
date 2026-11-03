// Module ID: 18937
// Function ID: 18938
// Name: useSearchMessages
// Dependencies: [6983, 14031, 504, 14024, 2]
// Exports: useSearchMessages

// Module 18937 (useSearchMessages)
import SearchUtils from "SearchUtils" /* 14024 */;
import SearchMessageStore from "SearchMessageStore" /* 6983 */;
import SearchQueryStore from "SearchQueryStore" /* 14031 */;
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
