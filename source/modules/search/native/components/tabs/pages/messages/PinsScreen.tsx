// Module ID: 15455
// Function ID: 118749
// Name: InitialPinsScreen
// Dependencies: [31, 9897, 5660, 10109, 9141, 9169, 653, 33, 566, 15387, 9896, 15384, 10108, 15427, 15391, 15390, 15448, 2]

// Module 15455 (InitialPinsScreen)
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { FetchState } from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";
import { SearchResultContentEntityTypes as closure_11 } from "SearchEntrypointAnalyticsLocations";
import { SearchTypes } from "ME";
import { jsx } from "jsxProd";

let closure_10;
let closure_8;
let closure_9;
const require = arg1;
function InitialPinsScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const isFocused = searchContext.isFocused;
  let obj = searchContext(stateFromStores[8]);
  let items = [callback];
  const items1 = [searchContext];
  stateFromStores = obj.useStateFromStores(items, () => callback.isInitialSearchQuery(searchContext), items1);
  obj = { placeholderHeight: closure_8, numColumns: 1 };
  const fullscreenPlaceholderCount = searchContext(stateFromStores[9]).useFullscreenPlaceholderCount(obj);
  const items2 = [isFocused, stateFromStores, searchContext.channelId];
  const effect = fullscreenPlaceholderCount.useEffect(() => {
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = isFocused;
    }
    if (tmp) {
      const pins = isFocused(stateFromStores[10]).fetchPins(searchContext.channelId);
      const obj = isFocused(stateFromStores[10]);
    }
  }, items2);
  const obj2 = searchContext(stateFromStores[9]);
  const items3 = [items];
  const stateFromStoresObject = searchContext(stateFromStores[8]).useStateFromStoresObject(items3, () => {
    const pins = items.getPins(searchContext.channelId);
    const obj = {};
    items = undefined;
    if (null != pins) {
      items = pins.items;
    }
    obj.items = items;
    let tmp3 = null == pins;
    if (!tmp3) {
      tmp3 = pins.state === showLoading.LOADING;
    }
    obj.showLoading = tmp3;
    return obj;
  });
  items = stateFromStoresObject.items;
  const showLoading = stateFromStoresObject.showLoading;
  const obj4 = searchContext(stateFromStores[8]);
  const onPressMessageItem = searchContext(stateFromStores[11]).useOnPressMessageItem({ searchContext });
  const items4 = [onPressMessageItem, searchContext];
  callback = fullscreenPlaceholderCount.useCallback((arg0, index) => {
    let channelId;
    let messageId;
    ({ channelId, messageId } = arg0);
    const message = onPressMessageItem.getMessage(messageId);
    let obj = isFocused(stateFromStores[12]);
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
    obj.entityType = outer1_11.MESSAGE;
    const result = obj.trackSearchResultClicked(obj);
    onPressMessageItem(channelId, messageId);
  }, items4);
  closure_8 = fullscreenPlaceholderCount.useRef({});
  const items5 = [fullscreenPlaceholderCount, callback, showLoading, items];
  const memo = fullscreenPlaceholderCount.useMemo(() => {
    let items = [];
    if (null != items) {
      const item = items.forEach((message) => {
        const items = arg1;
        obj = { type: outer2_9.MESSAGE, props: obj };
        obj = {
          message: message.message,
          onPress(channelId) {
            return outer2_7({ channelId: channelId.channelId, messageId: channelId.messageId }, closure_0);
          },
          lineClamp: outer2_10,
          messageSizeCacheRef: outer1_8
        };
        items.push(obj);
      });
    }
    if (showLoading) {
      let num = 0;
      if (0 < fullscreenPlaceholderCount) {
        do {
          let obj = {};
          let tmp5 = outer1_9;
          obj.type = outer1_9.MESSAGE_PLACEHOLDER;
          let _HermesInternal = HermesInternal;
          obj.key = "message-placeholder-" + num;
          let arr = items.push(obj);
          num = num + 1;
          let tmp7 = fullscreenPlaceholderCount;
        } while (num < fullscreenPlaceholderCount);
      }
    }
    return items;
  }, items5);
  const obj5 = searchContext(stateFromStores[11]);
  const contentContainerStyles = searchContext(stateFromStores[13]).useContentContainerStyles();
  obj = {
    contentContainerStyle: contentContainerStyles.messagesContentContainer,
    data: memo,
    onEndReached() {
      let obj = isFocused(stateFromStores[10]);
      obj = {};
      let pinnedAt;
      if (null != items) {
        const atResult = items.at(-1);
        if (null != atResult) {
          pinnedAt = atResult.pinnedAt;
        }
      }
      obj.before = pinnedAt;
      const pins = obj.fetchPins(searchContext.channelId, obj);
    }
  };
  const obj6 = searchContext(stateFromStores[13]);
  obj.ItemSeparatorComponent = searchContext(stateFromStores[15]).MessageVerticalSeparator;
  return jsx(isFocused(stateFromStores[14]), {
    contentContainerStyle: contentContainerStyles.messagesContentContainer,
    data: memo,
    onEndReached() {
      let obj = isFocused(stateFromStores[10]);
      obj = {};
      let pinnedAt;
      if (null != items) {
        const atResult = items.at(-1);
        if (null != atResult) {
          pinnedAt = atResult.pinnedAt;
        }
      }
      obj.before = pinnedAt;
      const pins = obj.fetchPins(searchContext.channelId, obj);
    }
  });
}
({ MESSAGE_PLACEHOLDER_ITEM_SIZE: closure_8, SearchListItemTypes: closure_9, SEARCH_PINNED_MESSAGES_LINE_CLAMP: closure_10 } = SearchAutocompleteSelectAnalyticsActions);
const memoResult = importAllResult.memo(function PinsScreen(searchContext) {
  let isFocused;
  let tab;
  searchContext = searchContext.searchContext;
  ({ tab, isFocused } = searchContext);
  let obj = searchContext(566);
  const items = [closure_7];
  const items1 = [searchContext];
  if (!obj.useStateFromStores(items, () => outer1_7.isInitialSearchQuery(searchContext), items1)) {
    obj = { searchContext, tab, isFocused };
    let tmp6 = jsx(importDefault(15448), { searchContext, tab, isFocused });
  } else {
    obj = { searchContext, tab, isFocused };
    tmp6 = <InitialPinsScreen searchContext={searchContext} tab={tab} isFocused={isFocused} />;
  }
  return tmp6;
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/PinsScreen.tsx");

export default memoResult;
