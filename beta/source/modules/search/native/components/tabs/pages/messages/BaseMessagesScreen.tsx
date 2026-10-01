// Module ID: 16527
// Function ID: 16528
// Name: BaseMessagesScreen
// Dependencies: [19, 6699, 11822, 7302, 21, 11841, 504, 11823, 16516, 16528, 11821, 16529, 16530, 11849, 16454, 16466, 2]
// Exports: default, trackMessageItemPress

// Module 16527 (BaseMessagesScreen)
import Fragment from "Fragment" /* 21 */;
import TrackingConstants from "TrackingConstants" /* 7302 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 11821 */;
import SearchUtils from "SearchUtils" /* 11823 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 11841 */;
import SearchHistoricalIndexingHeaderDefault from "SearchHistoricalIndexingHeader" /* 16529 */;
import react from "react" /* 19 */;
import SearchMessageStore from "SearchMessageStore" /* 6699 */;
import SearchQueryStore from "SearchQueryStore" /* 11822 */;
import size from "module_2" /* 2 */;

const constants = TrackingConstants.SearchResultContentEntityTypes;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/BaseMessagesScreen.tsx");

export default function BaseMessagesScreen(tab) {
  let ItemSeparatorComponent;
  let contentContainerStyle;
  let data;
  let errorText;
  let intelligenceStatus;
  let isErrorFullscreen;
  let isFirstPageLoading;
  let isNextPageLoading;
  let keywordResultCount;
  let numColumns;
  let searchContext;
  ({ data, searchContext } = tab);
  tab = tab.tab;
  const isFocused = tab.isFocused;
  ({ isFirstPageLoading, keywordResultCount, intelligenceStatus } = tab);
  ({ isNextPageLoading, contentContainerStyle, ItemSeparatorComponent, numColumns } = tab);
  if (intelligenceStatus === undefined) {
    intelligenceStatus = null;
  }
  isFirstPageLoading = undefined;
  keywordResultCount = undefined;
  let isHistoricalIndexing;
  let documentsIndexed;
  let hasError;
  let isErrorToast;
  let showErrorToast;
  let searchFetchPendingManager;
  if (!isFirstPageLoading) {
    isFirstPageLoading = isNextPageLoading;
  }
  if (keywordResultCount == null) {
    keywordResultCount = data.length;
  }
  let tmp = searchContext;
  let obj = searchContext(isFocused[6]);
  const items = [isHistoricalIndexing, keywordResultCount];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
    const obj = SearchUtils;
    const searchTabFetchId = obj.getSearchTabFetchId(searchContext, tab, searchResultsQuery);
    const obj2 = { isIndexing: SearchMessageStore.getIsIndexing(searchTabFetchId), isHistoricalIndexing: SearchMessageStore.getIsHistoricalIndexing(searchTabFetchId), documentsIndexed: SearchMessageStore.getDocumentsIndexed(searchTabFetchId) };
    return obj2;
  });
  isHistoricalIndexing = stateFromStoresObject.isHistoricalIndexing;
  documentsIndexed = stateFromStoresObject.documentsIndexed;
  const isIndexing = stateFromStoresObject.isIndexing;
  let obj2 = searchContext(isFocused[8]);
  const obj3 = { searchContext, tab, hasListItems: keywordResultCount > 0 };
  const messageSearchErrorScreen = obj2.useMessageSearchErrorScreen(obj3);
  hasError = messageSearchErrorScreen.hasError;
  isErrorToast = messageSearchErrorScreen.isErrorToast;
  showErrorToast = messageSearchErrorScreen.showErrorToast;
  ({ errorText, isErrorFullscreen } = messageSearchErrorScreen);
  const obj4 = searchContext(isFocused[9]);
  searchFetchPendingManager = obj4.useSearchFetchPendingManager(searchContext);
  const items1 = [keywordResultCount, isFirstPageLoading, isFocused, hasError, searchContext, tab, searchFetchPendingManager];
  const items2 = [isFocused, isFirstPageLoading, searchContext, searchFetchPendingManager, tab];
  const callback = isFirstPageLoading.useCallback(() => {
    if (0 !== keywordResultCount) {
      const tmp17 = isFirstPageLoading;
      if (tmp17) {
        searchFetchPendingManager.add(tab);
      } else {
        const tmp = isFocused;
        if (tmp) {
          const tmp5 = hasError;
          if (tmp5) {
            searchFetchPendingManager.add(tab);
          } else {
            const obj = SearchPlatformUtilsDefault;
            const nextMessages = obj.fetchNextMessages(searchContext, tab);
          }
        } else {
          searchFetchPendingManager.add(tab);
        }
      }
    }
  }, items1);
  const effect = isFirstPageLoading.useEffect(() => {
    const tmp = isFocused && !isFirstPageLoading;
    if (tmp) {
      searchFetchPendingManager.flush(searchContext, tab);
    }
  }, items2);
  const items3 = [isErrorToast, isFirstPageLoading, isFocused, showErrorToast];
  const effect1 = isFirstPageLoading.useEffect(() => {
    const tmp = isErrorToast && !isFirstPageLoading && isFocused;
    if (tmp) {
      showErrorToast();
    }
  }, items3);
  const items4 = [documentsIndexed, isHistoricalIndexing, searchContext, tab];
  if (isIndexing) {
    const obj5 = { searchContext };
    return hasError(tab(isFocused[12]), obj5);
  } else {
    const tmpResult = tmp(isFocused[13]);
    if (isErrorFullscreen) {
      if (!isFirstPageLoading) {
        let tmp12;
        if (!tmpResult.isIntelligenceSearchActive(intelligenceStatus)) {
          const obj6 = { text: errorText };
          tmp12 = hasError(tab(tmp2[14]), obj6);
        }
        return tmp12;
      }
    }
    const obj7 = { contentContainerStyle, data, onEndReached: callback, ListHeaderComponent: tmp9, ItemSeparatorComponent, numColumns };
    tmp12 = hasError(tab(tmp2[15]), obj7);
  }
};
export const trackMessageItemPress = function trackMessageItemPress(messageId) {
  let channelId;
  let id;
  let index;
  let searchContext;
  messageId = messageId.messageId;
  ({ searchContext, channelId, index } = messageId);
  const message = SearchMessageStore.getMessage(messageId);
  const obj = { searchContext, channelId, messageId, userId: id, index, entityType: constants.MESSAGE };
  id = undefined;
  const trackSearchResultClicked = search_tracking_TrackingDefault.trackSearchResultClicked;
  if (message != null) {
    const author = message.author;
    if (author != null) {
      id = author.id;
    }
  }
  const result = trackSearchResultClicked(obj);
};
