// Module ID: 17408
// Function ID: 17409
// Name: useSearchMessagesLoadingState
// Dependencies: [6062, 12048, 9312, 558, 576, 17338, 12041, 504, 2]

// Module 17408 (useSearchMessagesLoadingState)
import get_initialized from "get initialized" /* 504 */;
import SearchConstants from "SearchConstants" /* 9312 */;
import SearchUtils from "SearchUtils" /* 12041 */;
import usePlaceholderStyles from "usePlaceholderStyles" /* 17338 */;
import SearchMessageStore from "SearchMessageStore" /* 6062 */;
import SearchQueryStore from "SearchQueryStore" /* 12048 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4 = SearchConstants.SEARCH_TABS_TO_SEARCH_QUERY_LIMITS;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSearchMessagesLoadingState(searchContext) {
  let numColumns;
  let placeholderHeight;
  let tab;
  let tmp2 = tab;
  let obj = searchContext(tab[4]);
  const cResult = obj.c(8);
  searchContext = searchContext.searchContext;
  tab = searchContext.tab;
  ({ placeholderHeight, numColumns } = searchContext);
  if (cResult[0] === numColumns) {
    let tmp4;
    let tmp7;
    if (cResult[1] === placeholderHeight) {
      tmp4 = cResult[2];
    }
    const tmpResult = searchContext(tmp2[5]);
    const fullscreenPlaceholderCount = tmpResult.useFullscreenPlaceholderCount(tmp4);
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [SearchQueryStore, fullscreenPlaceholderCount];
      let num = 3;
      cResult[3] = items;
      tmp7 = items;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] === fullscreenPlaceholderCount) {
      if (cResult[5] === searchContext) {
        let tmp10;
        if (cResult[6] === tab) {
          tmp10 = cResult[7];
        }
        const tmpResult2 = searchContext(tmp2[7]);
        return tmpResult2.useStateFromStoresObject(tmp7, tmp10);
      }
    }
    const fn = function p() {
      let num;
      const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
      const obj = SearchUtils;
      const searchTabFetchId = obj.getSearchTabFetchId(searchContext, tab, searchResultsQuery);
      const isInitialFetchComplete = SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId);
      let isFetching = !tmp5;
      const tmp2 = tab;
      if (isInitialFetchComplete) {
        isFetching = SearchMessageStore.getIsFetching(searchTabFetchId);
      }
      const obj2 = { isFirstPageLoading: !isInitialFetchComplete, isNextPageLoading: isFetching, placeholderCount: num };
      if (!isInitialFetchComplete) {
        num = Math.max(fullscreenPlaceholderCount, closure_4[tmp2]);
      } else {
        num = 0;
      }
      return obj2;
    };
    cResult[4] = fullscreenPlaceholderCount;
    cResult[5] = searchContext;
    cResult[6] = tab;
    cResult[7] = fn;
    tmp10 = fn;
  }
  let obj2 = { placeholderHeight, numColumns };
  cResult[0] = numColumns;
  cResult[1] = placeholderHeight;
  cResult[2] = obj2;
  tmp4 = obj2;
}) : (function useSearchMessagesLoadingState(arg0) {
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
});
const result = size.fileFinishedImporting("modules/search/native/components/tabs/hooks/useSearchMessagesLoadingState.tsx");

export const useSearchMessagesLoadingState = tmp2;
