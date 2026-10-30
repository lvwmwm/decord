// Module ID: 18749
// Function ID: 18750
// Name: messages/PinsScreen
// Dependencies: [19, 14483, 6857, 13850, 9806, 9805, 1072, 21, 504, 18662, 14482, 18658, 13857, 18723, 18666, 18665, 18746, 2]

// Module 18749 (messages/PinsScreen)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import TrackingConstants from "TrackingConstants" /* 9805 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 13857 */;
import ChannelPinActionCreatorsDefault from "ChannelPinActionCreators" /* 14482 */;
import ChannelPinsStore2 from "ChannelPinsStore" /* 14483 */;
import MessagesScreenDefault from "MessagesScreen" /* 18746 */;
import react from "react" /* 19 */;
import SearchMessageStore from "SearchMessageStore" /* 6857 */;
import SearchQueryStore from "SearchQueryStore" /* 13850 */;
import SearchConstants from "SearchConstants" /* 9806 */;
import size from "module_2" /* 2 */;

const ChannelPinsStore = ChannelPinsStore2;
let placeholderHeight;

let c10;
let c9;
let metroImportAll;
function InitialPinsScreen(searchContext) {
  let closure_8;
  let constants2;
  searchContext = searchContext.searchContext;
  const isFocused = searchContext.isFocused;
  let stateFromStores;
  let items;
  let callback;
  placeholderHeight = undefined;
  let obj = searchContext(stateFromStores[8]);
  const items1 = [callback];
  const items2 = [searchContext];
  stateFromStores = obj.useStateFromStores(items1, () => SearchQueryStore.isInitialSearchQuery(searchContext), items2);
  const obj2 = searchContext(stateFromStores[9]);
  const obj3 = { placeholderHeight, numColumns: 1 };
  const fullscreenPlaceholderCount = obj2.useFullscreenPlaceholderCount(obj3);
  const items3 = [isFocused, stateFromStores, searchContext.channelId];
  const effect = fullscreenPlaceholderCount.useEffect(() => {
    const tmp = stateFromStores && isFocused;
    if (tmp) {
      const obj = ChannelPinActionCreatorsDefault;
      const pins = obj.fetchPins(searchContext.channelId);
    }
  }, items3);
  const items4 = [items];
  const obj4 = searchContext(stateFromStores[8]);
  const stateFromStoresObject = obj4.useStateFromStoresObject(items4, () => {
    const pins = ChannelPinsStore.getPins(searchContext.channelId);
    items = undefined;
    if (pins != null) {
      items = pins.items;
    }
    const obj = { items, showLoading: tmp3 };
    return obj;
  });
  items = stateFromStoresObject.items;
  const showLoading = stateFromStoresObject.showLoading;
  const obj5 = searchContext(stateFromStores[11]);
  const onPressMessageItem = obj5.useOnPressMessageItem({ searchContext });
  const items5 = [onPressMessageItem, searchContext];
  callback = fullscreenPlaceholderCount.useCallback((arg0, index) => {
    let channelId;
    let id;
    let messageId;
    ({ channelId, messageId } = arg0);
    const message = SearchMessageStore.getMessage(messageId);
    const obj = { searchContext, channelId, messageId, userId: id, index, entityType: constants2.MESSAGE };
    id = undefined;
    const trackSearchResultClicked = search_tracking_TrackingDefault.trackSearchResultClicked;
    if (message != null) {
      const author = message.author;
      if (author != null) {
        id = author.id;
      }
    }
    const result = trackSearchResultClicked(obj);
    onPressMessageItem(channelId, messageId);
  }, items5);
  placeholderHeight = fullscreenPlaceholderCount.useRef({});
  const items6 = [fullscreenPlaceholderCount, callback, showLoading, items];
  const memo = fullscreenPlaceholderCount.useMemo(() => {
    let messageSizeCacheRef;
    items = [];
    const arr2 = items;
    if (items != null) {
      const item = arr2.forEach((message, index) => {
        let obj;
        let closure_0 = index;
        const element = { type: constants.MESSAGE, props: obj };
        obj = {
          message: message.message,
          onPress(channelId) {
            const obj = { channelId: channelId.channelId, messageId: channelId.messageId };
            return closure_2_7(obj, closure_0);
          },
          lineClamp,
          messageSizeCacheRef
        };
        items.push(element);
      });
    }
    const tmp2 = showLoading;
    if (tmp2) {
      let num = 0;
      if (0 < fullscreenPlaceholderCount) {
        do {
          let obj = { type: constants.MESSAGE_PLACEHOLDER, key: "message-placeholder-" + num };
          let _HermesInternal = HermesInternal;
          let push = items.push;
          let arr = push(obj);
          num = num + 1;
        } while (num < fullscreenPlaceholderCount);
      }
    }
    return items;
  }, items6);
  const obj6 = searchContext(stateFromStores[13]);
  const contentContainerStyles = obj6.useContentContainerStyles();
  isFocused(stateFromStores[14]);
  return <tmp9 contentContainerStyle={contentContainerStyles.messagesContentContainer} data={memo} onEndReached={function onEndReached() {
    let pinnedAt;
    const fetchPins = ChannelPinActionCreatorsDefault.fetchPins;
    const channelId = searchContext.channelId;
    ChannelPinActionCreatorsDefault;
    const obj = items;
    if (items != null) {
      const atResult = obj.at(-1);
      if (atResult != null) {
        pinnedAt = atResult.pinnedAt;
      }
    }
    const pins = fetchPins(channelId, { before: pinnedAt });
  }} ItemSeparatorComponent={searchContext(stateFromStores[15]).MessageVerticalSeparator} />;
}
const FetchState = ChannelPinsStore2.FetchState;
({ MESSAGE_PLACEHOLDER_ITEM_SIZE: metroImportAll, SearchListItemTypes: c9, SEARCH_PINNED_MESSAGES_LINE_CLAMP: c10 } = SearchConstants);
let closure_11 = TrackingConstants.SearchResultContentEntityTypes;
const SearchTypes = Constants.SearchTypes;
const jsx = Fragment.jsx;
const memoResult = react.memo(function PinsScreen(searchContext) {
  let isFocused;
  let tab;
  let tmp5;
  searchContext = searchContext.searchContext;
  ({ tab, isFocused } = searchContext);
  const items = [SearchQueryStore];
  const items1 = [searchContext];
  const obj = searchContext(504);
  if (!obj.useStateFromStores(items, () => SearchQueryStore.isInitialSearchQuery(searchContext), items1)) {
    tmp5 = jsx(MessagesScreenDefault, { searchContext, tab, isFocused });
  } else {
    tmp5 = <InitialPinsScreen searchContext={searchContext} tab={tab} isFocused={isFocused} />;
  }
  return tmp5;
});
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/PinsScreen.tsx");

export default memoResult;
