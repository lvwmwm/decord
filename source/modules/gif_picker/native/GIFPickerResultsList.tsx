// Module ID: 9548
// Function ID: 74495
// Name: GIFPickerResultsList
// Dependencies: [57, 31, 33, 9529, 9549, 6619, 9330, 9539, 2]
// Exports: default

// Module 9548 (GIFPickerResultsList)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
let obj = { length: 20 };
let arr = Array.from(obj);
let closure_6 = arr.map(() => {

});
arr = Array.from(obj);
let closure_7 = arr.map(() => ({ width: 100, height: Math.floor(91 * Math.random()) + 90 }));
const result = require("jsxProd").fileFinishedImporting("modules/gif_picker/native/GIFPickerResultsList.tsx");

export default function GIFPickerResultsList(columnWidth) {
  let ListFooterComponent;
  let columns;
  let inActionSheet;
  let keyboardDismissMode;
  let loading;
  let onPressGIF;
  let resultItems;
  let selectedGifSrc;
  columnWidth = columnWidth.columnWidth;
  ({ resultItems, onPressGIF } = columnWidth);
  ({ inActionSheet, selectedGifSrc } = columnWidth);
  let callback;
  let viewedItemIndexes;
  ({ columns, ListFooterComponent, loading, keyboardDismissMode } = columnWidth);
  if (loading) {
    resultItems = closure_6;
  }
  const items = [columnWidth];
  callback = viewedItemIndexes.useCallback((arg0, arg1) => ({ height: columnWidth / (arg0 / arg1) }), items);
  const callback1 = viewedItemIndexes.useCallback((src) => {
    src = undefined;
    if (null != src) {
      src = src.src;
    }
    if (null == src) {
      src = arg1.toString();
    }
    return src;
  }, []);
  const tmp3 = (function useViewedItemIndexes() {
    const tmp = callback(viewedItemIndexes.useState(() => new Set()), 2);
    let closure_0 = tmp[1];
    return {
      viewedItemIndexes: tmp[0],
      onViewableItemsChanged: viewedItemIndexes.useCallback((changed) => {
        changed = changed.changed;
        changed((items) => {
          const set = new Set(items);
          const item = set.forEach((index) => {
            index = index.index;
            if (tmp) {
              set.add(index);
            }
          });
          return set;
        });
      }, [])
    };
  })();
  viewedItemIndexes = tmp3.viewedItemIndexes;
  const items1 = [viewedItemIndexes, selectedGifSrc];
  const items2 = [onPressGIF, callback];
  const memo = viewedItemIndexes.useMemo(() => ({ viewedItemIndexes, selectedGifSrc }), items1);
  const callback2 = viewedItemIndexes.useCallback((arg0) => {
    let extraData;
    let index;
    let item;
    ({ item, index, extraData } = arg0);
    if (null == item) {
      const size = outer1_7[index];
      let obj = { height: callback(size.width, size.height).height };
      return outer1_5(columnWidth(selectedGifSrc[4]).GIFPickerItemPlaceholder, obj);
    } else {
      const height = callback(item.width, item.height).height;
      const viewedItemIndexes = extraData.viewedItemIndexes;
      if (viewedItemIndexes.has(index)) {
        obj = { height, index, item, onPressGIF };
        let tmp8;
        if (null != extraData.selectedGifSrc) {
          tmp8 = item.src === extraData.selectedGifSrc;
        }
        obj.selected = tmp8;
        let tmp15Result = tmp15(onPressGIF(selectedGifSrc[4]), obj);
        const tmp6 = onPressGIF(selectedGifSrc[4]);
      } else {
        obj = { height };
        tmp15Result = tmp15(columnWidth(selectedGifSrc[4]).GIFPickerItemPlaceholder, obj);
      }
      return tmp15Result;
    }
  }, items2);
  let tmp6 = columnWidth(selectedGifSrc[5]);
  let obj = columnWidth(selectedGifSrc[6]);
  obj = { contentContainerStyle: { paddingBottom: onPressGIF(selectedGifSrc[3])({ hasCategories: false }).safeAreaBottomKeyboardAware }, data: resultItems };
  const isPortalKeyboardInModal = obj.useIsPortalKeyboardInModal();
  obj.drawDistance = columnWidth(selectedGifSrc[7]).GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
  obj.extraData = memo;
  obj.keyExtractor = callback1;
  obj.keyboardDismissMode = keyboardDismissMode;
  obj.keyboardShouldPersistTaps = "always";
  obj.numColumns = columns;
  obj.ListFooterComponent = ListFooterComponent;
  obj.optimizeItemArrangement = true;
  obj.onViewableItemsChanged = tmp3.onViewableItemsChanged;
  if (inActionSheet) {
    inActionSheet = isPortalKeyboardInModal;
  }
  obj.preventNativeModalDismiss = inActionSheet;
  obj.renderItem = callback2;
  return jsx(inActionSheet ? tmp6.BottomSheetMasonryFlashList : tmp6.MasonryFlashList, { contentContainerStyle: { paddingBottom: onPressGIF(selectedGifSrc[3])({ hasCategories: false }).safeAreaBottomKeyboardAware }, data: resultItems });
};
