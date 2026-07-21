// Module ID: 15280
// Function ID: 116176
// Name: InitialPinsScreen
// Dependencies: [31, 9095, 10067, 2, 57, 31, 1348, 3765, 1849, 10071, 10068, 9095, 653, 33, 566, 15213, 11387, 11395]

// Module 15280 (InitialPinsScreen)
import importAllResult from "module_31";
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";
import { FetchState } from "SearchAutocompleteSelectAnalyticsActions";
import toAnalyticsSearchFilterType from "toAnalyticsSearchFilterType";
import result2 from "result2";
import _slicedToArray from "_slicedToArray";
import { SearchResultContentEntityTypes as closure_11 } from "module_31";
import { SearchTypes } from "_isNativeReflectConstruct";
import { jsx } from "_isNativeReflectConstruct";
import module_11395 from "module_11395";

function InitialPinsScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const arg1 = searchContext;
  const isFocused = searchContext.isFocused;
  const importDefault = isFocused;
  let obj = arg1(dependencyMap[8]);
  let items = [result2];
  const items1 = [searchContext];
  const stateFromStores = obj.useStateFromStores(items, () => callback.isInitialSearchQuery(searchContext), items1);
  const dependencyMap = stateFromStores;
  obj = { placeholderHeight: closure_8, numColumns: 1 };
  const fullscreenPlaceholderCount = arg1(dependencyMap[9]).useFullscreenPlaceholderCount(obj);
  const items2 = [isFocused, stateFromStores, searchContext.channelId];
  const effect = importAllResult.useEffect(() => {
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = isFocused;
    }
    if (tmp) {
      const pins = isFocused(stateFromStores[10]).fetchPins(searchContext.channelId);
      const obj = isFocused(stateFromStores[10]);
    }
  }, items2);
  const obj2 = arg1(dependencyMap[9]);
  const items3 = [SearchAutocompleteSelectAnalyticsActions];
  const stateFromStoresObject = arg1(dependencyMap[8]).useStateFromStoresObject(items3, () => {
    const pins = items.getPins(searchContext.channelId);
    const obj = {};
    let items;
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
  SearchAutocompleteSelectAnalyticsActions = items;
  const showLoading = stateFromStoresObject.showLoading;
  const FetchState = showLoading;
  const obj4 = arg1(dependencyMap[8]);
  const onPressMessageItem = arg1(dependencyMap[11]).useOnPressMessageItem({ searchContext });
  let toAnalyticsSearchFilterType = onPressMessageItem;
  const items4 = [onPressMessageItem, searchContext];
  const callback = importAllResult.useCallback((arg0, index) => {
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
    obj.entityType = constants.MESSAGE;
    const result = obj.trackSearchResultClicked(obj);
    onPressMessageItem(channelId, messageId);
  }, items4);
  result2 = callback;
  closure_8 = importAllResult.useRef({});
  const items5 = [fullscreenPlaceholderCount, callback, showLoading, items];
  const memo = importAllResult.useMemo(() => {
    const items = [];
    const searchContext = items;
    if (null != items) {
      const item = items.forEach((message) => {
        const items = arg1;
        let obj = { type: constants.MESSAGE, props: obj };
        obj = {
          message: message.message,
          onPress(channelId) {
            return callback({ channelId: channelId.channelId, messageId: channelId.messageId }, arg1);
          },
          lineClamp: closure_10,
          messageSizeCacheRef: closure_8
        };
        items.push(obj);
      });
    }
    if (showLoading) {
      let num = 0;
      if (0 < fullscreenPlaceholderCount) {
        do {
          let obj = {};
          let tmp5 = closure_9;
          obj.type = closure_9.MESSAGE_PLACEHOLDER;
          let _HermesInternal = HermesInternal;
          obj.key = "message-placeholder-" + num;
          let arr = items.push(obj);
          num = num + 1;
          let tmp7 = closure_3;
        } while (num < closure_3);
      }
    }
    return items;
  }, items5);
  const obj5 = arg1(dependencyMap[11]);
  const contentContainerStyles = arg1(dependencyMap[13]).useContentContainerStyles();
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
  const obj6 = arg1(dependencyMap[13]);
  obj.ItemSeparatorComponent = arg1(dependencyMap[15]).MessageVerticalSeparator;
  return jsx(importDefault(dependencyMap[14]), obj);
}
({ MESSAGE_PLACEHOLDER_ITEM_SIZE: closure_8, SearchListItemTypes: closure_9, SEARCH_PINNED_MESSAGES_LINE_CLAMP: closure_10 } = _slicedToArray);
const result = module_11395.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/PinsScreen.tsx");

export default importAllResult.memo(function PinsScreen(searchContext) {
  let isFocused;
  let tab;
  searchContext = searchContext.searchContext;
  const arg1 = searchContext;
  ({ tab, isFocused } = searchContext);
  let obj = arg1(dependencyMap[8]);
  const items = [result2];
  const items1 = [searchContext];
  if (!obj.useStateFromStores(items, () => initialSearchQuery.isInitialSearchQuery(searchContext), items1)) {
    obj = { searchContext, tab, isFocused };
    let tmp6 = jsx(importDefault(dependencyMap[16]), obj);
  } else {
    obj = { searchContext, tab, isFocused };
    tmp6 = <InitialPinsScreen {...obj} />;
  }
  return tmp6;
});
