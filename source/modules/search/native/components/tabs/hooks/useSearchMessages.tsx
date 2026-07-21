// Module ID: 15257
// Function ID: 115185
// Name: useSearchMessages
// Dependencies: []
// Exports: useSearchMessages

// Module 15257 (useSearchMessages)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/search/native/components/tabs/hooks/useSearchMessages.tsx");

export const useSearchMessages = function useSearchMessages(searchContext, tab) {
  tab = searchContext;
  const dependencyMap = tab;
  const items = [closure_3, closure_2];
  const items1 = [searchContext, tab];
  return tab(dependencyMap[2]).useStateFromStores(items, () => {
    const searchResultsQuery = searchResultsQuery.getSearchResultsQuery(arg0);
    return messages.getMessages(arg0(arg1[3]).getSearchTabFetchId(arg0, arg1, searchResultsQuery));
  }, items1);
};
