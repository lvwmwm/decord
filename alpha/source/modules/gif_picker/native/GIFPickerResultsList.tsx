// Module ID: 9748
// Function ID: 9749
// Name: GIFPickerResultsList
// Dependencies: [32, 19, 21, 5092, 9738, 558, 576, 9731, 9749, 8624, 9528, 2]

// Module 9748 (GIFPickerResultsList)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import gif_picker_GIFPickerUtils from "gif_picker/GIFPickerUtils" /* 9738 */;
import GIFPickerItemView from "GIFPickerItemView" /* 9749 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const GIFPickerItemViewDefault = GIFPickerItemView;
let dependencyMap, set;

let obj2;
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
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function useViewedItemIndexes() {
  let closure_129_0;
  let first;
  let tmp4;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      set = new Set();
      return set;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  [tmp4, closure_129_0] = react.useState(first);
  _slicedToArray(react.useState(first), 2);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function l(changed) {
      changed = changed.changed;
      let tmp = closure_1_0((items) => {
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
    };
    cResult[1] = fn2;
    tmp5 = fn2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp4) {
    const obj2 = { viewedItemIndexes: tmp4, onViewableItemsChanged: tmp5 };
    cResult[2] = tmp4;
    cResult[3] = obj2;
    tmp6 = obj2;
  } else {
    tmp6 = cResult[3];
  }
  return tmp6;
}) : (function useViewedItemIndexes() {
  let tmp = _slicedToArray(react.useState(() => {
    set = new Set();
    return set;
  }), 2);
  let closure_0 = tmp[1];
  const obj = {
    viewedItemIndexes: tmp[0],
    onViewableItemsChanged: react.useCallback((changed) => {
      changed = changed.changed;
      let tmp = closure_0((items) => {
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
    }, [])
  };
  return obj;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function GIFPickerResultsList(loading) {
  let ListFooterComponent;
  let closure_2;
  let columnWidth;
  let columns;
  let first;
  let inActionSheet;
  let keyboardDismissMode;
  let onPressGIF;
  let onViewableItemsChanged;
  let resultItems;
  let selectedGifSrc;
  let tmp6;
  let tmp7;
  let viewedItemIndexes;
  let obj = columnWidth(576);
  const cResult = obj.c(25);
  ({ columns, columnWidth } = loading);
  ({ resultItems, onPressGIF } = loading);
  ({ inActionSheet, ListFooterComponent, selectedGifSrc, keyboardDismissMode } = loading);
  loading = loading.loading;
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { hasCategories: false };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const safeAreaBottomKeyboardAware = onPressGIF(9731)(first).safeAreaBottomKeyboardAware;
  if (loading) {
    resultItems = closure_7;
  }
  if (cResult[1] !== columnWidth) {
    const fn = function _(arg0, arg1) {
      return { height: columnWidth / (arg0 / arg1) };
    };
    cResult[1] = columnWidth;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  dependencyMap = tmp6;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function k(src, arg1) {
      src = undefined;
      if (src != null) {
        src = src.src;
      }
      if (src == null) {
        src = arg1.toString();
      }
      return src;
    };
    cResult[3] = fn2;
    tmp7 = fn2;
  } else {
    tmp7 = cResult[3];
  }
  let tmp8 = closure_9();
  ({ viewedItemIndexes, onViewableItemsChanged } = tmp8);
  if (cResult[4] === selectedGifSrc) {
    let tmp9;
    if (cResult[5] === viewedItemIndexes) {
      tmp9 = cResult[6];
    }
    if (cResult[7] === tmp6) {
      let tmp10;
      let tmp14;
      let tmp15;
      if (cResult[8] === onPressGIF) {
        tmp10 = cResult[9];
      }
      columnWidth(8624);
      class V {
        constructor(arg0) {
          let extraData;
          let index;
          let item;
          let tmp8;
          ({ item, index, extraData } = arg0);
          if (null == item) {
            size = closure_8[index];
            return jsx(GIFPickerItemView.GIFPickerItemPlaceholder, { height: closure_2(size.width, size.height).height });
          } else {
            let tmp15Result;
            const height = closure_2(item.width, item.height).height;
            const viewedItemIndexes = extraData.viewedItemIndexes;
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
        }
      }
      const tmpResult2 = columnWidth(9528);
      const isPortalKeyboardInModal = tmpResult2.useIsPortalKeyboardInModal();
      if (cResult[10] !== safeAreaBottomKeyboardAware) {
        let obj3 = { paddingBottom: safeAreaBottomKeyboardAware };
        class V {
          constructor(arg0) {
            let extraData;
            let index;
            let item;
            let tmp8;
            ({ item, index, extraData } = arg0);
            if (null == item) {
              size = closure_8[index];
              return jsx(GIFPickerItemView.GIFPickerItemPlaceholder, { height: closure_2(size.width, size.height).height });
            } else {
              let tmp15Result;
              const height = closure_2(item.width, item.height).height;
              const viewedItemIndexes = extraData.viewedItemIndexes;
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
          }
        }
        cResult[10] = safeAreaBottomKeyboardAware;
        cResult[11] = obj3;
        tmp14 = obj3;
      } else {
        tmp14 = cResult[11];
      }
      const _Symbol = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { disabled: true };
        class V {
          constructor(arg0) {
            let extraData;
            let index;
            let item;
            let tmp8;
            ({ item, index, extraData } = arg0);
            if (null == item) {
              size = closure_8[index];
              return jsx(GIFPickerItemView.GIFPickerItemPlaceholder, { height: closure_2(size.width, size.height).height });
            } else {
              let tmp15Result;
              const height = closure_2(item.width, item.height).height;
              const viewedItemIndexes = extraData.viewedItemIndexes;
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
          }
        }
        tmp15 = obj4;
      } else {
        tmp15 = cResult[12];
      }
      if (inActionSheet) {
        inActionSheet = isPortalKeyboardInModal;
      }
      if (cResult[13] === tmp12) {
        if (cResult[14] === ListFooterComponent) {
          if (cResult[15] === columns) {
            if (cResult[16] === resultItems) {
              if (cResult[17] === tmp9) {
                if (cResult[18] === keyboardDismissMode) {
                  if (cResult[19] === onViewableItemsChanged) {
                    if (cResult[20] === tmp10) {
                      if (cResult[21] === tmp4.list) {
                        if (cResult[22] === tmp14) {
                          let tmp16;
                          if (cResult[23] === inActionSheet) {
                            tmp16 = cResult[24];
                          }
                          return tmp16;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      const tmp18 = <tmp12 contentContainerStyle={tmp14} data={resultItems} drawDistance={columnWidth(9738).GIF_PICKER_ITEM_ESIMTATED_HEIGHT} extraData={tmp9} keyExtractor={tmp7} keyboardDismissMode={keyboardDismissMode} keyboardShouldPersistTaps="always" maintainVisibleContentPosition={tmp15} numColumns={columns} ListFooterComponent={ListFooterComponent} optimizeItemArrangement onViewableItemsChanged={onViewableItemsChanged} preventNativeModalDismiss={inActionSheet} renderItem={tmp10} style={tmp4.list} />;
      cResult[13] = tmp12;
      cResult[14] = ListFooterComponent;
      cResult[15] = columns;
      cResult[16] = resultItems;
      cResult[17] = tmp9;
      cResult[18] = keyboardDismissMode;
      cResult[19] = onViewableItemsChanged;
      cResult[20] = tmp10;
      cResult[21] = tmp4.list;
      cResult[22] = tmp14;
      cResult[23] = inActionSheet;
      cResult[24] = tmp18;
      tmp16 = tmp18;
    }
    class V {
      constructor(arg0) {
        let extraData;
        let index;
        let item;
        let tmp8;
        ({ item, index, extraData } = arg0);
        if (null == item) {
          size = closure_8[index];
          return jsx(GIFPickerItemView.GIFPickerItemPlaceholder, { height: closure_2(size.width, size.height).height });
        } else {
          let tmp15Result;
          const height = closure_2(item.width, item.height).height;
          const viewedItemIndexes = extraData.viewedItemIndexes;
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
      }
    }
    cResult[7] = tmp6;
    cResult[8] = onPressGIF;
    cResult[9] = V;
    tmp10 = V;
  }
  const obj6 = { viewedItemIndexes, selectedGifSrc };
  cResult[4] = selectedGifSrc;
  cResult[5] = viewedItemIndexes;
  cResult[6] = obj6;
  tmp9 = obj6;
}) : (function GIFPickerResultsList(columnWidth) {
  let ListFooterComponent;
  let MasonryFlashList;
  let columns;
  let inActionSheet;
  let keyboardDismissMode;
  let loading;
  let onPressGIF;
  let resultItems;
  let selectedGifSrc;
  let tmp10;
  columnWidth = columnWidth.columnWidth;
  ({ resultItems, onPressGIF } = columnWidth);
  ({ inActionSheet, selectedGifSrc } = columnWidth);
  let callback;
  let viewedItemIndexes;
  ({ columns, ListFooterComponent, loading, keyboardDismissMode } = columnWidth);
  const tmp = closure_6();
  const safeAreaBottomKeyboardAware = onPressGIF(selectedGifSrc[7])({ hasCategories: false }).safeAreaBottomKeyboardAware;
  if (loading) {
    resultItems = closure_7;
  }
  const items = [columnWidth];
  callback = viewedItemIndexes.useCallback((arg0, arg1) => ({ height: columnWidth / (arg0 / arg1) }), items);
  const callback1 = viewedItemIndexes.useCallback((src, arg1) => {
    src = undefined;
    if (src != null) {
      src = src.src;
    }
    if (src == null) {
      src = arg1.toString();
    }
    return src;
  }, []);
  const tmp5 = closure_9();
  viewedItemIndexes = tmp5.viewedItemIndexes;
  const items1 = [viewedItemIndexes, selectedGifSrc];
  const onViewableItemsChanged = tmp5.onViewableItemsChanged;
  const items2 = [onPressGIF, callback];
  const memo = viewedItemIndexes.useMemo(() => ({ viewedItemIndexes, selectedGifSrc }), items1);
  let tmp8 = columnWidth;
  const callback2 = viewedItemIndexes.useCallback((arg0) => {
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
  const tmp9 = columnWidth(selectedGifSrc[9]);
  if (inActionSheet) {
    MasonryFlashList = tmp9.BottomSheetMasonryFlashList;
    tmp10 = tmp8;
  } else {
    MasonryFlashList = tmp9.MasonryFlashList;
    tmp10 = tmp8;
  }
  let obj = { contentContainerStyle: { paddingBottom: safeAreaBottomKeyboardAware }, data: resultItems, drawDistance: tmp10(tmp2[4]).GIF_PICKER_ITEM_ESIMTATED_HEIGHT, extraData: memo, keyExtractor: callback1, keyboardDismissMode, keyboardShouldPersistTaps: "always", maintainVisibleContentPosition: { disabled: true }, numColumns: columns, ListFooterComponent, optimizeItemArrangement: true, onViewableItemsChanged, preventNativeModalDismiss: inActionSheet, renderItem: callback2, style: tmp.list };
  const tmp10Result = tmp10(selectedGifSrc[10]);
  const isPortalKeyboardInModal = tmp10Result.useIsPortalKeyboardInModal();
  const tmp12 = jsx;
  if (inActionSheet) {
    inActionSheet = isPortalKeyboardInModal;
  }
  return tmp12(MasonryFlashList, obj);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerResultsList.tsx");

export default tmp2;
