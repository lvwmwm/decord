// Module ID: 17323
// Function ID: 17324
// Name: DisplayNameStylesGummyColorPickerSheet
// Dependencies: [32, 19, 17, 1401, 17324, 1072, 21, 1400, 5014, 575, 10775, 1402, 17325, 558, 5260, 17326, 1252, 5258, 5272, 17320, 5634, 1113, 17329, 16466, 2]
// Exports: default

// Module 17323 (DisplayNameStylesGummyColorPickerSheet)
import shallowEqual from "shallowEqual" /* 558 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1401 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1402 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import HapticUtils from "HapticUtils" /* 5260 */;
import useDisplayNameStylesEffectConfigs from "useDisplayNameStylesEffectConfigs" /* 10775 */;
import DisplayNameStylesColorPickerConstants from "DisplayNameStylesColorPickerConstants" /* 17324 */;
import showGummyCustomColorSheetDefault from "showGummyCustomColorSheet" /* 17326 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import DisplayNameStylesUtils from "DisplayNameStylesUtils" /* 1400 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, dependencyMap;

let StyleSheet;
let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let tmp2;
const intl3 = tmp2(1113);
const Sheet_BottomSheet = tmp2(5272);
const components_Button_Button = tmp2(5634);
({ View: hasOwnProperty, Pressable: metroRequire, StyleSheet } = react_native);
let closure_7 = DisplayNameStylesConstants.DISPLAY_NAME_STYLES_GUMMY_PRESETS;
const SHEET_CONTENT_MAX_WIDTH = DisplayNameStylesColorPickerConstants.SHEET_CONTENT_MAX_WIDTH;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = DisplayNameStylesUtils.hueToGummyColor(0);
let createStyles = createStyles_mod;
let obj = { sheetBackground: obj2, body: obj3, sheetContentColumn: { width: "100%", maxWidth: SHEET_CONTENT_MAX_WIDTH }, optionContainer: obj4, swatch: size, selectionRing: obj5 };
obj2 = { borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_4, paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16, alignItems: "center" };
obj4 = { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", columnGap: nativeDefault.space.PX_24, rowGap: nativeDefault.space.PX_24 };
size = { width: 40, height: 40, flexDirection: "row", borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj5 = { borderWidth: 2, borderRadius: nativeDefault.radii.sm, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_12 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesGummyColorPickerSheet.tsx");

export default function DisplayNameStylesGummyColorPickerSheet(arg0) {
  let Button;
  let Button2;
  let intl;
  let intl2;
  let items2;
  let items3;
  let items4;
  let obj4;
  let obj5;
  let obj6;
  let obj9;
  let onSelectColors;
  let swatch;
  let tmp7Result;
  ({ selectedColors: require, onSelectColors } = arg0);
  let colors;
  let tmp = closure_12();
  dependencyMap = tmp;
  let tmp2 = require;
  let tmp3 = dependencyMap;
  let obj = useDisplayNameStylesEffectConfigs;
  const displayNameStylesEffectConfig = obj.useDisplayNameStylesEffectConfig(DisplayNameEffect.DisplayNameEffect.GUMMY);
  let obj2 = colors;
  let tmp5 = displayNameStylesEffectConfig;
  const tmp6 = displayNameStylesEffectConfig(colors.useState(() => {
    let defaultColors = require;
    if (require.length <= 0) {
      defaultColors = displayNameStylesEffectConfig.defaultColors;
    }
    return defaultColors;
  }), 2);
  colors = tmp6[0];
  let closure_5 = tmp6[1];
  const tmp8 = onSelectColors(17325);
  const tmp8Result = tmp8(DisplayNameEffect.DisplayNameEffect.GUMMY);
  const findIndexResult = tmp8Result.findIndex((colors) => {
    colors = colors.colors;
    const obj = shallowEqual;
    return obj.areArraysShallowEqual(colors, first);
  });
  let c6 = findIndexResult;
  closure_7 = tmp10;
  const tmp5Result = tmp5(obj2.useState(() => {
    let result;
    const tmp = closure_7;
    if (tmp) {
      const obj = DisplayNameStylesUtils;
      result = obj.rebuildGummySourceColor(first);
    } else {
      result = closure_11;
    }
    return result;
  }), 2);
  const first1 = tmp5Result[0];
  let closure_9 = tmp5Result[1];
  let items = [first1];
  const callback = obj2.useCallback(() => {
    let obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
    const obj2 = {
      initialColor: first1,
      onSelect(color) {
        closure_1_9(color);
        const obj = require("DisplayNameStylesUtils");
        closure_1_5(obj.buildGummyColors(color));
      }
    };
    showGummyCustomColorSheetDefault(obj2);
  }, items);
  let closure_10 = obj2.useCallback((arg0) => {
    const items = [...arg0];
    closure_5(items);
  }, []);
  const items1 = [colors, onSelectColors];
  const callback1 = obj2.useCallback(() => {
    const items = [...closure_7[0]];
    closure_5(items);
    closure_9(closure_11);
  }, []);
  const callback2 = obj2.useCallback(() => {
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    onSelectColors(colors);
    const obj2 = AnalyticsUtilsDefault;
    const obj3 = { default: false, colors };
    obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj3);
    const obj4 = ActionSheetActionCreatorsDefault;
    obj4.hideActionSheet();
  }, items1);
  let obj3 = { backgroundStyles: tmp.sheetBackground, header: closure_9(tmp7Result, obj4), children: closure_10(closure_5, obj6) };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  obj4 = { title: displayNameStylesEffectConfig.name, trailing: closure_9(Button, obj5) };
  obj5 = { variant: "primary", size: "sm", text: intl.string(intl3.t.XqMe3N), onPress: callback2 };
  tmp7Result = onSelectColors(17320);
  Button = components_Button_Button.Button;
  intl = intl3.intl;
  const obj7 = { style: items2, children: items3 };
  items2 = [, ];
  obj6 = { style: tmp.body, children: items4 };
  ({ sheetContentColumn: arr5[0], optionContainer: arr5[1] } = tmp);
  let tmp21;
  const tmp7Result2 = onSelectColors(17329);
  if (colors.length > 0 && findIndexResult < 0) {
    tmp21 = colors;
  }
  items3 = [
    closure_9(tmp7Result2, { activeColors: tmp21, isSelected: colors.length > 0 && findIndexResult < 0, onPress: callback, showGummyStripes: true }),
    tmp8Result.map((accessibilityLabel, index) => {
      let items;
      colors = accessibilityLabel.colors;
      let tmp = c6 === index;
      const obj = {
        style: swatch.swatch,
        onPress() {
          return closure_10(colors);
        },
        accessibilityRole: "button",
        accessibilityState: { selected: tmp },
        accessibilityLabel: accessibilityLabel.a11yLabel,
        children: items
      };
      items = [closure_9(onSelectColors(swatch[23]), { colors }), ];
      const tmp2 = closure_10;
      const tmp3 = c6;
      const tmp4 = swatch;
      const tmp5 = closure_9;
      if (tmp) {
        const obj2 = { style: tmp4.selectionRing, pointerEvents: "none" };
        tmp = tmp5(closure_5, obj2);
      }
      items[1] = tmp;
      return tmp2(tmp3, obj, index);
    })
  ];
  items4 = [closure_10(closure_5, obj7), ];
  const obj8 = { style: tmp.sheetContentColumn, children: closure_9(Button2, obj9) };
  obj9 = { text: intl2.string(intl3.t.yBZMsQ), onPress: callback1, variant: "secondary", size: "md", grow: true };
  Button2 = components_Button_Button.Button;
  intl2 = intl3.intl;
  items4[1] = closure_9(closure_5, obj8);
  return closure_9(BottomSheet, obj3);
};
