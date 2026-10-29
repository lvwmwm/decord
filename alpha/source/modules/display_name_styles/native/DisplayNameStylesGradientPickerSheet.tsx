// Module ID: 17217
// Function ID: 17218
// Name: DisplayNameStylesGradientPickerSheet
// Dependencies: [32, 19, 17, 1407, 1084, 21, 5005, 587, 17218, 558, 576, 10732, 1406, 17213, 5249, 1264, 5247, 16342, 5302, 1125, 5281, 17209, 1102, 5295, 17219, 12, 6968, 6979, 2]

// Module 17217 (DisplayNameStylesGradientPickerSheet)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1084 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import DisplayNameStylesUtils from "DisplayNameStylesUtils" /* 1406 */;
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1407 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import HapticUtils from "HapticUtils" /* 5249 */;
import ColorPickerConsts from "ColorPickerConsts" /* 17218 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, colors;

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
let getColorPresetsForEffect = DisplayNameStylesConstants.getColorPresetsForEffect;
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
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function DisplayNameStylesColorPickerSheet(selectedColors) {
  let closure_3;
  let closure_6;
  let closure_7;
  let gradient;
  let gradientContainer;
  let onSelectColors;
  let tmp = selectedColors;
  let tmp2 = onSelectColors;
  let obj = selectedColors(onSelectColors[10]);
  const cResult = obj.c(81);
  selectedColors = selectedColors.selectedColors;
  const selectedEffectId = selectedColors.selectedEffectId;
  onSelectColors = selectedColors.onSelectColors;
  const tmp4 = closure_12();
  _slicedToArray = tmp4;
  let obj2 = selectedColors(onSelectColors[11]);
  const displayNameStylesEffectConfig = obj2.useDisplayNameStylesEffectConfig(selectedEffectId);
  const tmp6 = selectedColors(onSelectColors[12]);
  if (cResult[0] === displayNameStylesEffectConfig.defaultColors) {
    let tmp7;
    if (cResult[1] === selectedColors) {
      tmp7 = cResult[2];
    }
    let obj3 = displayNameStylesEffectConfig;
    let num = 2;
    let tmp8 = _slicedToArray;
    [colors, closure_6] = displayNameStylesEffectConfig.useState(tmp7);
    if (cResult[3] === selectedColors) {
      let tmp10;
      if (cResult[4] === selectedEffectId) {
        tmp10 = cResult[5];
      }
      const tmp8Result = tmp8(obj3.useState(tmp10), 2);
      getColorPresetsForEffect = tmp8Result[1];
      selectedEffectId(tmp2[13])(selectedEffectId, tmp8Result[0]);
      if (cResult[6] === colors) {
        let tmp14;
        if (cResult[7] === onSelectColors) {
          tmp14 = cResult[8];
        }
        if (cResult[9] === displayNameStylesEffectConfig.defaultColors) {
          if (cResult[12] === colors) {
            let tmp16;
            if (cResult[13] === selectedEffectId) {
              tmp16 = cResult[14];
            }
            let closure_8 = tmp16;
            class H {
              constructor() {
                first = closure_7(selectedEffectId)[0];
                if (first == null) {
                  tmp = closure_4;
                  first = closure_4.defaultColors;
                }
                substr = first.slice();
                closure_0 = substr;
                tmp3 = closure_6(substr);
                tmp4 = closure_7((arr) => {
                  const obj = DisplayNameStylesUtils;
                  return obj.updateCustomSwatch(arr, selectedEffectId, substr);
                });
                return;
              }
            }
            const _Symbol = Symbol;
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              class X {
                constructor(arg0) {
                  const items = [...arg0];
                  closure_6(items);
                }
              }
              class H {
                constructor() {
                  first = closure_7(selectedEffectId)[0];
                  if (first == null) {
                    tmp = closure_4;
                    first = closure_4.defaultColors;
                  }
                  substr = first.slice();
                  closure_0 = substr;
                  tmp3 = closure_6(substr);
                  tmp4 = closure_7((arr) => {
                    const obj = DisplayNameStylesUtils;
                    return obj.updateCustomSwatch(arr, selectedEffectId, substr);
                  });
                  return;
                }
              }
            } else {
              class X {
                constructor(arg0) {
                  const items = [...arg0];
                  closure_6(items);
                }
              }
            }
            class D {
              constructor() {
                const obj = HapticUtils;
                const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
                onSelectColors(colors);
                const obj2 = AnalyticsUtilsDefault;
                const obj3 = { default: false, colors };
                obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj3);
                const obj4 = ActionSheetActionCreatorsDefault;
                obj4.hideActionSheet();
              }
            }
            BottomSheet = tmp(tmp2[18]).BottomSheet;
            class E {
              constructor() {
                let tmp3 = null;
                const createColorPaletteList = DisplayNameStylesUtils.createColorPaletteList;
                DisplayNameStylesUtils;
                const tmp2 = selectedEffectId;
                if (selectedColors.length > 0) {
                  tmp3 = selectedColors;
                }
                return createColorPaletteList(tmp2, tmp3);
              }
            }
            const name = displayNameStylesEffectConfig.name;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              class X {
                constructor(arg0) {
                  const items = [...arg0];
                  closure_6(items);
                }
              }
              const string = tmp20.string;
              class H {
                constructor() {
                  first = closure_7(selectedEffectId)[0];
                  if (first == null) {
                    tmp = closure_4;
                    first = closure_4.defaultColors;
                  }
                  substr = first.slice();
                  closure_0 = substr;
                  tmp3 = closure_6(substr);
                  tmp4 = closure_7((arr) => {
                    const obj = DisplayNameStylesUtils;
                    return obj.updateCustomSwatch(arr, selectedEffectId, substr);
                  });
                  return;
                }
              }
              cResult[16] = tmp21;
            } else {
              class X {
                constructor(arg0) {
                  const items = [...arg0];
                  closure_6(items);
                }
              }
            }
            if (cResult[17] !== tmp14) {
              class X {
                constructor(arg0) {
                  const items = [...arg0];
                  closure_6(items);
                }
              }
              let obj4 = { variant: "primary", size: "sm", text: null, onPress: tmp14 };
              class H {
                constructor() {
                  first = closure_7(selectedEffectId)[0];
                  if (first == null) {
                    tmp = closure_4;
                    first = closure_4.defaultColors;
                  }
                  substr = first.slice();
                  closure_0 = substr;
                  tmp3 = closure_6(substr);
                  tmp4 = closure_7((arr) => {
                    const obj = DisplayNameStylesUtils;
                    return obj.updateCustomSwatch(arr, selectedEffectId, substr);
                  });
                  return;
                }
              }
              cResult[17] = tmp14;
              const tmp23 = closure_9(tmp(tmp2[20]).Button, obj4);
              class D {
                constructor() {
                  const obj = HapticUtils;
                  const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
                  onSelectColors(colors);
                  const obj2 = AnalyticsUtilsDefault;
                  const obj3 = { default: false, colors };
                  obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj3);
                  const obj4 = ActionSheetActionCreatorsDefault;
                  obj4.hideActionSheet();
                }
              }
              cResult[18] = tmp23;
              class E {
                constructor() {
                  let tmp3 = null;
                  const createColorPaletteList = DisplayNameStylesUtils.createColorPaletteList;
                  DisplayNameStylesUtils;
                  const tmp2 = selectedEffectId;
                  if (selectedColors.length > 0) {
                    tmp3 = selectedColors;
                  }
                  return createColorPaletteList(tmp2, tmp3);
                }
              }
            } else {
              class X {
                constructor(arg0) {
                  const items = [...arg0];
                  closure_6(items);
                }
              }
            }
            if (cResult[19] === displayNameStylesEffectConfig.name) {
              let tmp34;
              class X {
                constructor(arg0) {
                  const items = [...arg0];
                  closure_6(items);
                }
              }
              class H {
                constructor() {
                  first = closure_7(selectedEffectId)[0];
                  if (first == null) {
                    tmp = closure_4;
                    first = closure_4.defaultColors;
                  }
                  substr = first.slice();
                  closure_0 = substr;
                  tmp3 = closure_6(substr);
                  tmp4 = closure_7((arr) => {
                    const obj = DisplayNameStylesUtils;
                    return obj.updateCustomSwatch(arr, selectedEffectId, substr);
                  });
                  return;
                }
              }
              ({ gradientContainer, gradient } = tmp4);
              if (cResult[22] !== colors) {
                class X {
                  constructor(arg0) {
                    const items = [...arg0];
                    closure_6(items);
                  }
                }
                class H {
                  constructor() {
                    first = closure_7(selectedEffectId)[0];
                    if (first == null) {
                      tmp = closure_4;
                      first = closure_4.defaultColors;
                    }
                    substr = first.slice();
                    closure_0 = substr;
                    tmp3 = closure_6(substr);
                    tmp4 = closure_7((arr) => {
                      const obj = DisplayNameStylesUtils;
                      return obj.updateCustomSwatch(arr, selectedEffectId, substr);
                    });
                    return;
                  }
                }
                let mapped = colors.map(tmp30);
                cResult[22] = colors;
                class D {
                  constructor() {
                    const obj = HapticUtils;
                    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
                    onSelectColors(colors);
                    const obj2 = AnalyticsUtilsDefault;
                    const obj3 = { default: false, colors };
                    obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj3);
                    const obj4 = ActionSheetActionCreatorsDefault;
                    obj4.hideActionSheet();
                  }
                }
              } else {
                class X {
                  constructor(arg0) {
                    const items = [...arg0];
                    closure_6(items);
                  }
                }
              }
              const _Symbol2 = Symbol;
              class D {
                constructor() {
                  const obj = HapticUtils;
                  const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
                  onSelectColors(colors);
                  const obj2 = AnalyticsUtilsDefault;
                  const obj3 = { default: false, colors };
                  obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj3);
                  const obj4 = ActionSheetActionCreatorsDefault;
                  obj4.hideActionSheet();
                }
              }
              if (tmp32 === Symbol.for("react.memo_cache_sentinel")) {
                class X {
                  constructor(arg0) {
                    const items = [...arg0];
                    closure_6(items);
                  }
                }
                const point = { x: 1, y: 0 };
                class H {
                  constructor() {
                    first = closure_7(selectedEffectId)[0];
                    if (first == null) {
                      tmp = closure_4;
                      first = closure_4.defaultColors;
                    }
                    substr = first.slice();
                    closure_0 = substr;
                    tmp3 = closure_6(substr);
                    tmp4 = closure_7((arr) => {
                      const obj = DisplayNameStylesUtils;
                      return obj.updateCustomSwatch(arr, selectedEffectId, substr);
                    });
                    return;
                  }
                }
                cResult[25] = tmp35;
                cResult[26] = point;
                tmp34 = point;
                class D {
                  constructor() {
                    const obj = HapticUtils;
                    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
                    onSelectColors(colors);
                    const obj2 = AnalyticsUtilsDefault;
                    const obj3 = { default: false, colors };
                    obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj3);
                    const obj4 = ActionSheetActionCreatorsDefault;
                    obj4.hideActionSheet();
                  }
                }
              } else {
                class X {
                  constructor(arg0) {
                    const items = [...arg0];
                    closure_6(items);
                  }
                }
                tmp34 = cResult[26];
              }
              class E {
                constructor() {
                  let tmp3 = null;
                  const createColorPaletteList = DisplayNameStylesUtils.createColorPaletteList;
                  DisplayNameStylesUtils;
                  const tmp2 = selectedEffectId;
                  if (selectedColors.length > 0) {
                    tmp3 = selectedColors;
                  }
                  return createColorPaletteList(tmp2, tmp3);
                }
              }
              let obj5 = { style: gradient, colors: tmp28, start: tmp33, end: tmp34 };
              cResult[27] = tmp4.gradient;
              cResult[28] = tmp28;
              cResult[29] = closure_9(selectedEffectId(tmp2[23]), obj5);
              const tmp38 = closure_9(selectedEffectId(tmp2[23]), obj5);
            }
            let obj6 = { title: name, trailing: tmp22 };
            cResult[19] = displayNameStylesEffectConfig.name;
            cResult[20] = tmp22;
            cResult[21] = closure_9(selectedEffectId(tmp2[21]), obj6);
            const tmp26 = closure_9(selectedEffectId(tmp2[21]), obj6);
          }
          class H {
            constructor() {
              first = closure_7(selectedEffectId)[0];
              if (first == null) {
                tmp = closure_4;
                first = closure_4.defaultColors;
              }
              substr = first.slice();
              closure_0 = substr;
              tmp3 = closure_6(substr);
              tmp4 = closure_7((arr) => {
                const obj = DisplayNameStylesUtils;
                return obj.updateCustomSwatch(arr, selectedEffectId, substr);
              });
              return;
            }
          }
          cResult[12] = colors;
          cResult[13] = selectedEffectId;
          class D {
            constructor() {
              const obj = HapticUtils;
              const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
              onSelectColors(colors);
              const obj2 = AnalyticsUtilsDefault;
              const obj3 = { default: false, colors };
              obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj3);
              const obj4 = ActionSheetActionCreatorsDefault;
              obj4.hideActionSheet();
            }
          }
          cResult[14] = tmp17;
          class E {
            constructor() {
              let tmp3 = null;
              const createColorPaletteList = DisplayNameStylesUtils.createColorPaletteList;
              DisplayNameStylesUtils;
              const tmp2 = selectedEffectId;
              if (selectedColors.length > 0) {
                tmp3 = selectedColors;
              }
              return createColorPaletteList(tmp2, tmp3);
            }
          }
        }
        class H {
          constructor() {
            first = closure_7(selectedEffectId)[0];
            if (first == null) {
              tmp = closure_4;
              first = closure_4.defaultColors;
            }
            substr = first.slice();
            closure_0 = substr;
            tmp3 = closure_6(substr);
            tmp4 = closure_7((arr) => {
              const obj = DisplayNameStylesUtils;
              return obj.updateCustomSwatch(arr, selectedEffectId, substr);
            });
            return;
          }
        }
        cResult[9] = displayNameStylesEffectConfig.defaultColors;
        cResult[10] = selectedEffectId;
        class D {
          constructor() {
            const obj = HapticUtils;
            const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
            onSelectColors(colors);
            const obj2 = AnalyticsUtilsDefault;
            const obj3 = { default: false, colors };
            obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj3);
            const obj4 = ActionSheetActionCreatorsDefault;
            obj4.hideActionSheet();
          }
        }
        cResult[11] = H;
        class E {
          constructor() {
            let tmp3 = null;
            const createColorPaletteList = DisplayNameStylesUtils.createColorPaletteList;
            DisplayNameStylesUtils;
            const tmp2 = selectedEffectId;
            if (selectedColors.length > 0) {
              tmp3 = selectedColors;
            }
            return createColorPaletteList(tmp2, tmp3);
          }
        }
      }
      class D {
        constructor() {
          const obj = HapticUtils;
          const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
          onSelectColors(colors);
          const obj2 = AnalyticsUtilsDefault;
          const obj3 = { default: false, colors };
          obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj3);
          const obj4 = ActionSheetActionCreatorsDefault;
          obj4.hideActionSheet();
        }
      }
      class E {
        constructor() {
          let tmp3 = null;
          const createColorPaletteList = DisplayNameStylesUtils.createColorPaletteList;
          DisplayNameStylesUtils;
          const tmp2 = selectedEffectId;
          if (selectedColors.length > 0) {
            tmp3 = selectedColors;
          }
          return createColorPaletteList(tmp2, tmp3);
        }
      }
      cResult[7] = onSelectColors;
      cResult[8] = D;
      tmp14 = D;
    }
    class E {
      constructor() {
        let tmp3 = null;
        const createColorPaletteList = DisplayNameStylesUtils.createColorPaletteList;
        DisplayNameStylesUtils;
        const tmp2 = selectedEffectId;
        if (selectedColors.length > 0) {
          tmp3 = selectedColors;
        }
        return createColorPaletteList(tmp2, tmp3);
      }
    }
    cResult[3] = selectedColors;
    cResult[4] = selectedEffectId;
    cResult[5] = E;
    tmp10 = E;
  }
  const fn = function l() {
    let defaultColors = selectedColors;
    if (selectedColors.length <= 0) {
      defaultColors = displayNameStylesEffectConfig.defaultColors;
    }
    return defaultColors;
  };
  cResult[0] = displayNameStylesEffectConfig.defaultColors;
  cResult[1] = selectedColors;
  cResult[2] = fn;
  tmp7 = fn;
}) : (function DisplayNameStylesColorPickerSheet(onSelectColors) {
  let Button;
  let Button2;
  let arr;
  let closure_3;
  let closure_6;
  let intl;
  let intl2;
  let items3;
  let items4;
  let obj12;
  let obj4;
  let obj5;
  let obj6;
  let require;
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
    let defaultColors = _require;
    if (_require.length <= 0) {
      defaultColors = displayNameStylesEffectConfig.defaultColors;
    }
    return defaultColors;
  });
  const tmp5 = _slicedToArray(displayNameStylesEffectConfig.useState(() => {
    let tmp3 = null;
    const createColorPaletteList = DisplayNameStylesUtils.createColorPaletteList;
    DisplayNameStylesUtils;
    const tmp2 = selectedEffectId;
    if (_require.length > 0) {
      tmp3 = _require;
    }
    return createColorPaletteList(tmp2, tmp3);
  }), 2);
  let closure_7 = tmp5[1];
  let items = [colors, onSelectColors];
  let items1 = [selectedEffectId, displayNameStylesEffectConfig.defaultColors];
  const arr2 = selectedEffectId(onSelectColors[13])(selectedEffectId, tmp5[0]);
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
    let tmp = selectedEffectId(onSelectColors[17]);
    if (num == null) {
      num = 0;
    }
    let obj = {
      color: num,
      onSelect(arg0) {
        const require = arg0;
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
  tmp8 = selectedEffectId(onSelectColors[21]);
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
  const tmp9 = selectedEffectId(onSelectColors[23]);
  items3 = [closure_9(tmp9, obj8), ];
  const obj9 = {
    style: tmp.dropperContainer,
    children: arr.map((item, index) => {
      let intl;
      let obj2;
      const require = index;
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
      let obj = selectedEffectId(onSelectColors[25]);
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
          const obj = colors(onSelectColors[22]);
          return obj.int2hex(item);
        }),
        start: { x: 0, y: 0 },
        end: { x: 1, y: 0 }
      };
      const tmp8 = selectedEffectId(onSelectColors[23]);
      items = [closure_9(tmp8, obj4), ];
      const tmp = onSelectColors;
      const tmp7 = _require;
      if (isEqualResult) {
        const obj5 = { children: items1 };
        const obj6 = { style: closure_3.selectedRing, pointerEvents: "none" };
        items1 = [closure_9(first, obj6), ];
        const obj7 = { style: closure_3.checkmarkOverlay, pointerEvents: "none", children: closure_9(tmp7(tmp[27]).CheckmarkLargeIcon, obj8) };
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
});
size = size_mod;
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesGradientPickerSheet.tsx");

export default tmp7;
