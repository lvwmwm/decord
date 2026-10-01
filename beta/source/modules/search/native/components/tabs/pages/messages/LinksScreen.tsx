// Module ID: 16534
// Function ID: 16535
// Name: LinksScreen
// Dependencies: [19, 7303, 21, 16518, 16525, 16533, 16458, 16526, 16527, 11821, 16531, 16465, 2]

// Module 16534 (LinksScreen)
import Fragment from "Fragment" /* 21 */;
import SearchPlatformUtils from "SearchPlatformUtils" /* 11821 */;
import BaseMessagesScreen from "BaseMessagesScreen" /* 16527 */;
import react from "react" /* 19 */;
import SearchConstants from "SearchConstants" /* 7303 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ SearchListItemTypes: closure_4, CARD_ESTIMATED_ITEM_SIZE: hasOwnProperty, FILES_OR_LINKS_NUM_COLUMNS: metroRequire, FILES_OR_LINKS_GAP_WIDTH: metroImportDefault } = SearchConstants);
const jsx = Fragment.jsx;
const memoResult = react.memo(function LinksScreen(searchContext) {
  let isFirstPageLoading;
  let isFocused;
  let isNextPageLoading;
  let width;
  searchContext = searchContext.searchContext;
  const tab = searchContext.tab;
  let fileOrLinkImageDimensions;
  let placeholderCount;
  ({ isFocused, width } = searchContext);
  let obj = searchContext(fileOrLinkImageDimensions[3]);
  const contentContainerStyles = obj.useContentContainerStyles();
  let obj2 = searchContext(fileOrLinkImageDimensions[4]);
  const searchMessages = obj2.useSearchMessages(searchContext, tab);
  let obj3 = searchContext(fileOrLinkImageDimensions[5]);
  fileOrLinkImageDimensions = obj3.useFileOrLinkImageDimensions(width);
  let obj4 = searchContext(fileOrLinkImageDimensions[6]);
  const onPressMessageItem = obj4.useOnPressMessageItem({ searchContext });
  let obj5 = searchContext(fileOrLinkImageDimensions[6]);
  const onPressSearchLink = obj5.useOnPressSearchLink(searchContext);
  const obj6 = searchContext(fileOrLinkImageDimensions[6]);
  const onPressGuildVoiceChannel = obj6.useOnPressGuildVoiceChannel({ searchContext });
  const obj7 = searchContext(fileOrLinkImageDimensions[7]);
  const obj8 = { searchContext, tab, placeholderHeight: onPressGuildVoiceChannel, numColumns: placeholderCount };
  const searchMessagesLoadingState = obj7.useSearchMessagesLoadingState(obj8);
  placeholderCount = searchMessagesLoadingState.placeholderCount;
  let items = [onPressMessageItem, searchContext];
  ({ isFirstPageLoading, isNextPageLoading } = searchMessagesLoadingState);
  const spacing = onPressMessageItem.useCallback((arg0, index) => {
    let channelId;
    let messageId;
    ({ channelId, messageId } = arg0);
    const obj = BaseMessagesScreen;
    const obj2 = { searchContext, channelId, messageId, index };
    const result = obj.trackMessageItemPress(obj2);
    onPressMessageItem(channelId, messageId);
  }, items);
  const items1 = [onPressSearchLink, searchContext];
  const callback1 = onPressMessageItem.useCallback((arg0, index) => {
    let channelId;
    let messageId;
    let trusted;
    let url;
    ({ channelId, messageId, url, trusted } = arg0);
    const obj = BaseMessagesScreen;
    const obj2 = { searchContext, channelId, messageId, index };
    const result = obj.trackMessageItemPress(obj2);
    onPressSearchLink(url, trusted);
  }, items1);
  const items2 = [onPressGuildVoiceChannel, searchContext];
  const callback2 = onPressMessageItem.useCallback((arg0, index) => {
    let channelId;
    let mentionedChannelId;
    let messageId;
    ({ channelId, messageId, mentionedChannelId } = arg0);
    const obj = BaseMessagesScreen;
    const obj2 = { searchContext, channelId, messageId, index };
    const result = obj.trackMessageItemPress(obj2);
    onPressGuildVoiceChannel(mentionedChannelId);
  }, items2);
  const items3 = [callback2, callback1, spacing, fileOrLinkImageDimensions, searchMessages, placeholderCount, searchContext];
  const memo = onPressMessageItem.useMemo(() => {
    let imageStyle;
    let obj2;
    let obj3;
    let obj4;
    const items = [];
    let closure_1 = 0;
    const arr2 = closure_1;
    if (closure_1 != null) {
      let item = arr2.forEach((item) => {
        let obj = SearchPlatformUtils;
        const links = obj.getLinks(searchContext, item);
        item = links.forEach((data, index) => {
          let obj;
          let obj2;
          let obj3;
          const sum = closure_1_1 + index;
          const element = { type: onPressSearchLink.LINK, props: obj };
          const push = navigation.push;
          obj = {
            data,
            onPress(arg0) {
              return closure_2_7(arg0, sum);
            },
            onPressSearchLink(url) {
              return closure_2_8(url, sum);
            },
            onPressGuildVoiceChannelMention(arg0) {
              return closure_2_9(arg0, sum);
            },
            imageStyle,
            containerStyle: obj3.getGridItemSpacingStyles(obj2)
          };
          obj2 = { itemIndex: sum, spacing, numColumns: placeholderCount };
          obj3 = searchContext(fileOrLinkImageDimensions[9]);
          push(element);
        });
        closure_1 = closure_1 + links.length;
      });
    }
    if (placeholderCount > 0) {
      let num;
      let obj = { numColumns: placeholderCount, numResults: items.length, placeholderCount: tmp2 };
      const obj5 = searchContext(fileOrLinkImageDimensions[10]);
      const adjustedPlaceholderCount = obj5.getAdjustedPlaceholderCount(obj);
      for (let num = 0; num < adjustedPlaceholderCount; num = num + 1) {
        let element = { type: onPressSearchLink.FILE_OR_LINK_PLACEHOLDER, key: "file-or-link-placeholder-" + num, props: obj2 };
        let _HermesInternal = HermesInternal;
        let push = items.push;
        obj2 = { imageStyle: fileOrLinkImageDimensions, containerStyle: obj3.getGridItemSpacingStyles(obj4) };
        obj3 = searchContext(fileOrLinkImageDimensions[9]);
        obj4 = { itemIndex: length + num, spacing, numColumns: placeholderCount };
        let arr = push(element);
      }
    }
    return items;
  }, items3);
  const obj9 = { data: memo, searchContext, tab, isFocused, contentContainerStyle: contentContainerStyles.filesOrLinksContentContainer, ItemSeparatorComponent: searchContext(fileOrLinkImageDimensions[11]).CardVerticalSeparator, numColumns: placeholderCount, isFirstPageLoading, isNextPageLoading };
  const tmp12 = searchMessages(fileOrLinkImageDimensions[8]);
  return callback1(tmp12, obj9);
});
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/LinksScreen.tsx");

export default memoResult;
