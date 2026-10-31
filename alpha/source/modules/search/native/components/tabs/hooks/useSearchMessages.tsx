// Module ID: 18772
// Function ID: 18773
// Name: useSearchMessages
// Dependencies: [6863, 13885, 504, 13878, 2]
// Exports: useSearchMessages

// Module 18772 (useSearchMessages)
import SearchUtils from "SearchUtils" /* 13878 */;
import SearchMessageStore from "SearchMessageStore" /* 6863 */;
import SearchQueryStore from "SearchQueryStore" /* 13885 */;
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
