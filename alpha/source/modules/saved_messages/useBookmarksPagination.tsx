// Module ID: 11138
// Function ID: 11139
// Name: useBookmarksPagination
// Dependencies: [19, 10171, 1072, 11137, 504, 11136, 10172, 2]
// Exports: default

// Module 11138 (useBookmarksPagination)
import Constants from "Constants" /* 1072 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 10172 */;
import SavedMessagesActions from "SavedMessagesActions" /* 11137 */;
import react from "react" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 10171 */;
import size from "module_2" /* 2 */;

function loadMoreBookmarks() {
  const obj = SavedMessagesActions;
  const bookmarks = obj.fetchBookmarks({ loadMore: true });
}
const NOOP = Constants.NOOP;
const result = size.fileFinishedImporting("modules/saved_messages/useBookmarksPagination.tsx");

export default function useBookmarksPagination() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  let hasFetched;
  let hasShownBookmarks;
  let tmp = flag;
  let obj = flag(hasFetched[4]);
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
  LOADED_FINISHED(hasFetched[5])(flag);
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
    LOADED_FINISHED = tmp(tmp2[6]).BookmarksFetchState.LOADED_FINISHED;
  }
  return { fetchState: LOADED_FINISHED, loadMore: flag ? loadMoreBookmarks : NOOP };
};
