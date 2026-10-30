// Module ID: 17271
// Function ID: 17272
// Name: DisplayNameStylesGradientPickerSheet
// Dependencies: [32, 19, 17, 1402, 1072, 21, 5009, 575, 17272, 10755, 1401, 17267, 5255, 1253, 5253, 16395, 5267, 17263, 5629, 1114, 5582, 1091, 17273, 12, 6974, 6987, 2]
// Exports: default

// Module 17271 (DisplayNameStylesGradientPickerSheet)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import DisplayNameStylesUtils from "DisplayNameStylesUtils" /* 1401 */;
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1402 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import HapticUtils from "HapticUtils" /* 5255 */;
import ColorPickerConsts from "ColorPickerConsts" /* 17272 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet;

let StyleSheet;
let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let rect;
let size;
let size1;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, Pressable: metroRequire, StyleSheet } = react_native);
const getColorPresetsForEffect = DisplayNameStylesConstants.getColorPresetsForEffect;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { body: obj2, gradientContainer: obj3, dropperContainer: rect, dropper: obj4, gradient: size, optionContainer: obj5, swatchWrapper: obj6, pressable: obj7, selectedRing: obj8, option: { flex: 1 }, checkmarkOverlay: obj9, checkmark: size1, resetButtonContainer: obj10 };
obj2 = { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12, flexGrow: 1, justifyContent: "center", alignItems: "center", gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", justifyContent: "center", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8 };
rect = { left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, position: "absolute", flexDirection: "row", justifyContent: "space-between" };
obj4 = { borderColor: "white", padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, borderWidth: 1 };
size = { height: 50, width: "100%", borderRadius: nativeDefault.radii.sm };
obj5 = { flexDirection: "row", flexWrap: "wrap", paddingHorizontal: nativeDefault.space.PX_4, rowGap: nativeDefault.space.PX_16 };
obj6 = { width: "33.333%", paddingHorizontal: nativeDefault.space.PX_4 };
obj7 = { height: 40, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj8 = { borderRadius: nativeDefault.radii.sm, borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj9 = { alignItems: "center", justifyContent: "center" };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
size1 = { width: ColorPickerConsts.CHECKMARK_SIZE, height: ColorPickerConsts.CHECKMARK_SIZE };
obj10 = { alignSelf: "stretch", flexDirection: "row", marginHorizontal: nativeDefault.space.PX_8 };
let closure_12 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesGradientPickerSheet.tsx");

export default function DisplayNameStylesColorPickerSheet(onSelectColors) {
  let Button;
  let Button2;
  let arr;
  let closure_3;
  let closure_6;
  let colors;
  let intl;
  let intl2;
  let items3;
  let items4;
  let obj12;
  let obj4;
  let obj5;
  let obj6;
  let selectedEffectId;
  let tmp8;
  ({ selectedColors: require, selectedEffectId } = onSelectColors);
  onSelectColors = onSelectColors.onSelectColors;
  colors = undefined;
  closure_6 = undefined;
  let tmp = closure_12();
  _slicedToArray = tmp;
  let obj = require("useDisplayNameStylesEffectConfigs");
  const displayNameStylesEffectConfig = obj.useDisplayNameStylesEffectConfig(selectedEffectId);
  let obj2 = require("DisplayNameStylesUtils");
  const effectColorCount = obj2.getEffectColorCount(selectedEffectId);
  [colors, closure_6] = displayNameStylesEffectConfig.useState(() => {
    let defaultColors = require;
    if (require.length <= 0) {
      defaultColors = displayNameStylesEffectConfig.defaultColors;
    }
    return defaultColors;
  });
  const tmp5 = _slicedToArray(displayNameStylesEffectConfig.useState(() => {
    let tmp3 = null;
    const createColorPaletteList = DisplayNameStylesUtils.createColorPaletteList;
    DisplayNameStylesUtils;
    const tmp2 = selectedEffectId;
    if (require.length > 0) {
      tmp3 = require;
    }
    return createColorPaletteList(tmp2, tmp3);
  }), 2);
  let closure_7 = tmp5[1];
  let items = [colors, onSelectColors];
  let items1 = [selectedEffectId, displayNameStylesEffectConfig.defaultColors];
  const arr2 = selectedEffectId(onSelectColors[11])(selectedEffectId, tmp5[0]);
  const callback = displayNameStylesEffectConfig.useCallback(() => {
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    onSelectColors(colors);
    const obj2 = AnalyticsUtilsDefault;
    const obj3 = { default: false, colors };
    obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj3);
    const obj4 = ActionSheetActionCreatorsDefault;
    obj4.hideActionSheet();
  }, items);
  const items2 = [colors, selectedEffectId];
  const callback1 = displayNameStylesEffectConfig.useCallback(() => {
    let first = closure_7(selectedEffectId)[0];
    if (first == null) {
      first = displayNameStylesEffectConfig.defaultColors;
    }
    const substr = first.slice();
    closure_6(substr);
    closure_7((arr) => {
      const obj = DisplayNameStylesUtils;
      return obj.updateCustomSwatch(arr, selectedEffectId, substr);
    });
  }, items1);
  let closure_8 = displayNameStylesEffectConfig.useCallback((arg0) => {
    let closure_0 = arg0;
    let num = first[arg0];
    let tmp = selectedEffectId(onSelectColors[15]);
    if (num == null) {
      num = 0;
    }
    let obj = {
      color: num,
      onSelect(arg0) {
        require = arg0;
        let obj = require("HapticUtils");
        const result = obj.triggerHapticFeedback(require("HapticUtils").HapticFeedbackTypes.IMPACT_MEDIUM);
        const mapped = colors.map((item, index) => {
          let tmp = item;
          if (index === closure_0) {
            tmp = closure_0;
          }
          return tmp;
        });
        closure_1_6(mapped);
        closure_1_7((arr) => {
          const obj = DisplayNameStylesUtils;
          return obj.updateCustomSwatch(arr, selectedEffectId, mapped);
        });
      },
      actionButtonVariant: "primary"
    };
    tmp(obj, "stack");
  }, items2);
  let closure_9 = displayNameStylesEffectConfig.useCallback((arg0) => {
    const items = [...arg0];
    closure_6(items);
  }, []);
  let obj3 = { header: closure_9(tmp8, obj4), children: closure_10(colors, obj6) };
  BottomSheet = require("Sheet/BottomSheet").BottomSheet;
  obj4 = { title: displayNameStylesEffectConfig.name, trailing: closure_9(Button, obj5) };
  tmp8 = selectedEffectId(onSelectColors[17]);
  obj5 = { variant: "primary", size: "sm", text: intl.string(require("intl").t.XqMe3N), onPress: callback };
  Button = require("components/Button/Button").Button;
  intl = require("intl").intl;
  obj6 = { style: tmp.body, children: items4 };
  let obj7 = { style: tmp.gradientContainer, children: items3 };
  let obj8 = {
    style: tmp.gradient,
    colors: colors.map((item) => {
      const obj = require("utils/ColorUtils");
      return obj.int2hex(item);
    }),
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 }
  };
  const tmp9 = selectedEffectId(onSelectColors[20]);
  items3 = [closure_9(tmp9, obj8), ];
  const obj9 = {
    style: tmp.dropperContainer,
    children: arr.map((item, index) => {
      let intl;
      let obj2;
      require = index;
      const obj = {
        style: closure_3.dropper,
        onPress() {
          return closure_8(index);
        },
        accessibilityLabel: intl.formatToPlainString(require("intl").t.n5Ve0L, obj2),
        accessibilityRole: "button",
        children: closure_9(require("EyeDropperIcon").EyeDropperIcon, { color: "white", size: "sm" })
      };
      intl = require("intl").intl;
      obj2 = { number: index + 1 };
      return closure_9(closure_6, obj, index);
    })
  };
  arr = Array.from({ length: effectColorCount });
  items3[1] = closure_9(colors, obj9);
  items4 = [closure_10(colors, obj7), , ];
  const obj10 = {
    style: tmp.optionContainer,
    children: arr2.map((colors, index) => {
      let PressableOpacity;
      let items;
      let items1;
      let obj3;
      let obj8;
      colors = colors.colors;
      const a11yLabel = colors.a11yLabel;
      let obj = selectedEffectId(onSelectColors[23]);
      let isEqualResult = obj.isEqual(colors, first);
      const obj2 = { style: closure_3.swatchWrapper, children: closure_1_10(PressableOpacity, obj3) };
      obj3 = {
        style: closure_3.pressable,
        onPress() {
          return closure_9(colors);
        },
        accessibilityRole: "button",
        accessibilityState: { selected: isEqualResult },
        accessibilityLabel: a11yLabel,
        children: items
      };
      PressableOpacity = require("Pressables").PressableOpacity;
      const obj4 = {
        style: closure_3.option,
        colors: colors.map((item) => {
          const obj = colors(onSelectColors[21]);
          return obj.int2hex(item);
        }),
        start: { x: 0, y: 0 },
        end: { x: 1, y: 0 }
      };
      const tmp8 = selectedEffectId(onSelectColors[20]);
      items = [closure_9(tmp8, obj4), ];
      const tmp = onSelectColors;
      const tmp7 = require;
      if (isEqualResult) {
        const obj5 = { children: items1 };
        const obj6 = { style: closure_3.selectedRing, pointerEvents: "none" };
        items1 = [closure_9(first, obj6), ];
        const obj7 = { style: closure_3.checkmarkOverlay, pointerEvents: "none", children: closure_9(tmp7(tmp[25]).CheckmarkLargeIcon, obj8) };
        obj8 = { size: "custom", style: closure_3.checkmark, color: "white" };
        items1[1] = closure_9(first, obj7);
        isEqualResult = tmp6(closure_1_11, obj5);
      }
      items[1] = isEqualResult;
      return closure_9(first, obj2, index);
    })
  };
  items4[1] = closure_9(colors, obj10);
  const obj11 = { style: tmp.resetButtonContainer, children: closure_9(Button2, obj12) };
  obj12 = { text: intl2.string(require("intl").t.yBZMsQ), onPress: callback1, variant: "secondary", size: "md", grow: true };
  Button2 = require("components/Button/Button").Button;
  intl2 = require("intl").intl;
  items4[2] = closure_9(colors, obj11);
  return closure_9(BottomSheet, obj3);
};
