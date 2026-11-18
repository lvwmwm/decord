// Module ID: 18863
// Function ID: 18864
// Name: useSearchMessages
// Dependencies: [6549, 13139, 504, 13132, 2]
// Exports: useSearchMessages

// Module 18863 (useSearchMessages)
import SearchUtils from "SearchUtils" /* 13132 */;
import SearchMessageStore from "SearchMessageStore" /* 6549 */;
import SearchQueryStore from "SearchQueryStore" /* 13139 */;
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
