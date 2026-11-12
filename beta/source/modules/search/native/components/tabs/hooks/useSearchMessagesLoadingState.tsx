// Module ID: 19176
// Function ID: 19177
// Name: useSearchMessagesLoadingState
// Dependencies: [6951, 14166, 9950, 19107, 504, 14159, 2]
// Exports: useSearchMessagesLoadingState

// Module 19176 (useSearchMessagesLoadingState)
import get_initialized from "get initialized" /* 504 */;
import SearchConstants from "SearchConstants" /* 9950 */;
import SearchUtils from "SearchUtils" /* 14159 */;
import usePlaceholderStyles from "usePlaceholderStyles" /* 19107 */;
import SearchMessageStore from "SearchMessageStore" /* 6951 */;
import SearchQueryStore from "SearchQueryStore" /* 14166 */;
import size from "module_2" /* 2 */;

let closure_4 = SearchConstants.SEARCH_TABS_TO_SEARCH_QUERY_LIMITS;
const result = size.fileFinishedImporting("modules/search/native/components/tabs/hooks/useSearchMessagesLoadingState.tsx");

export function useSearchMessagesLoadingState(arg0) {
  let numColumns;
  let placeholderHeight;
  ({ searchContext: require, tab: dependencyMap } = arg0);
  ({ placeholderHeight, numColumns } = arg0);
  let obj = usePlaceholderStyles;
  let closure_2 = obj.useFullscreenPlaceholderCount({ placeholderHeight, numColumns });
  let obj2 = get_initialized;
  const items = [SearchQueryStore, closure_2];
  return obj2.useStateFromStoresObject(items, () => {
    let num;
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(require);
    const obj = SearchUtils;
    const searchTabFetchId = obj.getSearchTabFetchId(require, dependencyMap, searchResultsQuery);
    const isInitialFetchComplete = SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId);
    let isFetching = !tmp5;
    const tmp2 = dependencyMap;
    if (isInitialFetchComplete) {
      isFetching = SearchMessageStore.getIsFetching(searchTabFetchId);
    }
    const obj2 = { isFirstPageLoading: !isInitialFetchComplete, isNextPageLoading: isFetching, placeholderCount: num };
    if (!isInitialFetchComplete) {
      num = Math.max(closure_2, closure_4[tmp2]);
    } else {
      num = 0;
    }
    return obj2;
  });
}
