// Module ID: 15433
// Function ID: 117761
// Name: useSearchMessagesLoadingState
// Dependencies: [5660, 10109, 9141, 15387, 566, 10110, 2]
// Exports: useSearchMessagesLoadingState

// Module 15433 (useSearchMessagesLoadingState)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import { SEARCH_TABS_TO_SEARCH_QUERY_LIMITS as closure_4 } from "SearchAutocompleteSelectAnalyticsActions";

const require = arg1;
const result = require("SearchAutocompleteSelectAnalyticsActions").fileFinishedImporting("modules/search/native/components/tabs/hooks/useSearchMessagesLoadingState.tsx");

export const useSearchMessagesLoadingState = function useSearchMessagesLoadingState(arg0) {
  let dependencyMap;
  let numColumns;
  let placeholderHeight;
  let require;
  ({ searchContext: require, tab: dependencyMap } = arg0);
  ({ placeholderHeight, numColumns } = arg0);
  let _isNativeReflectConstruct = require(15387) /* useFullscreenPlaceholderCount */.useFullscreenPlaceholderCount({ placeholderHeight, numColumns });
  let obj = require(15387) /* useFullscreenPlaceholderCount */;
  const items = [closure_3, _isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStoresObject(items, () => {
    let obj = outer1_0(outer1_1[5]);
    const searchTabFetchId = obj.getSearchTabFetchId(closure_0, closure_1, outer1_3.getSearchResultsQuery(closure_0));
    const isInitialFetchComplete = store.getIsInitialFetchComplete(searchTabFetchId);
    let isFetching = !tmp4;
    if (!!isInitialFetchComplete) {
      isFetching = store.getIsFetching(searchTabFetchId);
    }
    obj = { isFirstPageLoading: tmp4, isNextPageLoading: isFetching };
    if (!isInitialFetchComplete) {
      let num = Math.max(store, outer1_4[closure_1]);
    } else {
      num = 0;
    }
    obj.placeholderCount = num;
    return obj;
  });
};
