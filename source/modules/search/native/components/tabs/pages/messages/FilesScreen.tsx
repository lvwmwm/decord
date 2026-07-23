// Module ID: 15392
// Function ID: 117471
// Dependencies: [31, 9103, 33, 15380, 15385, 15393, 15337, 15387, 15386, 11398, 15391, 15343, 2]

// Module 15392
import importAllResult from "result";
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";
import { jsx } from "jsxProd";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ SearchListItemTypes: closure_4, CARD_ESTIMATED_ITEM_SIZE: closure_5, FILES_OR_LINKS_NUM_COLUMNS: closure_6, FILES_OR_LINKS_GAP_WIDTH: closure_7 } = SearchAutocompleteSelectAnalyticsActions);
const memoResult = importAllResult.memo(function FilesScreen(searchContext) {
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
  let items = [onPressMessageItem, searchContext];
  const callback = onPressMessageItem.useCallback((arg0, index) => {
    let channelId;
    let messageId;
    ({ channelId, messageId } = arg0);
    let obj = searchContext(fileOrLinkImageDimensions[7]);
    obj = { searchContext, channelId, messageId, index };
    const result = obj.trackMessageItemPress(obj);
    onPressMessageItem(channelId, messageId);
  }, items);
  const obj4 = searchContext(fileOrLinkImageDimensions[6]);
  obj = { searchContext, tab, placeholderHeight: placeholderCount, numColumns: closure_6 };
  const searchMessagesLoadingState = searchContext(fileOrLinkImageDimensions[8]).useSearchMessagesLoadingState(obj);
  placeholderCount = searchMessagesLoadingState.placeholderCount;
  const items1 = [callback, fileOrLinkImageDimensions, searchMessages, placeholderCount];
  ({ isFirstPageLoading, isNextPageLoading } = searchMessagesLoadingState);
  const memo = onPressMessageItem.useMemo(() => {
    const items = [];
    const searchMessages = 0;
    if (null != searchMessages) {
      let item = searchMessages.forEach((id) => {
        const files = searchContext(fileOrLinkImageDimensions[9]).getFiles(id);
        const item = files.forEach((data) => {
          const sum = closure_1 + arg1;
          let closure_0 = sum;
          let obj = { type: callback.FILE };
          obj = {
            data,
            onPress(arg0) {
              return outer3_4(arg0, closure_0);
            },
            imageStyle: outer2_2
          };
          obj = { itemIndex: sum, spacing: outer3_7, numColumns: outer3_6 };
          obj.containerStyle = searchContext(fileOrLinkImageDimensions[9]).getGridItemSpacingStyles(obj);
          obj.props = obj;
          outer1_0.push(obj);
        });
        closure_1 = closure_1 + files.length;
      });
    }
    if (placeholderCount > 0) {
      let obj = { numColumns: outer1_6, numResults: items.length, placeholderCount };
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
        let tmp7 = outer1_7;
        obj1.spacing = outer1_7;
        let tmp8 = outer1_6;
        obj1.numColumns = outer1_6;
        obj.containerStyle = obj3.getGridItemSpacingStyles(obj1);
        obj.props = obj;
        let arr = items.push(obj);
      }
      const obj5 = searchContext(fileOrLinkImageDimensions[10]);
    }
    return items;
  }, items1);
  obj = { data: memo, searchContext, tab, isFocused, contentContainerStyle: contentContainerStyles.filesOrLinksContentContainer };
  let obj5 = searchContext(fileOrLinkImageDimensions[8]);
  obj.ItemSeparatorComponent = searchContext(fileOrLinkImageDimensions[11]).CardVerticalSeparator;
  obj.numColumns = closure_6;
  obj.isFirstPageLoading = isFirstPageLoading;
  obj.isNextPageLoading = isNextPageLoading;
  return jsx(searchMessages(fileOrLinkImageDimensions[7]), { data: memo, searchContext, tab, isFocused, contentContainerStyle: contentContainerStyles.filesOrLinksContentContainer });
});
let result = require("jsxProd").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/FilesScreen.tsx");

export default memoResult;
