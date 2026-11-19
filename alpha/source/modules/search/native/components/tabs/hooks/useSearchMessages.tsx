// Module ID: 18855
// Function ID: 18856
// Name: useSearchMessages
// Dependencies: [6520, 13121, 504, 13114, 2]
// Exports: useSearchMessages

// Module 18855 (useSearchMessages)
import SearchUtils from "SearchUtils" /* 13114 */;
import SearchMessageStore from "SearchMessageStore" /* 6520 */;
import SearchQueryStore from "SearchQueryStore" /* 13121 */;
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
