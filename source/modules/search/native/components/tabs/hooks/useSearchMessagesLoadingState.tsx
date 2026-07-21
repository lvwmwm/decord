// Module ID: 15261
// Function ID: 115222
// Name: useSearchMessagesLoadingState
// Dependencies: []
// Exports: useSearchMessagesLoadingState

// Module 15261 (useSearchMessagesLoadingState)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = arg1(dependencyMap[2]).SEARCH_TABS_TO_SEARCH_QUERY_LIMITS;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/search/native/components/tabs/hooks/useSearchMessagesLoadingState.tsx");

export const useSearchMessagesLoadingState = function useSearchMessagesLoadingState(arg0) {
  let numColumns;
  let placeholderHeight;
  ({ searchContext: closure_0, tab: closure_1 } = arg0);
  ({ placeholderHeight, numColumns } = arg0);
  let closure_2 = arg1(dependencyMap[3]).useFullscreenPlaceholderCount({ placeholderHeight, numColumns });
  const obj = arg1(dependencyMap[3]);
  const items = [closure_3, closure_2];
  return arg1(dependencyMap[4]).useStateFromStoresObject(items, () => {
    const searchResultsQuery = searchResultsQuery.getSearchResultsQuery(callback);
    let obj = callback(closure_1[5]);
    const searchTabFetchId = obj.getSearchTabFetchId(callback, closure_1, searchResultsQuery);
    const isInitialFetchComplete = store.getIsInitialFetchComplete(searchTabFetchId);
    let isFetching = !tmp4;
    if (!!isInitialFetchComplete) {
      isFetching = store.getIsFetching(searchTabFetchId);
    }
    obj = { isFirstPageLoading: tmp4, isNextPageLoading: isFetching };
    if (!isInitialFetchComplete) {
      let num = Math.max(store, closure_4[closure_1]);
    } else {
      num = 0;
    }
    obj.placeholderCount = num;
    return obj;
  });
};
