// Module ID: 16011
// Function ID: 16012
// Name: useSearchMessages
// Dependencies: [4976, 11559, 589, 11560, 2]
// Exports: useSearchMessages

// Module 16011 (useSearchMessages)
import closure_2 from "handleReaction" /* 4976 */;
import closure_3 from "prototype" /* 11559 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/search/native/components/tabs/hooks/useSearchMessages.tsx");

export const useSearchMessages = function useSearchMessages(searchContext, tab) {
  const _require = searchContext;
  dependencyMap = tab;
  const items = [closure_3, closure_2];
  const items1 = [searchContext, tab];
  return _require(589).useStateFromStores(items, () => {
    const searchResultsQuery = closure_1_3.getSearchResultsQuery(searchContext);
    return closure_1_2.getMessages(searchContext(tab[3]).getSearchTabFetchId(searchContext, tab, searchResultsQuery));
  }, items1);
};
