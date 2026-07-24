// Module ID: 15448
// Function ID: 117868
// Dependencies: [31, 10109, 9141, 33, 15432, 566, 15384, 15434, 15449, 15433, 15438, 15427, 15390, 2]

// Module 15448
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";
import { jsx } from "jsxProd";

let closure_10;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ SEARCH_FILTERS_BY_TAB: closure_5, SearchFilter: closure_6, SEARCH_PINNED_MESSAGES_LINE_CLAMP: closure_7, SEARCH_MESSAGES_DEFAULT_LINE_CLAMP: closure_8, MESSAGE_PLACEHOLDER_ITEM_SIZE: closure_9, SearchListItemTypes: closure_10 } = SearchAutocompleteSelectAnalyticsActions);
const memoResult = importAllResult.memo(function MessagesScreen(isFocused) {
  let isFirstPageLoading;
  let isNextPageLoading;
  const searchContext = isFocused.searchContext;
  const tab = isFocused.tab;
  let Pins;
  let memo;
  let placeholderCount;
  let obj = searchContext(stateFromStores[4]);
  const searchMessages = obj.useSearchMessages(searchContext, tab);
  let items = [callback];
  const items1 = [searchContext];
  stateFromStores = searchContext(stateFromStores[5]).useStateFromStores(items, () => callback.getSearchResultsQuery(searchContext), items1);
  const obj2 = searchContext(stateFromStores[5]);
  const onPressMessageItem = searchContext(stateFromStores[6]).useOnPressMessageItem({ searchContext });
  const items2 = [onPressMessageItem, searchContext];
  callback = onPressMessageItem.useCallback((arg0, index) => {
    let channelId;
    let messageId;
    ({ channelId, messageId } = arg0);
    let obj = searchContext(stateFromStores[7]);
    obj = { searchContext, channelId, messageId, index };
    const result = obj.trackMessageItemPress(obj);
    onPressMessageItem(channelId, messageId);
  }, items2);
  const table = onPressMessageItem.useRef({});
  const tmp5 = table[tab] === Pins.Pins ? memo : placeholderCount;
  Pins = tmp5;
  const items3 = [tmp5, stateFromStores];
  memo = onPressMessageItem.useMemo(() => {
    let tmp = searchMessages(stateFromStores[8]);
    tmp = new tmp(stateFromStores, c6);
    return tmp;
  }, items3);
  const obj3 = searchContext(stateFromStores[6]);
  obj = { searchContext, tab, placeholderHeight: closure_9, numColumns: 1 };
  const searchMessagesLoadingState = searchContext(stateFromStores[9]).useSearchMessagesLoadingState(obj);
  placeholderCount = searchMessagesLoadingState.placeholderCount;
  const items4 = [callback, tmp5, searchMessages, memo, placeholderCount];
  ({ isFirstPageLoading, isNextPageLoading } = searchMessagesLoadingState);
  const memo1 = onPressMessageItem.useMemo(() => {
    let items = [];
    if (null != searchMessages) {
      const item = searchMessages.forEach((arg0, arg1) => {
        const items = arg1;
        let obj = { type: outer2_10.MESSAGE };
        obj = {
          message: outer1_7.parse(arg0),
          onPress(arg0) {
            return outer2_4(arg0, closure_0);
          },
          lineClamp: outer1_6,
          messageSizeCacheRef: outer1_5
        };
        obj.props = obj;
        items.push(obj);
      });
    }
    let obj = searchContext(stateFromStores[10]);
    obj = { numColumns: 1, numResults: items.length, placeholderCount };
    const adjustedPlaceholderCount = obj.getAdjustedPlaceholderCount(obj);
    for (let num = 0; num < adjustedPlaceholderCount; num = num + 1) {
      obj = {};
      let tmp4 = outer1_10;
      obj.type = outer1_10.MESSAGE_PLACEHOLDER;
      let _HermesInternal = HermesInternal;
      obj.key = "message-placeholder-" + num;
      let arr = items.push(obj);
    }
    return items;
  }, items4);
  const obj4 = searchContext(stateFromStores[9]);
  const contentContainerStyles = searchContext(stateFromStores[11]).useContentContainerStyles();
  obj = { data: memo1, searchContext, tab, isFocused: isFocused.isFocused, contentContainerStyle: contentContainerStyles.messagesContentContainer };
  const obj6 = searchContext(stateFromStores[11]);
  obj.ItemSeparatorComponent = searchContext(stateFromStores[12]).MessageVerticalSeparator;
  obj.isFirstPageLoading = isFirstPageLoading;
  obj.isNextPageLoading = isNextPageLoading;
  return jsx(searchMessages(stateFromStores[7]), { data: memo1, searchContext, tab, isFocused: isFocused.isFocused, contentContainerStyle: contentContainerStyles.messagesContentContainer });
});
let result = require("SearchAutocompleteSelectAnalyticsActions").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/MessagesScreen.tsx");

export default memoResult;
