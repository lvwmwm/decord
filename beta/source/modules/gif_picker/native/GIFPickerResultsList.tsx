// Module ID: 9839
// Function ID: 9840
// Name: GIFPickerResultsList
// Dependencies: [32, 19, 21, 4836, 9830, 9746, 9840, 8179, 9783, 2]
// Exports: default

// Module 9839 (GIFPickerResultsList)
import Fragment from "Fragment" /* 21 */;
import gif_picker_GIFPickerUtils from "gif_picker/GIFPickerUtils" /* 9830 */;
import GIFPickerItemView from "GIFPickerItemView" /* 9840 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const GIFPickerItemViewDefault = GIFPickerItemView;
let changed, set, src, viewedItemIndexes;

let obj2;
let react = react_mod;
const jsx = Fragment.jsx;
let obj = { list: obj2 };
obj2 = { marginHorizontal: -gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING / 2 };
let closure_6 = createStyles.createStyles(obj);
let obj3 = { length: 20 };
const arr = Array.from(obj3);
let closure_7 = arr.map(() => {

});
const arr2 = Array.from(obj3);
let closure_8 = arr2.map(() => {
  size = { width: 100, height: Math.floor(91 * Math.random()) + 90 };
  return size;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerResultsList.tsx");

export default function GIFPickerResultsList(columnWidth) {
  let ListFooterComponent;
  let MasonryFlashList;
  let c0;
  let columns;
  let inActionSheet;
  let keyboardDismissMode;
  let loading;
  let onPressGIF;
  let resultItems;
  let selectedGifSrc;
  let tmp12;
  let tmp6;
  const f115257 = () => {
    set = new Set();
    return set;
  };
  columnWidth = columnWidth.columnWidth;
  ({ resultItems, onPressGIF } = columnWidth);
  ({ inActionSheet, selectedGifSrc } = columnWidth);
  let callback;
  react = undefined;
  ({ columns, ListFooterComponent, loading, keyboardDismissMode } = columnWidth);
  let tmp = closure_6();
  const safeAreaBottomKeyboardAware = onPressGIF(selectedGifSrc[5])({ hasCategories: false }).safeAreaBottomKeyboardAware;
  if (loading) {
    resultItems = closure_7;
  }
  const items = [columnWidth];
  callback = react.useCallback((arg0, arg1) => ({ height: columnWidth / (arg0 / arg1) }), items);
  c0 = undefined;
  const callback1 = react.useCallback((src, arg1) => {
    src = undefined;
    if (src != null) {
      src = src.src;
    }
    if (src == null) {
      src = arg1.toString();
    }
    return src;
  }, []);
  [tmp6, c0] = callback(react.useState(f115257), 2);
  const tmp5 = callback(react.useState(f115257), 2);
  react = tmp6;
  const items1 = [tmp6, selectedGifSrc];
  const callback2 = react.useCallback((changed) => {
    changed = changed.changed;
    let tmp = _undefined((items) => {
      set = new Set(items);
      const item = changed.forEach((item) => {
        const index = item.index;
        const tmp = null !== index && item.isViewable;
        if (tmp) {
          set.add(index);
        }
      });
      return set;
    });
  }, []);
  const items2 = [onPressGIF, callback];
  const memo = react.useMemo(() => ({ viewedItemIndexes, selectedGifSrc }), items1);
  const callback3 = react.useCallback((arg0) => {
    let extraData;
    let index;
    let item;
    let tmp8;
    ({ item, index, extraData } = arg0);
    if (null == item) {
      size = closure_8[index];
      return jsx(GIFPickerItemView.GIFPickerItemPlaceholder, { height: callback(size.width, size.height).height });
    } else {
      let tmp15Result;
      const height = callback(item.width, item.height).height;
      viewedItemIndexes = extraData.viewedItemIndexes;
      if (viewedItemIndexes.has(index)) {
        const obj3 = { height, index, item, onPressGIF, selected: tmp8 };
        tmp8 = undefined;
        const tmp6 = GIFPickerItemViewDefault;
        if (null != extraData.selectedGifSrc) {
          tmp8 = item.src === extraData.selectedGifSrc;
        }
        tmp15Result = tmp15(tmp6, obj3);
      } else {
        const obj = { height };
        tmp15Result = tmp15(GIFPickerItemView.GIFPickerItemPlaceholder, obj);
      }
      return tmp15Result;
    }
  }, items2);
  const tmp11 = columnWidth(selectedGifSrc[7]);
  if (inActionSheet) {
    MasonryFlashList = tmp11.BottomSheetMasonryFlashList;
    tmp12 = tmp10;
  } else {
    MasonryFlashList = tmp11.MasonryFlashList;
    tmp12 = tmp10;
  }
  let obj = { contentContainerStyle: { paddingBottom: safeAreaBottomKeyboardAware }, data: resultItems, drawDistance: tmp12(tmp2[4]).GIF_PICKER_ITEM_ESIMTATED_HEIGHT, extraData: memo, keyExtractor: callback1, keyboardDismissMode, keyboardShouldPersistTaps: "always", maintainVisibleContentPosition: { disabled: true }, numColumns: columns, ListFooterComponent, optimizeItemArrangement: true, onViewableItemsChanged: callback2, preventNativeModalDismiss: inActionSheet, renderItem: callback3, style: tmp.list };
  const tmp12Result = tmp12(selectedGifSrc[8]);
  const isPortalKeyboardInModal = tmp12Result.useIsPortalKeyboardInModal();
  const tmp14 = jsx;
  if (inActionSheet) {
    inActionSheet = isPortalKeyboardInModal;
  }
  return tmp14(MasonryFlashList, obj);
};
