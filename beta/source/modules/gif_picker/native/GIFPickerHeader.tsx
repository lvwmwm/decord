// Module ID: 9835
// Function ID: 9836
// Name: GIFPickerHeader
// Dependencies: [32, 19, 17, 1074, 21, 4836, 576, 9830, 6040, 4566, 4837, 4840, 7363, 6473, 1115, 6471, 9828, 5435, 9836, 4832, 2]

// Module 9835 (GIFPickerHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl6 from "intl" /* 1115 */;
import timing from "timing" /* 4837 */;
import InputTypes from "InputTypes" /* 6040 */;
import GifProvider from "GifProvider" /* 9828 */;
import gif_picker_GIFPickerUtils from "gif_picker/GIFPickerUtils" /* 9830 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let set;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let tmp2;
const timingPresets = tmp2(4840);
function FavoritesSearch(columnWidth) {
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
  let obj = columnWidth(ref[9]);
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
  const obj2 = columnWidth(ref[9]);
  class S {
    constructor() {
      const obj = { opacity: 1 - sharedValue.get() };
      return obj;
    }
  }
  S.__closure = { progress: sharedValue };
  S.__workletHash = 11452628946352;
  S.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(S);
  const fn = function v() {
    const obj = { width: sharedValue.get() * columnWidth, opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { progress: sharedValue, columnWidth };
  fn.__workletHash = 12592656871997;
  fn.__initData = __initData2;
  const obj3 = columnWidth(ref[9]);
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
  View = onQueryChange(ref[9]).View;
  const tmp13 = closure_9;
  const tmp14 = closure_8;
  if (accessibilityElementsHidden) {
    str = "none";
  }
  str2 = "auto";
  if (accessibilityElementsHidden) {
    str2 = "no-hide-descendants";
  }
  obj5 = { variant: "icon-only", size: "md", icon: onQueryChange(ref[13]), accessibilityLabel: intl.string(columnWidth(ref[14]).t["+Kakw+"]), onPress: callback };
  IconButton = tmp5(tmp6[12]).IconButton;
  intl = tmp5(tmp6[14]).intl;
  const items1 = [closure_7(View, obj4), ];
  const obj6 = { style: items2, pointerEvents: str3, accessibilityElementsHidden: !accessibilityElementsHidden, importantForAccessibility: str4, children: closure_7(columnWidth(ref[15]).SearchField, obj8) };
  items2 = [tmp.favoritesSearch, animatedStyle1];
  str3 = "none";
  const View2 = tmp16(tmp6[9]).View;
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
}
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
const memoResult = react.memo(function GIFPickerHeader(arg0) {
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
    tmp13Result = tmp6(tmp2(6471).SearchField, obj2);
  } else {
    let stringResult;
    const obj3 = { style: tmp.headerContainer, children: items1 };
    const obj4 = { style: tmp.header, accessibilityRole: "button", onPress: onQueryClear, accessibilityLabel: formatToPlainString(UTypEu, obj5), children: items };
    const PressableOpacity = tmp2(5435).PressableOpacity;
    const intl4 = tmp2(1115).intl;
    formatToPlainString = intl4.formatToPlainString;
    obj5 = { destination: intl5.string(intl6.t.ffgJrs) };
    UTypEu = tmp2(1115).t.UTypEu;
    intl5 = tmp2(1115).intl;
    const obj6 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, size: "sm" };
    const ChevronLargeLeftIcon = tmp2(9836).ChevronLargeLeftIcon;
    items = [metroImportDefault(ChevronLargeLeftIcon, obj6), ];
    const Text = tmp2(4832).Text;
    if (categoryType === GIFPickerResultTypes.TRENDING_GIFS) {
      const intl3 = tmp2(1115).intl;
      stringResult = intl3.string(tmp2(1115).t.TsWCdW);
    } else if (categoryType === GIFPickerResultTypes.FAVORITES) {
      const intl2 = tmp2(1115).intl;
      stringResult = intl2.string(tmp2(1115).t.k8fFjp);
    } else {
      const intl = tmp2(1115).intl;
      stringResult = intl.string(tmp2(1115).t["5h0QOP"]);
    }
    const obj7 = { variant: "text-sm/semibold", color: "text-default", maxFontSizeMultiplier: 2, children: stringResult };
    items[1] = metroImportDefault(Text, obj7);
    items1 = [React4(PressableOpacity, obj4), ];
    let tmp6Result2 = categoryType === tmp8.FAVORITES;
    if (tmp6Result2) {
      const obj8 = { columnWidth, onQueryChange: onFavoritesQueryChange };
      tmp6Result2 = tmp6(FavoritesSearch, obj8);
    }
    items1[1] = tmp6Result2;
    tmp13Result = tmp13(tmp7, obj3);
  }
  return metroImportDefault(View, obj);
});
let result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerHeader.tsx");

export default memoResult;
