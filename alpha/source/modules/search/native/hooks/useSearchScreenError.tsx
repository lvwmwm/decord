// Module ID: 18721
// Function ID: 18722
// Name: useSearchScreenError
// Dependencies: [19, 6857, 13850, 9806, 504, 13843, 1114, 5707, 2]
// Exports: useMessageSearchErrorScreen, useMessageTabCountsErrorText

// Module 18721 (useSearchScreenError)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import SearchConstants from "SearchConstants" /* 9806 */;
import SearchUtils from "SearchUtils" /* 13843 */;
import react from "react" /* 19 */;
import SearchMessageStore from "SearchMessageStore" /* 6857 */;
import SearchQueryStore from "SearchQueryStore" /* 13850 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_6 = SearchConstants.SEARCH_MESSAGE_TAB_SENTINEL;
const result = size.fileFinishedImporting("modules/search/native/hooks/useSearchScreenError.tsx");

export function useMessageSearchErrorScreen(arg0) {
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
  let obj2 = { hasError: null != stateFromStores, errorText: anyErrorMessage, isErrorFullscreen: tmp5, isErrorToast: null != stateFromStores && hasListItems, showErrorToast: callback };
  tmp5 = null != stateFromStores;
  callback = anyErrorMessage.useCallback(() => {
    if (stateFromStores !== ref.current) {
      const obj2 = { text: anyErrorMessage, variant: "critical" };
      const obj = ToastActionCreatorsDefault;
      obj.open("SEARCH_ERROR_TOAST", obj2);
      tmp2.current = tmp;
    }
  }, items1);
  if (tmp5) {
    tmp5 = !hasListItems;
  }
  return obj2;
}
export function useMessageTabCountsErrorText(searchContext) {
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
            const intl = tmp2(1114).intl;
            anyErrorMessage = intl.string(tmp2(1114).t.uvDZBZ);
          }
          tmp5 = anyErrorMessage;
        }
        return tmp5;
      }
    } else {
      return null;
    }
  });
}
