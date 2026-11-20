// Module ID: 19545
// Function ID: 19546
// Name: useSearchMessages
// Dependencies: [7037, 14756, 504, 14749, 2]
// Exports: useSearchMessages

// Module 19545 (useSearchMessages)
import SearchUtils from "SearchUtils" /* 14749 */;
import SearchMessageStore from "SearchMessageStore" /* 7037 */;
import SearchQueryStore from "SearchQueryStore" /* 14756 */;
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
