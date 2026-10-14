// Module ID: 10098
// Function ID: 10099
// Name: GIFPickerHeader
// Dependencies: [32, 19, 17, 1085, 21, 4890, 587, 10093, 6106, 558, 576, 4612, 4891, 4894, 7575, 6549, 1126, 6547, 10091, 5909, 10099, 4886, 2]

// Module 10098 (GIFPickerHeader)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl6 from "intl" /* 1126 */;
import timing from "timing" /* 4891 */;
import InputTypes from "InputTypes" /* 6106 */;
import GifProvider from "GifProvider" /* 10091 */;
import gif_picker_GIFPickerUtils from "gif_picker/GIFPickerUtils" /* 10093 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let set;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let tmp2;
const timingPresets = tmp2(4894);
let react = react_mod;
let View = react_native.View;
const GIFPickerResultTypes = Constants.GIFPickerResultTypes;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, headerContainer: obj3, header: obj4, favoritesSearch: { position: "absolute", top: 0, end: 0, overflow: "hidden" } };
obj2 = { paddingVertical: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", justifyContent: "space-between", gap: gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING };
obj4 = { borderWidth: 1, borderColor: "transparent", paddingHorizontal: nativeDefault.space.PX_8, height: InputTypes.InputHeights.MD, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
const __initData = { code: "function GIFPickerHeaderTsx1(){const{progress}=this.__closure;return{opacity:1-progress.get()};}" };
const __initData2 = { code: "function GIFPickerHeaderTsx2(){const{progress,columnWidth}=this.__closure;return{width:progress.get()*columnWidth,opacity:progress.get()};}" };
const __initData3 = { code: "function GIFPickerHeaderTsx3(){const{progress}=this.__closure;return{opacity:1-progress.get()};}" };
const __initData4 = { code: "function GIFPickerHeaderTsx4(){const{progress,columnWidth}=this.__closure;return{width:progress.get()*columnWidth,opacity:progress.get()};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((columnWidth) => {
  let accessibilityElementsHidden;
  let closure_4;
  let intl;
  let ref;
  const tmp = columnWidth;
  let tmp2 = ref;
  let obj = columnWidth(ref[10]);
  const cResult = obj.c(29);
  columnWidth = columnWidth.columnWidth;
  const onQueryChange = columnWidth.onQueryChange;
  const tmp4 = closure_10();
  ref = react.useRef(null);
  const tmp6 = accessibilityElementsHidden(react.useState(false), 2);
  accessibilityElementsHidden = tmp6[0];
  const obj2 = react;
  react = tmp6[1];
  const obj3 = columnWidth(ref[11]);
  const sharedValue = obj3.useSharedValue(0);
  if (cResult[0] === accessibilityElementsHidden) {
    let tmp9;
    let tmp10;
    let tmp17;
    let tmp19;
    if (cResult[1] === sharedValue) {
      tmp9 = cResult[2];
      tmp10 = cResult[3];
    }
    const effect = obj2.useEffect(tmp9, tmp10);
    let tmpResult = tmp(tmp2[11]);
    const fn2 = function w() {
      const obj = { opacity: 1 - sharedValue.get() };
      return obj;
    };
    const obj4 = { progress: sharedValue };
    fn2.__closure = obj4;
    let num = 11452628946352;
    fn2.__workletHash = 11452628946352;
    fn2.__initData = __initData;
    const animatedStyle = tmpResult.useAnimatedStyle(fn2);
    const fn3 = function x() {
      const obj = { width: sharedValue.get() * columnWidth, opacity: sharedValue.get() };
      return obj;
    };
    const obj5 = { progress: sharedValue, columnWidth };
    fn3.__closure = obj5;
    fn3.__workletHash = 12592656871997;
    fn3.__initData = __initData2;
    const tmpResult2 = tmp(tmp2[11]);
    const animatedStyle1 = tmpResult2.useAnimatedStyle(fn3);
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          return closure_4(true);
        }
      }
      cResult[4] = R;
      tmp17 = R;
    } else {
      class R {
        constructor() {
          return closure_4(true);
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor() {
          const current = ref.current;
          let text;
          if (current != null) {
            text = current.getText();
          }
          if ("" === text) {
            closure_4(false);
          }
        }
      }
      cResult[5] = H;
    } else {
      class H {
        constructor() {
          const current = ref.current;
          let text;
          if (current != null) {
            text = current.getText();
          }
          if ("" === text) {
            closure_4(false);
          }
        }
      }
    }
    if (accessibilityElementsHidden) {
      class H {
        constructor() {
          const current = ref.current;
          let text;
          if (current != null) {
            text = current.getText();
          }
          if ("" === text) {
            closure_4(false);
          }
        }
      }
    }
    if (accessibilityElementsHidden) {
      class H {
        constructor() {
          const current = ref.current;
          let text;
          if (current != null) {
            text = current.getText();
          }
          if ("" === text) {
            closure_4(false);
          }
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor() {
          const current = ref.current;
          let text;
          if (current != null) {
            text = current.getText();
          }
          if ("" === text) {
            closure_4(false);
          }
        }
      }
      const obj6 = { variant: "icon-only", size: "md", icon: onQueryChange(tmp2[15]), accessibilityLabel: intl.string(tmp(tmp2[16]).t["+Kakw+"]), onPress: tmp17 };
      const IconButton = tmp(tmp2[14]).IconButton;
      intl = tmp(tmp2[16]).intl;
      const tmp21 = closure_7(IconButton, obj6);
      cResult[6] = tmp21;
      tmp19 = tmp21;
    } else {
      class H {
        constructor() {
          const current = ref.current;
          let text;
          if (current != null) {
            text = current.getText();
          }
          if ("" === text) {
            closure_4(false);
          }
        }
      }
    }
    if (cResult[7] === animatedStyle) {
      class H {
        constructor() {
          const current = ref.current;
          let text;
          if (current != null) {
            text = current.getText();
          }
          if ("" === text) {
            closure_4(false);
          }
        }
      }
    }
    const obj7 = { style: animatedStyle, pointerEvents: "auto", accessibilityElementsHidden, importantForAccessibility: "auto", children: tmp19 };
    cResult[7] = animatedStyle;
    cResult[8] = accessibilityElementsHidden;
    cResult[9] = "auto";
    cResult[10] = "auto";
    cResult[11] = closure_7(onQueryChange(tmp2[11]).View, obj7);
    const tmp25 = closure_7(onQueryChange(tmp2[11]).View, obj7);
  }
  const fn = function s() {
    let num = 0;
    set = sharedValue.set;
    const withTiming = timing.withTiming;
    timing;
    if (first) {
      num = 1;
    }
    const result = set(withTiming(num, timingPresets.timingFast));
    if (first) {
      const current = ref.current;
      if (current != null) {
        current.focus();
      }
    }
  };
  const items = [accessibilityElementsHidden, sharedValue];
  cResult[0] = accessibilityElementsHidden;
  cResult[1] = sharedValue;
  cResult[2] = fn;
  cResult[3] = items;
  tmp10 = items;
  tmp9 = fn;
}) : ((columnWidth) => {
  let IconButton;
  let closure_4;
  let intl;
  let items2;
  let obj5;
  let obj8;
  let str;
  let str2;
  let str3;
  let str4;
  columnWidth = columnWidth.columnWidth;
  const onQueryChange = columnWidth.onQueryChange;
  let accessibilityElementsHidden;
  react = undefined;
  const tmp = closure_10();
  const ref = react.useRef(null);
  const tmp3 = accessibilityElementsHidden(react.useState(false), 2);
  accessibilityElementsHidden = tmp3[0];
  react = tmp3[1];
  let obj = columnWidth(ref[11]);
  const sharedValue = obj.useSharedValue(0);
  const items = [accessibilityElementsHidden, sharedValue];
  const effect = react.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    const withTiming = timing.withTiming;
    timing;
    if (first) {
      num = 1;
    }
    const result = set(withTiming(num, timingPresets.timingFast));
    if (first) {
      const current = ref.current;
      if (current != null) {
        current.focus();
      }
    }
  }, items);
  const obj2 = columnWidth(ref[11]);
  class I {
    constructor() {
      const obj = { opacity: 1 - sharedValue.get() };
      return obj;
    }
  }
  I.__closure = { progress: sharedValue };
  I.__workletHash = 1563139253234;
  I.__initData = __initData3;
  const animatedStyle = obj2.useAnimatedStyle(I);
  const fn = function v() {
    const obj = { width: sharedValue.get() * columnWidth, opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { progress: sharedValue, columnWidth };
  fn.__workletHash = 7861705308411;
  fn.__initData = __initData4;
  const obj3 = columnWidth(ref[11]);
  const animatedStyle1 = obj3.useAnimatedStyle(fn);
  const callback = react.useCallback(() => closure_4(true), []);
  const callback1 = react.useCallback(() => {
    const current = ref.current;
    let text;
    if (current != null) {
      text = current.getText();
    }
    if ("" === text) {
      closure_4(false);
    }
  }, []);
  const obj4 = { style: animatedStyle, pointerEvents: str, accessibilityElementsHidden, importantForAccessibility: str2, children: closure_7(IconButton, obj5) };
  str = "auto";
  View = onQueryChange(ref[11]).View;
  const tmp13 = closure_9;
  const tmp14 = closure_8;
  if (accessibilityElementsHidden) {
    str = "none";
  }
  str2 = "auto";
  if (accessibilityElementsHidden) {
    str2 = "no-hide-descendants";
  }
  obj5 = { variant: "icon-only", size: "md", icon: onQueryChange(ref[15]), accessibilityLabel: intl.string(columnWidth(ref[16]).t["+Kakw+"]), onPress: callback };
  IconButton = tmp5(tmp6[14]).IconButton;
  intl = tmp5(tmp6[16]).intl;
  const items1 = [closure_7(View, obj4), ];
  const obj6 = { style: items2, pointerEvents: str3, accessibilityElementsHidden: !accessibilityElementsHidden, importantForAccessibility: str4, children: closure_7(columnWidth(ref[17]).SearchField, obj8) };
  items2 = [tmp.favoritesSearch, animatedStyle1];
  str3 = "none";
  const View2 = tmp16(tmp6[11]).View;
  if (accessibilityElementsHidden) {
    str3 = "auto";
  }
  str4 = "no-hide-descendants";
  if (accessibilityElementsHidden) {
    str4 = "auto";
  }
  const obj7 = { children: items1 };
  obj8 = {
    ref,
    size: "md",
    onChange: onQueryChange,
    onClear() {
      let tmpResult;
      if (onQueryChange != null) {
        tmpResult = tmp("");
      }
      return tmpResult;
    },
    onBlur: callback1
  };
  items1[1] = closure_7(View2, obj6);
  return tmp13(tmp14, obj7);
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let UTypEu;
  let categoryType;
  let columnWidth;
  let first;
  let formatToPlainString;
  let intl5;
  let items;
  let items1;
  let obj6;
  let onFavoritesQueryChange;
  let onQueryChange;
  let onQueryClear;
  let searchInputRef;
  let tmp18Result;
  const obj = react2;
  const cResult = obj.c(13);
  ({ categoryType, columnWidth, onQueryClear, onQueryChange, onFavoritesQueryChange, searchInputRef } = arg0);
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = GifProvider;
    const searchPlaceholder = tmpResult.getSearchPlaceholder();
    cResult[0] = searchPlaceholder;
    first = searchPlaceholder;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === categoryType) {
    if (cResult[2] === columnWidth) {
      if (cResult[3] === onFavoritesQueryChange) {
        if (cResult[4] === onQueryChange) {
          if (cResult[5] === onQueryClear) {
            if (cResult[6] === searchInputRef) {
              if (cResult[7] === tmp4.header) {
                let tmp7;
                if (cResult[8] === tmp4.headerContainer) {
                  tmp7 = cResult[9];
                }
                if (cResult[10] === tmp4.container) {
                  let tmp14;
                  if (cResult[11] === tmp7) {
                    tmp14 = cResult[12];
                  }
                  return tmp14;
                }
                const obj2 = { style: tmp4.container, children: tmp7 };
                const tmp17 = metroImportDefault(View, obj2);
                cResult[10] = tmp4.container;
                cResult[11] = tmp7;
                cResult[12] = tmp17;
                tmp14 = tmp17;
              }
            }
          }
        }
      }
    }
  }
  if (categoryType === GIFPickerResultTypes.SEARCH) {
    const obj3 = { size: "md", onChange: onQueryChange, placeholder: first, onClear: onQueryClear, ref: searchInputRef, round: true };
    tmp18Result = metroImportDefault(tmp(6547).SearchField, obj3);
  } else {
    let stringResult;
    const obj4 = { style: tmp4.headerContainer, children: items1 };
    const obj5 = { style: tmp4.header, accessibilityRole: "button", onPress: onQueryClear, accessibilityLabel: formatToPlainString(UTypEu, obj6), children: items };
    const PressableOpacity = tmp(5909).PressableOpacity;
    const intl4 = tmp(1126).intl;
    formatToPlainString = intl4.formatToPlainString;
    obj6 = { destination: intl5.string(intl6.t.ffgJrs) };
    UTypEu = tmp(1126).t.UTypEu;
    intl5 = tmp(1126).intl;
    const obj7 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, size: "sm" };
    const ChevronLargeLeftIcon = tmp(10099).ChevronLargeLeftIcon;
    items = [metroImportDefault(ChevronLargeLeftIcon, obj7), ];
    const Text = tmp(4886).Text;
    const tmp19 = View;
    if (categoryType === GIFPickerResultTypes.TRENDING_GIFS) {
      const intl3 = tmp(1126).intl;
      stringResult = intl3.string(tmp(1126).t.TsWCdW);
    } else if (categoryType === GIFPickerResultTypes.FAVORITES) {
      const intl2 = tmp(1126).intl;
      stringResult = intl2.string(tmp(1126).t.k8fFjp);
    } else {
      const intl = tmp(1126).intl;
      stringResult = intl.string(tmp(1126).t["5h0QOP"]);
    }
    const obj8 = { variant: "text-sm/semibold", color: "text-default", maxFontSizeMultiplier: 2, children: stringResult };
    items[1] = metroImportDefault(Text, obj8);
    items1 = [React4(PressableOpacity, obj5), ];
    let tmp20Result = categoryType === tmp8.FAVORITES;
    if (tmp20Result) {
      const obj9 = { columnWidth, onQueryChange: onFavoritesQueryChange };
      tmp20Result = tmp20(closure_15, obj9);
    }
    items1[1] = tmp20Result;
    tmp18Result = tmp18(tmp19, obj4);
  }
  cResult[1] = categoryType;
  cResult[2] = columnWidth;
  cResult[3] = onFavoritesQueryChange;
  cResult[4] = onQueryChange;
  cResult[5] = onQueryClear;
  cResult[6] = searchInputRef;
  cResult[7] = tmp4.header;
  cResult[8] = tmp4.headerContainer;
  cResult[9] = tmp18Result;
  tmp7 = tmp18Result;
}) : ((arg0) => {
  let UTypEu;
  let categoryType;
  let columnWidth;
  let formatToPlainString;
  let intl5;
  let items;
  let items1;
  let obj5;
  let onFavoritesQueryChange;
  let onQueryChange;
  let onQueryClear;
  let searchInputRef;
  let tmp13Result;
  ({ categoryType, onQueryClear } = arg0);
  ({ columnWidth, onQueryChange, onFavoritesQueryChange, searchInputRef } = arg0);
  const tmp = closure_10();
  GifProvider;
  const obj = { style: tmp.container, children: tmp13Result };
  if (categoryType === GIFPickerResultTypes.SEARCH) {
    const obj2 = { size: "md", onChange: onQueryChange, placeholder: tmp5, onClear: onQueryClear, ref: searchInputRef, round: true };
    tmp13Result = tmp6(tmp2(6547).SearchField, obj2);
  } else {
    let stringResult;
    const obj3 = { style: tmp.headerContainer, children: items1 };
    const obj4 = { style: tmp.header, accessibilityRole: "button", onPress: onQueryClear, accessibilityLabel: formatToPlainString(UTypEu, obj5), children: items };
    const PressableOpacity = tmp2(5909).PressableOpacity;
    const intl4 = tmp2(1126).intl;
    formatToPlainString = intl4.formatToPlainString;
    obj5 = { destination: intl5.string(intl6.t.ffgJrs) };
    UTypEu = tmp2(1126).t.UTypEu;
    intl5 = tmp2(1126).intl;
    const obj6 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, size: "sm" };
    const ChevronLargeLeftIcon = tmp2(10099).ChevronLargeLeftIcon;
    items = [metroImportDefault(ChevronLargeLeftIcon, obj6), ];
    const Text = tmp2(4886).Text;
    if (categoryType === GIFPickerResultTypes.TRENDING_GIFS) {
      const intl3 = tmp2(1126).intl;
      stringResult = intl3.string(tmp2(1126).t.TsWCdW);
    } else if (categoryType === GIFPickerResultTypes.FAVORITES) {
      const intl2 = tmp2(1126).intl;
      stringResult = intl2.string(tmp2(1126).t.k8fFjp);
    } else {
      const intl = tmp2(1126).intl;
      stringResult = intl.string(tmp2(1126).t["5h0QOP"]);
    }
    const obj7 = { variant: "text-sm/semibold", color: "text-default", maxFontSizeMultiplier: 2, children: stringResult };
    items[1] = metroImportDefault(Text, obj7);
    items1 = [React4(PressableOpacity, obj4), ];
    let tmp6Result2 = categoryType === tmp8.FAVORITES;
    if (tmp6Result2) {
      const obj8 = { columnWidth, onQueryChange: onFavoritesQueryChange };
      tmp6Result2 = tmp6(closure_15, obj8);
    }
    items1[1] = tmp6Result2;
    tmp13Result = tmp13(tmp7, obj3);
  }
  return metroImportDefault(View, obj);
}));
let result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerHeader.tsx");

export default memoResult;
