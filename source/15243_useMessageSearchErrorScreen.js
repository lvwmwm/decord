// Module ID: 15243
// Function ID: 115082
// Name: useMessageSearchErrorScreen
// Dependencies: []
// Exports: useMessageSearchErrorScreen, useMessageTabCountsErrorText

// Module 15243 (useMessageSearchErrorScreen)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).SEARCH_MESSAGE_TAB_SENTINEL;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/search/native/hooks/useSearchScreenError.tsx");

export const useMessageSearchErrorScreen = function useMessageSearchErrorScreen(arg0) {
  let hasListItems;
  ({ searchContext: closure_0, tab: closure_1, hasListItems } = arg0);
  let React;
  let closure_4;
  let obj = arg1(dependencyMap[4]);
  const items = [closure_5, closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const searchResultsQuery = searchResultsQuery.getSearchResultsQuery(callback);
    return ref.getError(callback(stateFromStores[5]).getSearchTabFetchId(callback, closure_1, searchResultsQuery));
  });
  const dependencyMap = stateFromStores;
  let anyErrorMessage;
  if (null != stateFromStores) {
    anyErrorMessage = stateFromStores.getAnyErrorMessage();
  }
  if (null == anyErrorMessage) {
    const intl = arg1(dependencyMap[6]).intl;
    anyErrorMessage = intl.string(arg1(dependencyMap[6]).t.uvDZBZ);
  }
  React = anyErrorMessage;
  closure_4 = React.useRef(null);
  const items1 = [stateFromStores, anyErrorMessage];
  obj = { hasError: null != stateFromStores, errorText: anyErrorMessage };
  let tmp5 = null != stateFromStores;
  const callback = React.useCallback(() => {
    if (stateFromStores !== ref.current) {
      let obj = callback2(stateFromStores[7]);
      obj = { key: "SEARCH_ERROR_TOAST", icon: callback2(stateFromStores[8]), content: anyErrorMessage };
      obj.open(obj);
      ref.current = stateFromStores;
    }
  }, items1);
  if (tmp5) {
    tmp5 = !hasListItems;
  }
  obj.isErrorFullscreen = tmp5;
  obj.isErrorToast = null != stateFromStores && hasListItems;
  obj.showErrorToast = callback;
  return obj;
};
export const useMessageTabCountsErrorText = function useMessageTabCountsErrorText(searchContext) {
  const arg1 = searchContext.searchContext;
  const items = [closure_5, closure_4];
  return arg1(dependencyMap[4]).useStateFromStores(items, () => {
    const searchResultsQuery = searchResultsQuery.getSearchResultsQuery(searchContext);
    const searchTabFetchId = searchContext(closure_2[5]).getSearchTabFetchId(searchContext, closure_6, searchResultsQuery);
    if (store.getIsInitialFetchComplete(searchTabFetchId)) {
      if (null != store.getTotalCount(searchTabFetchId)) {
        return null;
      } else {
        const error = store.getError(searchTabFetchId);
        let tmp5 = null;
        if (null != error) {
          let anyErrorMessage = error.getAnyErrorMessage();
          if (null == anyErrorMessage) {
            const intl = searchContext(closure_2[6]).intl;
            anyErrorMessage = intl.string(searchContext(closure_2[6]).t.uvDZBZ);
          }
          tmp5 = anyErrorMessage;
        }
        return tmp5;
      }
    } else {
      return null;
    }
    const obj = searchContext(closure_2[5]);
  });
};
