// Module ID: 15611
// Function ID: 15612
// Name: DisplayNameStylesGradientPickerSheet
// Dependencies: [32, 19, 17, 1078, 21, 4758, 580, 558, 568, 11205, 1393, 15607, 4726, 1245, 4725, 14860, 7397, 1119, 5188, 15604, 1096, 5198, 15612, 12, 5341, 2]

// Module 15611 (DisplayNameStylesGradientPickerSheet)
import nativeDefault from "native" /* 580 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import HapticUtils from "HapticUtils" /* 4726 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire } = get_ActivityIndicator);
const AnalyticEvents = fn(1078).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { body: { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12, flexGrow: 1, justifyContent: "center", alignItems: "center", gap: nativeDefault.space.PX_16 }, gradientContainer: null, dropperContainer: null, dropper: null, gradient: null, optionContainer: null, swatchWrapper: null, pressable: null, selected: null, option: null };
let obj3 = { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12, flexGrow: 1, justifyContent: "center", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj2.gradientContainer = { flexDirection: "row", justifyContent: "center", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8 };
const rect = { left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, position: "absolute", flexDirection: "row", justifyContent: "space-between" };
obj2.dropperContainer = rect;
let obj4 = { flexDirection: "row", justifyContent: "center", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8 };
obj2.dropper = { borderColor: "white", padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, borderWidth: 1 };
let size = { height: 50, width: "100%", borderRadius: nativeDefault.radii.sm };
obj2.gradient = size;
let obj5 = { borderColor: "white", padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, borderWidth: 1 };
obj2.optionContainer = { flexDirection: "row", flexWrap: "wrap", paddingHorizontal: nativeDefault.space.PX_4 };
obj2.swatchWrapper = { width: "25%", padding: 2 };
let obj6 = { flexDirection: "row", flexWrap: "wrap", paddingHorizontal: nativeDefault.space.PX_4 };
obj2.pressable = { height: 40, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderWidth: 2, borderColor: "transparent" };
let obj7 = { height: 40, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderWidth: 2, borderColor: "transparent" };
obj2.selected = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.option = { flex: 1 };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj8 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesGradientPickerSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((selectedColors) => {
  const cResult = onSelectColors(displayNameStylesEffectConfig[8]).c(67);
  ({ selectedEffectId, onSelectColors } = selectedColors);
  const tmp4 = closure_10();
  importDefault = tmp4;
  let obj = onSelectColors(displayNameStylesEffectConfig[8]);
  displayNameStylesEffectConfig = onSelectColors(displayNameStylesEffectConfig[9]).useDisplayNameStylesEffectConfig(selectedEffectId);
  let obj2 = onSelectColors(displayNameStylesEffectConfig[9]);
  const effectColorCount = onSelectColors(displayNameStylesEffectConfig[10]).getEffectColorCount(selectedEffectId);
  const tmp8 = require("useColorPresetsWithA11yLabels")(selectedEffectId);
  dependencyMap2 = tmp8;
  const tmp9 = dependencyMap2(colors.useState(selectedColors.selectedColors), 2);
  colors = tmp9[0];
  closure_5 = tmp9[1];
  if (cResult[0] === colors) {
    if (cResult[1] === onSelectColors) {
      let tmp10 = cResult[2];
    }
    if (cResult[3] === displayNameStylesEffectConfig.defaultColors) {
      const first1 = tmp8[0];
      colors = undefined;
      if (first1 != null) {
        colors = first1.colors;
      }
      if (cResult[6] !== colors) {
        class I {
          constructor(arg0) {
            closure_0 = selectedColors;
            num = closure_4[selectedColors];
            tmp = closure_1(closure_2[15]);
            if (num == null) {
              num = 0;
            }
            obj = {
              color: num,
              onSelect(arg0) {
                          closure_0 = arg0;
                          const result = onSelectColors(displayNameStylesEffectConfig[12]).triggerHapticFeedback(onSelectColors(displayNameStylesEffectConfig[12]).HapticFeedbackTypes.IMPACT_MEDIUM);
                          closure_1_5((arr) => arr.map(/* F153464 */ function() { ... }));
                        },
              actionButtonVariant: "primary"
            };
            tmpResult = tmp(obj, "stack");
            return;
          }
        }
        cResult[6] = colors;
        cResult[7] = I;
      } else {
        class I {
          constructor(arg0) {
            closure_0 = selectedColors;
            num = closure_4[selectedColors];
            tmp = closure_1(closure_2[15]);
            if (num == null) {
              num = 0;
            }
            obj = {
              color: num,
              onSelect(arg0) {
                          closure_0 = arg0;
                          const result = onSelectColors(displayNameStylesEffectConfig[12]).triggerHapticFeedback(onSelectColors(displayNameStylesEffectConfig[12]).HapticFeedbackTypes.IMPACT_MEDIUM);
                          closure_1_5((arr) => arr.map(/* F153464 */ function() { ... }));
                        },
              actionButtonVariant: "primary"
            };
            tmpResult = tmp(obj, "stack");
            return;
          }
        }
      }
      closure_6 = tmp17;
      class D {
        constructor() {
          first = closure_3[0];
          colors = undefined;
          tmp = closure_5;
          if (first != null) {
            colors = first.colors;
          }
          if (colors == null) {
            tmp4 = closure_2;
            colors = closure_2.defaultColors;
          }
          items = [...colors];
          tmpResult = tmp(items);
          return;
        }
      }
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor(arg0) {
            items = [...selectedColors];
            tmp = closure_5(items);
            return;
          }
        }
        cResult[8] = A;
        const tmp18 = A;
      } else {
        class A {
          constructor(arg0) {
            items = [...selectedColors];
            tmp = closure_5(items);
            return;
          }
        }
      }
      closure_7 = tmp18;
      BottomSheet = tmp(tmp2[16]).BottomSheet;
      const _Symbol2 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor(arg0) {
            items = [...selectedColors];
            tmp = closure_5(items);
            return;
          }
        }
        const stringResult = obj4.string(tmp(tmp2[17]).t.XqMe3N);
        cResult[9] = stringResult;
        const tmp19 = stringResult;
      } else {
        class A {
          constructor(arg0) {
            items = [...selectedColors];
            tmp = closure_5(items);
            return;
          }
        }
      }
      if (cResult[10] !== tmp10) {
        class A {
          constructor(arg0) {
            items = [...selectedColors];
            tmp = closure_5(items);
            return;
          }
        }
        const obj5 = { variant: "primary", size: "sm", text: tmp19, onPress: tmp10 };
        cResult[10] = tmp10;
        class D {
          constructor() {
            first = closure_3[0];
            colors = undefined;
            tmp = closure_5;
            if (first != null) {
              colors = first.colors;
            }
            if (colors == null) {
              tmp4 = closure_2;
              colors = closure_2.defaultColors;
            }
            items = [...colors];
            tmpResult = tmp(items);
            return;
          }
        }
        const tmp21 = closure_8(tmp(tmp2[18]).Button, obj5);
        const tmp22 = closure_8(tmp(tmp2[18]).Button, obj5);
      } else {
        class A {
          constructor(arg0) {
            items = [...selectedColors];
            tmp = closure_5(items);
            return;
          }
        }
      }
      if (cResult[12] === displayNameStylesEffectConfig.name) {
        class A {
          constructor(arg0) {
            items = [...selectedColors];
            tmp = closure_5(items);
            return;
          }
        }
        if (cResult[15] !== colors) {
          class A {
            constructor(arg0) {
              items = [...selectedColors];
              tmp = closure_5(items);
              return;
            }
          }
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            class O {
              constructor(arg0) {
                obj = onSelectColors(closure_2[20]);
                return obj.int2hex(selectedColors);
              }
            }
            cResult[17] = O;
            const tmp29 = O;
          } else {
            class O {
              constructor(arg0) {
                obj = onSelectColors(closure_2[20]);
                return obj.int2hex(selectedColors);
              }
            }
          }
          const mapped = colors.map(tmp29);
          cResult[15] = colors;
          cResult[16] = mapped;
          class D {
            constructor() {
              first = closure_3[0];
              colors = undefined;
              tmp = closure_5;
              if (first != null) {
                colors = first.colors;
              }
              if (colors == null) {
                tmp4 = closure_2;
                colors = closure_2.defaultColors;
              }
              items = [...colors];
              tmpResult = tmp(items);
              return;
            }
          }
        } else {
          class O {
            constructor(arg0) {
              obj = onSelectColors(closure_2[20]);
              return obj.int2hex(selectedColors);
            }
          }
          const _Symbol3 = Symbol;
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            class O {
              constructor(arg0) {
                obj = onSelectColors(closure_2[20]);
                return obj.int2hex(selectedColors);
              }
            }
            const point = { x: 1, y: 0 };
            cResult[18] = tmp33;
            cResult[19] = point;
            let tmp32 = point;
            const tmp31 = tmp33;
          } else {
            class O {
              constructor(arg0) {
                obj = onSelectColors(closure_2[20]);
                return obj.int2hex(selectedColors);
              }
            }
            tmp32 = cResult[19];
          }
          if (cResult[20] === tmp4.gradient) {
            class O {
              constructor(arg0) {
                obj = onSelectColors(closure_2[20]);
                return obj.int2hex(selectedColors);
              }
            }
            const _Array = Array;
            const obj6 = { length: effectColorCount };
            const dropperContainer = tmp4.dropperContainer;
            const arr = Array.from(obj6);
            if (cResult[23] === tmp17) {
              class O {
                constructor(arg0) {
                  obj = onSelectColors(closure_2[20]);
                  return obj.int2hex(selectedColors);
                }
              }
            }
            const mapped1 = arr.map((item, index) => {
              closure_0 = index;
              const obj = {
                style: closure_1.dropper,
                onPress() {
                  return closure_6(closure_0);
                },
                accessibilityLabel: null,
                accessibilityRole: "button",
                children: null
              };
              const intl = onSelectColors(displayNameStylesEffectConfig[17]).intl;
              obj.accessibilityLabel = intl.formatToPlainString(onSelectColors(displayNameStylesEffectConfig[17]).t.n5Ve0L, { number: index + 1 });
              obj.children = closure_1_8(onSelectColors(displayNameStylesEffectConfig[22]).EyeDropperIcon, { color: "white", size: "sm" });
              return closure_1_8(closure_6, obj, index);
            });
            class D {
              constructor() {
                first = closure_3[0];
                colors = undefined;
                tmp = closure_5;
                if (first != null) {
                  colors = first.colors;
                }
                if (colors == null) {
                  tmp4 = closure_2;
                  colors = closure_2.defaultColors;
                }
                items = [...colors];
                tmpResult = tmp(items);
                return;
              }
            }
            cResult[23] = tmp17;
            cResult[24] = tmp4.dropper;
            cResult[25] = arr;
            cResult[26] = mapped1;
          }
          const obj7 = { style: tmp27, colors: null, start: null, end: null };
          class D {
            constructor() {
              first = closure_3[0];
              colors = undefined;
              tmp = closure_5;
              if (first != null) {
                colors = first.colors;
              }
              if (colors == null) {
                tmp4 = closure_2;
                colors = closure_2.defaultColors;
              }
              items = [...colors];
              tmpResult = tmp(items);
              return;
            }
          }
          obj7.start = tmp31;
          obj7.end = tmp32;
          const tmp36 = closure_8(tmp7(tmp2[21]), obj7);
          cResult[20] = tmp4.gradient;
          cResult[21] = tmp28;
          cResult[22] = tmp36;
        }
      }
      const obj8 = { title: displayNameStylesEffectConfig.name, trailing: tmp21 };
      const tmp25 = closure_8(tmp7(tmp2[19]), obj8);
      cResult[12] = displayNameStylesEffectConfig.name;
      cResult[13] = tmp21;
      cResult[14] = tmp25;
    }
    cResult[3] = displayNameStylesEffectConfig.defaultColors;
    if (tmp8[0] != null) {
      class O {
        constructor(arg0) {
          obj = onSelectColors(closure_2[20]);
          return obj.int2hex(selectedColors);
        }
      }
    }
    class D {
      constructor() {
        first = closure_3[0];
        colors = undefined;
        tmp = closure_5;
        if (first != null) {
          colors = first.colors;
        }
        if (colors == null) {
          tmp4 = closure_2;
          colors = closure_2.defaultColors;
        }
        items = [...colors];
        tmpResult = tmp(items);
        return;
      }
    }
    cResult[4] = undefined;
    cResult[5] = D;
  }
  const fn = function c() {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    onSelectColors(colors);
    AnalyticsUtilsDefault.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: false, colors });
    const obj3 = { default: false, colors };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  cResult[0] = colors;
  cResult[1] = onSelectColors;
  cResult[2] = fn;
  tmp10 = fn;
}) : ((selectedColors) => {
  ({ selectedEffectId, onSelectColors } = selectedColors);
  let displayNameStylesEffectConfig;
  let colors;
  let tmp = closure_10();
  importDefault = tmp;
  displayNameStylesEffectConfig = onSelectColors(displayNameStylesEffectConfig[9]).useDisplayNameStylesEffectConfig(selectedEffectId);
  let obj = onSelectColors(displayNameStylesEffectConfig[9]);
  const effectColorCount = onSelectColors(displayNameStylesEffectConfig[10]).getEffectColorCount(selectedEffectId);
  const arr = require("useColorPresetsWithA11yLabels")(selectedEffectId);
  const tmp4 = arr(colors.useState(selectedColors.selectedColors), 2);
  colors = tmp4[0];
  closure_5 = tmp4[1];
  let items = [colors, onSelectColors];
  const items1 = [arr, displayNameStylesEffectConfig.defaultColors];
  const callback = colors.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    onSelectColors(colors);
    AnalyticsUtilsDefault.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: false, colors });
    const obj3 = { default: false, colors };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  const items2 = [colors];
  const callback1 = colors.useCallback(() => {
    const first = arr[0];
    colors = undefined;
    if (first != null) {
      colors = first.colors;
    }
    if (colors == null) {
      colors = displayNameStylesEffectConfig.defaultColors;
    }
    const items = [...colors];
    closure_5(items);
  }, items1);
  closure_6 = colors.useCallback((arg0) => {
    closure_0 = arg0;
    let num = first[arg0];
    if (num == null) {
      num = 0;
    }
    closure_1(displayNameStylesEffectConfig[15])({
      color: num,
      onSelect(arg0) {
        closure_0 = arg0;
        const result = onSelectColors(displayNameStylesEffectConfig[12]).triggerHapticFeedback(onSelectColors(displayNameStylesEffectConfig[12]).HapticFeedbackTypes.IMPACT_MEDIUM);
        closure_1_5((arr) => arr.map((item, index) => {
          let tmp = item;
          if (index === closure_0) {
            tmp = closure_1_0;
          }
          return tmp;
        }));
      },
      actionButtonVariant: "primary"
    }, "stack");
  }, items2);
  closure_7 = colors.useCallback((arg0) => {
    const items = [...arg0];
    closure_5(items);
  }, []);
  let obj3 = { header: null, children: null };
  let obj4 = { title: displayNameStylesEffectConfig.name, trailing: null };
  let obj2 = onSelectColors(displayNameStylesEffectConfig[10]);
  const obj5 = { variant: "primary", size: "sm", text: null, onPress: null };
  let intl = onSelectColors(displayNameStylesEffectConfig[17]).intl;
  obj5.text = intl.string(onSelectColors(displayNameStylesEffectConfig[17]).t.XqMe3N);
  obj5.onPress = callback;
  obj4.trailing = closure_8(onSelectColors(displayNameStylesEffectConfig[18]).Button, obj5);
  obj3.header = closure_8(require("DisplayNameStylesSheetHeader"), obj4);
  const obj6 = { style: tmp.body, children: null };
  const obj7 = { style: tmp.gradientContainer, children: null };
  const obj8 = { style: tmp.gradient, colors: null, start: null, end: null };
  const tmp7 = require("DisplayNameStylesSheetHeader");
  obj8.colors = colors.map((item) => onSelectColors(displayNameStylesEffectConfig[20]).int2hex(item));
  obj8.start = { x: 0, y: 0 };
  obj8.end = { x: 1, y: 0 };
  const items3 = [closure_8(require("LinearGradient"), obj8), ];
  const obj9 = { style: tmp.dropperContainer, children: null };
  const tmp8 = require("LinearGradient");
  obj9.children = Array.from({ length: effectColorCount }).map((item, index) => {
    closure_0 = index;
    const obj = {
      style: closure_1.dropper,
      onPress() {
        return closure_6(closure_0);
      },
      accessibilityLabel: null,
      accessibilityRole: "button",
      children: null
    };
    const intl = onSelectColors(displayNameStylesEffectConfig[17]).intl;
    obj.accessibilityLabel = intl.formatToPlainString(onSelectColors(displayNameStylesEffectConfig[17]).t.n5Ve0L, { number: index + 1 });
    obj.children = closure_1_8(onSelectColors(displayNameStylesEffectConfig[22]).EyeDropperIcon, { color: "white", size: "sm" });
    return closure_1_8(closure_6, obj, index);
  });
  items3[1] = closure_8(closure_5, obj9);
  obj7.children = items3;
  const items4 = [closure_9(closure_5, obj7), , ];
  const arr2 = Array.from({ length: effectColorCount });
  items4[1] = closure_8(closure_5, {
    style: tmp.optionContainer,
    children: arr.map((accessibilityLabel, index) => {
      colors = accessibilityLabel.colors;
      const isEqualResult = closure_1(displayNameStylesEffectConfig[23]).isEqual(colors, first);
      const obj2 = { style: closure_1.swatchWrapper, children: null };
      const items = [closure_1.pressable, ];
      let selected = isEqualResult;
      if (isEqualResult) {
        selected = tmp6.selected;
      }
      const obj3 = {
        style: items,
        onPress() {
          return closure_7(colors);
        },
        accessibilityRole: "button",
        accessibilityState: { selected: isEqualResult },
        accessibilityLabel: accessibilityLabel.a11yLabel,
        children: null
      };
      items[1] = selected;
      const obj4 = { style: closure_1.option, colors: null, start: null, end: null };
      const obj = closure_1(displayNameStylesEffectConfig[23]);
      const tmp5 = closure_5;
      obj4.colors = colors.map((item) => colors(displayNameStylesEffectConfig[20]).int2hex(item));
      obj4.start = { x: 0, y: 0 };
      obj4.end = { x: 1, y: 0 };
      obj3.children = closure_1_8(closure_1(displayNameStylesEffectConfig[21]), obj4);
      obj2.children = closure_1_8(onSelectColors(displayNameStylesEffectConfig[24]).PressableOpacity, obj3);
      return closure_1_8(tmp5, obj2, index);
    })
  });
  const obj11 = { text: null, onPress: null, variant: "secondary" };
  const intl2 = onSelectColors(displayNameStylesEffectConfig[17]).intl;
  obj11.text = intl2.string(onSelectColors(displayNameStylesEffectConfig[17]).t.yBZMsQ);
  obj11.onPress = callback1;
  items4[2] = closure_8(onSelectColors(displayNameStylesEffectConfig[18]).Button, obj11);
  obj6.children = items4;
  obj3.children = closure_9(closure_5, obj6);
  return closure_8(onSelectColors(displayNameStylesEffectConfig[16]).BottomSheet, obj3);
});
