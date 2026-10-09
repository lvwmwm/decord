// Module ID: 12603
// Function ID: 12604
// Name: useBookmarksPagination
// Dependencies: [19, 9651, 1085, 12602, 558, 576, 504, 12601, 9652, 2]

// Module 12603 (useBookmarksPagination)
import Constants from "Constants" /* 1085 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 9652 */;
import SavedMessagesActions from "SavedMessagesActions" /* 12602 */;
import react from "react" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 9651 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function loadMoreBookmarks() {
  const obj = SavedMessagesActions;
  const bookmarks = obj.fetchBookmarks({ loadMore: true });
}
const NOOP = Constants.NOOP;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useBookmarksPagination(arg0) {
  let closure_0;
  let hasFetched;
  let hasShownBookmarks;
  let tmp5;
  let tmp6;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(15);
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [hasShownBookmarks];
    const fn = function h() {
      let messageBookmarks;
      const obj = { fetchState: hasShownBookmarks.getBookmarksFetchState(), hasFetched: hasShownBookmarks.hasFetchedBookmarks(), isStale: hasShownBookmarks.getIsStale(), hasShownBookmarks: messageBookmarks.some((message) => null != message.message) };
      messageBookmarks = hasShownBookmarks.getMessageBookmarks();
      return obj;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(hasFetched[6]);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp5, tmp6);
  let LOADED_FINISHED = stateFromStoresObject.fetchState;
  hasFetched = stateFromStoresObject.hasFetched;
  const isStale = stateFromStoresObject.isStale;
  hasShownBookmarks = stateFromStoresObject.hasShownBookmarks;
  LOADED_FINISHED(hasFetched[7])(undefined === arg0 || arg0);
  if (cResult[2] === (undefined === arg0 || arg0)) {
    let tmp10;
    let tmp11;
    if (cResult[3] === isStale) {
      tmp10 = cResult[4];
      tmp11 = cResult[5];
    }
    const effect = isStale.useEffect(tmp10, tmp11);
    const obj3 = isStale;
    if (cResult[6] === (undefined === arg0 || arg0)) {
      if (cResult[7] === LOADED_FINISHED) {
        if (cResult[8] === hasFetched) {
          let tmp13;
          let tmp14;
          if (cResult[9] === hasShownBookmarks) {
            tmp13 = cResult[10];
            tmp14 = cResult[11];
          }
          const effect1 = obj3.useEffect(tmp13, tmp14);
          if (!(undefined === arg0 || arg0)) {
            LOADED_FINISHED = tmp(tmp2[8]).BookmarksFetchState.LOADED_FINISHED;
          }
          const tmp16 = undefined === arg0 || arg0 ? loadMoreBookmarks : NOOP;
          class B {
            constructor() {
              const tmp = closure_0 && hasFetched && !hasShownBookmarks && LOADED_FINISHED === SavedMessagesTypes.BookmarksFetchState.LOADED_HAS_MORE;
              if (tmp) {
                const obj = SavedMessagesActions;
                const bookmarks = obj.fetchBookmarks({ loadMore: true });
              }
            }
          }
          const obj2 = { fetchState: LOADED_FINISHED, loadMore: tmp16 };
          cResult[12] = LOADED_FINISHED;
          cResult[13] = tmp16;
          cResult[14] = obj2;
        }
      }
    }
    class B {
      constructor() {
        const tmp = closure_0 && hasFetched && !hasShownBookmarks && LOADED_FINISHED === SavedMessagesTypes.BookmarksFetchState.LOADED_HAS_MORE;
        if (tmp) {
          const obj = SavedMessagesActions;
          const bookmarks = obj.fetchBookmarks({ loadMore: true });
        }
      }
    }
    const items1 = [tmp4, hasFetched, hasShownBookmarks, LOADED_FINISHED];
    cResult[6] = undefined === arg0 || arg0;
    cResult[7] = LOADED_FINISHED;
    cResult[8] = hasFetched;
    cResult[9] = hasShownBookmarks;
    cResult[10] = B;
    cResult[11] = items1;
    tmp14 = items1;
    tmp13 = B;
  }
  const fn2 = function l() {
    const tmp = closure_0 && !isStale;
    if (tmp) {
      const obj = SavedMessagesActions;
      const bookmarks = obj.fetchBookmarks();
    }
  };
  const items2 = [tmp4, isStale];
  cResult[2] = undefined === arg0 || arg0;
  cResult[3] = isStale;
  cResult[4] = fn2;
  cResult[5] = items2;
  tmp11 = items2;
  tmp10 = fn2;
}) : (function useBookmarksPagination() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  let hasFetched;
  let hasShownBookmarks;
  let tmp = flag;
  let obj = flag(hasFetched[6]);
  const items = [hasShownBookmarks];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let messageBookmarks;
    const obj = { fetchState: hasShownBookmarks.getBookmarksFetchState(), hasFetched: hasShownBookmarks.hasFetchedBookmarks(), isStale: hasShownBookmarks.getIsStale(), hasShownBookmarks: messageBookmarks.some((message) => null != message.message) };
    messageBookmarks = hasShownBookmarks.getMessageBookmarks();
    return obj;
  });
  let LOADED_FINISHED = stateFromStoresObject.fetchState;
  const tmp2 = hasFetched;
  hasFetched = stateFromStoresObject.hasFetched;
  const isStale = stateFromStoresObject.isStale;
  hasShownBookmarks = stateFromStoresObject.hasShownBookmarks;
  LOADED_FINISHED(hasFetched[7])(flag);
  const items1 = [flag, isStale];
  const effect = isStale.useEffect(() => {
    const tmp = flag && !isStale;
    if (tmp) {
      const obj = SavedMessagesActions;
      const bookmarks = obj.fetchBookmarks();
    }
  }, items1);
  const items2 = [flag, hasFetched, hasShownBookmarks, LOADED_FINISHED];
  const effect1 = isStale.useEffect(() => {
    const tmp = flag && hasFetched && !hasShownBookmarks && LOADED_FINISHED === SavedMessagesTypes.BookmarksFetchState.LOADED_HAS_MORE;
    if (tmp) {
      const obj = SavedMessagesActions;
      const bookmarks = obj.fetchBookmarks({ loadMore: true });
    }
  }, items2);
  if (!flag) {
    LOADED_FINISHED = tmp(tmp2[8]).BookmarksFetchState.LOADED_FINISHED;
  }
  return { fetchState: LOADED_FINISHED, loadMore: flag ? loadMoreBookmarks : NOOP };
});
const result = size.fileFinishedImporting("modules/saved_messages/useBookmarksPagination.tsx");

export default tmp2;
