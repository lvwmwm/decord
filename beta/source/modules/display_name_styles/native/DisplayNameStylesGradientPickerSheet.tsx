// Module ID: 14897
// Function ID: 14898
// Name: DisplayNameStylesGradientPickerSheet
// Dependencies: [32, 19, 17, 1074, 21, 4836, 576, 14898, 10360, 1389, 14893, 4801, 1241, 4800, 14152, 6571, 14890, 5281, 1115, 5293, 1092, 14899, 12, 5435, 4783, 2]
// Exports: default

// Module 14897 (DisplayNameStylesGradientPickerSheet)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import ColorPickerConsts from "ColorPickerConsts" /* 14898 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, importDefault;

let StyleSheet;
let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
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
({ View: hasOwnProperty, Pressable: metroRequire, StyleSheet } = react_native);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
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
let closure_11 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesGradientPickerSheet.tsx");

export default function DisplayNameStylesColorPickerSheet(selectedColors) {
  let Button;
  let Button2;
  let arr2;
  let closure_1;
  let intl;
  let intl2;
  let items3;
  let items4;
  let obj12;
  let obj4;
  let obj5;
  let obj6;
  let onSelectColors;
  let selectedEffectId;
  let tmp7;
  ({ selectedEffectId, onSelectColors } = selectedColors);
  let displayNameStylesEffectConfig;
  let colors;
  selectedColors = selectedColors.selectedColors;
  let tmp = closure_11();
  importDefault = tmp;
  let obj = onSelectColors(displayNameStylesEffectConfig[8]);
  displayNameStylesEffectConfig = obj.useDisplayNameStylesEffectConfig(selectedEffectId);
  let obj2 = onSelectColors(displayNameStylesEffectConfig[9]);
  const effectColorCount = obj2.getEffectColorCount(selectedEffectId);
  const arr = require("useColorPresetsWithA11yLabels")(selectedEffectId);
  const tmp4 = arr(colors.useState(selectedColors), 2);
  colors = tmp4[0];
  let closure_5 = tmp4[1];
  let items = [colors, onSelectColors];
  let items1 = [arr, displayNameStylesEffectConfig.defaultColors];
  const callback = colors.useCallback(() => {
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    onSelectColors(colors);
    const obj2 = AnalyticsUtilsDefault;
    const obj3 = { default: false, colors };
    obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj3);
    const obj4 = ActionSheetActionCreatorsDefault;
    obj4.hideActionSheet();
  }, items);
  const items2 = [colors];
  const callback1 = colors.useCallback(() => {
    const first = arr[0];
    colors = undefined;
    const tmp = closure_5;
    if (first != null) {
      colors = first.colors;
    }
    if (colors == null) {
      colors = displayNameStylesEffectConfig.defaultColors;
    }
    const items = [...colors];
    tmp(items);
  }, items1);
  let closure_6 = colors.useCallback((arg0) => {
    let closure_0 = arg0;
    let num = first[arg0];
    let tmp = closure_1(displayNameStylesEffectConfig[14]);
    if (num == null) {
      num = 0;
    }
    let obj = {
      color: num,
      onSelect(arg0) {
        closure_0 = arg0;
        const obj = onSelectColors(displayNameStylesEffectConfig[11]);
        const result = obj.triggerHapticFeedback(onSelectColors(displayNameStylesEffectConfig[11]).HapticFeedbackTypes.IMPACT_MEDIUM);
        closure_1_5((arr) => arr.map((item, index) => {
          let tmp = item;
          if (index === closure_0) {
            tmp = closure_1_0;
          }
          return tmp;
        }));
      },
      actionButtonVariant: "primary"
    };
    tmp(obj, "stack");
  }, items2);
  let closure_7 = colors.useCallback((arg0) => {
    const items = [...arg0];
    closure_5(items);
  }, []);
  let obj3 = { header: closure_8(tmp7, obj4), children: closure_9(closure_5, obj6) };
  BottomSheet = onSelectColors(displayNameStylesEffectConfig[15]).BottomSheet;
  obj4 = { title: displayNameStylesEffectConfig.name, trailing: closure_8(Button, obj5) };
  tmp7 = require("DisplayNameStylesSheetHeader");
  obj5 = { variant: "primary", size: "sm", text: intl.string(onSelectColors(displayNameStylesEffectConfig[18]).t.XqMe3N), onPress: callback };
  Button = onSelectColors(displayNameStylesEffectConfig[17]).Button;
  intl = onSelectColors(displayNameStylesEffectConfig[18]).intl;
  obj6 = { style: tmp.body, children: items4 };
  let obj7 = { style: tmp.gradientContainer, children: items3 };
  let obj8 = {
    style: tmp.gradient,
    colors: colors.map((item) => {
      const obj = onSelectColors(displayNameStylesEffectConfig[20]);
      return obj.int2hex(item);
    }),
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 }
  };
  let tmp8 = require("LinearGradient");
  items3 = [closure_8(tmp8, obj8), ];
  const obj9 = {
    style: tmp.dropperContainer,
    children: arr2.map((item, index) => {
      let intl;
      let obj2;
      let closure_0 = index;
      const obj = {
        style: closure_1.dropper,
        onPress() {
          return closure_6(index);
        },
        accessibilityLabel: intl.formatToPlainString(onSelectColors(displayNameStylesEffectConfig[18]).t.n5Ve0L, obj2),
        accessibilityRole: "button",
        children: closure_1_8(onSelectColors(displayNameStylesEffectConfig[21]).EyeDropperIcon, { color: "white", size: "sm" })
      };
      intl = onSelectColors(displayNameStylesEffectConfig[18]).intl;
      obj2 = { number: index + 1 };
      return closure_1_8(closure_6, obj, index);
    })
  };
  arr2 = Array.from({ length: effectColorCount });
  items3[1] = closure_8(closure_5, obj9);
  items4 = [closure_9(closure_5, obj7), , ];
  const obj10 = {
    style: tmp.optionContainer,
    children: arr.map((colors, index) => {
      let PressableOpacity;
      let items;
      let items1;
      let obj3;
      let obj8;
      colors = colors.colors;
      const a11yLabel = colors.a11yLabel;
      let obj = closure_1(displayNameStylesEffectConfig[22]);
      let isEqualResult = obj.isEqual(colors, first);
      const obj2 = { style: closure_1.swatchWrapper, children: closure_1_9(PressableOpacity, obj3) };
      obj3 = {
        style: closure_1.pressable,
        onPress() {
          return closure_7(colors);
        },
        accessibilityRole: "button",
        accessibilityState: { selected: isEqualResult },
        accessibilityLabel: a11yLabel,
        children: items
      };
      PressableOpacity = onSelectColors(displayNameStylesEffectConfig[23]).PressableOpacity;
      const obj4 = {
        style: closure_1.option,
        colors: colors.map((item) => {
          const obj = colors(displayNameStylesEffectConfig[20]);
          return obj.int2hex(item);
        }),
        start: { x: 0, y: 0 },
        end: { x: 1, y: 0 }
      };
      const tmp8 = closure_1(displayNameStylesEffectConfig[19]);
      items = [closure_1_8(tmp8, obj4), ];
      const tmp = displayNameStylesEffectConfig;
      const tmp7 = onSelectColors;
      if (isEqualResult) {
        const obj5 = { children: items1 };
        const obj6 = { style: closure_1.selectedRing, pointerEvents: "none" };
        items1 = [closure_1_8(closure_5, obj6), ];
        const obj7 = { style: closure_1.checkmarkOverlay, pointerEvents: "none", children: closure_1_8(tmp7(tmp[24]).CheckmarkLargeIcon, obj8) };
        obj8 = { size: "custom", style: closure_1.checkmark, color: "white" };
        items1[1] = closure_1_8(closure_5, obj7);
        isEqualResult = tmp6(closure_1_10, obj5);
      }
      items[1] = isEqualResult;
      return closure_1_8(closure_5, obj2, index);
    })
  };
  items4[1] = closure_8(closure_5, obj10);
  const obj11 = { style: tmp.resetButtonContainer, children: closure_8(Button2, obj12) };
  obj12 = { text: intl2.string(onSelectColors(displayNameStylesEffectConfig[18]).t.yBZMsQ), onPress: callback1, variant: "secondary", size: "md", grow: true };
  Button2 = onSelectColors(displayNameStylesEffectConfig[17]).Button;
  intl2 = onSelectColors(displayNameStylesEffectConfig[18]).intl;
  items4[2] = closure_8(closure_5, obj11);
  return closure_8(BottomSheet, obj3);
};
