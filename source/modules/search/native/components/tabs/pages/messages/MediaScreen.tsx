// Module ID: 15256
// Function ID: 115174
// Dependencies: []

// Module 15256
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ SearchListItemTypes: closure_6, MEDIA_NUM_COLUMNS: closure_7, MEDIA_ITEM_GAP_WIDTH: closure_8, SearchMediaTypes: closure_9 } = arg1(dependencyMap[3]));
const EMPTY_MEDIA_RESULTS = arg1(dependencyMap[4]).EMPTY_MEDIA_RESULTS;
const MEDIA_MODAL_KEY = arg1(dependencyMap[5]).MEDIA_MODAL_KEY;
const jsx = arg1(dependencyMap[6]).jsx;
const tmp2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(function MediaScreen(searchContext) {
  let isFirstPageLoading;
  let isFocused;
  let isNextPageLoading;
  let width;
  searchContext = searchContext.searchContext;
  const arg1 = searchContext;
  const tab = searchContext.tab;
  const importDefault = tab;
  ({ isFocused, width } = searchContext);
  let obj = arg1(dependencyMap[7]);
  const contentContainerStyles = obj.useContentContainerStyles();
  const tmp2 = importDefault(dependencyMap[8])(width);
  const dependencyMap = tmp2;
  const searchMessages = arg1(dependencyMap[9]).useSearchMessages(searchContext, tab);
  const obj2 = arg1(dependencyMap[9]);
  obj = { searchContext, tab, placeholderHeight: tmp2, numColumns: callback1 };
  const searchMessagesLoadingState = arg1(dependencyMap[10]).useSearchMessagesLoadingState(obj);
  const placeholderCount = searchMessagesLoadingState.placeholderCount;
  let closure_4 = placeholderCount;
  const items = [searchMessages, searchContext];
  ({ isFirstPageLoading, isNextPageLoading } = searchMessagesLoadingState);
  const memo = importAllResult.useMemo(() => {
    if (null != searchMessages) {
      let media = searchContext(searchContext[11]).getMedia(searchContext, searchMessages);
      const obj = searchContext(searchContext[11]);
    } else {
      media = closure_10;
    }
    return media;
  }, items);
  let closure_5 = memo;
  const items1 = [searchContext, tab];
  const callback = importAllResult.useCallback(() => {
    const nextMessages = tab(tmp2[11]).fetchNextMessages(searchContext, tab, () => {
      let obj = items(closure_2[12]);
      if (obj.isModalOpen(closure_11)) {
        const searchResultsQuery = searchResultsQuery.getSearchResultsQuery(items);
        const messages = messages.getMessages(items(closure_2[13]).getSearchTabFetchId(items, closure_1, searchResultsQuery));
        if (null != messages) {
          const media = items(closure_2[11]).getMedia(items, messages);
          const items = [];
          const item = media.forEach((type) => {
            let tmp = type.type !== constants.ATTACHMENT;
            if (tmp) {
              tmp = type.type !== constants.EMBED;
            }
            if (tmp) {
              tmp = type.type !== constants.COMPONENT;
            }
            if (!tmp) {
              items.push(type.sources);
            }
          });
          const obj3 = items(closure_2[11]);
          obj = { sources: items };
          const result = items(closure_2[14]).setMediaViewerSources(obj);
          const obj4 = items(closure_2[14]);
        }
        const obj2 = items(closure_2[13]);
      }
    });
  }, items1);
  const obj3 = arg1(dependencyMap[10]);
  const onPressMediaItem = arg1(dependencyMap[15]).useOnPressMediaItem({ searchContext, allMediaResults: memo, onEndReached: callback, onEndReachedThreshold: 500 });
  const items2 = [onPressMediaItem, searchContext, searchMessages];
  const callback1 = importAllResult.useCallback((media, index) => {
    media = media.media;
    const searchContext = media;
    let found;
    if (null != searchMessages) {
      found = searchMessages.find((id) => id.id === media.messageId);
    }
    let obj = searchContext(tmp2[16]);
    if (obj.shouldAgeVerifyForSearchMedia(media, found)) {
      obj = { entryPoint: searchContext(tmp2[18]).AgeVerificationModalEntryPoint.SEARCH_MEDIA_PREVIEW };
      const result = tab(tmp2[17]).showAgeVerificationGetStartedModal(obj);
      const obj4 = tab(tmp2[17]);
    } else {
      obj = { searchContext };
      ({ channelId: obj3.channelId, messageId: obj3.messageId } = media);
      obj.index = index;
      const result1 = searchContext(tmp2[19]).trackMessageItemPress(obj);
      onPressMediaItem(media, media.originView);
      const obj2 = searchContext(tmp2[19]);
    }
  }, items2);
  const items3 = [callback1, memo, tmp2, placeholderCount];
  const memo1 = importAllResult.useMemo(() => {
    let tmp2;
    const items = [];
    const searchContext = items;
    const item = memo.forEach((media, itemIndex) => {
      const items = itemIndex;
      let obj = { type: constants.MEDIA };
      obj = {
        media,
        size: closure_2,
        onPress(arg0) {
          return callback(arg0, arg1);
        }
      };
      obj = { itemIndex, numItems: length.length, numColumns: closure_7, spacing: closure_8 - 2 };
      obj.containerStyle = items(closure_2[11]).getMediaGridItemStyles(obj);
      obj.props = obj;
      items.push(obj);
    });
    if (placeholderCount > 0) {
      let obj = { numColumns: callback1, numResults: items.length, placeholderCount };
      const adjustedPlaceholderCount = searchContext(tmp2[20]).getAdjustedPlaceholderCount(obj);
      for (let num = 0; num < adjustedPlaceholderCount; num = num + 1) {
        obj = {};
        tmp2 = onPressMediaItem;
        obj.type = onPressMediaItem.MEDIA_PLACEHOLDER;
        let _HermesInternal = HermesInternal;
        obj.key = "media-placeholder-" + length + num;
        obj = {};
        let tmp3 = tmp2;
        obj.size = tmp2;
        let tmp4 = searchContext;
        let tmp5 = tmp2;
        let obj3 = searchContext(tmp2[11]);
        let obj1 = { itemIndex: length + num };
        let tmp6 = memo;
        obj1.numItems = memo.length;
        let tmp7 = callback1;
        obj1.numColumns = callback1;
        let tmp8 = closure_8;
        obj1.spacing = closure_8 - 2;
        obj.containerStyle = obj3.getMediaGridItemStyles(obj1);
        obj.props = obj;
        let arr = items.push(obj);
      }
      const obj5 = searchContext(tmp2[20]);
    }
    return items;
  }, items3);
  obj = { data: memo1, searchContext, tab, isFocused, contentContainerStyle: contentContainerStyles.mediaContentContainer };
  const obj5 = arg1(dependencyMap[15]);
  obj.ItemSeparatorComponent = arg1(dependencyMap[21]).MediaVerticalSeparator;
  obj.numColumns = callback1;
  obj.isFirstPageLoading = isFirstPageLoading;
  obj.isNextPageLoading = isNextPageLoading;
  return jsx(importDefault(dependencyMap[19]), obj);
});
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/search/native/components/tabs/pages/messages/MediaScreen.tsx");

export default memoResult;
