// Module ID: 19587
// Function ID: 19588
// Name: useSearchMessages
// Dependencies: [7045, 13832, 504, 13825, 2]
// Exports: useSearchMessages

// Module 19587 (useSearchMessages)
import SearchUtils from "SearchUtils" /* 13825 */;
import SearchMessageStore from "SearchMessageStore" /* 7045 */;
import SearchQueryStore from "SearchQueryStore" /* 13832 */;
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
