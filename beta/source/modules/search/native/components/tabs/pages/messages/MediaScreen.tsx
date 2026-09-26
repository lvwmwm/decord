// Module ID: 17171
// Function ID: 17172
// Name: MediaScreen
// Dependencies: [19, 7604, 2041, 7555, 12622, 8154, 12636, 1074, 21, 17164, 17119, 17172, 504, 17173, 12621, 4645, 12623, 8563, 17116, 15107, 8714, 8716, 17174, 17178, 17123, 2]

// Module 17171 (MediaScreen)
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8714 */;
import SearchPlatformUtils from "SearchPlatformUtils" /* 12621 */;
import noop from "module_19" /* 19 */;
import ChannelSpoilerAgreeStore from "ChannelSpoilerAgreeStore" /* 7604 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import SearchMessageStore from "SearchMessageStore" /* 7555 */;
import SearchQueryStore from "SearchQueryStore" /* 12622 */;

const SearchPlatformUtilsDefault = SearchPlatformUtils;

require = fn;
const SearchConstants = fn(8154);
({ SearchListItemTypes: closure_8, MEDIA_NUM_COLUMNS: closure_9, MEDIA_ITEM_GAP_WIDTH: c10, SearchMediaTypes: closure_11 } = SearchConstants);
const EMPTY_MEDIA_RESULTS = fn(12636).EMPTY_MEDIA_RESULTS;
const MEDIA_MODAL_KEY = fn(1074).MEDIA_MODAL_KEY;
const jsx = fn(21).jsx;
let closure_15 = [];
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/MediaScreen.tsx");

export default noop.memo(function MediaScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const tab = searchContext.tab;
  let placeholderCount;
  let memo;
  ({ isFocused, width } = searchContext);
  const contentContainerStyles = searchContext(17164).useContentContainerStyles();
  const tmp2 = tab(17119)(width);
  dependencyMap = tmp2;
  let obj = searchContext(17164);
  const searchMessages = searchContext(17172).useSearchMessages(searchContext, tab);
  let obj2 = searchContext(17172);
  let items = [placeholderCount, memo];
  const items1 = [searchMessages];
  const stateFromStoresArray = searchContext(504).useStateFromStoresArray(items, () => {
    let found;
    if (searchMessages != null) {
      const mapped = searchMessages.map((channel_id) => {
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
  let obj3 = searchContext(504);
  const searchMessagesLoadingState = searchContext(17173).useSearchMessagesLoadingState({ searchContext, tab, placeholderHeight: tmp2, numColumns });
  placeholderCount = searchMessagesLoadingState.placeholderCount;
  const items2 = [searchMessages, searchContext, stateFromStoresArray];
  ({ isFirstPageLoading, isNextPageLoading } = searchMessagesLoadingState);
  memo = searchMessages.useMemo(() => {
    if (null != searchMessages) {
      let media = SearchPlatformUtils.getMedia(searchContext, tmp);
    } else {
      media = EMPTY_MEDIA_RESULTS;
    }
    return media;
  }, items2);
  const items3 = [searchContext, tab];
  const callback = searchMessages.useCallback(() => {
    const nextMessages = SearchPlatformUtilsDefault.fetchNextMessages(searchContext, tab, () => {
      if (obj.isModalOpen(MEDIA_MODAL_KEY)) {
        const searchResultsQuery = callback1.getSearchResultsQuery(searchContext);
        const tmp4 = searchContext;
        const messages = onPressMediaItem.getMessages(tmp(tmp2[16]).getSearchTabFetchId(searchContext, tab, searchResultsQuery));
        if (null != messages) {
          const media = tmp(tmp2[14]).getMedia(tmp4, messages);
          const items = [];
          const item = media.forEach((type) => {
            if (!tmp2) {
              items.push(type.sources);
            }
          });
          const tmpResult3 = tmp(tmp2[14]);
          const result = tmp(tmp2[17]).updateMediaViewerSources(items);
          const tmpResult4 = tmp(tmp2[17]);
        }
        const tmpResult = tmp(tmp2[16]);
      }
    });
  }, items3);
  let obj4 = searchContext(17173);
  let obj5 = { searchContext, tab, placeholderHeight: tmp2, numColumns };
  const onPressMediaItem = searchContext(17116).useOnPressMediaItem({ searchContext, allMediaResults: memo, onEndReached: callback, onEndReachedThreshold: 500 });
  const items4 = [onPressMediaItem, searchContext, searchMessages];
  const callback1 = searchMessages.useCallback((media, index) => {
    media = media.media;
    let found;
    if (searchMessages != null) {
      found = searchMessages.find((id) => id.id === media.messageId);
    }
    if (obj.shouldAgeVerifyForSearchMedia(media, found)) {
      const obj2 = { entryPoint: tmp2(8716).AgeVerificationModalEntryPoint.SEARCH_MEDIA_PREVIEW };
      const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj2);
    } else {
      const obj5 = { searchContext, channelId: null, messageId: null, index: null };
      ({ channelId: obj3.channelId, messageId: obj3.messageId } = media);
      obj5.index = index;
      const result1 = tmp2(17174).trackMessageItemPress(obj5);
      onPressMediaItem(media, media.originView);
      const tmp2Result = tmp2(17174);
    }
  }, items4);
  const items5 = [callback1, memo, tmp2, placeholderCount];
  const memo1 = searchMessages.useMemo(() => {
    const items = [];
    const item = memo.forEach((media, itemIndex) => {
      closure_0 = itemIndex;
      const element = { type: constants.MEDIA, props: null };
      const obj = {
        media,
        size,
        onPress(arg0) {
          return callback1(arg0, closure_0);
        },
        containerStyle: SearchPlatformUtils.getMediaGridItemStyles({ itemIndex, numItems: memo.length, numColumns, spacing: closure_3_10 - 2 })
      };
      element.props = obj;
      items.push(element);
    });
    if (placeholderCount > 0) {
      let obj = { numColumns, numResults: items.length, placeholderCount: tmp2 };
      const adjustedPlaceholderCount = searchContext(size[23]).getAdjustedPlaceholderCount(obj);
      for (let num = 0; num < adjustedPlaceholderCount; num = num + 1) {
        let element = { type: null, key: null, props: null };
        element.type = constants.MEDIA_PLACEHOLDER;
        let _HermesInternal = HermesInternal;
        element.key = "media-placeholder-" + length + num;
        let obj2 = { size: null, containerStyle: null };
        obj2.size = size;
        let obj3 = searchContext(size[14]);
        let obj4 = { itemIndex: length + num, numItems: null, numColumns: null, spacing: null };
        obj4.numItems = memo.length;
        obj4.numColumns = numColumns;
        obj4.spacing = closure_1_10 - 2;
        obj2.containerStyle = obj3.getMediaGridItemStyles(obj4);
        element.props = obj2;
        let arr = items.push(element);
      }
      const obj5 = searchContext(size[23]);
    }
    return items;
  }, items5);
  const obj7 = { data: memo1, searchContext, tab, isFocused, contentContainerStyle: contentContainerStyles.mediaContentContainer, ItemSeparatorComponent: null, numColumns: null, isFirstPageLoading: null, isNextPageLoading: null };
  const obj6 = searchContext(17116);
  obj7.ItemSeparatorComponent = searchContext(17123).MediaVerticalSeparator;
  obj7.numColumns = numColumns;
  obj7.isFirstPageLoading = isFirstPageLoading;
  obj7.isNextPageLoading = isNextPageLoading;
  return jsx(tab(17174), { data: memo1, searchContext, tab, isFocused, contentContainerStyle: contentContainerStyles.mediaContentContainer, ItemSeparatorComponent: null, numColumns: null, isFirstPageLoading: null, isNextPageLoading: null });
});
