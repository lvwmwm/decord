// Module ID: 15264
// Function ID: 115220
// Dependencies: []

// Module 15264
const importAllResult = importAll(dependencyMap[0]);
({ SearchListItemTypes: closure_4, CARD_ESTIMATED_ITEM_SIZE: closure_5, FILES_OR_LINKS_NUM_COLUMNS: closure_6, FILES_OR_LINKS_GAP_WIDTH: closure_7 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const tmp2 = arg1(dependencyMap[1]);
const memoResult = importAllResult.memo(function FilesScreen(searchContext) {
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
  const items = [onPressMessageItem, searchContext];
  const callback = importAllResult.useCallback((arg0, index) => {
    let channelId;
    let messageId;
    ({ channelId, messageId } = arg0);
    let obj = searchContext(fileOrLinkImageDimensions[7]);
    obj = { searchContext, channelId, messageId, index };
    const result = obj.trackMessageItemPress(obj);
    onPressMessageItem(channelId, messageId);
  }, items);
  const obj4 = arg1(dependencyMap[6]);
  obj = { searchContext, tab, placeholderHeight: placeholderCount, numColumns: closure_6 };
  const searchMessagesLoadingState = arg1(dependencyMap[8]).useSearchMessagesLoadingState(obj);
  const placeholderCount = searchMessagesLoadingState.placeholderCount;
  const items1 = [callback, fileOrLinkImageDimensions, searchMessages, placeholderCount];
  ({ isFirstPageLoading, isNextPageLoading } = searchMessagesLoadingState);
  const memo = importAllResult.useMemo(() => {
    const items = [];
    const searchContext = items;
    const searchMessages = 0;
    if (null != searchMessages) {
      const item = searchMessages.forEach((id) => {
        const files = items(closure_2[9]).getFiles(id);
        const item = files.forEach((data) => {
          const sum = closure_1 + arg1;
          let obj = { type: constants.FILE };
          obj = {
            data,
            onPress(arg0) {
              return callback(arg0, sum);
            },
            imageStyle: closure_2
          };
          obj = { itemIndex: sum, spacing: closure_7, numColumns: closure_6 };
          obj.containerStyle = sum(closure_2[9]).getGridItemSpacingStyles(obj);
          obj.props = obj;
          sum.push(obj);
        });
        closure_1 = closure_1 + files.length;
      });
    }
    if (placeholderCount > 0) {
      let obj = { numColumns: closure_6, numResults: items.length, placeholderCount };
      const adjustedPlaceholderCount = searchContext(fileOrLinkImageDimensions[10]).getAdjustedPlaceholderCount(obj);
      for (let num = 0; num < adjustedPlaceholderCount; num = num + 1) {
        obj = {};
        let tmp3 = callback;
        obj.type = callback.FILE_OR_LINK_PLACEHOLDER;
        let _HermesInternal = HermesInternal;
        obj.key = "file-or-link-placeholder-" + num;
        obj = {};
        let tmp4 = fileOrLinkImageDimensions;
        obj.imageStyle = fileOrLinkImageDimensions;
        let tmp5 = searchContext;
        let tmp6 = fileOrLinkImageDimensions;
        let obj3 = searchContext(fileOrLinkImageDimensions[9]);
        let obj1 = { itemIndex: length + num };
        let tmp7 = closure_7;
        obj1.spacing = closure_7;
        let tmp8 = closure_6;
        obj1.numColumns = closure_6;
        obj.containerStyle = obj3.getGridItemSpacingStyles(obj1);
        obj.props = obj;
        let arr = items.push(obj);
      }
      const obj5 = searchContext(fileOrLinkImageDimensions[10]);
    }
    return items;
  }, items1);
  obj = { data: memo, searchContext, tab, isFocused, contentContainerStyle: contentContainerStyles.filesOrLinksContentContainer };
  const obj5 = arg1(dependencyMap[8]);
  obj.ItemSeparatorComponent = arg1(dependencyMap[11]).CardVerticalSeparator;
  obj.numColumns = closure_6;
  obj.isFirstPageLoading = isFirstPageLoading;
  obj.isNextPageLoading = isNextPageLoading;
  return jsx(importDefault(dependencyMap[7]), obj);
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/search/native/components/tabs/pages/messages/FilesScreen.tsx");

export default memoResult;
