// Module ID: 18850
// Function ID: 18851
// Name: useSearchMessages
// Dependencies: [6827, 13125, 504, 13118, 2]
// Exports: useSearchMessages

// Module 18850 (useSearchMessages)
import SearchUtils from "SearchUtils" /* 13118 */;
import SearchMessageStore from "SearchMessageStore" /* 6827 */;
import SearchQueryStore from "SearchQueryStore" /* 13125 */;
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
