// Module ID: 15394
// Function ID: 117481
// Dependencies: [31, 9103, 33, 15380, 15385, 15393, 15337, 15386, 15387, 11398, 15391, 15343, 2]

// Module 15394
import importAllResult from "result";
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";
import { jsx } from "jsxProd";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ SearchListItemTypes: closure_4, CARD_ESTIMATED_ITEM_SIZE: closure_5, FILES_OR_LINKS_NUM_COLUMNS: closure_6, FILES_OR_LINKS_GAP_WIDTH: closure_7 } = SearchAutocompleteSelectAnalyticsActions);
const memoResult = importAllResult.memo(function LinksScreen(searchContext) {
  let isFirstPageLoading;
  let isFocused;
  let isNextPageLoading;
  let width;
  searchContext = searchContext.searchContext;
  const tab = searchContext.tab;
  ({ isFocused, width } = searchContext);
  let obj = searchContext(fileOrLinkImageDimensions[3]);
  const contentContainerStyles = obj.useContentContainerStyles();
  let searchMessages = searchContext(fileOrLinkImageDimensions[4]).useSearchMessages(searchContext, tab);
  const obj2 = searchContext(fileOrLinkImageDimensions[4]);
  fileOrLinkImageDimensions = searchContext(fileOrLinkImageDimensions[5]).useFileOrLinkImageDimensions(width);
  let obj3 = searchContext(fileOrLinkImageDimensions[5]);
  const onPressMessageItem = searchContext(fileOrLinkImageDimensions[6]).useOnPressMessageItem({ searchContext });
  const obj4 = searchContext(fileOrLinkImageDimensions[6]);
  const onPressSearchLink = searchContext(fileOrLinkImageDimensions[6]).useOnPressSearchLink(searchContext);
  let obj5 = searchContext(fileOrLinkImageDimensions[6]);
  const onPressGuildVoiceChannel = searchContext(fileOrLinkImageDimensions[6]).useOnPressGuildVoiceChannel({ searchContext });
  const obj6 = searchContext(fileOrLinkImageDimensions[6]);
  obj = { searchContext, tab, placeholderHeight: onPressGuildVoiceChannel, numColumns: placeholderCount };
  const searchMessagesLoadingState = searchContext(fileOrLinkImageDimensions[7]).useSearchMessagesLoadingState(obj);
  placeholderCount = searchMessagesLoadingState.placeholderCount;
  let items = [onPressMessageItem, searchContext];
  ({ isFirstPageLoading, isNextPageLoading } = searchMessagesLoadingState);
  const callback = onPressMessageItem.useCallback((arg0, index) => {
    let channelId;
    let messageId;
    ({ channelId, messageId } = arg0);
    let obj = searchContext(fileOrLinkImageDimensions[8]);
    obj = { searchContext, channelId, messageId, index };
    const result = obj.trackMessageItemPress(obj);
    onPressMessageItem(channelId, messageId);
  }, items);
  const items1 = [onPressSearchLink, searchContext];
  const callback1 = onPressMessageItem.useCallback((arg0, index) => {
    let channelId;
    let messageId;
    let trusted;
    let url;
    ({ channelId, messageId, url, trusted } = arg0);
    let obj = searchContext(fileOrLinkImageDimensions[8]);
    obj = { searchContext, channelId, messageId, index };
    const result = obj.trackMessageItemPress(obj);
    onPressSearchLink(url, trusted);
  }, items1);
  const items2 = [onPressGuildVoiceChannel, searchContext];
  const callback2 = onPressMessageItem.useCallback((arg0, index) => {
    let channelId;
    let mentionedChannelId;
    let messageId;
    ({ channelId, messageId, mentionedChannelId } = arg0);
    let obj = searchContext(fileOrLinkImageDimensions[8]);
    obj = { searchContext, channelId, messageId, index };
    const result = obj.trackMessageItemPress(obj);
    onPressGuildVoiceChannel(mentionedChannelId);
  }, items2);
  const items3 = [callback2, callback1, callback, fileOrLinkImageDimensions, searchMessages, placeholderCount, searchContext];
  const memo = onPressMessageItem.useMemo(() => {
    const items = [];
    const searchMessages = 0;
    if (null != searchMessages) {
      let item = searchMessages.forEach((getContentMessage) => {
        const links = searchContext(fileOrLinkImageDimensions[9]).getLinks(items, getContentMessage);
        const item = links.forEach((data) => {
          const sum = closure_1 + arg1;
          let closure_0 = sum;
          let obj = { type: onPressSearchLink.LINK };
          obj = {
            data,
            onPress(arg0) {
              return outer3_7(arg0, closure_0);
            },
            onPressSearchLink(url, trusted) {
              return outer3_8(url, closure_0);
            },
            onPressGuildVoiceChannelMention(arg0) {
              return outer3_9(arg0, closure_0);
            },
            imageStyle: outer2_2
          };
          obj = { itemIndex: sum, spacing: callback, numColumns: placeholderCount };
          obj.containerStyle = searchContext(fileOrLinkImageDimensions[9]).getGridItemSpacingStyles(obj);
          obj.props = obj;
          outer1_0.push(obj);
        });
        closure_1 = closure_1 + links.length;
      });
    }
    if (placeholderCount > 0) {
      let obj = { numColumns: placeholderCount, numResults: items.length, placeholderCount };
      const adjustedPlaceholderCount = searchContext(fileOrLinkImageDimensions[10]).getAdjustedPlaceholderCount(obj);
      for (let num = 0; num < adjustedPlaceholderCount; num = num + 1) {
        obj = {};
        let tmp3 = onPressSearchLink;
        obj.type = onPressSearchLink.FILE_OR_LINK_PLACEHOLDER;
        let _HermesInternal = HermesInternal;
        obj.key = "file-or-link-placeholder-" + num;
        obj = {};
        let tmp4 = fileOrLinkImageDimensions;
        obj.imageStyle = fileOrLinkImageDimensions;
        let tmp5 = searchContext;
        let tmp6 = fileOrLinkImageDimensions;
        let obj3 = searchContext(fileOrLinkImageDimensions[9]);
        let obj1 = { itemIndex: length + num };
        let tmp7 = callback;
        obj1.spacing = callback;
        let tmp8 = placeholderCount;
        obj1.numColumns = placeholderCount;
        obj.containerStyle = obj3.getGridItemSpacingStyles(obj1);
        obj.props = obj;
        let arr = items.push(obj);
      }
      const obj5 = searchContext(fileOrLinkImageDimensions[10]);
    }
    return items;
  }, items3);
  obj = { data: memo, searchContext, tab, isFocused, contentContainerStyle: contentContainerStyles.filesOrLinksContentContainer };
  const obj7 = searchContext(fileOrLinkImageDimensions[7]);
  obj.ItemSeparatorComponent = searchContext(fileOrLinkImageDimensions[11]).CardVerticalSeparator;
  obj.numColumns = placeholderCount;
  obj.isFirstPageLoading = isFirstPageLoading;
  obj.isNextPageLoading = isNextPageLoading;
  return callback1(searchMessages(fileOrLinkImageDimensions[8]), obj);
});
let result = require("jsxProd").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/LinksScreen.tsx");

export default memoResult;
