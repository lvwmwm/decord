// Module ID: 15259
// Function ID: 115191
// Name: BaseMessagesScreen
// Dependencies: []
// Exports: default, trackMessageItemPress

// Module 15259 (BaseMessagesScreen)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).SearchResultContentEntityTypes;
const jsx = arg1(dependencyMap[4]).jsx;
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/search/native/components/tabs/pages/messages/BaseMessagesScreen.tsx");

export default function BaseMessagesScreen(data) {
  let ItemSeparatorComponent;
  let contentContainerStyle;
  let errorText;
  let isErrorFullscreen;
  let numColumns;
  data = data.data;
  const arg1 = data;
  const searchContext = data.searchContext;
  const importDefault = searchContext;
  const tab = data.tab;
  const dependencyMap = tab;
  const isFocused = data.isFocused;
  const React = isFocused;
  let isNextPageLoading = data.isFirstPageLoading;
  let closure_4;
  let closure_5;
  let closure_6;
  let jsx;
  let isErrorToast;
  let showErrorToast;
  let searchFetchPendingManager;
  ({ contentContainerStyle, ItemSeparatorComponent, numColumns } = data);
  if (!isNextPageLoading) {
    isNextPageLoading = data.isNextPageLoading;
  }
  closure_4 = isNextPageLoading;
  let obj = arg1(dependencyMap[6]);
  const items = [closure_5, closure_4];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let obj = data(tab[7]);
    const searchTabFetchId = obj.getSearchTabFetchId(searchContext, tab, isHistoricalIndexing.getSearchResultsQuery(searchContext));
    obj = { isIndexing: isNextPageLoading.getIsIndexing(searchTabFetchId), isHistoricalIndexing: isNextPageLoading.getIsHistoricalIndexing(searchTabFetchId), documentsIndexed: isNextPageLoading.getDocumentsIndexed(searchTabFetchId) };
    return obj;
  });
  const isHistoricalIndexing = stateFromStoresObject.isHistoricalIndexing;
  closure_5 = isHistoricalIndexing;
  const documentsIndexed = stateFromStoresObject.documentsIndexed;
  closure_6 = documentsIndexed;
  let obj1 = arg1(dependencyMap[8]);
  obj = { searchContext, tab, hasListItems: data.length > 0 };
  const messageSearchErrorScreen = obj1.useMessageSearchErrorScreen(obj);
  const hasError = messageSearchErrorScreen.hasError;
  jsx = hasError;
  isErrorToast = messageSearchErrorScreen.isErrorToast;
  showErrorToast = messageSearchErrorScreen.showErrorToast;
  ({ errorText, isErrorFullscreen } = messageSearchErrorScreen);
  searchFetchPendingManager = arg1(dependencyMap[9]).useSearchFetchPendingManager(searchContext);
  const items1 = [data.length, isNextPageLoading, isFocused, hasError, searchContext, tab, searchFetchPendingManager];
  const items2 = [isFocused, isNextPageLoading, searchContext, searchFetchPendingManager, tab];
  const callback = React.useCallback(() => {
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
  const effect = React.useEffect(() => {
    let tmp = isFocused;
    if (isFocused) {
      tmp = !isNextPageLoading;
    }
    if (tmp) {
      searchFetchPendingManager.flush(searchContext, tab);
    }
  }, items2);
  const items3 = [isErrorToast, isNextPageLoading, isFocused, showErrorToast];
  const effect1 = React.useEffect(() => {
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
    let tmp11 = jsx(importDefault(dependencyMap[12]), obj);
  } else {
    if (isErrorFullscreen) {
      if (!isNextPageLoading) {
        obj1 = { text: errorText };
        tmp11 = jsx(importDefault(dependencyMap[13]), obj1);
      }
    }
    const obj2 = { contentContainerStyle, data, onEndReached: callback, ListHeaderComponent: tmp7, ItemSeparatorComponent, numColumns };
    tmp11 = jsx(importDefault(dependencyMap[14]), obj2);
  }
  return tmp11;
};
export const trackMessageItemPress = function trackMessageItemPress(messageId) {
  let channelId;
  let index;
  let searchContext;
  messageId = messageId.messageId;
  ({ searchContext, channelId, index } = messageId);
  const message = message.getMessage(messageId);
  let obj = importDefault(dependencyMap[5]);
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
