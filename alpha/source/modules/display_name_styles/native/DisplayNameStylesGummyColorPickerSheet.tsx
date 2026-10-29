// Module ID: 17212
// Function ID: 17213
// Name: DisplayNameStylesGummyColorPickerSheet
// Dependencies: [32, 19, 17, 1407, 1084, 21, 1406, 5005, 587, 558, 576, 10732, 1408, 568, 17213, 5249, 17214, 1264, 5247, 1125, 5281, 17209, 16372, 10187, 5302, 2]

// Module 17212 (DisplayNameStylesGummyColorPickerSheet)
import shallowEqual from "shallowEqual" /* 568 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1084 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1407 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1408 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import HapticUtils from "HapticUtils" /* 5249 */;
import showGummyCustomColorSheetDefault from "showGummyCustomColorSheet" /* 17214 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import DisplayNameStylesUtils from "DisplayNameStylesUtils" /* 1406 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

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
let obj6;
let obj7;
let size;
let react = react_mod;
({ View: hasOwnProperty, Pressable: metroRequire, StyleSheet } = react_native);
let colors = DisplayNameStylesConstants.DISPLAY_NAME_STYLES_GUMMY_PRESETS;
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
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function DisplayNameStylesGummyColorPickerSheet(selectedColors) {
  let closure_2;
  let closure_4;
  let first1;
  let swatch;
  let swatchWrapper;
  let tmp6;
  let tmp = selectedColors;
  let tmp2 = dependencyMap;
  let obj = selectedColors(576);
  const cResult = obj.c(69);
  selectedColors = selectedColors.selectedColors;
  const onSelectColors = selectedColors.onSelectColors;
  let tmp4 = closure_12();
  dependencyMap = tmp4;
  let obj2 = selectedColors(10732);
  const displayNameStylesEffectConfig = obj2.useDisplayNameStylesEffectConfig(selectedColors(1408).DisplayNameEffect.GUMMY);
  if (cResult[0] !== selectedColors) {
    const tmp7 = selectedColors.length > 0 && !first1.some((item) => {
      const obj = shallowEqual;
      return obj.areArraysShallowEqual(item, selectedColors);
    });
    cResult[0] = selectedColors;
    cResult[1] = tmp7;
    tmp6 = tmp7;
  } else {
    tmp6 = cResult[1];
  }
  react = tmp6;
  if (cResult[2] === tmp6) {
    let tmp9;
    if (cResult[3] === selectedColors) {
      tmp9 = cResult[4];
    }
    let obj3 = react;
    const tmp11 = displayNameStylesEffectConfig(react.useState(tmp9), 2);
    const initialColor = tmp11[0];
    let closure_6 = tmp11[1];
    if (cResult[5] === displayNameStylesEffectConfig.defaultColors) {
      let tmp13;
      let tmp21;
      let tmp28;
      if (cResult[6] === selectedColors) {
        tmp13 = cResult[7];
      }
      const tmp10Result = displayNameStylesEffectConfig(obj3.useState(tmp13), 2);
      first1 = tmp10Result[0];
      let closure_8 = tmp10Result[1];
      if (cResult[8] !== selectedColors) {
        class L {
          constructor() {
            const createColorPaletteList = DisplayNameStylesUtils.createColorPaletteList;
            let tmp2 = null;
            DisplayNameStylesUtils;
            const GUMMY = DisplayNameEffect.DisplayNameEffect.GUMMY;
            if (selectedColors.length > 0) {
              tmp2 = selectedColors;
            }
            return createColorPaletteList(GUMMY, tmp2);
          }
        }
        cResult[8] = selectedColors;
        cResult[9] = L;
      } else {
        class L {
          constructor() {
            const createColorPaletteList = DisplayNameStylesUtils.createColorPaletteList;
            let tmp2 = null;
            DisplayNameStylesUtils;
            const GUMMY = DisplayNameEffect.DisplayNameEffect.GUMMY;
            if (selectedColors.length > 0) {
              tmp2 = selectedColors;
            }
            return createColorPaletteList(GUMMY, tmp2);
          }
        }
      }
      let closure_9 = displayNameStylesEffectConfig(obj3.useState(tmp16), 2)[1];
      displayNameStylesEffectConfig(obj3.useState(tmp16), 2);
      class I {
        constructor() {
          let defaultColors = selectedColors;
          if (selectedColors.length <= 0) {
            defaultColors = displayNameStylesEffectConfig.defaultColors;
          }
          return defaultColors;
        }
      }
      const tmp20 = onSelectColors(17213);
      const tmp20Result = tmp20(tmp(1408).DisplayNameEffect.GUMMY, tmp18);
      if (cResult[10] !== first1) {
        class Y {
          constructor(colors) {
            colors = colors.colors;
            const obj = shallowEqual;
            return obj.areArraysShallowEqual(colors, first1);
          }
        }
        cResult[10] = first1;
        cResult[11] = Y;
        tmp21 = Y;
      } else {
        class Y {
          constructor(colors) {
            colors = colors.colors;
            const obj = shallowEqual;
            return obj.areArraysShallowEqual(colors, first1);
          }
        }
      }
      const findIndexResult = tmp20Result.findIndex(tmp21);
      let closure_10 = findIndexResult;
      if (cResult[12] !== initialColor) {
        class Y {
          constructor(colors) {
            colors = colors.colors;
            const obj = shallowEqual;
            return obj.areArraysShallowEqual(colors, first1);
          }
        }
        cResult[12] = initialColor;
        cResult[13] = tmp25;
      } else {
        class Y {
          constructor(colors) {
            colors = colors.colors;
            const obj = shallowEqual;
            return obj.areArraysShallowEqual(colors, first1);
          }
        }
      }
      const _Symbol = Symbol;
      class M {
        constructor() {
          let result;
          const tmp = closure_4;
          if (tmp) {
            const obj = DisplayNameStylesUtils;
            result = obj.rebuildGummySourceColor(selectedColors);
          } else {
            result = closure_11;
          }
          return result;
        }
      }
      if (tmp26 === Symbol.for("react.memo_cache_sentinel")) {
        class Y {
          constructor(colors) {
            colors = colors.colors;
            const obj = shallowEqual;
            return obj.areArraysShallowEqual(colors, first1);
          }
        }
        cResult[14] = tmp29;
        tmp28 = tmp29;
      } else {
        class Y {
          constructor(colors) {
            colors = colors.colors;
            const obj = shallowEqual;
            return obj.areArraysShallowEqual(colors, first1);
          }
        }
      }
      closure_11 = tmp28;
      const _Symbol2 = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class Y {
          constructor(colors) {
            colors = colors.colors;
            const obj = shallowEqual;
            return obj.areArraysShallowEqual(colors, first1);
          }
        }
        cResult[15] = tmp31;
      } else {
        class Y {
          constructor(colors) {
            colors = colors.colors;
            const obj = shallowEqual;
            return obj.areArraysShallowEqual(colors, first1);
          }
        }
      }
      if (cResult[16] === first1) {
        let tmp33;
        class Y {
          constructor(colors) {
            colors = colors.colors;
            const obj = shallowEqual;
            return obj.areArraysShallowEqual(colors, first1);
          }
        }
        const _Symbol3 = Symbol;
        const name = displayNameStylesEffectConfig.name;
        if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
          class Y {
            constructor(colors) {
              colors = colors.colors;
              const obj = shallowEqual;
              return obj.areArraysShallowEqual(colors, first1);
            }
          }
          const stringResult = obj5.string(tmp(1125).t.XqMe3N);
          cResult[19] = stringResult;
          tmp33 = stringResult;
        } else {
          class Y {
            constructor(colors) {
              colors = colors.colors;
              const obj = shallowEqual;
              return obj.areArraysShallowEqual(colors, first1);
            }
          }
        }
        if (cResult[20] !== tmp32) {
          class Y {
            constructor(colors) {
              colors = colors.colors;
              const obj = shallowEqual;
              return obj.areArraysShallowEqual(colors, first1);
            }
          }
          let obj4 = { variant: "primary", size: "sm", text: tmp33, onPress: tmp32 };
          cResult[20] = tmp32;
          cResult[21] = closure_9(tmp(5281).Button, obj4);
          closure_9(tmp(5281).Button, obj4);
          class I {
            constructor() {
              let defaultColors = selectedColors;
              if (selectedColors.length <= 0) {
                defaultColors = displayNameStylesEffectConfig.defaultColors;
              }
              return defaultColors;
            }
          }
        } else {
          class Y {
            constructor(colors) {
              colors = colors.colors;
              const obj = shallowEqual;
              return obj.areArraysShallowEqual(colors, first1);
            }
          }
        }
        if (cResult[22] === displayNameStylesEffectConfig.name) {
          class Y {
            constructor(colors) {
              colors = colors.colors;
              const obj = shallowEqual;
              return obj.areArraysShallowEqual(colors, first1);
            }
          }
          if (cResult[25] === tmp4.colorRowInset) {
            let tmp44Result;
            class Y {
              constructor(colors) {
                colors = colors.colors;
                const obj = shallowEqual;
                return obj.areArraysShallowEqual(colors, first1);
              }
            }
            const _Symbol4 = Symbol;
            ({ swatchWrapper, swatch } = tmp4);
            if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
              class Y {
                constructor(colors) {
                  colors = colors.colors;
                  const obj = shallowEqual;
                  return obj.areArraysShallowEqual(colors, first1);
                }
              }
              cResult[28] = obj8.string(tmp(1125).t["FHBa/1"]);
              const stringResult1 = obj8.string(tmp(1125).t["FHBa/1"]);
            } else {
              class Y {
                constructor(colors) {
                  colors = colors.colors;
                  const obj = shallowEqual;
                  return obj.areArraysShallowEqual(colors, first1);
                }
              }
            }
            if (cResult[29] === first1) {
              class Y {
                constructor(colors) {
                  colors = colors.colors;
                  const obj = shallowEqual;
                  return obj.areArraysShallowEqual(colors, first1);
                }
              }
            }
            if (findIndexResult >= 0) {
              class Y {
                constructor(colors) {
                  colors = colors.colors;
                  const obj = shallowEqual;
                  return obj.areArraysShallowEqual(colors, first1);
                }
              }
              const obj6 = { style: tmp4.customSwatchEmpty };
              tmp44Result = tmp44(initialColor, obj6);
            } else {
              class Y {
                constructor(colors) {
                  colors = colors.colors;
                  const obj = shallowEqual;
                  return obj.areArraysShallowEqual(colors, first1);
                }
              }
              tmp45[0] = first1;
              tmp44Result = tmp44(tmp19(16372), tmp45);
            }
            class I {
              constructor() {
                let defaultColors = selectedColors;
                if (selectedColors.length <= 0) {
                  defaultColors = displayNameStylesEffectConfig.defaultColors;
                }
                return defaultColors;
              }
            }
            cResult[29] = first1;
            cResult[30] = findIndexResult >= 0;
            cResult[31] = tmp4.customSwatchEmpty;
            cResult[32] = tmp44Result;
          }
          let items = [, ];
          ({ colorRowInset: arr2[0], optionContainer: arr2[1] } = tmp4);
          cResult[25] = tmp4.colorRowInset;
          cResult[26] = tmp4.optionContainer;
          class I {
            constructor() {
              let defaultColors = selectedColors;
              if (selectedColors.length <= 0) {
                defaultColors = displayNameStylesEffectConfig.defaultColors;
              }
              return defaultColors;
            }
          }
          cResult[27] = items;
        }
        const obj7 = { title: null, trailing: tmp35 };
        class I {
          constructor() {
            let defaultColors = selectedColors;
            if (selectedColors.length <= 0) {
              defaultColors = displayNameStylesEffectConfig.defaultColors;
            }
            return defaultColors;
          }
        }
        cResult[22] = displayNameStylesEffectConfig.name;
        cResult[23] = tmp35;
        cResult[24] = closure_9(onSelectColors(17209), obj7);
        const tmp39 = closure_9(onSelectColors(17209), obj7);
      }
      class Q {
        constructor() {
          const obj = HapticUtils;
          const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
          onSelectColors(first1);
          const obj2 = AnalyticsUtilsDefault;
          const obj3 = { default: false, colors: first1 };
          obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj3);
          const obj4 = ActionSheetActionCreatorsDefault;
          obj4.hideActionSheet();
        }
      }
      cResult[16] = first1;
      cResult[17] = onSelectColors;
      cResult[18] = Q;
    }
    class I {
      constructor() {
        let defaultColors = selectedColors;
        if (selectedColors.length <= 0) {
          defaultColors = displayNameStylesEffectConfig.defaultColors;
        }
        return defaultColors;
      }
    }
    cResult[5] = displayNameStylesEffectConfig.defaultColors;
    cResult[6] = selectedColors;
    cResult[7] = I;
    tmp13 = I;
  }
  class M {
    constructor() {
      let result;
      const tmp = closure_4;
      if (tmp) {
        const obj = DisplayNameStylesUtils;
        result = obj.rebuildGummySourceColor(selectedColors);
      } else {
        result = closure_11;
      }
      return result;
    }
  }
  cResult[2] = tmp6;
  cResult[3] = selectedColors;
  cResult[4] = M;
}) : (function DisplayNameStylesGummyColorPickerSheet(selectedColors) {
  let Button;
  let _undefined;
  let c9;
  let closure_2;
  let closure_4;
  let intl;
  let intl2;
  let intl3;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj12;
  let obj3;
  let obj4;
  let obj5;
  let obj8;
  let tmp12;
  let tmp19Result;
  let tmp20;
  let tmp23;
  const f130934 = (item) => {
    const obj = shallowEqual;
    return obj.areArraysShallowEqual(item, selectedColors);
  };
  const f130937 = () => {
    const createColorPaletteList = DisplayNameStylesUtils.createColorPaletteList;
    let tmp2 = null;
    DisplayNameStylesUtils;
    const GUMMY = DisplayNameEffect.DisplayNameEffect.GUMMY;
    if (selectedColors.length > 0) {
      tmp2 = selectedColors;
    }
    return createColorPaletteList(GUMMY, tmp2);
  };
  selectedColors = selectedColors.selectedColors;
  const onSelectColors = selectedColors.onSelectColors;
  let first1;
  c9 = undefined;
  let tmp = closure_12();
  dependencyMap = tmp;
  let tmp2 = selectedColors;
  let tmp3 = dependencyMap;
  let obj = selectedColors(10732);
  const displayNameStylesEffectConfig = obj.useDisplayNameStylesEffectConfig(selectedColors(1408).DisplayNameEffect.GUMMY);
  react = selectedColors.length > 0 && !first1.some(f130934);
  const tmp5 = selectedColors.length > 0 && !first1.some(f130934);
  const tmp7 = displayNameStylesEffectConfig(react.useState(() => {
    let result;
    const tmp = closure_4;
    if (tmp) {
      const obj = DisplayNameStylesUtils;
      result = obj.rebuildGummySourceColor(selectedColors);
    } else {
      result = closure_11;
    }
    return result;
  }), 2);
  const initialColor = tmp7[0];
  let closure_6 = tmp7[1];
  const tmp9 = displayNameStylesEffectConfig(react.useState(() => {
    let defaultColors = selectedColors;
    if (selectedColors.length <= 0) {
      defaultColors = displayNameStylesEffectConfig.defaultColors;
    }
    return defaultColors;
  }), 2);
  first1 = tmp9[0];
  let closure_8 = tmp9[1];
  [tmp12, c9] = displayNameStylesEffectConfig(react.useState(f130937), 2);
  displayNameStylesEffectConfig(react.useState(f130937), 2);
  const tmp14 = onSelectColors(17213);
  const tmp14Result = tmp14(tmp2(1408).DisplayNameEffect.GUMMY, tmp12);
  const findIndexResult = tmp14Result.findIndex((colors) => {
    colors = colors.colors;
    const obj = shallowEqual;
    return obj.areArraysShallowEqual(colors, first1);
  });
  let c10 = findIndexResult;
  let items = [initialColor];
  const callback = react.useCallback(() => {
    let obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
    const obj2 = {
      initialColor,
      onSelect(color) {
        let obj = selectedColors(closure_2[6]);
        const gummyColors = obj.buildGummyColors(color);
        closure_1_6(color);
        closure_1_8(gummyColors);
        _undefined((arr) => {
          const obj = closure_2_0(closure_2_2[6]);
          return obj.updateCustomSwatch(arr, closure_2_0(closure_2_2[12]).DisplayNameEffect.GUMMY, gummyColors);
        });
      }
    };
    showGummyCustomColorSheetDefault(obj2);
  }, items);
  closure_11 = react.useCallback((arg0) => {
    const items = [...arg0];
    closure_8(items);
  }, []);
  const items1 = [first1, onSelectColors];
  const callback1 = react.useCallback(() => {
    const items = [...closure_7[0]];
    closure_8(items);
    closure_6(closure_11);
    _undefined((arr) => {
      const obj = selectedColors(closure_2_2[6]);
      return obj.updateCustomSwatch(arr, selectedColors(closure_2_2[12]).DisplayNameEffect.GUMMY, items);
    });
  }, []);
  const callback2 = react.useCallback(() => {
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    onSelectColors(first1);
    const obj2 = AnalyticsUtilsDefault;
    const obj3 = { default: false, colors: first1 };
    obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj3);
    const obj4 = ActionSheetActionCreatorsDefault;
    obj4.hideActionSheet();
  }, items1);
  let obj2 = { header: c9(tmp20, obj3), children: c10(initialColor, obj5) };
  BottomSheet = tmp2(5302).BottomSheet;
  obj3 = { title: displayNameStylesEffectConfig.name, trailing: c9(Button, obj4) };
  obj4 = { variant: "primary", size: "sm", text: intl.string(tmp2(1125).t.XqMe3N), onPress: callback2 };
  tmp20 = onSelectColors(17209);
  Button = tmp2(5281).Button;
  intl = tmp2(1125).intl;
  const obj6 = { style: items2, children: items4 };
  items2 = [, ];
  obj5 = { style: tmp.body, children: items5 };
  ({ colorRowInset: arr5[0], optionContainer: arr5[1] } = tmp);
  const obj7 = { style: tmp.swatchWrapper, children: c10(tmp23, obj8) };
  obj8 = { style: tmp.swatch, onPress: callback, accessibilityRole: "button", accessibilityLabel: intl2.string(tmp2(1125).t["FHBa/1"]), children: items3 };
  intl2 = tmp2(1125).intl;
  const tmp13 = onSelectColors;
  tmp23 = closure_6;
  if (findIndexResult >= 0) {
    const obj9 = { style: tmp.customSwatchEmpty };
    tmp19Result = tmp19(tmp22, obj9);
  } else {
    const obj10 = { colors: first1 };
    tmp19Result = tmp19(tmp13(16372), obj10);
  }
  items3 = [tmp19Result, ];
  const obj11 = { style: tmp.customIconOverlay, pointerEvents: "none", children: c9(initialColor, obj12) };
  obj12 = { style: tmp.customIconScrim, children: c9(tmp2(10187).PencilIcon, { color: "white", size: "sm" }) };
  items3[1] = c9(initialColor, obj11);
  items4 = [
    c9(initialColor, obj7),
    tmp14Result.map((colors, index) => {
      let obj2;
      let tmp4;
      colors = colors.colors;
      const items = [closure_2.swatch, ];
      let swatchSelected = tmp;
      const a11yLabel = colors.a11yLabel;
      const obj = { style: closure_2.swatchWrapper, children: _undefined(tmp4, obj2) };
      const tmp3 = first;
      tmp4 = closure_6;
      if (c10 === index) {
        swatchSelected = closure_2.swatchSelected;
      }
      items[1] = swatchSelected;
      obj2 = {
        style: items,
        onPress() {
          return closure_11(colors);
        },
        accessibilityRole: "button",
        accessibilityState: { selected: c10 === index },
        accessibilityLabel: a11yLabel,
        children: _undefined(onSelectColors(closure_2[22]), { colors })
      };
      return _undefined(tmp3, obj, index);
    })
  ];
  items5 = [c10(initialColor, obj6), ];
  const obj13 = { text: intl3.string(tmp2(1125).t.yBZMsQ), onPress: callback1, variant: "secondary" };
  const Button2 = tmp2(5281).Button;
  intl3 = tmp2(1125).intl;
  items5[1] = c9(Button2, obj13);
  return c9(BottomSheet, obj2);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesGummyColorPickerSheet.tsx");

export default tmp6;
