// Module ID: 12266
// Function ID: 12267
// Name: ConjureShimmer
// Dependencies: [32, 19, 17, 4967, 21, 4966, 558, 576, 504, 5035, 5188, 683, 6945, 5240, 2]

// Module 12266 (ConjureShimmer)
import _modDef683 from "module_683" /* 683 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5035 */;
import timing from "timing" /* 5188 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4967 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4966 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let cancelAnimationResult, dependencyMap, flag, importDefault, num2, num3, num4, obj1, set, tmp10, tmp11, tmp3, tmp7;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let react = react_mod;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const locations = [0, 0.4, 0.5, 0.6, 1];
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
let closure_13 = createStyles.createStyles({ root: { position: "relative" }, band: { position: "absolute", top: 0, bottom: 0 }, fill: { flex: 1 } });
const __initData = { code: "function ConjureShimmerTsx1(){const{bandWidth,progress,width}=this.__closure;return{transform:[{translateX:-bandWidth+progress.get()*(bandWidth+width)}]};}" };
const __initData2 = { code: "function ConjureShimmerTsx2(){const{bandWidth,progress,width}=this.__closure;return{transform:[{translateX:-bandWidth+progress.get()*(bandWidth+width)}]};}" };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureShimmer(arg0) {
  let View;
  let closure_1;
  let epoch;
  let items1;
  let live;
  let obj10;
  let obj6;
  let obj7;
  let obj8;
  let renderFace;
  let sharedValue;
  let tint;
  let tmp32;
  let tmp5;
  let tmp6;
  let useReducedMotion;
  let width;
  let tmp = width;
  let obj = width(sharedValue[7]);
  const cResult = obj.c(34);
  ({ renderFace, live, tint, epoch } = arg0);
  let num = 0;
  if (undefined !== epoch) {
    num = epoch;
  }
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    let fn = function w() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(sharedValue[8]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const tmp9 = live(react.useState(0), 2);
  width = tmp9[0];
  importDefault = tmp9[1];
  const tmpResult3 = tmp(sharedValue[9]);
  sharedValue = tmpResult3.useSharedValue(0);
  const obj3 = react;
  if (live) {
    live = !stateFromStores;
  }
  if (live) {
    live = width > 0;
  }
  if (cResult[2] === live) {
    let tmp12;
    if (cResult[3] === sharedValue) {
      tmp12 = cResult[4];
    }
    if (cResult[5] === live) {
      if (cResult[6] === num) {
        let tmp13;
        let tmp18;
        let tmp17;
        let tmp16;
        let tmp15;
        if (cResult[7] === sharedValue) {
          tmp13 = cResult[8];
        }
        const effect = obj3.useEffect(tmp12, tmp13);
        if (cResult[9] !== tint) {
          const obj5 = require("module_683")(tint);
          const alphaResult = obj5.alpha(0);
          const cssResult = alphaResult.css();
          const alphaResult1 = obj5.alpha(1);
          const cssResult1 = alphaResult1.css();
          cResult[9] = tint;
          cResult[10] = cssResult;
          cResult[11] = cssResult;
          cResult[12] = cssResult;
          cResult[13] = cssResult1;
          tmp18 = cssResult1;
          tmp17 = cssResult;
          tmp16 = cssResult;
          tmp15 = cssResult;
        } else {
          tmp15 = cResult[10];
          tmp16 = cResult[11];
          tmp17 = cResult[12];
          tmp18 = cResult[13];
        }
        if (cResult[14] === tmp15) {
          if (cResult[15] === tmp16) {
            if (cResult[16] === tmp17) {
              let tmp22;
              if (cResult[17] === tmp18) {
                tmp22 = cResult[18];
              }
              let result = 4 * width;
              react = result;
              const tmpResult4 = tmp(sharedValue[9]);
              class B {
                constructor() {
                  let items;
                  const obj = { transform: items };
                  items = [{ translateX: -react + sharedValue.get() * (react + first) }];
                  ({ translateX: -react + sharedValue.get() * (react + first) });
                  return obj;
                }
              }
              let obj2 = { bandWidth: result, progress: sharedValue, width };
              B.__closure = obj2;
              B.__workletHash = 5317727670570;
              B.__initData = __initData;
              const animatedStyle = tmpResult4.useAnimatedStyle(B);
              const _Symbol = Symbol;
              if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                class G {
                  constructor(arg0) {
                    closure_0 = Math.round(arg0.nativeEvent.layout.width);
                    tmp = closure_1((arg0) => {
                      let tmp = closure_0;
                      if (arg0 === closure_0) {
                        tmp = arg0;
                      }
                      return tmp;
                    });
                    return;
                  }
                }
                cResult[19] = G;
              } else {
                class G {
                  constructor(arg0) {
                    closure_0 = Math.round(arg0.nativeEvent.layout.width);
                    tmp = closure_1((arg0) => {
                      let tmp = closure_0;
                      if (arg0 === closure_0) {
                        tmp = arg0;
                      }
                      return tmp;
                    });
                    return;
                  }
                }
              }
              const root = tmp4.root;
              if (cResult[20] !== renderFace) {
                class G {
                  constructor(arg0) {
                    closure_0 = Math.round(arg0.nativeEvent.layout.width);
                    tmp = closure_1((arg0) => {
                      let tmp = closure_0;
                      if (arg0 === closure_0) {
                        tmp = arg0;
                      }
                      return tmp;
                    });
                    return;
                  }
                }
                cResult[20] = renderFace;
                cResult[21] = tmp27;
                class B {
                  constructor() {
                    let items;
                    const obj = { transform: items };
                    items = [{ translateX: -react + sharedValue.get() * (react + first) }];
                    ({ translateX: -react + sharedValue.get() * (react + first) });
                    return obj;
                  }
                }
              } else {
                class G {
                  constructor(arg0) {
                    closure_0 = Math.round(arg0.nativeEvent.layout.width);
                    tmp = closure_1((arg0) => {
                      let tmp = closure_0;
                      if (arg0 === closure_0) {
                        tmp = arg0;
                      }
                      return tmp;
                    });
                    return;
                  }
                }
              }
              if (cResult[22] === live) {
                class G {
                  constructor(arg0) {
                    closure_0 = Math.round(arg0.nativeEvent.layout.width);
                    tmp = closure_1((arg0) => {
                      let tmp = closure_0;
                      if (arg0 === closure_0) {
                        tmp = arg0;
                      }
                      return tmp;
                    });
                    return;
                  }
                }
              }
              let tmp29 = null;
              if (live) {
                class G {
                  constructor(arg0) {
                    closure_0 = Math.round(arg0.nativeEvent.layout.width);
                    tmp = closure_1((arg0) => {
                      let tmp = closure_0;
                      if (arg0 === closure_0) {
                        tmp = arg0;
                      }
                      return tmp;
                    });
                    return;
                  }
                }
                const obj4 = { style: closure_5.absoluteFill, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_8(tmp32, obj6) };
                class B {
                  constructor() {
                    let items;
                    const obj = { transform: items };
                    items = [{ translateX: -react + sharedValue.get() * (react + first) }];
                    ({ translateX: -react + sharedValue.get() * (react + first) });
                    return obj;
                  }
                }
                obj6 = { style: closure_5.absoluteFill, androidRenderingMode: "software", maskElement: closure_8(closure_6, obj7), children: closure_8(View, obj8) };
                obj7 = { children: renderFace() };
                tmp32 = require("module_6945");
                obj8 = { style: items1, children: closure_8(require("LinearGradient"), obj10) };
                items1 = [tmp4.band, , ];
                const obj9 = { width: result };
                items1[1] = obj9;
                items1[2] = animatedStyle;
                View = require("ReanimatedRexport").View;
                obj10 = { style: tmp4.fill, start, end, colors: tmp22, locations };
                tmp29 = closure_8(closure_6, obj4);
              }
              cResult[22] = live;
              cResult[23] = tmp22;
              cResult[24] = animatedStyle;
              cResult[25] = result;
              cResult[26] = renderFace;
              cResult[27] = tmp4.band;
              class W {
                constructor() {
                  tmp = closure_3;
                  if (tmp) {
                    tmp7 = closure_2;
                    num2 = 0;
                    result = closure_2.set(0);
                    tmp9 = closure_0;
                    tmp10 = closure_2;
                    set = closure_2.set;
                    tmp11 = closure_0(closure_2[9]);
                    tmp12 = closure_0;
                    tmp13 = closure_2;
                    withRepeat = tmp11.withRepeat;
                    tmp14 = closure_0(closure_2[10]);
                    obj1 = { duration: 2000, easing: null };
                    tmp15 = closure_0;
                    tmp16 = closure_2;
                    withTiming = tmp14.withTiming;
                    obj1.easing = closure_0(closure_2[9]).Easing.linear;
                    num3 = 1;
                    flag = false;
                    num4 = -1;
                    result1 = set(withRepeat(withTiming(1, obj1), -1, false));
                    fn = () => {
                      const obj = first(sharedValue[9]);
                      return obj.cancelAnimation(closure_1_2);
                    };
                  } else {
                    tmp2 = closure_0;
                    tmp3 = closure_2;
                    obj = closure_0(closure_2[9]);
                    tmp4 = closure_2;
                    cancelAnimationResult = obj.cancelAnimation(closure_2);
                    num = 0;
                    result2 = closure_2.set(0);
                  }
                  return fn;
                }
              }
              cResult[29] = tmp29;
            }
          }
        }
        const items2 = [, tmp17, tmp18, tmp15, tmp15];
        cResult[14] = tmp15;
        cResult[15] = tmp16;
        cResult[16] = tmp17;
        cResult[17] = tmp18;
        cResult[18] = items2;
        tmp22 = items2;
      }
    }
    const items3 = [live, num, ];
    cResult[5] = live;
    cResult[6] = num;
    cResult[7] = sharedValue;
    cResult[8] = items3;
    tmp13 = items3;
  }
  class W {
    constructor() {
      tmp = closure_3;
      if (tmp) {
        tmp7 = closure_2;
        num2 = 0;
        result = closure_2.set(0);
        tmp9 = closure_0;
        tmp10 = closure_2;
        set = closure_2.set;
        tmp11 = closure_0(closure_2[9]);
        tmp12 = closure_0;
        tmp13 = closure_2;
        withRepeat = tmp11.withRepeat;
        tmp14 = closure_0(closure_2[10]);
        obj1 = { duration: 2000, easing: null };
        tmp15 = closure_0;
        tmp16 = closure_2;
        withTiming = tmp14.withTiming;
        obj1.easing = closure_0(closure_2[9]).Easing.linear;
        num3 = 1;
        flag = false;
        num4 = -1;
        result1 = set(withRepeat(withTiming(1, obj1), -1, false));
        fn = () => {
          const obj = first(sharedValue[9]);
          return obj.cancelAnimation(closure_1_2);
        };
      } else {
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[9]);
        tmp4 = closure_2;
        cancelAnimationResult = obj.cancelAnimation(closure_2);
        num = 0;
        result2 = closure_2.set(0);
      }
      return fn;
    }
  }
  cResult[2] = live;
  cResult[3] = sharedValue;
  cResult[4] = W;
  tmp12 = W;
}) : (function ConjureShimmer(epoch) {
  let View;
  let closure_2;
  let items3;
  let items4;
  let live;
  let obj10;
  let obj6;
  let obj7;
  let obj8;
  let renderFace;
  let tint;
  let tmp18;
  let useReducedMotion;
  ({ renderFace, live, tint } = epoch);
  let num = epoch.epoch;
  if (num === undefined) {
    num = 0;
  }
  let sharedValue;
  live = undefined;
  let c5;
  let tmp = closure_13();
  let obj = tint(504);
  let items = [AccessibilityStore];
  let obj2 = live;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp5 = sharedValue(live.useState(0), 2);
  const width = tmp5[0];
  dependencyMap = tmp5[1];
  const obj3 = tint(5035);
  sharedValue = obj3.useSharedValue(0);
  const tmp2 = tint;
  if (live) {
    live = !stateFromStores;
  }
  if (live) {
    live = width > 0;
  }
  const items1 = [live, num, sharedValue];
  const effect = obj2.useEffect(() => {
    let fn;
    const tmp = live;
    if (tmp) {
      const result = sharedValue.set(0);
      set = sharedValue.set;
      const withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      const obj2 = { duration: 2000, easing: ReanimatedRexport.Easing.linear };
      const withTiming = timing.withTiming;
      timing;
      const result1 = set(withRepeat(withTiming(1, obj2), -1, false));
      fn = () => {
        const obj = tint(closure_2[9]);
        return obj.cancelAnimation(sharedValue);
      };
    } else {
      let obj = ReanimatedRexport;
      obj.cancelAnimation(sharedValue);
      const result2 = sharedValue.set(0);
    }
    return fn;
  }, items1);
  const items2 = [tint];
  let result = 4 * width;
  c5 = result;
  const memo = obj2.useMemo(() => {
    const obj = _modDef683(tint);
    const alphaResult = obj.alpha(0);
    const cssResult = alphaResult.css();
    const items = [cssResult, cssResult, , , ];
    const alphaResult1 = obj.alpha(1);
    items[2] = alphaResult1.css();
    items[3] = cssResult;
    items[4] = cssResult;
    return items;
  }, items2);
  const tmp2Result = tmp2(5035);
  class R {
    constructor() {
      let items;
      const obj = { transform: items };
      items = [{ translateX: -c5 + sharedValue.get() * (c5 + first) }];
      ({ translateX: -c5 + sharedValue.get() * (c5 + first) });
      return obj;
    }
  }
  R.__closure = { bandWidth: result, progress: sharedValue, width };
  R.__workletHash = 8820828976937;
  R.__initData = __initData2;
  const animatedStyle = tmp2Result.useAnimatedStyle(R);
  const obj4 = {
    style: tmp.root,
    onLayout: obj2.useCallback((nativeEvent) => {
      let closure_0 = Math.round(nativeEvent.nativeEvent.layout.width);
      let tmp = closure_2((arg0) => {
        let tmp = closure_0;
        if (arg0 === closure_0) {
          tmp = arg0;
        }
        return tmp;
      });
    }, []),
    children: items3
  };
  items3 = [renderFace(), ];
  let tmp14 = null;
  const tmp12 = closure_9;
  if (live) {
    const obj5 = { style: c5.absoluteFill, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_8(tmp18, obj6) };
    obj6 = { style: c5.absoluteFill, androidRenderingMode: "software", maskElement: closure_8(closure_6, obj7), children: closure_8(View, obj8) };
    obj7 = { children: renderFace() };
    tmp18 = width(6945);
    obj8 = { style: items4, children: closure_8(width(5240), obj10) };
    items4 = [tmp.band, , ];
    const obj9 = { width: result };
    items4[1] = obj9;
    items4[2] = animatedStyle;
    View = width(5035).View;
    obj10 = { style: tmp.fill, start, end, colors: memo, locations };
    tmp14 = closure_8(tmp13, obj5);
  }
  items3[1] = tmp14;
  return tmp12(closure_6, obj4);
});
let result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureShimmer.tsx");

export default tmp4;
