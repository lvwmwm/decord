// Module ID: 16506
// Function ID: 16507
// Name: useSearchMessages
// Dependencies: [6136, 12129, 586, 12130, 2]
// Exports: useSearchMessages

// Module 16506 (useSearchMessages)
import closure_2 from "handleReaction" /* 6136 */;
import closure_3 from "prototype" /* 12129 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/search/native/components/tabs/hooks/useSearchMessages.tsx");

export const useSearchMessages = function useSearchMessages(searchContext, tab) {
  const _require = searchContext;
  dependencyMap = tab;
  const items = [closure_3, closure_2];
  const items1 = [searchContext, tab];
  return _require(586).useStateFromStores(items, () => {
    const searchResultsQuery = closure_1_3.getSearchResultsQuery(searchContext);
    return closure_1_2.getMessages(searchContext(tab[3]).getSearchTabFetchId(searchContext, tab, searchResultsQuery));
  }, items1);
};
