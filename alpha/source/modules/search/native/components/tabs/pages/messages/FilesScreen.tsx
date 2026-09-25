// Module ID: 16499
// Function ID: 16500
// Name: FilesScreen
// Dependencies: [19, 7298, 21, 16485, 16492, 16500, 16425, 16494, 16493, 11807, 16498, 16432, 2]

// Module 16499 (FilesScreen)
import SearchPlatformUtils from "SearchPlatformUtils" /* 11807 */;
import BaseMessagesScreen from "BaseMessagesScreen" /* 16494 */;
import noop from "module_19" /* 19 */;

require = fn;
const SearchConstants = fn(7298);
({ SearchListItemTypes: closure_4, CARD_ESTIMATED_ITEM_SIZE: hasOwnProperty, FILES_OR_LINKS_NUM_COLUMNS: metroRequire, FILES_OR_LINKS_GAP_WIDTH: closure_7 } = SearchConstants);
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/FilesScreen.tsx");

export default noop.memo(function FilesScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const tab = searchContext.tab;
  let fileOrLinkImageDimensions;
  let placeholderCount;
  ({ isFocused, width } = searchContext);
  const contentContainerStyles = searchContext(fileOrLinkImageDimensions[3]).useContentContainerStyles();
  let obj = searchContext(fileOrLinkImageDimensions[3]);
  let searchMessages = searchContext(fileOrLinkImageDimensions[4]).useSearchMessages(searchContext, tab);
  let obj2 = searchContext(fileOrLinkImageDimensions[4]);
  fileOrLinkImageDimensions = searchContext(fileOrLinkImageDimensions[5]).useFileOrLinkImageDimensions(width);
  let obj3 = searchContext(fileOrLinkImageDimensions[5]);
  const onPressMessageItem = searchContext(fileOrLinkImageDimensions[6]).useOnPressMessageItem({ searchContext });
  let items = [onPressMessageItem, searchContext];
  const callback = onPressMessageItem.useCallback((arg0, index) => {
    ({ channelId, messageId } = arg0);
    const result = BaseMessagesScreen.trackMessageItemPress({ searchContext, channelId, messageId, index });
    onPressMessageItem(channelId, messageId);
  }, items);
  let obj4 = searchContext(fileOrLinkImageDimensions[6]);
  const searchMessagesLoadingState = searchContext(fileOrLinkImageDimensions[8]).useSearchMessagesLoadingState({ searchContext, tab, placeholderHeight: placeholderCount, numColumns });
  placeholderCount = searchMessagesLoadingState.placeholderCount;
  const items1 = [callback, fileOrLinkImageDimensions, searchMessages, placeholderCount];
  ({ isFirstPageLoading, isNextPageLoading } = searchMessagesLoadingState);
  const memo = onPressMessageItem.useMemo(() => {
    const items = [];
    searchMessages = 0;
    if (searchMessages != null) {
      let item = searchMessages.forEach((item) => {
        const files = SearchPlatformUtils.getFiles(item);
        item = files.forEach((data, index) => {
          const sum = closure_1_1 + index;
          closure_0 = sum;
          const element = { type: callback.FILE, props: null };
          const obj = {
            data,
            onPress(arg0) {
              return closure_2_4(arg0, sum);
            },
            imageStyle,
            containerStyle: searchContext(fileOrLinkImageDimensions[9]).getGridItemSpacingStyles({ itemIndex: sum, spacing, numColumns })
          };
          element.props = obj;
          items.push(element);
        });
        closure_1 = closure_1 + files.length;
      });
    }
    if (placeholderCount > 0) {
      let obj = { numColumns, numResults: items.length, placeholderCount: tmp2 };
      const adjustedPlaceholderCount = searchContext(fileOrLinkImageDimensions[10]).getAdjustedPlaceholderCount(obj);
      for (let num = 0; num < adjustedPlaceholderCount; num = num + 1) {
        let element = { type: null, key: null, props: null };
        element.type = callback.FILE_OR_LINK_PLACEHOLDER;
        let _HermesInternal = HermesInternal;
        element.key = "file-or-link-placeholder-" + num;
        let obj2 = { imageStyle: null, containerStyle: null };
        obj2.imageStyle = fileOrLinkImageDimensions;
        let obj3 = searchContext(fileOrLinkImageDimensions[9]);
        let obj4 = { itemIndex: length + num, spacing: null, numColumns: null };
        obj4.spacing = spacing;
        obj4.numColumns = numColumns;
        obj2.containerStyle = obj3.getGridItemSpacingStyles(obj4);
        element.props = obj2;
        let arr = items.push(element);
      }
      const obj5 = searchContext(fileOrLinkImageDimensions[10]);
    }
    return items;
  }, items1);
  const obj7 = { data: memo, searchContext, tab, isFocused, contentContainerStyle: contentContainerStyles.filesOrLinksContentContainer, ItemSeparatorComponent: null, numColumns: null, isFirstPageLoading: null, isNextPageLoading: null };
  let obj5 = searchContext(fileOrLinkImageDimensions[8]);
  const obj6 = { searchContext, tab, placeholderHeight: placeholderCount, numColumns };
  obj7.ItemSeparatorComponent = searchContext(fileOrLinkImageDimensions[11]).CardVerticalSeparator;
  obj7.numColumns = numColumns;
  obj7.isFirstPageLoading = isFirstPageLoading;
  obj7.isNextPageLoading = isNextPageLoading;
  return jsx(searchMessages(fileOrLinkImageDimensions[7]), { data: memo, searchContext, tab, isFocused, contentContainerStyle: contentContainerStyles.filesOrLinksContentContainer, ItemSeparatorComponent: null, numColumns: null, isFirstPageLoading: null, isNextPageLoading: null });
});
