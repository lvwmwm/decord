// Module ID: 17334
// Function ID: 17335
// Name: MediaScreen
// Dependencies: [19, 5952, 2064, 6069, 12004, 9285, 12006, 1085, 21, 17328, 17265, 17335, 504, 17336, 11990, 4937, 11997, 8371, 17262, 15023, 7497, 5916, 17337, 17341, 17269, 2]

// Module 17334 (MediaScreen)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 5916 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7497 */;
import SearchPlatformUtils from "SearchPlatformUtils" /* 11990 */;
import SearchPlatformConstants from "SearchPlatformConstants" /* 12006 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 15023 */;
import BaseMessagesScreen from "BaseMessagesScreen" /* 17337 */;
import react from "react" /* 19 */;
import ChannelSpoilerAgreeStore from "ChannelSpoilerAgreeStore" /* 5952 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import SearchMessageStore from "SearchMessageStore" /* 6069 */;
import SearchQueryStore from "SearchQueryStore" /* 12004 */;
import SearchConstants from "SearchConstants" /* 9285 */;
import size from "module_2" /* 2 */;

const SearchPlatformUtilsDefault = SearchPlatformUtils;
let channel, dependencyMap;

let c10;
let c9;
let metroImportAll;
let unpackModuleId;
({ SearchListItemTypes: metroImportAll, MEDIA_NUM_COLUMNS: c9, MEDIA_ITEM_GAP_WIDTH: c10, SearchMediaTypes: unpackModuleId } = SearchConstants);
const EMPTY_MEDIA_RESULTS = SearchPlatformConstants.EMPTY_MEDIA_RESULTS;
const MEDIA_MODAL_KEY = Constants.MEDIA_MODAL_KEY;
const jsx = Fragment.jsx;
let closure_15 = [];
const memoResult = react.memo(function MediaScreen(searchContext) {
  let isFirstPageLoading;
  let isFocused;
  let isNextPageLoading;
  let width;
  searchContext = searchContext.searchContext;
  const tab = searchContext.tab;
  let placeholderCount;
  let memo;
  ({ isFocused, width } = searchContext);
  let obj = searchContext(17328);
  const contentContainerStyles = obj.useContentContainerStyles();
  let tmp2 = tab(17265)(width);
  dependencyMap = tmp2;
  let obj2 = searchContext(17335);
  const searchMessages = obj2.useSearchMessages(searchContext, tab);
  let obj3 = searchContext(504);
  let items = [placeholderCount, memo];
  const items1 = [searchMessages];
  const stateFromStoresArray = obj3.useStateFromStoresArray(items, () => {
    let found;
    const arr = searchMessages;
    if (searchMessages != null) {
      const mapped = arr.map((channel_id) => {
        channel = channel.getChannel(channel_id.channel_id);
        let isSpoilerChannelResult;
        if (channel != null) {
          isSpoilerChannelResult = channel.isSpoilerChannel();
        }
        let id = null;
        if (isSpoilerChannelResult) {
          id = null;
          if (!placeholderCount.didAgree(channel.id)) {
            id = channel.id;
          }
        }
        return id;
      });
      found = mapped.filter((item) => null != item);
    }
    if (found == null) {
      found = closure_15;
    }
    return found;
  }, items1);
  let obj4 = searchContext(17336);
  let obj5 = { searchContext, tab, placeholderHeight: tmp2, numColumns };
  const searchMessagesLoadingState = obj4.useSearchMessagesLoadingState(obj5);
  placeholderCount = searchMessagesLoadingState.placeholderCount;
  const items2 = [searchMessages, searchContext, stateFromStoresArray];
  ({ isFirstPageLoading, isNextPageLoading } = searchMessagesLoadingState);
  memo = searchMessages.useMemo(() => {
    let media;
    if (null != searchMessages) {
      const obj = SearchPlatformUtils;
      media = obj.getMedia(searchContext, tmp);
    } else {
      media = EMPTY_MEDIA_RESULTS;
    }
    return media;
  }, items2);
  const items3 = [searchContext, tab];
  const callback = searchMessages.useCallback(() => {
    let obj = SearchPlatformUtilsDefault;
    const nextMessages = obj.fetchNextMessages(searchContext, tab, () => {
      let tmp2 = size;
      const obj = searchContext(size[15]);
      if (obj.isModalOpen(MEDIA_MODAL_KEY)) {
        const searchResultsQuery = callback1.getSearchResultsQuery(closure_1_0);
        const tmpResult = searchContext(tmp2[16]);
        const messages = onPressMediaItem.getMessages(tmpResult.getSearchTabFetchId(closure_1_0, tab, searchResultsQuery));
        const tmp4 = closure_1_0;
        if (null != messages) {
          const tmpResult3 = searchContext(tmp2[14]);
          const media = tmpResult3.getMedia(tmp4, messages);
          const items = [];
          const item = media.forEach((type) => {
            const tmp2 = type.type !== constants.ATTACHMENT && type.type !== constants.EMBED && type.type !== constants.COMPONENT;
            if (!tmp2) {
              items.push(type.sources);
            }
          });
          const tmpResult4 = searchContext(tmp2[17]);
          const result = tmpResult4.updateMediaViewerSources(items);
        }
      }
    });
  }, items3);
  const obj6 = searchContext(17262);
  const onPressMediaItem = obj6.useOnPressMediaItem({ searchContext, allMediaResults: memo, onEndReached: callback, onEndReachedThreshold: 500 });
  const items4 = [onPressMediaItem, searchContext, searchMessages];
  const callback1 = searchMessages.useCallback((media, index) => {
    media = media.media;
    let found;
    const originView = media.originView;
    const arr = searchMessages;
    if (searchMessages != null) {
      found = arr.find((id) => id.id === media.messageId);
    }
    const obj = ExplicitMediaRedactionNativeUtils;
    if (obj.shouldAgeVerifyForSearchMedia(media, found)) {
      const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.SEARCH_MEDIA_PREVIEW };
      const showAgeVerificationGetStartedModal = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal;
      AgeVerificationActionCreatorsDefault;
      const result = showAgeVerificationGetStartedModal(obj2);
    } else {
      const obj4 = { searchContext, channelId: null, messageId: null, index };
      ({ channelId: obj3.channelId, messageId: obj3.messageId } = media);
      const tmp2Result = BaseMessagesScreen;
      const result1 = tmp2Result.trackMessageItemPress(obj4);
      onPressMediaItem(media, originView);
    }
  }, items4);
  const items5 = [callback1, memo, tmp2, placeholderCount];
  const memo1 = searchMessages.useMemo(() => {
    let obj2;
    let obj3;
    let obj4;
    const items = [];
    const item = memo.forEach((media, itemIndex) => {
      let obj;
      let obj2;
      let obj3;
      let closure_0 = itemIndex;
      const element = { type: metroImportAll.MEDIA, props: obj };
      const push = items.push;
      obj = {
        media,
        size,
        onPress(arg0) {
          return closure_2_7(arg0, closure_0);
        },
        containerStyle: obj3.getMediaGridItemStyles(obj2)
      };
      obj2 = { itemIndex, numItems: memo.length, numColumns, spacing: authStore - 2 };
      obj3 = SearchPlatformUtils;
      push(element);
    });
    if (placeholderCount > 0) {
      let num;
      let obj = { numColumns, numResults: items.length, placeholderCount: tmp2 };
      const obj5 = searchContext(size[23]);
      const adjustedPlaceholderCount = obj5.getAdjustedPlaceholderCount(obj);
      for (let num = 0; num < adjustedPlaceholderCount; num = num + 1) {
        let element = { type: constants.MEDIA_PLACEHOLDER, key: "media-placeholder-" + length + num, props: obj2 };
        let _HermesInternal = HermesInternal;
        let push = items.push;
        obj2 = { size, containerStyle: obj3.getMediaGridItemStyles(obj4) };
        obj3 = searchContext(size[14]);
        obj4 = { itemIndex: length + num, numItems: memo.length, numColumns, spacing: closure_1_10 - 2 };
        let arr = push(element);
      }
    }
    return items;
  }, items5);
  tab(17337);
  return <tmp11 data={memo1} searchContext={searchContext} tab={tab} isFocused={isFocused} contentContainerStyle={contentContainerStyles.mediaContentContainer} ItemSeparatorComponent={searchContext(17269).MediaVerticalSeparator} numColumns={numColumns} isFirstPageLoading={isFirstPageLoading} isNextPageLoading={isNextPageLoading} />;
});
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/MediaScreen.tsx");

export default memoResult;
