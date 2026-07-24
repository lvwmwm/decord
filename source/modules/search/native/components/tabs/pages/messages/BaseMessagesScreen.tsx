// Module ID: 15434
// Function ID: 117764
// Name: BaseMessagesScreen
// Dependencies: [31, 5660, 10109, 9169, 33, 10108, 566, 10110, 15425, 15435, 11426, 15436, 15437, 15380, 15391, 2]
// Exports: default, trackMessageItemPress

// Module 15434 (BaseMessagesScreen)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { SearchResultContentEntityTypes as closure_6 } from "SearchEntrypointAnalyticsLocations";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/BaseMessagesScreen.tsx");

export default function BaseMessagesScreen(data) {
  let ItemSeparatorComponent;
  let contentContainerStyle;
  let errorText;
  let isErrorFullscreen;
  let numColumns;
  data = data.data;
  const searchContext = data.searchContext;
  const tab = data.tab;
  const isFocused = data.isFocused;
  let isNextPageLoading = data.isFirstPageLoading;
  isNextPageLoading = undefined;
  let isHistoricalIndexing;
  let documentsIndexed;
  let hasError;
  let isErrorToast;
  let showErrorToast;
  let searchFetchPendingManager;
  ({ contentContainerStyle, ItemSeparatorComponent, numColumns } = data);
  if (!isNextPageLoading) {
    isNextPageLoading = data.isNextPageLoading;
  }
  let obj = data(tab[6]);
  const items = [isHistoricalIndexing, isNextPageLoading];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let obj = data(tab[7]);
    const searchTabFetchId = obj.getSearchTabFetchId(searchContext, tab, isHistoricalIndexing.getSearchResultsQuery(searchContext));
    obj = { isIndexing: isNextPageLoading.getIsIndexing(searchTabFetchId), isHistoricalIndexing: isNextPageLoading.getIsHistoricalIndexing(searchTabFetchId), documentsIndexed: isNextPageLoading.getDocumentsIndexed(searchTabFetchId) };
    return obj;
  });
  isHistoricalIndexing = stateFromStoresObject.isHistoricalIndexing;
  documentsIndexed = stateFromStoresObject.documentsIndexed;
  let obj1 = data(tab[8]);
  obj = { searchContext, tab, hasListItems: data.length > 0 };
  const messageSearchErrorScreen = obj1.useMessageSearchErrorScreen(obj);
  hasError = messageSearchErrorScreen.hasError;
  isErrorToast = messageSearchErrorScreen.isErrorToast;
  showErrorToast = messageSearchErrorScreen.showErrorToast;
  ({ errorText, isErrorFullscreen } = messageSearchErrorScreen);
  searchFetchPendingManager = data(tab[9]).useSearchFetchPendingManager(searchContext);
  const items1 = [data.length, isNextPageLoading, isFocused, hasError, searchContext, tab, searchFetchPendingManager];
  const items2 = [isFocused, isNextPageLoading, searchContext, searchFetchPendingManager, tab];
  const callback = isFocused.useCallback(() => {
    if (0 !== data.length) {
      if (isNextPageLoading) {
        searchFetchPendingManager.add(tab);
      } else if (isFocused) {
        if (hasError) {
          searchFetchPendingManager.add(tab);
        } else {
          const nextMessages = searchContext(tab[10]).fetchNextMessages(searchContext, tab);
          const obj = searchContext(tab[10]);
        }
      } else {
        searchFetchPendingManager.add(tab);
      }
    }
  }, items1);
  const effect = isFocused.useEffect(() => {
    let tmp = isFocused;
    if (isFocused) {
      tmp = !isNextPageLoading;
    }
    if (tmp) {
      searchFetchPendingManager.flush(searchContext, tab);
    }
  }, items2);
  const items3 = [isErrorToast, isNextPageLoading, isFocused, showErrorToast];
  const effect1 = isFocused.useEffect(() => {
    let tmp = isErrorToast;
    if (isErrorToast) {
      tmp = !isNextPageLoading;
    }
    if (tmp) {
      tmp = isFocused;
    }
    if (tmp) {
      showErrorToast();
    }
  }, items3);
  const items4 = [documentsIndexed, isHistoricalIndexing, searchContext, tab];
  if (stateFromStoresObject.isIndexing) {
    obj = { searchContext };
    let tmp11 = hasError(searchContext(tab[12]), obj);
  } else {
    if (isErrorFullscreen) {
      if (!isNextPageLoading) {
        obj1 = { text: errorText };
        tmp11 = hasError(searchContext(tab[13]), obj1);
      }
    }
    const obj2 = { contentContainerStyle, data, onEndReached: callback, ListHeaderComponent: tmp7, ItemSeparatorComponent, numColumns };
    tmp11 = hasError(searchContext(tab[14]), obj2);
  }
  return tmp11;
};
export const trackMessageItemPress = function trackMessageItemPress(messageId) {
  let channelId;
  let index;
  let searchContext;
  messageId = messageId.messageId;
  ({ searchContext, channelId, index } = messageId);
  message = message.getMessage(messageId);
  let obj = importDefault(10108);
  obj = { searchContext, channelId, messageId };
  let id;
  if (null != message) {
    const author = message.author;
    if (null != author) {
      id = author.id;
    }
  }
  obj.userId = id;
  obj.index = index;
  obj.entityType = constants.MESSAGE;
  const result = obj.trackSearchResultClicked(obj);
};
