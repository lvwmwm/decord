// Module ID: 15266
// Function ID: 115230
// Dependencies: []

// Module 15266
const importAllResult = importAll(dependencyMap[0]);
({ SearchListItemTypes: closure_4, CARD_ESTIMATED_ITEM_SIZE: closure_5, FILES_OR_LINKS_NUM_COLUMNS: closure_6, FILES_OR_LINKS_GAP_WIDTH: closure_7 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const tmp2 = arg1(dependencyMap[1]);
const memoResult = importAllResult.memo(function LinksScreen(searchContext) {
  let isFirstPageLoading;
  let isFocused;
  let isNextPageLoading;
  let width;
  searchContext = searchContext.searchContext;
  const arg1 = searchContext;
  const tab = searchContext.tab;
  ({ isFocused, width } = searchContext);
  let obj = arg1(dependencyMap[3]);
  const contentContainerStyles = obj.useContentContainerStyles();
  const searchMessages = arg1(dependencyMap[4]).useSearchMessages(searchContext, tab);
  const importDefault = searchMessages;
  const obj2 = arg1(dependencyMap[4]);
  const fileOrLinkImageDimensions = arg1(dependencyMap[5]).useFileOrLinkImageDimensions(width);
  const dependencyMap = fileOrLinkImageDimensions;
  const obj3 = arg1(dependencyMap[5]);
  const onPressMessageItem = arg1(dependencyMap[6]).useOnPressMessageItem({ searchContext });
  const obj4 = arg1(dependencyMap[6]);
  const onPressSearchLink = arg1(dependencyMap[6]).useOnPressSearchLink(searchContext);
  const obj5 = arg1(dependencyMap[6]);
  const onPressGuildVoiceChannel = arg1(dependencyMap[6]).useOnPressGuildVoiceChannel({ searchContext });
  const obj6 = arg1(dependencyMap[6]);
  obj = { searchContext, tab, placeholderHeight: onPressGuildVoiceChannel, numColumns: placeholderCount };
  const searchMessagesLoadingState = arg1(dependencyMap[7]).useSearchMessagesLoadingState(obj);
  const placeholderCount = searchMessagesLoadingState.placeholderCount;
  const items = [onPressMessageItem, searchContext];
  ({ isFirstPageLoading, isNextPageLoading } = searchMessagesLoadingState);
  const callback = importAllResult.useCallback((arg0, index) => {
    let channelId;
    let messageId;
    ({ channelId, messageId } = arg0);
    let obj = searchContext(fileOrLinkImageDimensions[8]);
    obj = { searchContext, channelId, messageId, index };
    const result = obj.trackMessageItemPress(obj);
    onPressMessageItem(channelId, messageId);
  }, items);
  const items1 = [onPressSearchLink, searchContext];
  const callback1 = importAllResult.useCallback((arg0, index) => {
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
  const jsx = callback1;
  const items2 = [onPressGuildVoiceChannel, searchContext];
  const callback2 = importAllResult.useCallback((arg0, index) => {
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
  const memo = importAllResult.useMemo(() => {
    const items = [];
    const searchContext = items;
    const searchMessages = 0;
    if (null != searchMessages) {
      const item = searchMessages.forEach((getContentMessage) => {
        const links = items(closure_2[9]).getLinks(items, getContentMessage);
        const item = links.forEach((data) => {
          const sum = closure_1 + arg1;
          let obj = { type: constants.LINK };
          obj = {
            data,
            onPress(arg0) {
              return callback(arg0, sum);
            },
            onPressSearchLink(url, trusted) {
              return callback2(url, sum);
            },
            onPressGuildVoiceChannelMention(arg0) {
              return callback3(arg0, sum);
            },
            imageStyle: closure_2
          };
          obj = { itemIndex: sum, spacing: closure_7, numColumns: closure_6 };
          obj.containerStyle = sum(closure_2[9]).getGridItemSpacingStyles(obj);
          obj.props = obj;
          sum.push(obj);
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
  const obj7 = arg1(dependencyMap[7]);
  obj.ItemSeparatorComponent = arg1(dependencyMap[11]).CardVerticalSeparator;
  obj.numColumns = placeholderCount;
  obj.isFirstPageLoading = isFirstPageLoading;
  obj.isNextPageLoading = isNextPageLoading;
  return jsx(importDefault(dependencyMap[8]), obj);
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/search/native/components/tabs/pages/messages/LinksScreen.tsx");

export default memoResult;
