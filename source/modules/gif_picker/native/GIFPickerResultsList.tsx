// Module ID: 9583
// Function ID: 74631
// Name: GIFPickerResultsList
// Dependencies: []
// Exports: default

// Module 9583 (GIFPickerResultsList)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const obj = { length: 20 };
let arr = Array.from(obj);
let closure_6 = arr.map(() => {

});
arr = Array.from(obj);
let closure_7 = arr.map(() => ({ width: 100, height: Math.floor(91 * Math.random()) + 90 }));
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/gif_picker/native/GIFPickerResultsList.tsx");

export default function GIFPickerResultsList(columnWidth) {
  let ListFooterComponent;
  let columns;
  let inActionSheet;
  let keyboardDismissMode;
  let loading;
  let onPressGIF;
  let resultItems;
  columnWidth = columnWidth.columnWidth;
  const arg1 = columnWidth;
  ({ resultItems, onPressGIF } = columnWidth);
  const importDefault = onPressGIF;
  const selectedGifSrc = columnWidth.selectedGifSrc;
  const dependencyMap = selectedGifSrc;
  let closure_3;
  let React;
  ({ columns, inActionSheet, ListFooterComponent, loading, keyboardDismissMode } = columnWidth);
  if (loading) {
    resultItems = closure_6;
  }
  const items = [columnWidth];
  const callback = React.useCallback((arg0, arg1) => ({ height: columnWidth / (arg0 / arg1) }), items);
  closure_3 = callback;
  const callback1 = React.useCallback((src) => {
    src = undefined;
    if (null != src) {
      src = src.src;
    }
    if (null == src) {
      src = arg1.toString();
    }
    return src;
  }, []);
  const tmp3 = function useViewedItemIndexes() {
    const tmp = callback(viewedItemIndexes.useState(() => new Set()), 2);
    let closure_0 = tmp[1];
    return {
      viewedItemIndexes: tmp[0],
      onViewableItemsChanged: viewedItemIndexes.useCallback((changed) => {
        const callback = changed.changed;
        callback((items) => {
          const set = new Set(items);
          const changed = set;
          const item = changed.forEach((index) => {
            index = index.index;
            if (tmp) {
              set.add(index);
            }
          });
          return set;
        });
      }, [])
    };
  }();
  const viewedItemIndexes = tmp3.viewedItemIndexes;
  React = viewedItemIndexes;
  const items1 = [viewedItemIndexes, selectedGifSrc];
  const items2 = [onPressGIF, callback];
  const memo = React.useMemo(() => ({ viewedItemIndexes, selectedGifSrc }), items1);
  const callback2 = React.useCallback((arg0) => {
    let extraData;
    let index;
    let item;
    ({ item, index, extraData } = arg0);
    if (null == item) {
      const size = closure_7[index];
      let obj = { height: callback(size.width, size.height).height };
      return callback(columnWidth(selectedGifSrc[4]).GIFPickerItemPlaceholder, obj);
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
  const tmp6 = arg1(dependencyMap[5]);
  const obj = { contentContainerStyle: { paddingBottom: importDefault(dependencyMap[3])({ hasCategories: false }).safeAreaBottomKeyboardAware }, data: resultItems, drawDistance: arg1(dependencyMap[6]).GIF_PICKER_ITEM_ESIMTATED_HEIGHT, extraData: memo, keyExtractor: callback1, keyboardDismissMode, keyboardShouldPersistTaps: "always", numColumns: columns, ListFooterComponent, optimizeItemArrangement: true, onViewableItemsChanged: tmp3.onViewableItemsChanged, renderItem: callback2 };
  return jsx(inActionSheet ? tmp6.BottomSheetMasonryFlashList : tmp6.MasonryFlashList, obj);
};
