// Module ID: 15432
// Function ID: 117758
// Name: useSearchMessages
// Dependencies: [5660, 10109, 566, 10110, 2]
// Exports: useSearchMessages

// Module 15432 (useSearchMessages)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/search/native/components/tabs/hooks/useSearchMessages.tsx");

export const useSearchMessages = function useSearchMessages(searchContext, tab) {
  const _require = searchContext;
  const dependencyMap = tab;
  const items = [closure_3, _isNativeReflectConstruct];
  const items1 = [searchContext, tab];
  return _require(566).useStateFromStores(items, () => {
    const searchResultsQuery = outer1_3.getSearchResultsQuery(searchContext);
    return outer1_2.getMessages(searchContext(tab[3]).getSearchTabFetchId(searchContext, tab, searchResultsQuery));
  }, items1);
};
