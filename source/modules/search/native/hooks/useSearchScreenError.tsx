// Module ID: 15425
// Function ID: 117679
// Name: useMessageSearchErrorScreen
// Dependencies: [31, 5660, 10109, 9141, 566, 10110, 1212, 3831, 8524, 2]
// Exports: useMessageSearchErrorScreen, useMessageTabCountsErrorText

// Module 15425 (useMessageSearchErrorScreen)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { SEARCH_MESSAGE_TAB_SENTINEL as closure_6 } from "SearchAutocompleteSelectAnalyticsActions";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/search/native/hooks/useSearchScreenError.tsx");

export const useMessageSearchErrorScreen = function useMessageSearchErrorScreen(arg0) {
  let hasListItems;
  let importDefault;
  let require;
  ({ searchContext: require, tab: importDefault, hasListItems } = arg0);
  let anyErrorMessage;
  let _isNativeReflectConstruct;
  let obj = require(stateFromStores[4]);
  const items = [closure_5, _isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => {
    const searchResultsQuery = outer1_5.getSearchResultsQuery(closure_0);
    return ref.getError(outer1_0(stateFromStores[5]).getSearchTabFetchId(closure_0, closure_1, searchResultsQuery));
  });
  anyErrorMessage = undefined;
  if (null != stateFromStores) {
    anyErrorMessage = stateFromStores.getAnyErrorMessage();
  }
  if (null == anyErrorMessage) {
    const intl = require(stateFromStores[6]).intl;
    anyErrorMessage = intl.string(require(stateFromStores[6]).t.uvDZBZ);
  }
  _isNativeReflectConstruct = anyErrorMessage.useRef(null);
  const items1 = [stateFromStores, anyErrorMessage];
  obj = { hasError: null != stateFromStores, errorText: anyErrorMessage };
  let tmp5 = null != stateFromStores;
  const callback = anyErrorMessage.useCallback(() => {
    if (stateFromStores !== ref.current) {
      let obj = outer1_1(stateFromStores[7]);
      obj = { key: "SEARCH_ERROR_TOAST", icon: outer1_1(stateFromStores[8]), content: anyErrorMessage };
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
  searchContext = searchContext.searchContext;
  const items = [closure_5, _isNativeReflectConstruct];
  return searchContext(566).useStateFromStores(items, () => {
    const searchResultsQuery = outer1_5.getSearchResultsQuery(searchContext);
    const searchTabFetchId = searchContext(outer1_2[5]).getSearchTabFetchId(searchContext, outer1_6, searchResultsQuery);
    if (outer1_4.getIsInitialFetchComplete(searchTabFetchId)) {
      if (null != outer1_4.getTotalCount(searchTabFetchId)) {
        return null;
      } else {
        const error = outer1_4.getError(searchTabFetchId);
        let tmp5 = null;
        if (null != error) {
          let anyErrorMessage = error.getAnyErrorMessage();
          if (null == anyErrorMessage) {
            const intl = searchContext(outer1_2[6]).intl;
            anyErrorMessage = intl.string(searchContext(outer1_2[6]).t.uvDZBZ);
          }
          tmp5 = anyErrorMessage;
        }
        return tmp5;
      }
    } else {
      return null;
    }
    const obj = searchContext(outer1_2[5]);
  });
};
