// Module ID: 15493
// Function ID: 118080
// Dependencies: [31, 5857, 10081, 9077, 11429, 653, 33, 15489, 15449, 15494, 15495, 11428, 4016, 10082, 8092, 15447, 13831, 6726, 6728, 15496, 15500, 15453, 2]

// Module 15493
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";
import { EMPTY_MEDIA_RESULTS } from "SEARCH_TEXT_INPUT_DEBOUNCE_TIME";
import { MEDIA_MODAL_KEY } from "ME";
import { jsx } from "jsxProd";

let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ SearchListItemTypes: closure_6, MEDIA_NUM_COLUMNS: closure_7, MEDIA_ITEM_GAP_WIDTH: closure_8, SearchMediaTypes: closure_9 } = SearchAutocompleteSelectAnalyticsActions);
const memoResult = importAllResult.memo(function MediaScreen(searchContext) {
  let isFirstPageLoading;
  let isFocused;
  let isNextPageLoading;
  let width;
  searchContext = searchContext.searchContext;
  const tab = searchContext.tab;
  ({ isFocused, width } = searchContext);
  let obj = searchContext(15489);
  const contentContainerStyles = obj.useContentContainerStyles();
  let tmp2 = tab(15449)(width);
  const dependencyMap = tmp2;
  const searchMessages = searchContext(15494).useSearchMessages(searchContext, tab);
  let obj2 = searchContext(15494);
  obj = { searchContext, tab, placeholderHeight: tmp2, numColumns: callback1 };
  const searchMessagesLoadingState = searchContext(15495).useSearchMessagesLoadingState(obj);
  const placeholderCount = searchMessagesLoadingState.placeholderCount;
  let items = [searchMessages, searchContext];
  ({ isFirstPageLoading, isNextPageLoading } = searchMessagesLoadingState);
  const memo = searchMessages.useMemo(() => {
    if (null != searchMessages) {
      let media = searchContext(searchContext[11]).getMedia(searchContext, searchMessages);
      const obj = searchContext(searchContext[11]);
    } else {
      media = outer1_10;
    }
    return media;
  }, items);
  const items1 = [searchContext, tab];
  const callback = searchMessages.useCallback(() => {
    const nextMessages = tab(tmp2[11]).fetchNextMessages(searchContext, tab, () => {
      let obj = searchContext(4016);
      if (obj.isModalOpen(outer2_11)) {
        const searchResultsQuery = memo.getSearchResultsQuery(outer1_0);
        const messages = placeholderCount.getMessages(searchContext(10082).getSearchTabFetchId(outer1_0, outer1_1, searchResultsQuery));
        if (null != messages) {
          const media = searchContext(11428).getMedia(outer1_0, messages);
          const items = [];
          const item = media.forEach((type) => {
            let tmp = type.type !== outer3_9.ATTACHMENT;
            if (tmp) {
              tmp = type.type !== outer3_9.EMBED;
            }
            if (tmp) {
              tmp = type.type !== outer3_9.COMPONENT;
            }
            if (!tmp) {
              items.push(type.sources);
            }
          });
          const obj3 = searchContext(11428);
          obj = { sources: items };
          const result = searchContext(8092).setMediaViewerSources(obj);
          const obj4 = searchContext(8092);
        }
        const obj2 = searchContext(10082);
      }
    });
  }, items1);
  let obj3 = searchContext(15495);
  const onPressMediaItem = searchContext(15447).useOnPressMediaItem({ searchContext, allMediaResults: memo, onEndReached: callback, onEndReachedThreshold: 500 });
  const items2 = [onPressMediaItem, searchContext, searchMessages];
  callback1 = searchMessages.useCallback((media, index) => {
    media = media.media;
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
      obj = { searchContext: media };
      ({ channelId: obj3.channelId, messageId: obj3.messageId } = media);
      obj.index = index;
      const result1 = searchContext(tmp2[19]).trackMessageItemPress(obj);
      onPressMediaItem(media, media.originView);
      const obj2 = searchContext(tmp2[19]);
    }
  }, items2);
  const items3 = [callback1, memo, tmp2, placeholderCount];
  const memo1 = searchMessages.useMemo(() => {
    let tmp2;
    let items = [];
    const item = memo.forEach((media, itemIndex) => {
      const items = itemIndex;
      let obj = { type: onPressMediaItem.MEDIA };
      obj = {
        media,
        size: outer1_2,
        onPress(arg0) {
          return outer2_7(arg0, closure_0);
        }
      };
      obj = { itemIndex, numItems: outer1_5.length, numColumns: callback1, spacing: outer2_8 - 2 };
      obj.containerStyle = searchContext(table[11]).getMediaGridItemStyles(obj);
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
        let tmp8 = outer1_8;
        obj1.spacing = outer1_8 - 2;
        obj.containerStyle = obj3.getMediaGridItemStyles(obj1);
        obj.props = obj;
        let arr = items.push(obj);
      }
      const obj5 = searchContext(tmp2[20]);
    }
    return items;
  }, items3);
  obj = { data: memo1, searchContext, tab, isFocused, contentContainerStyle: contentContainerStyles.mediaContentContainer };
  let obj5 = searchContext(15447);
  obj.ItemSeparatorComponent = searchContext(15453).MediaVerticalSeparator;
  obj.numColumns = callback1;
  obj.isFirstPageLoading = isFirstPageLoading;
  obj.isNextPageLoading = isNextPageLoading;
  return jsx(tab(15496), { data: memo1, searchContext, tab, isFocused, contentContainerStyle: contentContainerStyles.mediaContentContainer });
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/MediaScreen.tsx");

export default memoResult;
