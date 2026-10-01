// Module ID: 14892
// Function ID: 14893
// Name: DisplayNameStylesGummyColorPickerSheet
// Dependencies: [32, 19, 17, 1390, 1074, 21, 1389, 4836, 576, 10360, 1391, 558, 14893, 4801, 14894, 1241, 4800, 6571, 14890, 5281, 1115, 14174, 9713, 2]
// Exports: default

// Module 14892 (DisplayNameStylesGummyColorPickerSheet)
import shallowEqual from "shallowEqual" /* 558 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1390 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import showGummyCustomColorSheetDefault from "showGummyCustomColorSheet" /* 14894 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import DisplayNameStylesUtils from "DisplayNameStylesUtils" /* 1389 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, colors, dependencyMap;

let StyleSheet;
let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let size;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, Pressable: metroRequire, StyleSheet } = react_native);
let closure_7 = DisplayNameStylesConstants.DISPLAY_NAME_STYLES_GUMMY_PRESETS;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = DisplayNameStylesUtils.hueToGummyColor(0);
let createStyles = createStyles_mod;
let obj = { body: obj2, colorRowInset: obj3, optionContainer: { flexDirection: "row", flexWrap: "wrap" }, swatchWrapper: { width: "25%", padding: 2 }, swatch: obj4, swatchSelected: obj5, customSwatchEmpty: obj6, customIconOverlay: obj7, customIconScrim: size };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_4, alignSelf: "stretch" };
obj4 = { height: 40, flexDirection: "row", borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderWidth: 2, borderColor: "transparent" };
obj5 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj6 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_NORMAL };
obj7 = { alignItems: "center", justifyContent: "center" };
const merged = Object.assign(StyleSheet.absoluteFillObject);
size = { width: 28, height: 28, borderRadius: nativeDefault.radii.round, backgroundColor: "transparent", alignItems: "center", justifyContent: "center" };
let closure_12 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesGummyColorPickerSheet.tsx");

export default function DisplayNameStylesGummyColorPickerSheet(selectedColors) {
  let Button;
  let closure_2;
  let closure_3;
  let closure_5;
  let first1;
  let initialColor;
  let intl;
  let intl2;
  let intl3;
  let items2;
  let items4;
  let items5;
  let items6;
  let obj12;
  let obj3;
  let obj4;
  let obj5;
  let obj8;
  let tmp18Result;
  let tmp19;
  let tmp22;
  selectedColors = selectedColors.selectedColors;
  const onSelectColors = selectedColors.onSelectColors;
  _slicedToArray = undefined;
  initialColor = undefined;
  closure_5 = undefined;
  first1 = undefined;
  closure_7 = undefined;
  let c8;
  let closure_9;
  let tmp = closure_12();
  dependencyMap = tmp;
  const tmp2 = selectedColors;
  let tmp3 = dependencyMap;
  let obj = selectedColors(10360);
  let tmp5 = selectedColors.length > 0;
  const displayNameStylesEffectConfig = obj.useDisplayNameStylesEffectConfig(selectedColors(1391).DisplayNameEffect.GUMMY);
  if (tmp5) {
    tmp5 = !closure_7.some((item) => {
      const obj = shallowEqual;
      return obj.areArraysShallowEqual(item, selectedColors);
    });
  }
  _slicedToArray = tmp5;
  [initialColor, closure_5] = initialColor.useState(() => {
    let result;
    const tmp = closure_3;
    if (tmp) {
      const obj = DisplayNameStylesUtils;
      result = obj.rebuildGummySourceColor(selectedColors);
    } else {
      result = closure_11;
    }
    return result;
  });
  [first1, closure_7] = initialColor.useState(() => {
    let gummyColors = selectedColors;
    if (selectedColors.length <= 0) {
      const obj = DisplayNameStylesUtils;
      gummyColors = obj.buildGummyColors(closure_11);
    }
    return gummyColors;
  });
  const tmp12 = onSelectColors(14893);
  const tmp12Result = tmp12(tmp2(1391).DisplayNameEffect.GUMMY);
  const findIndexResult = tmp12Result.findIndex((colors) => {
    colors = colors.colors;
    const obj = shallowEqual;
    return obj.areArraysShallowEqual(colors, first1);
  });
  c8 = findIndexResult;
  let items = [initialColor];
  const callback = initialColor.useCallback(() => {
    let obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
    const obj2 = {
      initialColor,
      onSelect(color) {
        closure_1_5(color);
        const obj = selectedColors(closure_2[6]);
        closure_1_7(obj.buildGummyColors(color));
      }
    };
    showGummyCustomColorSheetDefault(obj2);
  }, items);
  closure_9 = initialColor.useCallback((arg0) => {
    const items = [...arg0];
    closure_7(items);
  }, []);
  const items1 = [first1, onSelectColors];
  const callback1 = initialColor.useCallback(() => {
    const items = [...closure_7[0]];
    closure_7(items);
    closure_5(closure_11);
  }, []);
  const callback2 = initialColor.useCallback(() => {
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    onSelectColors(first1);
    const obj2 = AnalyticsUtilsDefault;
    const obj3 = { default: false, colors: first1 };
    obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj3);
    const obj4 = ActionSheetActionCreatorsDefault;
    obj4.hideActionSheet();
  }, items1);
  let obj2 = { header: closure_9(tmp19, obj3), children: closure_10(closure_5, obj5) };
  BottomSheet = tmp2(6571).BottomSheet;
  obj3 = { title: displayNameStylesEffectConfig.name, trailing: closure_9(Button, obj4) };
  obj4 = { variant: "primary", size: "sm", text: intl.string(tmp2(1115).t.XqMe3N), onPress: callback2 };
  tmp19 = onSelectColors(14890);
  Button = tmp2(5281).Button;
  intl = tmp2(1115).intl;
  const obj6 = { style: items2, children: items5 };
  items2 = [, ];
  obj5 = { style: tmp.body, children: items6 };
  ({ colorRowInset: arr5[0], optionContainer: arr5[1] } = tmp);
  const items3 = [tmp.swatch, ];
  let swatchSelected = tmp23;
  const obj7 = { style: tmp.swatchWrapper, children: closure_10(tmp22, obj8) };
  const tmp11 = onSelectColors;
  tmp22 = first1;
  if (findIndexResult < 0) {
    swatchSelected = tmp.swatchSelected;
  }
  items3[1] = swatchSelected;
  obj8 = { style: items3, onPress: callback, accessibilityRole: "button", accessibilityState: { selected: findIndexResult < 0 }, accessibilityLabel: intl2.string(tmp2(1115).t["FHBa/1"]), children: items4 };
  intl2 = tmp2(1115).intl;
  if (findIndexResult >= 0) {
    const obj9 = { style: tmp.customSwatchEmpty };
    tmp18Result = tmp18(tmp21, obj9);
  } else {
    const obj10 = { colors: first1 };
    tmp18Result = tmp18(tmp11(14174), obj10);
  }
  items4 = [tmp18Result, ];
  const obj11 = { style: tmp.customIconOverlay, pointerEvents: "none", children: closure_9(closure_5, obj12) };
  obj12 = { style: tmp.customIconScrim, children: closure_9(tmp2(9713).PencilIcon, { color: "white", size: "sm" }) };
  items4[1] = closure_9(closure_5, obj11);
  items5 = [
    closure_9(closure_5, obj7),
    tmp12Result.map((colors, index) => {
      let obj2;
      let tmp4;
      colors = colors.colors;
      const items = [closure_2.swatch, ];
      let swatchSelected = tmp;
      const a11yLabel = colors.a11yLabel;
      const obj = { style: closure_2.swatchWrapper, children: closure_9(tmp4, obj2) };
      const tmp3 = closure_5;
      tmp4 = first1;
      if (c8 === index) {
        swatchSelected = closure_2.swatchSelected;
      }
      items[1] = swatchSelected;
      obj2 = {
        style: items,
        onPress() {
          return closure_9(colors);
        },
        accessibilityRole: "button",
        accessibilityState: { selected: c8 === index },
        accessibilityLabel: a11yLabel,
        children: closure_9(onSelectColors(closure_2[21]), { colors })
      };
      return closure_9(tmp3, obj, index);
    })
  ];
  items6 = [closure_10(closure_5, obj6), ];
  const obj13 = { text: intl3.string(tmp2(1115).t.yBZMsQ), onPress: callback1, variant: "secondary" };
  const Button2 = tmp2(5281).Button;
  intl3 = tmp2(1115).intl;
  items6[1] = closure_9(Button2, obj13);
  return closure_9(BottomSheet, obj2);
};
