// Module ID: 10389
// Function ID: 10390
// Name: GIFPickerHeader
// Dependencies: [32, 19, 17, 1072, 21, 5170, 575, 10383, 7194, 1652, 5400, 5403, 8119, 7307, 1113, 7305, 10381, 7068, 10390, 5781, 2]

// Module 10389 (GIFPickerHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl6 from "intl" /* 1113 */;
import timing_timing from "timing/timing" /* 5400 */;
import InputTypes from "InputTypes" /* 7194 */;
import GifProvider from "GifProvider" /* 10381 */;
import gif_picker_GIFPickerUtils from "gif_picker/GIFPickerUtils" /* 10383 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let set;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let tmp2;
const timingPresets = tmp2(5403);
function FavoritesSearch(onQueryChange) {
  let IconButton;
  let accessibilityElementsHidden;
  let closure_3;
  let intl;
  let items6;
  let obj5;
  let obj8;
  let str;
  let str2;
  let str3;
  let str4;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp9;
  onQueryChange = onQueryChange.onQueryChange;
  accessibilityElementsHidden = undefined;
  _slicedToArray = undefined;
  let sharedValue;
  const columnWidth = onQueryChange.columnWidth;
  let obj = sharedValue;
  const tmp = closure_10();
  const ref = sharedValue.useRef(null);
  [accessibilityElementsHidden, _slicedToArray] = sharedValue.useState(false);
  const obj2 = onQueryChange(accessibilityElementsHidden[9]);
  sharedValue = obj2.useSharedValue(0);
  const items = [accessibilityElementsHidden, sharedValue];
  const effect = sharedValue.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    const withTiming = timing_timing.withTiming;
    timing_timing;
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
  const items1 = [closure_11, sharedValue];
  let c0;
  [tmp9, tmp10] = items1;
  const obj3 = onQueryChange(accessibilityElementsHidden[9]);
  class GIFPickerHeaderTsx1 {
    constructor() {
      const obj = { opacity: 1 - _undefined.get() };
      return obj;
    }
  }
  const items2 = [tmp10];
  GIFPickerHeaderTsx1.__closure = items2;
  GIFPickerHeaderTsx1.__workletHash = 5713132018825;
  GIFPickerHeaderTsx1.__initData = tmp9;
  const animatedStyle = obj3.useAnimatedStyle(GIFPickerHeaderTsx1);
  const items3 = [closure_12, sharedValue, columnWidth];
  c0 = undefined;
  let c1;
  [tmp12, tmp13, tmp14] = items3;
  const tmp5Result = onQueryChange(accessibilityElementsHidden[9]);
  class GIFPickerHeaderTsx2 {
    constructor() {
      const obj = { width: _undefined.get() * c1, opacity: _undefined.get() };
      return obj;
    }
  }
  const items4 = [tmp13, tmp14];
  GIFPickerHeaderTsx2.__closure = items4;
  GIFPickerHeaderTsx2.__workletHash = 10695856898244;
  GIFPickerHeaderTsx2.__initData = tmp12;
  const animatedStyle1 = tmp5Result.useAnimatedStyle(GIFPickerHeaderTsx2);
  const callback = obj.useCallback(() => closure_3(true), []);
  const callback1 = obj.useCallback(() => {
    const current = ref.current;
    let text;
    if (current != null) {
      text = current.getText();
    }
    if ("" === text) {
      closure_3(false);
    }
  }, []);
  const obj4 = { style: animatedStyle, pointerEvents: str, accessibilityElementsHidden, importantForAccessibility: str2, children: closure_7(IconButton, obj5) };
  str = "auto";
  View = ref(tmp6[9]).View;
  const tmp18 = closure_9;
  const tmp19 = closure_8;
  if (accessibilityElementsHidden) {
    str = "none";
  }
  str2 = "auto";
  if (accessibilityElementsHidden) {
    str2 = "no-hide-descendants";
  }
  obj5 = { variant: "icon-only", size: "md", icon: ref(accessibilityElementsHidden[13]), accessibilityLabel: intl.string(onQueryChange(accessibilityElementsHidden[14]).t["+Kakw+"]), onPress: callback };
  IconButton = tmp5(tmp6[12]).IconButton;
  intl = tmp5(tmp6[14]).intl;
  const items5 = [closure_7(View, obj4), ];
  const obj6 = { style: items6, pointerEvents: str3, accessibilityElementsHidden: !accessibilityElementsHidden, importantForAccessibility: str4, children: closure_7(onQueryChange(accessibilityElementsHidden[15]).SearchBar, obj8) };
  items6 = [tmp.favoritesSearch, animatedStyle1];
  str3 = "none";
  const View2 = tmp21(tmp6[9]).View;
  if (accessibilityElementsHidden) {
    str3 = "auto";
  }
  str4 = "no-hide-descendants";
  if (accessibilityElementsHidden) {
    str4 = "auto";
  }
  const obj7 = { children: items5 };
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
  items5[1] = closure_7(View2, obj6);
  return tmp18(tmp19, obj7);
}
let _slicedToArray = _slicedToArray_mod;
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
let closure_11 = { code: "(function GIFPickerHeaderTsx1(){let[progress]=this.__closure;return{opacity:1-progress.get()};})" };
let closure_12 = { code: "(function GIFPickerHeaderTsx2(){let[progress,columnWidth]=this.__closure;return{width:progress.get()*columnWidth,opacity:progress.get()};})" };
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
    tmp13Result = tmp6(tmp2(7305).SearchBar, obj2);
  } else {
    let stringResult;
    const obj3 = { style: tmp.headerContainer, children: items1 };
    const obj4 = { style: tmp.header, accessibilityRole: "button", onPress: onQueryClear, accessibilityLabel: formatToPlainString(UTypEu, obj5), children: items };
    const PressableOpacity = tmp2(7068).PressableOpacity;
    const intl4 = tmp2(1113).intl;
    formatToPlainString = intl4.formatToPlainString;
    obj5 = { destination: intl5.string(intl6.t.ffgJrs) };
    UTypEu = tmp2(1113).t.UTypEu;
    intl5 = tmp2(1113).intl;
    const obj6 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, size: "sm" };
    const ChevronLargeLeftIcon = tmp2(10390).ChevronLargeLeftIcon;
    items = [metroImportDefault(ChevronLargeLeftIcon, obj6), ];
    const Text = tmp2(5781).Text;
    if (categoryType === GIFPickerResultTypes.TRENDING_GIFS) {
      const intl3 = tmp2(1113).intl;
      stringResult = intl3.string(tmp2(1113).t.TsWCdW);
    } else if (categoryType === GIFPickerResultTypes.FAVORITES) {
      const intl2 = tmp2(1113).intl;
      stringResult = intl2.string(tmp2(1113).t.k8fFjp);
    } else {
      const intl = tmp2(1113).intl;
      stringResult = intl.string(tmp2(1113).t["5h0QOP"]);
    }
    const obj7 = { variant: "body-sm/semibold", color: "text-default", maxFontSizeMultiplier: 2, children: stringResult };
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
