// Module ID: 17221
// Function ID: 17222
// Name: DisplayNameStylesColorPickerSheet
// Dependencies: [32, 19, 17, 1084, 21, 1102, 17218, 5005, 587, 558, 576, 8699, 10733, 1406, 5249, 5247, 16342, 1264, 1125, 2930, 17209, 5281, 6979, 12, 17219, 5302, 2]

// Module 17221 (DisplayNameStylesColorPickerSheet)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1084 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1102 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import DisplayNameStylesUtils from "DisplayNameStylesUtils" /* 1406 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import HapticUtils from "HapticUtils" /* 5249 */;
import showCustomColorPickerActionSheetDefault from "showCustomColorPickerActionSheet" /* 16342 */;
import ColorPickerConsts from "ColorPickerConsts" /* 17218 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet;

let StyleSheet;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let size;
let size1;
let react = react_mod;
({ View: hasOwnProperty, Pressable: metroRequire, StyleSheet } = react_native);
let AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, contentContainer: obj2, presetGrid: obj3, presetRow: obj4, presetColor: size, presetColorSelected: obj5, checkmarkOverlay: obj6, checkmark: size1, buttonsContainer: obj7, button: { flex: 1 } };
obj2 = { alignSelf: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
obj4 = { gap: nativeDefault.space.PX_16, flexDirection: "row", justifyContent: "center" };
size = { width: 42, height: 42, borderRadius: nativeDefault.radii.sm, borderWidth: 2, borderColor: "transparent" };
obj5 = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
obj6 = { alignItems: "center", justifyContent: "center" };
const merged = Object.assign(StyleSheet.absoluteFillObject);
size1 = { width: ColorPickerConsts.CHECKMARK_SIZE, height: ColorPickerConsts.CHECKMARK_SIZE };
obj7 = { alignSelf: "stretch", flexDirection: "row", gap: nativeDefault.space.PX_16 };
let closure_10 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function DisplayNameStylesColorPickerSheet(selectedColor) {
  let closure_7;
  let hasCustomSingleColor;
  let presetRow;
  let obj = selectedColor(hasCustomSingleColor[10]);
  const cResult = obj.c(69);
  selectedColor = selectedColor.selectedColor;
  const selectedEffectId = selectedColor.selectedEffectId;
  hasCustomSingleColor = selectedColor.hasCustomSingleColor;
  const onSelectColor = selectedColor.onSelectColor;
  let tmp2 = closure_10();
  react = tmp2;
  let obj2 = selectedColor(hasCustomSingleColor[11]);
  const bottomSheetRef = obj2.useBottomSheetRef().bottomSheetRef;
  let tmp3 = selectedEffectId(hasCustomSingleColor[12])()[selectedEffectId];
  let closure_5 = tmp3;
  if (cResult[0] === hasCustomSingleColor) {
    if (cResult[1] === selectedColor) {
      let tmp4;
      let tmp14;
      if (cResult[2] === selectedEffectId) {
        tmp4 = cResult[3];
      }
      let obj3 = react;
      const tmp5 = onSelectColor;
      const first = onSelectColor(react.useState(tmp4), 1)[0];
      if (cResult[4] !== first) {
        let tmp8;
        let tmp7 = globalThis;
        const _Symbol = Symbol;
        let str = "react.memo_cache_sentinel";
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor(arg0) {
              return arg0.colors[0];
            }
          }
          cResult[6] = I;
          tmp8 = I;
        } else {
          class I {
            constructor(arg0) {
              return arg0.colors[0];
            }
          }
        }
        const mapped = first.map(tmp8);
        cResult[4] = first;
        cResult[5] = mapped;
      } else {
        class I {
          constructor(arg0) {
            return arg0.colors[0];
          }
        }
      }
      let tmp5Result = tmp5(obj3.useState(selectedColor), 2);
      const first1 = tmp5Result[0];
      AnalyticEvents = tmp5Result[1];
      let closure_8 = tmp12;
      const _Symbol2 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor(arg0) {
            closure_7(arg0);
          }
        }
        cResult[7] = T;
        tmp14 = T;
      } else {
        class T {
          constructor(arg0) {
            closure_7(arg0);
          }
        }
      }
      T = tmp14;
      if (cResult[8] === tmp3[0]) {
        class T {
          constructor(arg0) {
            closure_7(arg0);
          }
        }
        if (cResult[11] === first1) {
          class T {
            constructor(arg0) {
              closure_7(arg0);
            }
          }
          if (cResult[14] === tmp3[0]) {
            class T {
              constructor(arg0) {
                closure_7(arg0);
              }
            }
          }
          class F {
            constructor() {
              obj = {
                color: closure_6,
                onSelect(arg0) {
                              const obj = selectedColor(hasCustomSingleColor[14]);
                              const result = obj.triggerHapticFeedback(selectedColor(hasCustomSingleColor[14]).HapticFeedbackTypes.IMPACT_MEDIUM);
                              onSelectColor(arg0);
                              const obj2 = selectedEffectId(hasCustomSingleColor[15]);
                              obj2.hideActionSheet();
                            },
                actionButtonVariant: "primary"
              };
              tmp = closure_1(closure_2[16])(obj);
              return;
            }
          }
          cResult[14] = tmp3[0];
          cResult[15] = first1 !== selectedColor;
          cResult[16] = first1;
          cResult[17] = onSelectColor;
          cResult[18] = tmp18;
        }
        class F {
          constructor() {
            obj = {
              color: closure_6,
              onSelect(arg0) {
                          const obj = selectedColor(hasCustomSingleColor[14]);
                          const result = obj.triggerHapticFeedback(selectedColor(hasCustomSingleColor[14]).HapticFeedbackTypes.IMPACT_MEDIUM);
                          onSelectColor(arg0);
                          const obj2 = selectedEffectId(hasCustomSingleColor[15]);
                          obj2.hideActionSheet();
                        },
              actionButtonVariant: "primary"
            };
            tmp = closure_1(closure_2[16])(obj);
            return;
          }
        }
        cResult[11] = first1;
        cResult[12] = onSelectColor;
        cResult[13] = F;
      }
      const fn2 = function w() {
        const obj = HapticUtils;
        const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
        onSelectColor(closure_5[0]);
        const obj2 = ActionSheetActionCreatorsDefault;
        obj2.hideActionSheet();
      };
      cResult[8] = tmp3[0];
      cResult[9] = onSelectColor;
      cResult[10] = fn2;
    }
  }
  const fn = function s() {
    let tmp3 = null;
    const createColorPaletteList = DisplayNameStylesUtils.createColorPaletteList;
    DisplayNameStylesUtils;
    const tmp2 = selectedEffectId;
    if (hasCustomSingleColor) {
      const items = [selectedColor];
      tmp3 = items;
    }
    return createColorPaletteList(tmp2, tmp3);
  };
  cResult[0] = hasCustomSingleColor;
  cResult[1] = selectedColor;
  cResult[2] = selectedEffectId;
  cResult[3] = fn;
  tmp4 = fn;
}) : (function DisplayNameStylesColorPickerSheet(selectedColor) {
  let Button;
  let Button2;
  let Button3;
  let chunkResult;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items5;
  let items6;
  let obj11;
  let obj13;
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  let onSelectColor;
  let presetRow;
  let tmp11;
  selectedColor = selectedColor.selectedColor;
  const selectedEffectId = selectedColor.selectedEffectId;
  ({ hasCustomSingleColor: dependencyMap, onSelectColor } = selectedColor);
  closure_10 = undefined;
  let tmp = closure_10();
  react = tmp;
  let obj = selectedColor(8699);
  const bottomSheetRef = obj.useBottomSheetRef().bottomSheetRef;
  let tmp2 = selectedEffectId(10733)()[selectedEffectId];
  let closure_5 = tmp2;
  const first = onSelectColor(react.useState(() => {
    let tmp3 = null;
    const createColorPaletteList = DisplayNameStylesUtils.createColorPaletteList;
    DisplayNameStylesUtils;
    const tmp2 = selectedEffectId;
    if (dependencyMap) {
      const items = [selectedColor];
      tmp3 = items;
    }
    return createColorPaletteList(tmp2, tmp3);
  }), 1)[0];
  let items = [first];
  const memo = react.useMemo(() => first.map((item) => item.colors[0]), items);
  const tmp5 = onSelectColor(react.useState(selectedColor), 2);
  const first1 = tmp5[0];
  let closure_8 = tmp5[1];
  const items1 = [first1, selectedColor];
  const memo1 = react.useMemo(() => first1 !== selectedColor, items1);
  closure_10 = react.useCallback((arg0) => {
    closure_8(arg0);
  }, []);
  const items2 = [tmp2, onSelectColor];
  const items3 = [first1, onSelectColor];
  const callback = react.useCallback(() => {
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
    onSelectColor(closure_5[0]);
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideActionSheet();
  }, items2);
  const items4 = [memo1, first1, onSelectColor, tmp2];
  const callback1 = react.useCallback(() => {
    let obj = {
      color: first1,
      onSelect(arg0) {
        const obj = selectedColor(dependencyMap[14]);
        const result = obj.triggerHapticFeedback(selectedColor(dependencyMap[14]).HapticFeedbackTypes.IMPACT_MEDIUM);
        onSelectColor(arg0);
        const obj2 = selectedEffectId(dependencyMap[15]);
        obj2.hideActionSheet();
      },
      actionButtonVariant: "primary"
    };
    showCustomColorPickerActionSheetDefault(obj);
  }, items3);
  const callback2 = react.useCallback(() => {
    let items;
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    const tmp3 = memo1;
    if (tmp3) {
      onSelectColor(first1);
      const obj3 = { default: first1 === closure_5[0], colors: items };
      items = [first1];
      const obj2 = AnalyticsUtilsDefault;
      obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj3);
    }
    const obj4 = ActionSheetActionCreatorsDefault;
    obj4.hideActionSheet();
  }, items4);
  let obj2 = { ref: bottomSheetRef, header: closure_8(tmp11, obj3), children: closure_8(closure_5, obj5) };
  BottomSheet = selectedColor(5302).BottomSheet;
  obj3 = { title: intl.string(selectedEffectId(2930)["6OxgN7"]), trailing: closure_8(Button, obj4) };
  tmp11 = selectedEffectId(17209);
  intl = selectedColor(1125).intl;
  obj4 = { text: intl2.string(selectedColor(1125).t.XqMe3N), onPress: callback2, variant: "primary", size: "sm" };
  Button = selectedColor(5281).Button;
  intl2 = selectedColor(1125).intl;
  obj5 = { style: tmp.container, children: memo1(closure_5, obj6) };
  obj6 = { style: tmp.contentContainer, children: items5 };
  const obj7 = {
    style: tmp.presetGrid,
    children: chunkResult.map((arr, index) => {
      let presetColor;
      let closure_0 = index;
      let obj = {
        style: presetRow.presetRow,
        children: arr.map((item, index) => {
          let CheckmarkLargeIcon;
          let items;
          let obj3;
          let obj5;
          let str;
          let tmp5Result;
          let closure_0 = item;
          let tmp = item === first1;
          const obj = {
            onPress() {
              return closure_2_10(closure_0);
            },
            style: items,
            accessibilityRole: "button",
            accessibilityState: { selected: tmp },
            accessibilityLabel: tmp5Result.int2hex(item),
            children: tmp
          };
          items = [presetColor.presetColor, , ];
          const obj2 = { backgroundColor: obj3.int2hex(item) };
          items[1] = obj2;
          items[2] = tmp && presetColor.presetColorSelected;
          obj3 = utils_ColorUtils;
          const tmp3 = metroRequire;
          tmp5Result = utils_ColorUtils;
          if (tmp) {
            const obj4 = { style: presetColor.checkmarkOverlay, pointerEvents: "none", children: metroImportAll(CheckmarkLargeIcon, obj5) };
            obj5 = { size: "custom", style: presetColor.checkmark, color: str };
            CheckmarkLargeIcon = tmp5(6979).CheckmarkLargeIcon;
            const tmp5Result2 = utils_ColorUtils;
            const darkness = tmp5Result2.getDarkness(item);
            str = "black";
            const tmp7 = hasOwnProperty;
            if (darkness > ColorPickerConsts.DARK_SWATCH_THRESHOLD) {
              str = "white";
            }
            tmp = tmp2(tmp7, obj4);
          }
          return metroImportAll(tmp3, obj, 6 * closure_0 + index);
        })
      };
      return closure_8(closure_5, obj, index);
    })
  };
  const obj8 = selectedEffectId(12);
  chunkResult = obj8.chunk(memo, 6);
  items5 = [closure_8(closure_5, obj7), ];
  const obj9 = { style: tmp.buttonsContainer, children: items6 };
  const obj10 = { style: tmp.button, children: closure_8(Button2, obj11) };
  obj11 = { text: intl3.string(selectedEffectId(2930).gIeJTK), onPress: callback, variant: "secondary", size: "md", grow: true };
  Button2 = selectedColor(5281).Button;
  intl3 = selectedColor(1125).intl;
  items6 = [closure_8(closure_5, obj10), ];
  const obj12 = { style: tmp.button, children: closure_8(Button3, obj13) };
  obj13 = { text: intl4.string(selectedColor(1125).t["FHBa/1"]), onPress: callback1, variant: "secondary", size: "md", icon: closure_8(selectedColor(17219).EyeDropperIcon, { size: "sm" }), grow: true };
  Button3 = selectedColor(5281).Button;
  intl4 = selectedColor(1125).intl;
  items6[1] = closure_8(closure_5, obj12);
  items5[1] = memo1(closure_5, obj9);
  return closure_8(BottomSheet, obj2);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesColorPickerSheet.tsx");

export default tmp6;
