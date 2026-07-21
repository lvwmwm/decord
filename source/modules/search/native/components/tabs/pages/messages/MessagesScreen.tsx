// Module ID: 15276
// Function ID: 115329
// Dependencies: [31, 33, 3832, 689, 3972, 11783, 2, 31, 11388, 10069, 11395, 22, 11387, 2]

// Module 15276
import importAllResult from "module_31";
import module_33 from "module_33";
import { jsx } from "_createForOfIteratorHelperLoose";
import map from "map";
import result2 from "result2";

({ SEARCH_FILTERS_BY_TAB: closure_5, SearchFilter: closure_6, SEARCH_PINNED_MESSAGES_LINE_CLAMP: closure_7, SEARCH_MESSAGES_DEFAULT_LINE_CLAMP: closure_8, MESSAGE_PLACEHOLDER_ITEM_SIZE: closure_9, SearchListItemTypes: closure_10 } = require("map"));
const result = result2.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/MessagesScreen.tsx");

export default importAllResult.memo(function MessagesScreen(isFocused) {
  let isFirstPageLoading;
  let isNextPageLoading;
  const searchContext = isFocused.searchContext;
  const arg1 = searchContext;
  const tab = isFocused.tab;
  let tmp5;
  let memo;
  let placeholderCount;
  let obj = arg1(dependencyMap[4]);
  const searchMessages = obj.useSearchMessages(searchContext, tab);
  const importDefault = searchMessages;
  const items = [module_33];
  const items1 = [searchContext];
  const stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items, () => callback.getSearchResultsQuery(searchContext), items1);
  const dependencyMap = stateFromStores;
  const obj2 = arg1(dependencyMap[5]);
  const onPressMessageItem = arg1(dependencyMap[6]).useOnPressMessageItem({ searchContext });
  const items2 = [onPressMessageItem, searchContext];
  const callback = importAllResult.useCallback((arg0, index) => {
    let channelId;
    let messageId;
    ({ channelId, messageId } = arg0);
    let obj = searchContext(stateFromStores[7]);
    obj = { searchContext, channelId, messageId, index };
    const result = obj.trackMessageItemPress(obj);
    onPressMessageItem(channelId, messageId);
  }, items2);
  module_33 = callback;
  let closure_5 = importAllResult.useRef({});
  tmp5 = closure_5[tab] === tmp5.Pins ? memo : placeholderCount;
  const items3 = [tmp5, stateFromStores];
  memo = importAllResult.useMemo(() => {
    let tmp = searchMessages(stateFromStores[8]);
    tmp = new tmp(stateFromStores, tmp5);
    return tmp;
  }, items3);
  const obj3 = arg1(dependencyMap[6]);
  obj = { searchContext, tab, placeholderHeight: closure_9, numColumns: 1 };
  const searchMessagesLoadingState = arg1(dependencyMap[9]).useSearchMessagesLoadingState(obj);
  placeholderCount = searchMessagesLoadingState.placeholderCount;
  const items4 = [callback, tmp5, searchMessages, memo, placeholderCount];
  ({ isFirstPageLoading, isNextPageLoading } = searchMessagesLoadingState);
  const memo1 = importAllResult.useMemo(() => {
    const items = [];
    const searchContext = items;
    if (null != searchMessages) {
      const item = searchMessages.forEach((arg0, arg1) => {
        const items = arg1;
        let obj = { type: constants.MESSAGE };
        obj = {
          message: closure_7.parse(arg0),
          onPress(arg0) {
            return callback(arg0, arg1);
          },
          lineClamp: closure_6,
          messageSizeCacheRef: closure_5
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
      let tmp4 = constants;
      obj.type = constants.MESSAGE_PLACEHOLDER;
      let _HermesInternal = HermesInternal;
      obj.key = "message-placeholder-" + num;
      let arr = items.push(obj);
    }
    return items;
  }, items4);
  const obj4 = arg1(dependencyMap[9]);
  const contentContainerStyles = arg1(dependencyMap[11]).useContentContainerStyles();
  obj = { data: memo1, searchContext, tab, isFocused: isFocused.isFocused, contentContainerStyle: contentContainerStyles.messagesContentContainer };
  const obj6 = arg1(dependencyMap[11]);
  obj.ItemSeparatorComponent = arg1(dependencyMap[12]).MessageVerticalSeparator;
  obj.isFirstPageLoading = isFirstPageLoading;
  obj.isNextPageLoading = isNextPageLoading;
  return jsx(importDefault(dependencyMap[7]), obj);
});
