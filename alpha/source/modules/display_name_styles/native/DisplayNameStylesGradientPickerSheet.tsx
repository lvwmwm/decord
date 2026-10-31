// Module ID: 17333
// Function ID: 17334
// Name: DisplayNameStylesGradientPickerSheet
// Dependencies: [32, 19, 17, 17324, 1072, 21, 5014, 575, 1402, 10775, 1400, 17325, 5260, 1252, 5258, 16437, 5272, 17320, 5634, 1113, 5587, 1090, 17334, 12, 6980, 2]
// Exports: default

// Module 17333 (DisplayNameStylesGradientPickerSheet)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import HapticUtils from "HapticUtils" /* 5260 */;
import DisplayNameStylesColorPickerConstants from "DisplayNameStylesColorPickerConstants" /* 17324 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet;

let c10;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, Pressable: metroRequire, StyleSheet: metroImportDefault } = react_native);
const SHEET_CONTENT_MAX_WIDTH = DisplayNameStylesColorPickerConstants.SHEET_CONTENT_MAX_WIDTH;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles((arg0) => {
  let obj6;
  let rect;
  let size1;
  let size2;
  let space;
  const obj = { sheetBackground: { borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg }, body: { paddingTop: nativeDefault.space.PX_4, paddingBottom: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, flexGrow: 1, justifyContent: "center", alignItems: "center" }, gradientContainer: { marginBottom: nativeDefault.space.PX_24, flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", maxWidth: SHEET_CONTENT_MAX_WIDTH }, colorStopRow: rect, colorStop: size, gradient: size1, optionContainer: { marginBottom: arg0 ? space.PX_24 : space.PX_20, justifyContent: "center", flexDirection: "row", width: "100%", maxWidth: SHEET_CONTENT_MAX_WIDTH, flexWrap: "wrap", columnGap: nativeDefault.space.PX_24, rowGap: nativeDefault.space.PX_16 }, pressable: size2, selectedRing: obj6, option: { flex: 1 }, resetButtonContainer: { width: "100%", maxWidth: SHEET_CONTENT_MAX_WIDTH, flexDirection: "row" } };
  ({ borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg });
  ({ paddingTop: nativeDefault.space.PX_4, paddingBottom: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, flexGrow: 1, justifyContent: "center", alignItems: "center" });
  ({ marginBottom: nativeDefault.space.PX_24, flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", maxWidth: SHEET_CONTENT_MAX_WIDTH });
  rect = { left: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8, position: "absolute", flexDirection: "row", justifyContent: "space-between" };
  size = { borderColor: "white", width: 28, height: 28, borderRadius: nativeDefault.radii.sm, borderWidth: 1 };
  size1 = { height: 50, width: "100%", borderRadius: nativeDefault.radii.sm };
  space = nativeDefault.space;
  ({ marginBottom: arg0 ? space.PX_24 : space.PX_20, justifyContent: "center", flexDirection: "row", width: "100%", maxWidth: SHEET_CONTENT_MAX_WIDTH, flexWrap: "wrap", columnGap: nativeDefault.space.PX_24, rowGap: nativeDefault.space.PX_16 });
  size2 = { width: 40, height: 40, borderRadius: tmp(575).radii.sm, overflow: "hidden" };
  obj6 = { borderRadius: nativeDefault.radii.sm, borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
  const merged = Object.assign(metroImportDefault.absoluteFillObject);
  return obj;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesGradientPickerSheet.tsx");

export default function DisplayNameStylesGradientPickerSheet(onSelectColors) {
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
  let tmp7;
  ({ selectedColors: require, selectedEffectId } = onSelectColors);
  onSelectColors = onSelectColors.onSelectColors;
  colors = undefined;
  closure_6 = undefined;
  let tmp = closure_12(selectedEffectId === require("DisplayNameEffect").DisplayNameEffect.PRISM);
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
  const arr2 = selectedEffectId(onSelectColors[11])(selectedEffectId);
  let items = [colors, onSelectColors];
  const items1 = [arr2, displayNameStylesEffectConfig.defaultColors];
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
  const items2 = [colors];
  const callback1 = displayNameStylesEffectConfig.useCallback(() => {
    const first = arr2[0];
    colors = undefined;
    const tmp = closure_6;
    if (first != null) {
      colors = first.colors;
    }
    if (colors == null) {
      colors = displayNameStylesEffectConfig.defaultColors;
    }
    const items = [...colors];
    tmp(items);
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
        const obj = require("HapticUtils");
        const result = obj.triggerHapticFeedback(require("HapticUtils").HapticFeedbackTypes.IMPACT_MEDIUM);
        closure_1_6((arr) => arr.map((item, index) => {
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
  let closure_9 = displayNameStylesEffectConfig.useCallback((arg0) => {
    const items = [...arg0];
    closure_6(items);
  }, []);
  let obj3 = { backgroundStyles: tmp.sheetBackground, header: closure_10(tmp7, obj4), children: closure_11(colors, obj6) };
  BottomSheet = require("Sheet/BottomSheet").BottomSheet;
  obj4 = { title: displayNameStylesEffectConfig.name, trailing: closure_10(Button, obj5) };
  obj5 = { variant: "primary", size: "sm", text: intl.string(require("intl").t.XqMe3N), onPress: callback };
  tmp7 = selectedEffectId(onSelectColors[17]);
  Button = require("components/Button/Button").Button;
  intl = require("intl").intl;
  obj6 = { style: tmp.body, children: items4 };
  const obj7 = { style: tmp.gradientContainer, children: items3 };
  const obj8 = {
    style: tmp.gradient,
    colors: colors.map((item) => {
      const obj = require("utils/ColorUtils");
      return obj.int2hex(item);
    }),
    locations: selectedEffectId(onSelectColors[22])(selectedEffectId, colors, true),
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 }
  };
  const tmp8 = selectedEffectId(onSelectColors[20]);
  items3 = [closure_10(tmp8, obj8), ];
  const obj9 = {
    style: tmp.colorStopRow,
    children: arr.map((item, index) => {
      let formatToPlainStringResult;
      let int2hex2;
      let num2;
      require = index;
      const items = [closure_3.colorStop, ];
      let num = first[index];
      const int2hex = require("utils/ColorUtils").int2hex;
      require("utils/ColorUtils");
      const tmp = closure_1_10;
      const tmp2 = closure_6;
      const tmp6 = first;
      if (num == null) {
        num = 0;
      }
      const obj = {
        style: items,
        onPress() {
          return closure_8(index);
        },
        accessibilityLabel: "" + formatToPlainStringResult + ", " + int2hex2(num2),
        accessibilityRole: "button"
      };
      items[1] = { backgroundColor: int2hex(num) };
      ({ backgroundColor: int2hex(num) });
      const intl = tmp3(tmp4[19]).intl;
      const obj3 = { number: index + 1 };
      num2 = tmp6[index];
      formatToPlainStringResult = intl.formatToPlainString(require("intl").t.n5Ve0L, obj3);
      int2hex2 = require("utils/ColorUtils").int2hex;
      require("utils/ColorUtils");
      if (num2 == null) {
        num2 = 0;
      }
      return tmp(tmp2, obj, index);
    })
  };
  arr = Array.from({ length: effectColorCount });
  items3[1] = closure_10(colors, obj9);
  items4 = [closure_11(colors, obj7), , ];
  const obj10 = {
    style: tmp.optionContainer,
    children: arr2.map((colors, index) => {
      let items;
      colors = colors.colors;
      const a11yLabel = colors.a11yLabel;
      let obj = selectedEffectId(onSelectColors[23]);
      let isEqualResult = obj.isEqual(colors, first);
      const obj2 = {
        style: closure_3.pressable,
        onPress() {
          return closure_9(colors);
        },
        accessibilityRole: "button",
        accessibilityState: { selected: isEqualResult },
        accessibilityLabel: a11yLabel,
        children: items
      };
      const PressableOpacity = require("Pressables").PressableOpacity;
      const obj3 = {
        style: closure_3.option,
        colors: colors.map((item) => {
          const obj = colors(onSelectColors[21]);
          return obj.int2hex(item);
        }),
        locations: selectedEffectId(onSelectColors[22])(selectedEffectId, colors),
        start: { x: 0, y: 0 },
        end: { x: 1, y: 0 }
      };
      const tmp5 = selectedEffectId(onSelectColors[20]);
      items = [closure_1_10(tmp5, obj3), ];
      const tmp2 = closure_1_11;
      const tmp3 = closure_3;
      const tmp4 = closure_1_10;
      if (isEqualResult) {
        const obj4 = { style: tmp3.selectedRing, pointerEvents: "none" };
        isEqualResult = tmp4(first, obj4);
      }
      items[1] = isEqualResult;
      return tmp2(PressableOpacity, obj2, index);
    })
  };
  items4[1] = closure_10(colors, obj10);
  const obj11 = { style: tmp.resetButtonContainer, children: closure_10(Button2, obj12) };
  obj12 = { text: intl2.string(require("intl").t.yBZMsQ), onPress: callback1, variant: "secondary", size: "md", grow: true };
  Button2 = require("components/Button/Button").Button;
  intl2 = require("intl").intl;
  items4[2] = closure_10(colors, obj11);
  return closure_10(BottomSheet, obj3);
};
