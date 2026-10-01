// Module ID: 16516
// Function ID: 16517
// Name: useSearchScreenError
// Dependencies: [19, 6699, 11822, 7303, 504, 11823, 1115, 4528, 8905, 2]
// Exports: useMessageSearchErrorScreen, useMessageTabCountsErrorText

// Module 16516 (useSearchScreenError)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import SearchConstants from "SearchConstants" /* 7303 */;
import AssetRegistryDefault from "AssetRegistry" /* 8905 */;
import SearchUtils from "SearchUtils" /* 11823 */;
import react from "react" /* 19 */;
import SearchMessageStore from "SearchMessageStore" /* 6699 */;
import SearchQueryStore from "SearchQueryStore" /* 11822 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_6 = SearchConstants.SEARCH_MESSAGE_TAB_SENTINEL;
const result = size.fileFinishedImporting("modules/search/native/hooks/useSearchScreenError.tsx");

export const useMessageSearchErrorScreen = function useMessageSearchErrorScreen(arg0) {
  let callback;
  let hasListItems;
  let tmp5;
  ({ searchContext: require, tab: importDefault, hasListItems } = arg0);
  let stateFromStores;
  let ref;
  const tmp = require;
  const tmp2 = stateFromStores;
  let obj = require("get initialized");
  const items = [SearchQueryStore, ref];
  stateFromStores = obj.useStateFromStores(items, () => {
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(require);
    const obj = SearchUtils;
    return SearchMessageStore.getError(obj.getSearchTabFetchId(require, importDefault, searchResultsQuery));
  });
  let anyErrorMessage;
  if (stateFromStores != null) {
    anyErrorMessage = stateFromStores.getAnyErrorMessage();
  }
  if (anyErrorMessage == null) {
    const intl = tmp(tmp2[6]).intl;
    anyErrorMessage = intl.string(tmp(tmp2[6]).t.uvDZBZ);
  }
  ref = anyErrorMessage.useRef(null);
  const items1 = [stateFromStores, anyErrorMessage];
  const obj2 = { hasError: null != stateFromStores, errorText: anyErrorMessage, isErrorFullscreen: tmp5, isErrorToast: null != stateFromStores && hasListItems, showErrorToast: callback };
  tmp5 = null != stateFromStores;
  callback = anyErrorMessage.useCallback(() => {
    if (stateFromStores !== ref.current) {
      const obj = { key: "SEARCH_ERROR_TOAST", icon: AssetRegistryDefault, content: anyErrorMessage };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      open(obj);
      tmp2.current = tmp;
    }
  }, items1);
  if (tmp5) {
    tmp5 = !hasListItems;
  }
  return obj2;
};
export const useMessageTabCountsErrorText = function useMessageTabCountsErrorText(searchContext) {
  searchContext = searchContext.searchContext;
  let obj = searchContext(504);
  const items = [SearchQueryStore, SearchMessageStore];
  return obj.useStateFromStores(items, () => {
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
    const obj = SearchUtils;
    const searchTabFetchId = obj.getSearchTabFetchId(searchContext, closure_6, searchResultsQuery);
    if (SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId)) {
      if (null != SearchMessageStore.getTotalCount(searchTabFetchId)) {
        return null;
      } else {
        const error = obj2.getError(searchTabFetchId);
        let tmp5 = null;
        if (null != error) {
          let anyErrorMessage = error.getAnyErrorMessage();
          if (anyErrorMessage == null) {
            const intl = tmp2(1115).intl;
            anyErrorMessage = intl.string(tmp2(1115).t.uvDZBZ);
          }
          tmp5 = anyErrorMessage;
        }
        return tmp5;
      }
    } else {
      return null;
    }
  });
};
