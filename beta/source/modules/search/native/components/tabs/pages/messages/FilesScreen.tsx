// Module ID: 16532
// Function ID: 16533
// Name: FilesScreen
// Dependencies: [19, 7303, 21, 16518, 16525, 16533, 16458, 16527, 16526, 11821, 16531, 16465, 2]

// Module 16532 (FilesScreen)
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
const memoResult = react.memo(function FilesScreen(searchContext) {
  let isFirstPageLoading;
  let isFocused;
  let isNextPageLoading;
  let spacing;
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
  let items = [onPressMessageItem, searchContext];
  const callback = onPressMessageItem.useCallback((arg0, index) => {
    let channelId;
    let messageId;
    ({ channelId, messageId } = arg0);
    const obj = BaseMessagesScreen;
    const obj2 = { searchContext, channelId, messageId, index };
    const result = obj.trackMessageItemPress(obj2);
    onPressMessageItem(channelId, messageId);
  }, items);
  let obj5 = searchContext(fileOrLinkImageDimensions[8]);
  const obj6 = { searchContext, tab, placeholderHeight: placeholderCount, numColumns };
  const searchMessagesLoadingState = obj5.useSearchMessagesLoadingState(obj6);
  placeholderCount = searchMessagesLoadingState.placeholderCount;
  const items1 = [callback, fileOrLinkImageDimensions, searchMessages, placeholderCount];
  ({ isFirstPageLoading, isNextPageLoading } = searchMessagesLoadingState);
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
        const files = obj.getFiles(item);
        item = files.forEach((data, index) => {
          let obj;
          let obj2;
          let obj3;
          const sum = closure_1_1 + index;
          const element = { type: callback.FILE, props: obj };
          const push = navigation.push;
          obj = {
            data,
            onPress(arg0) {
              return closure_2_4(arg0, sum);
            },
            imageStyle,
            containerStyle: obj3.getGridItemSpacingStyles(obj2)
          };
          obj2 = { itemIndex: sum, spacing, numColumns };
          obj3 = searchContext(fileOrLinkImageDimensions[9]);
          push(element);
        });
        closure_1 = closure_1 + files.length;
      });
    }
    if (placeholderCount > 0) {
      let num;
      let obj = { numColumns, numResults: items.length, placeholderCount: tmp2 };
      const obj5 = searchContext(fileOrLinkImageDimensions[10]);
      const adjustedPlaceholderCount = obj5.getAdjustedPlaceholderCount(obj);
      for (let num = 0; num < adjustedPlaceholderCount; num = num + 1) {
        let element = { type: callback.FILE_OR_LINK_PLACEHOLDER, key: "file-or-link-placeholder-" + num, props: obj2 };
        let _HermesInternal = HermesInternal;
        let push = items.push;
        obj2 = { imageStyle: fileOrLinkImageDimensions, containerStyle: obj3.getGridItemSpacingStyles(obj4) };
        obj3 = searchContext(fileOrLinkImageDimensions[9]);
        obj4 = { itemIndex: length + num, spacing, numColumns };
        let arr = push(element);
      }
    }
    return items;
  }, items1);
  let tmp8 = searchMessages(fileOrLinkImageDimensions[7]);
  return <tmp8 data={memo} searchContext={searchContext} tab={tab} isFocused={isFocused} contentContainerStyle={contentContainerStyles.filesOrLinksContentContainer} ItemSeparatorComponent={searchContext(fileOrLinkImageDimensions[11]).CardVerticalSeparator} numColumns={numColumns} isFirstPageLoading={isFirstPageLoading} isNextPageLoading={isNextPageLoading} />;
});
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/FilesScreen.tsx");

export default memoResult;
