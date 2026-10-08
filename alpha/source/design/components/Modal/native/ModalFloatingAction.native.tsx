// Module ID: 11612
// Function ID: 11613
// Name: ModalFloatingAction
// Dependencies: [109, 19, 17, 21, 5090, 558, 576, 4810, 4794, 1630, 5374, 5378, 683, 5387, 11613, 2]

// Module 11612 (ModalFloatingAction)
import react2 from "react" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import spring from "spring" /* 5374 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, set;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp2;
const springPresets = tmp2(5378);
let closure_3 = ["isVisible", "floatingBackgroundColor"];
({ StyleSheet: metroRequire, View: metroImportDefault } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ floating: { position: "absolute", bottom: 0, width: "100%", paddingHorizontal: 16 }, spacer: { height: 96 } });
const __initData = { code: "function ModalFloatingActionNativeTsx1(){const{interpolate,sharedValue,floatingBackgroundColor,useReducedMotion}=this.__closure;return{opacity:interpolate(sharedValue.get(),[0,1],[0,1]),borderBottomColor:floatingBackgroundColor,borderBottomWidth:16,transform:[{translateY:interpolate(sharedValue.get(),[useReducedMotion?0.999999:0,1],[32,0])}]};}" };
const __initData2 = { code: "function ModalFloatingActionNativeTsx2(){const{interpolate,sharedValue,floatingBackgroundColor,useReducedMotion}=this.__closure;return{opacity:interpolate(sharedValue.get(),[0,1],[0,1]),borderBottomColor:floatingBackgroundColor,borderBottomWidth:16,transform:[{translateY:interpolate(sharedValue.get(),[useReducedMotion?0.999999:0,1],[32,0])}]};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ModalFloatingAction(isVisible) {
  let _require;
  let closure_1;
  let enabled;
  let items1;
  let sharedValue;
  let tmp4;
  const tmp = _require;
  let tmp2 = sharedValue;
  let obj = require("react");
  const cResult = obj.c(29);
  if (cResult[0] !== isVisible) {
    isVisible = isVisible.isVisible;
    importDefault = isVisible;
    const floatingBackgroundColor = isVisible.floatingBackgroundColor;
    _require = floatingBackgroundColor;
    const tmp9 = _objectWithoutProperties(isVisible, enabled);
    let num = 0;
    cResult[0] = isVisible;
    cResult[1] = tmp9;
    cResult[2] = floatingBackgroundColor;
    cResult[3] = isVisible;
    tmp4 = tmp9;
  } else {
    tmp4 = cResult[1];
    _require = cResult[2];
    importDefault = cResult[3];
  }
  const tmp10 = closure_10();
  let num5 = 0;
  const useSharedValue = tmp(tmp2[7]).useSharedValue;
  tmp(tmp2[7]);
  if (tmp6) {
    num5 = 1;
  }
  sharedValue = useSharedValue(num5);
  let obj2 = react;
  enabled = react.useContext(tmp(tmp2[8]).AccessibilityPreferencesContext).reducedMotion.enabled;
  const tmp14 = require("useSafeAreaInsets")();
  if (cResult[4] === tmp6) {
    let tmp15;
    let tmp16;
    let tmp21;
    if (cResult[5] === sharedValue) {
      tmp15 = cResult[6];
      tmp16 = cResult[7];
    }
    const effect = obj2.useEffect(tmp15, tmp16);
    const tmpResult2 = tmp(tmp2[7]);
    class A {
      constructor() {
        let items;
        let items1;
        let obj2;
        const obj = { opacity: obj2.interpolate(sharedValue.get(), [0, 1], [0, 1]), borderBottomColor, borderBottomWidth: 16, transform: items1 };
        obj2 = ReanimatedRexport;
        const interpolate = ReanimatedRexport.interpolate;
        let num = 0;
        ReanimatedRexport;
        const value = sharedValue.get();
        if (enabled) {
          num = 0.999999;
        }
        const obj3 = { translateY: interpolate(value, items, [32, 0]) };
        items = [num, 1];
        items1 = [obj3];
        return obj;
      }
    }
    let obj3 = { interpolate: tmp(tmp2[7]).interpolate, sharedValue, floatingBackgroundColor: tmp5, useReducedMotion: enabled };
    const useAnimatedStyle = tmpResult2.useAnimatedStyle;
    A.__closure = obj3;
    A.__workletHash = 1679390676673;
    A.__initData = __initData;
    const animatedStyle = useAnimatedStyle(A);
    if (cResult[8] !== tmp14.bottom) {
      const obj4 = { paddingBottom: tmp14.bottom };
      class A {
        constructor() {
          let items;
          let items1;
          let obj2;
          const obj = { opacity: obj2.interpolate(sharedValue.get(), [0, 1], [0, 1]), borderBottomColor, borderBottomWidth: 16, transform: items1 };
          obj2 = ReanimatedRexport;
          const interpolate = ReanimatedRexport.interpolate;
          let num = 0;
          ReanimatedRexport;
          const value = sharedValue.get();
          if (enabled) {
            num = 0.999999;
          }
          const obj3 = { translateY: interpolate(value, items, [32, 0]) };
          items = [num, 1];
          items1 = [obj3];
          return obj;
        }
      }
      cResult[9] = obj4;
      tmp21 = obj4;
    } else {
      tmp21 = cResult[9];
    }
    if (cResult[10] === animatedStyle) {
      if (cResult[11] === tmp10.floating) {
        let tmp22;
        if (cResult[12] === tmp21) {
          tmp22 = cResult[13];
        }
        let str = "none";
        if (tmp6) {
          str = "auto";
        }
        class A {
          constructor() {
            let items;
            let items1;
            let obj2;
            const obj = { opacity: obj2.interpolate(sharedValue.get(), [0, 1], [0, 1]), borderBottomColor, borderBottomWidth: 16, transform: items1 };
            obj2 = ReanimatedRexport;
            const interpolate = ReanimatedRexport.interpolate;
            let num = 0;
            ReanimatedRexport;
            const value = sharedValue.get();
            if (enabled) {
              num = 0.999999;
            }
            const obj3 = { translateY: interpolate(value, items, [32, 0]) };
            items = [num, 1];
            items1 = [obj3];
            return obj;
          }
        }
        if (cResult[16] === tmp5) {
          let tmp24;
          let tmp27;
          let tmp31;
          if (cResult[17] === tmp23) {
            tmp24 = cResult[18];
          }
          const _Symbol = Symbol;
          class A {
            constructor() {
              let items;
              let items1;
              let obj2;
              const obj = { opacity: obj2.interpolate(sharedValue.get(), [0, 1], [0, 1]), borderBottomColor, borderBottomWidth: 16, transform: items1 };
              obj2 = ReanimatedRexport;
              const interpolate = ReanimatedRexport.interpolate;
              let num = 0;
              ReanimatedRexport;
              const value = sharedValue.get();
              if (enabled) {
                num = 0.999999;
              }
              const obj3 = { translateY: interpolate(value, items, [32, 0]) };
              items = [num, 1];
              items1 = [obj3];
              return obj;
            }
          }
          if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
            let items = [0, 0.5];
            cResult[19] = items;
            class A {
              constructor() {
                let items;
                let items1;
                let obj2;
                const obj = { opacity: obj2.interpolate(sharedValue.get(), [0, 1], [0, 1]), borderBottomColor, borderBottomWidth: 16, transform: items1 };
                obj2 = ReanimatedRexport;
                const interpolate = ReanimatedRexport.interpolate;
                let num = 0;
                ReanimatedRexport;
                const value = sharedValue.get();
                if (enabled) {
                  num = 0.999999;
                }
                const obj3 = { translateY: interpolate(value, items, [32, 0]) };
                items = [num, 1];
                items1 = [obj3];
                return obj;
              }
            }
          }
          if (cResult[20] !== tmp24) {
            const obj5 = { colors: tmp24, locations: null, style: closure_6.absoluteFill };
            class A {
              constructor() {
                let items;
                let items1;
                let obj2;
                const obj = { opacity: obj2.interpolate(sharedValue.get(), [0, 1], [0, 1]), borderBottomColor, borderBottomWidth: 16, transform: items1 };
                obj2 = ReanimatedRexport;
                const interpolate = ReanimatedRexport.interpolate;
                let num = 0;
                ReanimatedRexport;
                const value = sharedValue.get();
                if (enabled) {
                  num = 0.999999;
                }
                const obj3 = { translateY: interpolate(value, items, [32, 0]) };
                items = [num, 1];
                items1 = [obj3];
                return obj;
              }
            }
            const tmp30 = closure_8(require("LinearGradient"), obj5);
            cResult[20] = tmp24;
            cResult[21] = tmp30;
            tmp27 = tmp30;
          } else {
            tmp27 = cResult[21];
          }
          if (cResult[22] !== tmp4) {
            const obj6 = { variant: "primary" };
            class A {
              constructor() {
                let items;
                let items1;
                let obj2;
                const obj = { opacity: obj2.interpolate(sharedValue.get(), [0, 1], [0, 1]), borderBottomColor, borderBottomWidth: 16, transform: items1 };
                obj2 = ReanimatedRexport;
                const interpolate = ReanimatedRexport.interpolate;
                let num = 0;
                ReanimatedRexport;
                const value = sharedValue.get();
                if (enabled) {
                  num = 0.999999;
                }
                const obj3 = { translateY: interpolate(value, items, [32, 0]) };
                items = [num, 1];
                items1 = [obj3];
                return obj;
              }
            }
            const ModalActionButton = tmp(tmp2[14]).ModalActionButton;
            const merged = Object.assign(tmp4);
            const tmp35 = closure_8(ModalActionButton, obj6);
            cResult[22] = tmp4;
            cResult[23] = tmp35;
            tmp31 = tmp35;
          } else {
            tmp31 = cResult[23];
          }
          if (cResult[24] === tmp27) {
            if (cResult[25] === tmp31) {
              if (cResult[26] === tmp22) {
                let tmp36;
                if (cResult[27] === str) {
                  tmp36 = cResult[28];
                }
                return tmp36;
              }
            }
          }
          const obj7 = { style: tmp22, pointerEvents: str, children: items1 };
          items1 = [tmp27, tmp31];
          const tmp38 = closure_9(require("ReanimatedRexport").View, obj7);
          cResult[24] = tmp27;
          cResult[25] = tmp31;
          cResult[26] = tmp22;
          cResult[27] = str;
          cResult[28] = tmp38;
          tmp36 = tmp38;
        }
        const items2 = [tmp23, tmp5];
        cResult[16] = tmp5;
        cResult[17] = tmp23;
        cResult[18] = items2;
        tmp24 = items2;
      }
    }
    const items3 = [animatedStyle, tmp10.floating, tmp21];
    cResult[10] = animatedStyle;
    cResult[11] = tmp10.floating;
    cResult[12] = tmp21;
    cResult[13] = items3;
    tmp22 = items3;
  }
  const fn = function y() {
    let num = 0;
    set = sharedValue.set;
    const withSpring = spring.withSpring;
    spring;
    if (closure_1) {
      num = 1;
    }
    const result = set(withSpring(num, springPresets.SUBTLE_SPRING, "animate-always"));
  };
  const items4 = [tmp6, sharedValue];
  cResult[4] = tmp6;
  cResult[5] = sharedValue;
  cResult[6] = fn;
  cResult[7] = items4;
  tmp16 = items4;
  tmp15 = fn;
}) : (function ModalFloatingAction(isVisible) {
  let items1;
  let items2;
  let items3;
  let str;
  isVisible = isVisible.isVisible;
  const floatingBackgroundColor = isVisible.floatingBackgroundColor;
  const merged = Object.assign(isVisible, Object.assign({ isVisible: 0, floatingBackgroundColor: 0 }));
  let sharedValue;
  let enabled;
  const tmp4 = sharedValue;
  let tmp2 = closure_10();
  let num = 0;
  const useSharedValue = isVisible(sharedValue[7]).useSharedValue;
  isVisible(sharedValue[7]);
  if (isVisible) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  enabled = react.useContext(tmp3(tmp4[8]).AccessibilityPreferencesContext).reducedMotion.enabled;
  let items = [isVisible, sharedValue];
  const tmp8 = floatingBackgroundColor(tmp4[9])();
  const effect = react.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    const withSpring = spring.withSpring;
    spring;
    if (isVisible) {
      num = 1;
    }
    const result = set(withSpring(num, springPresets.SUBTLE_SPRING, "animate-always"));
  }, items);
  const fn = function y() {
    let items;
    let items1;
    let obj2;
    const obj = { opacity: obj2.interpolate(sharedValue.get(), [0, 1], [0, 1]), borderBottomColor: floatingBackgroundColor, borderBottomWidth: 16, transform: items1 };
    obj2 = ReanimatedRexport;
    const interpolate = ReanimatedRexport.interpolate;
    let num = 0;
    ReanimatedRexport;
    const value = sharedValue.get();
    if (enabled) {
      num = 0.999999;
    }
    const obj3 = { translateY: interpolate(value, items, [32, 0]) };
    items = [num, 1];
    items1 = [obj3];
    return obj;
  };
  const tmp3Result = isVisible(tmp4[7]);
  let obj = { interpolate: tmp3(tmp4[7]).interpolate, sharedValue, floatingBackgroundColor, useReducedMotion: enabled };
  fn.__closure = obj;
  fn.__workletHash = 14144713836194;
  fn.__initData = __initData2;
  const animatedStyle = tmp3Result.useAnimatedStyle(fn);
  let obj2 = { style: items1, pointerEvents: str, children: items3 };
  items1 = [animatedStyle, tmp2.floating, { paddingBottom: tmp8.bottom }];
  str = "none";
  const View = floatingBackgroundColor(tmp4[7]).View;
  const tmp11 = closure_9;
  if (isVisible) {
    str = "auto";
  }
  let obj3 = { colors: items2, locations: [0, 0.5], style: closure_6.absoluteFill };
  const tmp7Result = floatingBackgroundColor(tmp4[13]);
  items2 = [, ];
  const obj5 = floatingBackgroundColor(tmp4[12])(floatingBackgroundColor);
  const alphaResult = obj5.alpha(0);
  items2[0] = alphaResult.hex();
  items2[1] = floatingBackgroundColor;
  items3 = [closure_8(tmp7Result, obj3), ];
  const obj4 = { variant: "primary" };
  const ModalActionButton = tmp3(tmp4[14]).ModalActionButton;
  const merged1 = Object.assign(merged);
  items3[1] = closure_8(ModalActionButton, obj4);
  return tmp11(View, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ModalFloatingActionSpacer() {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_10();
  if (cResult[0] !== tmp2.spacer) {
    const obj2 = { style: tmp2.spacer };
    const tmp6 = metroImportAll(metroImportDefault, obj2);
    cResult[0] = tmp2.spacer;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function ModalFloatingActionSpacer() {
  const obj = { style: closure_10().spacer };
  return metroImportAll(metroImportDefault, obj);
});
let result = size.fileFinishedImporting("design/components/Modal/native/ModalFloatingAction.native.tsx");

export const ModalFloatingAction = tmp4;
export const ModalFloatingActionSpacer = tmp5;
