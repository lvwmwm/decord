// Module ID: 16617
// Function ID: 16618
// Name: useSearchMessagesLoadingState
// Dependencies: [7221, 12271, 7810, 16569, 586, 12272, 2]
// Exports: useSearchMessagesLoadingState

// Module 16617 (useSearchMessagesLoadingState)
import initialize from "initialize" /* 586 */;
import useFullscreenPlaceholderCount from "useFullscreenPlaceholderCount" /* 16569 */;
import closure_2 from "handleReaction" /* 7221 */;
import closure_3 from "prototype" /* 12271 */;
import { SEARCH_TABS_TO_SEARCH_QUERY_LIMITS as closure_4 } from "MessageEmbedTypes" /* 7810 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/search/native/components/tabs/hooks/useSearchMessagesLoadingState.tsx");

export const useSearchMessagesLoadingState = function useSearchMessagesLoadingState(arg0) {
  ({ searchContext: require, tab: dependencyMap } = arg0);
  closure_2 = undefined;
  ({ placeholderHeight, numColumns } = arg0);
  closure_2 = useFullscreenPlaceholderCount.useFullscreenPlaceholderCount({ placeholderHeight, numColumns });
  let obj = useFullscreenPlaceholderCount;
  const items = [closure_3, closure_2];
  return initialize.useStateFromStoresObject(items, () => {
    let obj = closure_1_0(closure_1_1[5]);
    const searchTabFetchId = obj.getSearchTabFetchId(closure_0, closure_1, closure_1_3.getSearchResultsQuery(closure_0));
    const isInitialFetchComplete = store.getIsInitialFetchComplete(searchTabFetchId);
    let isFetching = !tmp5;
    if (isInitialFetchComplete) {
      isFetching = store.getIsFetching(searchTabFetchId);
    }
    obj = { isFirstPageLoading: tmp5, isNextPageLoading: isFetching, placeholderCount: null };
    if (!isInitialFetchComplete) {
      let num = Math.max(store, closure_1_4[tmp2]);
    } else {
      num = 0;
    }
    obj[2] = num;
    return obj;
  });
};
