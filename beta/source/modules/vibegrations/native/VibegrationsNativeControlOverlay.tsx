// Module ID: 16290
// Function ID: 16291
// Name: VibegrationsNativeControlOverlay
// Dependencies: [19, 17, 4826, 21, 4837, 588, 558, 576, 16291, 504, 4570, 5281, 5285, 4838, 16292, 13937, 1127, 3718, 4833, 5282, 2]

// Module 16290 (VibegrationsNativeControlOverlay)
import nativeDefault from "native" /* 588 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4570 */;
import timing from "timing" /* 4838 */;
import spring from "spring" /* 5281 */;
import springPresets from "springPresets" /* 5285 */;
import useVibegrationsControlBar from "useVibegrationsControlBar" /* 16291 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4826 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let cancelAnimationResult, dependencyMap, flag, num, num2, num3, onOpenPublishedApp, set, set2, tmp10, tmp11, tmp12, tmp13, tmp3, tmp5, tmp6;

let StyleSheet;
let closure_4;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
({ StyleSheet, View: closure_4 } = react_native);
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let c9 = 280;
let c10 = -96;
let createStyles = createStyles_mod;
let obj = { block: obj2, border: obj3, glow: obj4, barArea: obj5, bar: obj6, status: obj7, copy: obj8, actions: obj9 };
obj2 = {};
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { borderWidth: nativeDefault.space.PX_8, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj5 = { overflow: "hidden" };
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj6 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj7 = { flexDirection: "row", flexWrap: "wrap", flexShrink: 1, alignItems: "center", gap: nativeDefault.space.PX_8 };
obj8 = { flexDirection: "row", flexWrap: "wrap", flexShrink: 1, alignItems: "baseline", columnGap: nativeDefault.space.PX_8 };
obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_11 = createStyles(obj);
const __initData = { code: "function VibegrationsNativeControlOverlayTsx1(){const{barOffset}=this.__closure;return{transform:[{translateY:barOffset.get()}]};}" };
const __initData2 = { code: "function VibegrationsNativeControlOverlayTsx2(){const{pulse}=this.__closure;return{opacity:pulse.get()};}" };
const __initData3 = { code: "function VibegrationsNativeControlOverlayTsx3(){const{barOffset}=this.__closure;return{transform:[{translateY:barOffset.get()}]};}" };
const __initData4 = { code: "function VibegrationsNativeControlOverlayTsx4(){const{pulse}=this.__closure;return{opacity:pulse.get()};}" };
const tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((onOpenPublishedApp) => {
  let active;
  let closure_2;
  let items6;
  let items7;
  let projectId;
  let stop;
  let stopping;
  let tmp7;
  let tmp8;
  let useReducedMotion;
  let vibegrationsControlPhase;
  let tmp = vibegrationsControlPhase;
  let tmp2 = dependencyMap;
  let obj = vibegrationsControlPhase(576);
  const cResult = obj.c(53);
  onOpenPublishedApp = onOpenPublishedApp.onOpenPublishedApp;
  ({ projectId, active } = onOpenPublishedApp);
  const tmp4 = closure_11();
  let obj2 = vibegrationsControlPhase(16291);
  vibegrationsControlPhase = obj2.useVibegrationsControlPhase(active);
  const obj3 = vibegrationsControlPhase(16291);
  const vibegrationsControlStop = obj3.useVibegrationsControlStop(projectId);
  ({ stop, stopping } = vibegrationsControlStop);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    let fn = function c() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp8 = fn;
    tmp7 = items;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  dependencyMap = tmp11;
  const tmpResult5 = tmp(4570);
  const sharedValue = tmpResult5.useSharedValue(c10);
  const tmpResult6 = tmp(4570);
  const sharedValue1 = tmpResult6.useSharedValue(0.5);
  if (cResult[2] === sharedValue) {
    let tmp14;
    let tmp15;
    if (cResult[3] === vibegrationsControlPhase) {
      tmp14 = cResult[4];
      tmp15 = cResult[5];
    }
    const effect = sharedValue.useEffect(tmp14, tmp15);
    const obj7 = sharedValue;
    if (cResult[6] === "controlling" === vibegrationsControlPhase) {
      if (cResult[7] === sharedValue1) {
        let tmp17;
        let tmp18;
        if (cResult[8] === stateFromStores) {
          tmp17 = cResult[9];
          tmp18 = cResult[10];
        }
        const effect1 = obj7.useEffect(tmp17, tmp18);
        const tmpResult7 = tmp(4570);
        class F {
          constructor() {
            let items;
            const obj = { transform: items };
            items = [{ translateY: sharedValue.get() }];
            ({ translateY: sharedValue.get() });
            return obj;
          }
        }
        class C {
          constructor() {
            tmp = closure_2;
            if (tmp) {
              tmp2 = closure_1;
              if (!tmp2) {
                tmp3 = closure_4;
                num = 0.2;
                result = closure_4.set(0.2);
                tmp5 = closure_0;
                tmp6 = closure_2;
                set = closure_4.set;
                tmp7 = closure_0(closure_2[10]);
                tmp8 = closure_0;
                tmp9 = closure_2;
                withRepeat = tmp7.withRepeat;
                tmp10 = closure_0(closure_2[13]);
                obj = { duration: 1200, easing: null };
                tmp11 = closure_0;
                tmp12 = closure_2;
                withTiming = tmp10.withTiming;
                Easing = closure_0(closure_2[10]).Easing;
                tmp13 = closure_0;
                tmp14 = closure_2;
                obj.easing = Easing.inOut(closure_0(closure_2[10]).Easing.ease);
                num2 = 0.7;
                flag = true;
                num3 = -1;
                result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
                fn = () => {
                  const obj = vibegrationsControlPhase(closure_2[10]);
                  return obj.cancelAnimation(sharedValue1);
                };
              }
              return fn;
            }
            obj2 = closure_0(closure_2[10]);
            cancelAnimationResult = obj2.cancelAnimation(closure_4);
            result2 = closure_4.set(0.5);
            return;
          }
        }
        tmp20[0] = sharedValue;
        F.__closure = tmp20;
        F.__workletHash = 4238220742706;
        F.__initData = __initData;
        const animatedStyle = tmpResult7.useAnimatedStyle(F);
        const tmpResult8 = tmp(4570);
        class G {
          constructor() {
            const obj = { opacity: sharedValue1.get() };
            return obj;
          }
        }
        const obj4 = { pulse: sharedValue1 };
        G.__closure = obj4;
        G.__workletHash = 7153982073121;
        G.__initData = __initData2;
        const animatedStyle1 = tmpResult8.useAnimatedStyle(G);
        if ("idle" === vibegrationsControlPhase) {
          return null;
        } else {
          if (cResult[11] === "controlling" === vibegrationsControlPhase) {
            if (cResult[12] === animatedStyle1) {
              if (cResult[13] === tmp4.block) {
                if (cResult[14] === tmp4.border) {
                  let tmp25;
                  if (cResult[15] === tmp4.glow) {
                    tmp25 = cResult[16];
                  }
                  if (cResult[17] === animatedStyle) {
                    let tmp31;
                    let tmp33;
                    let tmp36;
                    let tmp39;
                    let tmp42;
                    if (cResult[18] === tmp4.bar) {
                      tmp31 = cResult[19];
                    }
                    const _Symbol = Symbol;
                    const status = tmp4.status;
                    class F {
                      constructor() {
                        let items;
                        const obj = { transform: items };
                        items = [{ translateY: sharedValue.get() }];
                        ({ translateY: sharedValue.get() });
                        return obj;
                      }
                    }
                    class C {
                      constructor() {
                        tmp = closure_2;
                        if (tmp) {
                          tmp2 = closure_1;
                          if (!tmp2) {
                            tmp3 = closure_4;
                            num = 0.2;
                            result = closure_4.set(0.2);
                            tmp5 = closure_0;
                            tmp6 = closure_2;
                            set = closure_4.set;
                            tmp7 = closure_0(closure_2[10]);
                            tmp8 = closure_0;
                            tmp9 = closure_2;
                            withRepeat = tmp7.withRepeat;
                            tmp10 = closure_0(closure_2[13]);
                            obj = { duration: 1200, easing: null };
                            tmp11 = closure_0;
                            tmp12 = closure_2;
                            withTiming = tmp10.withTiming;
                            Easing = closure_0(closure_2[10]).Easing;
                            tmp13 = closure_0;
                            tmp14 = closure_2;
                            obj.easing = Easing.inOut(closure_0(closure_2[10]).Easing.ease);
                            num2 = 0.7;
                            flag = true;
                            num3 = -1;
                            result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
                            fn = () => {
                              const obj = vibegrationsControlPhase(closure_2[10]);
                              return obj.cancelAnimation(sharedValue1);
                            };
                          }
                          return fn;
                        }
                        obj2 = closure_0(closure_2[10]);
                        cancelAnimationResult = obj2.cancelAnimation(closure_4);
                        result2 = closure_4.set(0.5);
                        return;
                      }
                    }
                    if (cResult[21] !== ("controlling" === vibegrationsControlPhase)) {
                      let tmp34 = null;
                      if ("controlling" === vibegrationsControlPhase) {
                        tmp34 = closure_6(tmp(13937).AILoader, { size: 12, color: "text-overlay-light" });
                      }
                      class F {
                        constructor() {
                          let items;
                          const obj = { transform: items };
                          items = [{ translateY: sharedValue.get() }];
                          ({ translateY: sharedValue.get() });
                          return obj;
                        }
                      }
                      class C {
                        constructor() {
                          tmp = closure_2;
                          if (tmp) {
                            tmp2 = closure_1;
                            if (!tmp2) {
                              tmp3 = closure_4;
                              num = 0.2;
                              result = closure_4.set(0.2);
                              tmp5 = closure_0;
                              tmp6 = closure_2;
                              set = closure_4.set;
                              tmp7 = closure_0(closure_2[10]);
                              tmp8 = closure_0;
                              tmp9 = closure_2;
                              withRepeat = tmp7.withRepeat;
                              tmp10 = closure_0(closure_2[13]);
                              obj = { duration: 1200, easing: null };
                              tmp11 = closure_0;
                              tmp12 = closure_2;
                              withTiming = tmp10.withTiming;
                              Easing = closure_0(closure_2[10]).Easing;
                              tmp13 = closure_0;
                              tmp14 = closure_2;
                              obj.easing = Easing.inOut(closure_0(closure_2[10]).Easing.ease);
                              num2 = 0.7;
                              flag = true;
                              num3 = -1;
                              result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
                              fn = () => {
                                const obj = vibegrationsControlPhase(closure_2[10]);
                                return obj.cancelAnimation(sharedValue1);
                              };
                            }
                            return fn;
                          }
                          obj2 = closure_0(closure_2[10]);
                          cancelAnimationResult = obj2.cancelAnimation(closure_4);
                          result2 = closure_4.set(0.5);
                          return;
                        }
                      }
                      cResult[22] = tmp34;
                      tmp33 = tmp34;
                    } else {
                      tmp33 = cResult[22];
                    }
                    const copy = tmp4.copy;
                    if (cResult[23] !== ("controlling" === vibegrationsControlPhase)) {
                      const string = tmp(1127).intl.string;
                      class F {
                        constructor() {
                          let items;
                          const obj = { transform: items };
                          items = [{ translateY: sharedValue.get() }];
                          ({ translateY: sharedValue.get() });
                          return obj;
                        }
                      }
                      class C {
                        constructor() {
                          tmp = closure_2;
                          if (tmp) {
                            tmp2 = closure_1;
                            if (!tmp2) {
                              tmp3 = closure_4;
                              num = 0.2;
                              result = closure_4.set(0.2);
                              tmp5 = closure_0;
                              tmp6 = closure_2;
                              set = closure_4.set;
                              tmp7 = closure_0(closure_2[10]);
                              tmp8 = closure_0;
                              tmp9 = closure_2;
                              withRepeat = tmp7.withRepeat;
                              tmp10 = closure_0(closure_2[13]);
                              obj = { duration: 1200, easing: null };
                              tmp11 = closure_0;
                              tmp12 = closure_2;
                              withTiming = tmp10.withTiming;
                              Easing = closure_0(closure_2[10]).Easing;
                              tmp13 = closure_0;
                              tmp14 = closure_2;
                              obj.easing = Easing.inOut(closure_0(closure_2[10]).Easing.ease);
                              num2 = 0.7;
                              flag = true;
                              num3 = -1;
                              result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
                              fn = () => {
                                const obj = vibegrationsControlPhase(closure_2[10]);
                                return obj.cancelAnimation(sharedValue1);
                              };
                            }
                            return fn;
                          }
                          obj2 = closure_0(closure_2[10]);
                          cancelAnimationResult = obj2.cancelAnimation(closure_4);
                          result2 = closure_4.set(0.5);
                          return;
                        }
                      }
                      cResult[23] = "controlling" === vibegrationsControlPhase;
                      cResult[24] = tmp38;
                      tmp36 = tmp38;
                    } else {
                      tmp36 = cResult[24];
                    }
                    if (cResult[25] !== tmp36) {
                      class F {
                        constructor() {
                          let items;
                          const obj = { transform: items };
                          items = [{ translateY: sharedValue.get() }];
                          ({ translateY: sharedValue.get() });
                          return obj;
                        }
                      }
                      class C {
                        constructor() {
                          tmp = closure_2;
                          if (tmp) {
                            tmp2 = closure_1;
                            if (!tmp2) {
                              tmp3 = closure_4;
                              num = 0.2;
                              result = closure_4.set(0.2);
                              tmp5 = closure_0;
                              tmp6 = closure_2;
                              set = closure_4.set;
                              tmp7 = closure_0(closure_2[10]);
                              tmp8 = closure_0;
                              tmp9 = closure_2;
                              withRepeat = tmp7.withRepeat;
                              tmp10 = closure_0(closure_2[13]);
                              obj = { duration: 1200, easing: null };
                              tmp11 = closure_0;
                              tmp12 = closure_2;
                              withTiming = tmp10.withTiming;
                              Easing = closure_0(closure_2[10]).Easing;
                              tmp13 = closure_0;
                              tmp14 = closure_2;
                              obj.easing = Easing.inOut(closure_0(closure_2[10]).Easing.ease);
                              num2 = 0.7;
                              flag = true;
                              num3 = -1;
                              result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
                              fn = () => {
                                const obj = vibegrationsControlPhase(closure_2[10]);
                                return obj.cancelAnimation(sharedValue1);
                              };
                            }
                            return fn;
                          }
                          obj2 = closure_0(closure_2[10]);
                          cancelAnimationResult = obj2.cancelAnimation(closure_4);
                          result2 = closure_4.set(0.5);
                          return;
                        }
                      }
                      cResult[25] = tmp36;
                      cResult[26] = tmp41;
                      tmp39 = tmp41;
                    } else {
                      tmp39 = cResult[26];
                    }
                    if (cResult[27] !== ("controlling" === vibegrationsControlPhase)) {
                      let tmp43 = null;
                      if ("controlling" === vibegrationsControlPhase) {
                        const obj6 = { variant: "text-xs/medium", color: "text-overlay-light", children: obj17.string(stateFromStores(3718).NldIIG) };
                        const Text = tmp(4833).Text;
                        class F {
                          constructor() {
                            let items;
                            const obj = { transform: items };
                            items = [{ translateY: sharedValue.get() }];
                            ({ translateY: sharedValue.get() });
                            return obj;
                          }
                        }
                        class C {
                          constructor() {
                            tmp = closure_2;
                            if (tmp) {
                              tmp2 = closure_1;
                              if (!tmp2) {
                                tmp3 = closure_4;
                                num = 0.2;
                                result = closure_4.set(0.2);
                                tmp5 = closure_0;
                                tmp6 = closure_2;
                                set = closure_4.set;
                                tmp7 = closure_0(closure_2[10]);
                                tmp8 = closure_0;
                                tmp9 = closure_2;
                                withRepeat = tmp7.withRepeat;
                                tmp10 = closure_0(closure_2[13]);
                                obj = { duration: 1200, easing: null };
                                tmp11 = closure_0;
                                tmp12 = closure_2;
                                withTiming = tmp10.withTiming;
                                Easing = closure_0(closure_2[10]).Easing;
                                tmp13 = closure_0;
                                tmp14 = closure_2;
                                obj.easing = Easing.inOut(closure_0(closure_2[10]).Easing.ease);
                                num2 = 0.7;
                                flag = true;
                                num3 = -1;
                                result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
                                fn = () => {
                                  const obj = vibegrationsControlPhase(closure_2[10]);
                                  return obj.cancelAnimation(sharedValue1);
                                };
                              }
                              return fn;
                            }
                            obj2 = closure_0(closure_2[10]);
                            cancelAnimationResult = obj2.cancelAnimation(closure_4);
                            result2 = closure_4.set(0.5);
                            return;
                          }
                        }
                        tmp43 = closure_6(Text, obj6);
                      }
                      class F {
                        constructor() {
                          let items;
                          const obj = { transform: items };
                          items = [{ translateY: sharedValue.get() }];
                          ({ translateY: sharedValue.get() });
                          return obj;
                        }
                      }
                      class C {
                        constructor() {
                          tmp = closure_2;
                          if (tmp) {
                            tmp2 = closure_1;
                            if (!tmp2) {
                              tmp3 = closure_4;
                              num = 0.2;
                              result = closure_4.set(0.2);
                              tmp5 = closure_0;
                              tmp6 = closure_2;
                              set = closure_4.set;
                              tmp7 = closure_0(closure_2[10]);
                              tmp8 = closure_0;
                              tmp9 = closure_2;
                              withRepeat = tmp7.withRepeat;
                              tmp10 = closure_0(closure_2[13]);
                              obj = { duration: 1200, easing: null };
                              tmp11 = closure_0;
                              tmp12 = closure_2;
                              withTiming = tmp10.withTiming;
                              Easing = closure_0(closure_2[10]).Easing;
                              tmp13 = closure_0;
                              tmp14 = closure_2;
                              obj.easing = Easing.inOut(closure_0(closure_2[10]).Easing.ease);
                              num2 = 0.7;
                              flag = true;
                              num3 = -1;
                              result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
                              fn = () => {
                                const obj = vibegrationsControlPhase(closure_2[10]);
                                return obj.cancelAnimation(sharedValue1);
                              };
                            }
                            return fn;
                          }
                          obj2 = closure_0(closure_2[10]);
                          cancelAnimationResult = obj2.cancelAnimation(closure_4);
                          result2 = closure_4.set(0.5);
                          return;
                        }
                      }
                      cResult[28] = tmp43;
                      tmp42 = tmp43;
                    } else {
                      tmp42 = cResult[28];
                    }
                    if (cResult[29] === tmp4.copy) {
                      if (cResult[30] === tmp39) {
                        let tmp45;
                        if (cResult[31] === tmp42) {
                          tmp45 = cResult[32];
                        }
                        if (cResult[33] === tmp4.status) {
                          if (cResult[34] === tmp33) {
                            let tmp50;
                            if (cResult[35] === tmp45) {
                              tmp50 = cResult[36];
                            }
                            if (cResult[37] === "controlling" === vibegrationsControlPhase) {
                              if (cResult[38] === onOpenPublishedApp) {
                                if (cResult[39] === stop) {
                                  if (cResult[40] === stopping) {
                                    let tmp54;
                                    if (cResult[41] === tmp4.actions) {
                                      tmp54 = cResult[42];
                                    }
                                    if (cResult[43] === tmp50) {
                                      if (cResult[44] === tmp54) {
                                        let tmp57;
                                        if (cResult[45] === tmp31) {
                                          tmp57 = cResult[46];
                                        }
                                        if (cResult[47] === tmp4.barArea) {
                                          let tmp61;
                                          if (cResult[48] === tmp57) {
                                            tmp61 = cResult[49];
                                          }
                                          if (cResult[50] === tmp61) {
                                            let tmp65;
                                            if (cResult[51] === tmp25) {
                                              tmp65 = cResult[52];
                                            }
                                            return tmp65;
                                          }
                                          class F {
                                            constructor() {
                                              let items;
                                              const obj = { transform: items };
                                              items = [{ translateY: sharedValue.get() }];
                                              ({ translateY: sharedValue.get() });
                                              return obj;
                                            }
                                          }
                                          class C {
                                            constructor() {
                                              tmp = closure_2;
                                              if (tmp) {
                                                tmp2 = closure_1;
                                                if (!tmp2) {
                                                  tmp3 = closure_4;
                                                  num = 0.2;
                                                  result = closure_4.set(0.2);
                                                  tmp5 = closure_0;
                                                  tmp6 = closure_2;
                                                  set = closure_4.set;
                                                  tmp7 = closure_0(closure_2[10]);
                                                  tmp8 = closure_0;
                                                  tmp9 = closure_2;
                                                  withRepeat = tmp7.withRepeat;
                                                  tmp10 = closure_0(closure_2[13]);
                                                  obj = { duration: 1200, easing: null };
                                                  tmp11 = closure_0;
                                                  tmp12 = closure_2;
                                                  withTiming = tmp10.withTiming;
                                                  Easing = closure_0(closure_2[10]).Easing;
                                                  tmp13 = closure_0;
                                                  tmp14 = closure_2;
                                                  obj.easing = Easing.inOut(closure_0(closure_2[10]).Easing.ease);
                                                  num2 = 0.7;
                                                  flag = true;
                                                  num3 = -1;
                                                  result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
                                                  fn = () => {
                                                    const obj = vibegrationsControlPhase(closure_2[10]);
                                                    return obj.cancelAnimation(sharedValue1);
                                                  };
                                                }
                                                return fn;
                                              }
                                              obj2 = closure_0(closure_2[10]);
                                              cancelAnimationResult = obj2.cancelAnimation(closure_4);
                                              result2 = closure_4.set(0.5);
                                              return;
                                            }
                                          }
                                          const items1 = [tmp25, tmp61];
                                          tmp67[0] = items1;
                                          const tmp68 = closure_8(closure_7, tmp67);
                                          cResult[50] = tmp61;
                                          class G {
                                            constructor() {
                                              const obj = { opacity: sharedValue1.get() };
                                              return obj;
                                            }
                                          }
                                          cResult[52] = tmp68;
                                          tmp65 = tmp68;
                                        }
                                        class F {
                                          constructor() {
                                            let items;
                                            const obj = { transform: items };
                                            items = [{ translateY: sharedValue.get() }];
                                            ({ translateY: sharedValue.get() });
                                            return obj;
                                          }
                                        }
                                        class C {
                                          constructor() {
                                            tmp = closure_2;
                                            if (tmp) {
                                              tmp2 = closure_1;
                                              if (!tmp2) {
                                                tmp3 = closure_4;
                                                num = 0.2;
                                                result = closure_4.set(0.2);
                                                tmp5 = closure_0;
                                                tmp6 = closure_2;
                                                set = closure_4.set;
                                                tmp7 = closure_0(closure_2[10]);
                                                tmp8 = closure_0;
                                                tmp9 = closure_2;
                                                withRepeat = tmp7.withRepeat;
                                                tmp10 = closure_0(closure_2[13]);
                                                obj = { duration: 1200, easing: null };
                                                tmp11 = closure_0;
                                                tmp12 = closure_2;
                                                withTiming = tmp10.withTiming;
                                                Easing = closure_0(closure_2[10]).Easing;
                                                tmp13 = closure_0;
                                                tmp14 = closure_2;
                                                obj.easing = Easing.inOut(closure_0(closure_2[10]).Easing.ease);
                                                num2 = 0.7;
                                                flag = true;
                                                num3 = -1;
                                                result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
                                                fn = () => {
                                                  const obj = vibegrationsControlPhase(closure_2[10]);
                                                  return obj.cancelAnimation(sharedValue1);
                                                };
                                              }
                                              return fn;
                                            }
                                            obj2 = closure_0(closure_2[10]);
                                            cancelAnimationResult = obj2.cancelAnimation(closure_4);
                                            result2 = closure_4.set(0.5);
                                            return;
                                          }
                                        }
                                        tmp63[0] = tmp30;
                                        tmp63[2] = tmp57;
                                        cResult[47] = tmp4.barArea;
                                        cResult[48] = tmp57;
                                        const tmp64 = closure_6(sharedValue1, tmp63);
                                        class G {
                                          constructor() {
                                            const obj = { opacity: sharedValue1.get() };
                                            return obj;
                                          }
                                        }
                                        tmp61 = tmp64;
                                      }
                                    }
                                    class F {
                                      constructor() {
                                        let items;
                                        const obj = { transform: items };
                                        items = [{ translateY: sharedValue.get() }];
                                        ({ translateY: sharedValue.get() });
                                        return obj;
                                      }
                                    }
                                    class C {
                                      constructor() {
                                        tmp = closure_2;
                                        if (tmp) {
                                          tmp2 = closure_1;
                                          if (!tmp2) {
                                            tmp3 = closure_4;
                                            num = 0.2;
                                            result = closure_4.set(0.2);
                                            tmp5 = closure_0;
                                            tmp6 = closure_2;
                                            set = closure_4.set;
                                            tmp7 = closure_0(closure_2[10]);
                                            tmp8 = closure_0;
                                            tmp9 = closure_2;
                                            withRepeat = tmp7.withRepeat;
                                            tmp10 = closure_0(closure_2[13]);
                                            obj = { duration: 1200, easing: null };
                                            tmp11 = closure_0;
                                            tmp12 = closure_2;
                                            withTiming = tmp10.withTiming;
                                            Easing = closure_0(closure_2[10]).Easing;
                                            tmp13 = closure_0;
                                            tmp14 = closure_2;
                                            obj.easing = Easing.inOut(closure_0(closure_2[10]).Easing.ease);
                                            num2 = 0.7;
                                            flag = true;
                                            num3 = -1;
                                            result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
                                            fn = () => {
                                              const obj = vibegrationsControlPhase(closure_2[10]);
                                              return obj.cancelAnimation(sharedValue1);
                                            };
                                          }
                                          return fn;
                                        }
                                        obj2 = closure_0(closure_2[10]);
                                        cancelAnimationResult = obj2.cancelAnimation(closure_4);
                                        result2 = closure_4.set(0.5);
                                        return;
                                      }
                                    }
                                    tmp59[0] = tmp31;
                                    const items2 = [tmp50, tmp54];
                                    tmp59[2] = items2;
                                    const tmp60 = closure_8(stateFromStores(4570).View, tmp59);
                                    cResult[43] = tmp50;
                                    class G {
                                      constructor() {
                                        const obj = { opacity: sharedValue1.get() };
                                        return obj;
                                      }
                                    }
                                    cResult[44] = tmp54;
                                    cResult[45] = tmp31;
                                    cResult[46] = tmp60;
                                    tmp57 = tmp60;
                                  }
                                }
                              }
                            }
                            class F {
                              constructor() {
                                let items;
                                const obj = { transform: items };
                                items = [{ translateY: sharedValue.get() }];
                                ({ translateY: sharedValue.get() });
                                return obj;
                              }
                            }
                            class C {
                              constructor() {
                                tmp = closure_2;
                                if (tmp) {
                                  tmp2 = closure_1;
                                  if (!tmp2) {
                                    tmp3 = closure_4;
                                    num = 0.2;
                                    result = closure_4.set(0.2);
                                    tmp5 = closure_0;
                                    tmp6 = closure_2;
                                    set = closure_4.set;
                                    tmp7 = closure_0(closure_2[10]);
                                    tmp8 = closure_0;
                                    tmp9 = closure_2;
                                    withRepeat = tmp7.withRepeat;
                                    tmp10 = closure_0(closure_2[13]);
                                    obj = { duration: 1200, easing: null };
                                    tmp11 = closure_0;
                                    tmp12 = closure_2;
                                    withTiming = tmp10.withTiming;
                                    Easing = closure_0(closure_2[10]).Easing;
                                    tmp13 = closure_0;
                                    tmp14 = closure_2;
                                    obj.easing = Easing.inOut(closure_0(closure_2[10]).Easing.ease);
                                    num2 = 0.7;
                                    flag = true;
                                    num3 = -1;
                                    result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
                                    fn = () => {
                                      const obj = vibegrationsControlPhase(closure_2[10]);
                                      return obj.cancelAnimation(sharedValue1);
                                    };
                                  }
                                  return fn;
                                }
                                obj2 = closure_0(closure_2[10]);
                                cancelAnimationResult = obj2.cancelAnimation(closure_4);
                                result2 = closure_4.set(0.5);
                                return;
                              }
                            }
                            cResult[37] = "controlling" === vibegrationsControlPhase;
                            cResult[38] = onOpenPublishedApp;
                            cResult[39] = stop;
                            cResult[40] = stopping;
                            class G {
                              constructor() {
                                const obj = { opacity: sharedValue1.get() };
                                return obj;
                              }
                            }
                            cResult[41] = tmp4.actions;
                            cResult[42] = tmp56;
                            tmp54 = tmp56;
                          }
                        }
                        class F {
                          constructor() {
                            let items;
                            const obj = { transform: items };
                            items = [{ translateY: sharedValue.get() }];
                            ({ translateY: sharedValue.get() });
                            return obj;
                          }
                        }
                        class C {
                          constructor() {
                            tmp = closure_2;
                            if (tmp) {
                              tmp2 = closure_1;
                              if (!tmp2) {
                                tmp3 = closure_4;
                                num = 0.2;
                                result = closure_4.set(0.2);
                                tmp5 = closure_0;
                                tmp6 = closure_2;
                                set = closure_4.set;
                                tmp7 = closure_0(closure_2[10]);
                                tmp8 = closure_0;
                                tmp9 = closure_2;
                                withRepeat = tmp7.withRepeat;
                                tmp10 = closure_0(closure_2[13]);
                                obj = { duration: 1200, easing: null };
                                tmp11 = closure_0;
                                tmp12 = closure_2;
                                withTiming = tmp10.withTiming;
                                Easing = closure_0(closure_2[10]).Easing;
                                tmp13 = closure_0;
                                tmp14 = closure_2;
                                obj.easing = Easing.inOut(closure_0(closure_2[10]).Easing.ease);
                                num2 = 0.7;
                                flag = true;
                                num3 = -1;
                                result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
                                fn = () => {
                                  const obj = vibegrationsControlPhase(closure_2[10]);
                                  return obj.cancelAnimation(sharedValue1);
                                };
                              }
                              return fn;
                            }
                            obj2 = closure_0(closure_2[10]);
                            cancelAnimationResult = obj2.cancelAnimation(closure_4);
                            result2 = closure_4.set(0.5);
                            return;
                          }
                        }
                        tmp52[0] = status;
                        const items3 = [tmp32, tmp33, tmp45];
                        tmp52[1] = items3;
                        const tmp53 = closure_8(sharedValue1, tmp52);
                        class G {
                          constructor() {
                            const obj = { opacity: sharedValue1.get() };
                            return obj;
                          }
                        }
                        cResult[34] = tmp33;
                        cResult[35] = tmp45;
                        cResult[36] = tmp53;
                        tmp50 = tmp53;
                      }
                    }
                    class G {
                      constructor() {
                        const obj = { opacity: sharedValue1.get() };
                        return obj;
                      }
                    }
                    tmp48[0] = copy;
                    const items4 = [tmp39, tmp42];
                    tmp48[1] = items4;
                    const tmp49 = closure_8(sharedValue1, tmp48);
                    cResult[29] = tmp4.copy;
                    cResult[30] = tmp39;
                    cResult[31] = tmp42;
                    cResult[32] = tmp49;
                    tmp45 = tmp49;
                  }
                  const items5 = [, ];
                  class F {
                    constructor() {
                      let items;
                      const obj = { transform: items };
                      items = [{ translateY: sharedValue.get() }];
                      ({ translateY: sharedValue.get() });
                      return obj;
                    }
                  }
                  class C {
                    constructor() {
                      tmp = closure_2;
                      if (tmp) {
                        tmp2 = closure_1;
                        if (!tmp2) {
                          tmp3 = closure_4;
                          num = 0.2;
                          result = closure_4.set(0.2);
                          tmp5 = closure_0;
                          tmp6 = closure_2;
                          set = closure_4.set;
                          tmp7 = closure_0(closure_2[10]);
                          tmp8 = closure_0;
                          tmp9 = closure_2;
                          withRepeat = tmp7.withRepeat;
                          tmp10 = closure_0(closure_2[13]);
                          obj = { duration: 1200, easing: null };
                          tmp11 = closure_0;
                          tmp12 = closure_2;
                          withTiming = tmp10.withTiming;
                          Easing = closure_0(closure_2[10]).Easing;
                          tmp13 = closure_0;
                          tmp14 = closure_2;
                          obj.easing = Easing.inOut(closure_0(closure_2[10]).Easing.ease);
                          num2 = 0.7;
                          flag = true;
                          num3 = -1;
                          result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
                          fn = () => {
                            const obj = vibegrationsControlPhase(closure_2[10]);
                            return obj.cancelAnimation(sharedValue1);
                          };
                        }
                        return fn;
                      }
                      obj2 = closure_0(closure_2[10]);
                      cancelAnimationResult = obj2.cancelAnimation(closure_4);
                      result2 = closure_4.set(0.5);
                      return;
                    }
                  }
                  cResult[17] = animatedStyle;
                  cResult[18] = tmp4.bar;
                  cResult[19] = items5;
                  tmp31 = items5;
                }
              }
            }
          }
          let tmp26 = null;
          if ("controlling" === vibegrationsControlPhase) {
            const obj8 = { children: items6 };
            class F {
              constructor() {
                let items;
                const obj = { transform: items };
                items = [{ translateY: sharedValue.get() }];
                ({ translateY: sharedValue.get() });
                return obj;
              }
            }
            class C {
              constructor() {
                tmp = closure_2;
                if (tmp) {
                  tmp2 = closure_1;
                  if (!tmp2) {
                    tmp3 = closure_4;
                    num = 0.2;
                    result = closure_4.set(0.2);
                    tmp5 = closure_0;
                    tmp6 = closure_2;
                    set = closure_4.set;
                    tmp7 = closure_0(closure_2[10]);
                    tmp8 = closure_0;
                    tmp9 = closure_2;
                    withRepeat = tmp7.withRepeat;
                    tmp10 = closure_0(closure_2[13]);
                    obj = { duration: 1200, easing: null };
                    tmp11 = closure_0;
                    tmp12 = closure_2;
                    withTiming = tmp10.withTiming;
                    Easing = closure_0(closure_2[10]).Easing;
                    tmp13 = closure_0;
                    tmp14 = closure_2;
                    obj.easing = Easing.inOut(closure_0(closure_2[10]).Easing.ease);
                    num2 = 0.7;
                    flag = true;
                    num3 = -1;
                    result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
                    fn = () => {
                      const obj = vibegrationsControlPhase(closure_2[10]);
                      return obj.cancelAnimation(sharedValue1);
                    };
                  }
                  return fn;
                }
                obj2 = closure_0(closure_2[10]);
                cancelAnimationResult = obj2.cancelAnimation(closure_4);
                result2 = closure_4.set(0.5);
                return;
              }
            }
            const obj9 = { style: tmp4.block, pointerEvents: "box-only" };
            items6 = [closure_6(sharedValue1, obj9), , ];
            const obj10 = { style: items7, pointerEvents: "none" };
            items7 = [tmp4.glow, ];
            class G {
              constructor() {
                const obj = { opacity: sharedValue1.get() };
                return obj;
              }
            }
            items6[1] = closure_6(stateFromStores(4570).View, obj10);
            const obj11 = { style: tmp4.border, pointerEvents: "none" };
            items6[2] = closure_6(sharedValue1, obj11);
            tmp26 = closure_8(closure_7, obj8);
          }
          class F {
            constructor() {
              let items;
              const obj = { transform: items };
              items = [{ translateY: sharedValue.get() }];
              ({ translateY: sharedValue.get() });
              return obj;
            }
          }
          class C {
            constructor() {
              tmp = closure_2;
              if (tmp) {
                tmp2 = closure_1;
                if (!tmp2) {
                  tmp3 = closure_4;
                  num = 0.2;
                  result = closure_4.set(0.2);
                  tmp5 = closure_0;
                  tmp6 = closure_2;
                  set = closure_4.set;
                  tmp7 = closure_0(closure_2[10]);
                  tmp8 = closure_0;
                  tmp9 = closure_2;
                  withRepeat = tmp7.withRepeat;
                  tmp10 = closure_0(closure_2[13]);
                  obj = { duration: 1200, easing: null };
                  tmp11 = closure_0;
                  tmp12 = closure_2;
                  withTiming = tmp10.withTiming;
                  Easing = closure_0(closure_2[10]).Easing;
                  tmp13 = closure_0;
                  tmp14 = closure_2;
                  obj.easing = Easing.inOut(closure_0(closure_2[10]).Easing.ease);
                  num2 = 0.7;
                  flag = true;
                  num3 = -1;
                  result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
                  fn = () => {
                    const obj = vibegrationsControlPhase(closure_2[10]);
                    return obj.cancelAnimation(sharedValue1);
                  };
                }
                return fn;
              }
              obj2 = closure_0(closure_2[10]);
              cancelAnimationResult = obj2.cancelAnimation(closure_4);
              result2 = closure_4.set(0.5);
              return;
            }
          }
          cResult[12] = animatedStyle1;
          cResult[13] = tmp4.block;
          cResult[14] = tmp4.border;
          cResult[15] = tmp4.glow;
          class G {
            constructor() {
              const obj = { opacity: sharedValue1.get() };
              return obj;
            }
          }
          cResult[16] = tmp26;
          tmp25 = tmp26;
        }
      }
    }
    class C {
      constructor() {
        tmp = closure_2;
        if (tmp) {
          tmp2 = closure_1;
          if (!tmp2) {
            tmp3 = closure_4;
            num = 0.2;
            result = closure_4.set(0.2);
            tmp5 = closure_0;
            tmp6 = closure_2;
            set = closure_4.set;
            tmp7 = closure_0(closure_2[10]);
            tmp8 = closure_0;
            tmp9 = closure_2;
            withRepeat = tmp7.withRepeat;
            tmp10 = closure_0(closure_2[13]);
            obj = { duration: 1200, easing: null };
            tmp11 = closure_0;
            tmp12 = closure_2;
            withTiming = tmp10.withTiming;
            Easing = closure_0(closure_2[10]).Easing;
            tmp13 = closure_0;
            tmp14 = closure_2;
            obj.easing = Easing.inOut(closure_0(closure_2[10]).Easing.ease);
            num2 = 0.7;
            flag = true;
            num3 = -1;
            result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
            fn = () => {
              const obj = vibegrationsControlPhase(closure_2[10]);
              return obj.cancelAnimation(sharedValue1);
            };
          }
          return fn;
        }
        obj2 = closure_0(closure_2[10]);
        cancelAnimationResult = obj2.cancelAnimation(closure_4);
        result2 = closure_4.set(0.5);
        return;
      }
    }
    const items8 = [tmp11, sharedValue1, stateFromStores];
    cResult[6] = "controlling" === vibegrationsControlPhase;
    cResult[7] = sharedValue1;
    cResult[8] = stateFromStores;
    cResult[9] = C;
    cResult[10] = items8;
    tmp18 = items8;
    tmp17 = C;
  }
  class V {
    constructor() {
      let Easing;
      if ("controlling" === vibegrationsControlPhase) {
        set2 = sharedValue.set;
        const obj2 = spring;
        set2(obj2.withSpring(0, springPresets.SUBTLE_SPRING));
      } else if ("handoff" === tmp) {
        set = sharedValue.set;
        const withDelay = ReanimatedRexport.withDelay;
        ReanimatedRexport;
        const diff = useVibegrationsControlBar.VIBEGRATIONS_CONTROL_HANDOFF_MS - duration;
        const obj = { duration, easing: Easing.in(ReanimatedRexport.Easing.ease) };
        const withTiming = timing.withTiming;
        timing;
        Easing = ReanimatedRexport.Easing;
        const result = set(withDelay(diff, withTiming(c10, obj)));
      } else {
        const result1 = sharedValue.set(c10);
      }
    }
  }
  const items9 = [sharedValue, vibegrationsControlPhase];
  cResult[2] = sharedValue;
  cResult[3] = vibegrationsControlPhase;
  cResult[4] = V;
  cResult[5] = items9;
  tmp15 = items9;
  tmp14 = V;
}) : ((onOpenPublishedApp) => {
  let View;
  let active;
  let closure_2;
  let intl2;
  let intl3;
  let intl4;
  let items10;
  let items3;
  let items4;
  let items6;
  let items7;
  let items8;
  let obj12;
  let projectId;
  let stop;
  let stopping;
  let useReducedMotion;
  onOpenPublishedApp = onOpenPublishedApp.onOpenPublishedApp;
  let vibegrationsControlPhase;
  ({ projectId, active } = onOpenPublishedApp);
  let tmp = closure_11();
  let tmp2 = vibegrationsControlPhase;
  let obj = vibegrationsControlPhase(16291);
  vibegrationsControlPhase = obj.useVibegrationsControlPhase(active);
  let obj2 = vibegrationsControlPhase(16291);
  const vibegrationsControlStop = obj2.useVibegrationsControlStop(projectId);
  ({ stop, stopping } = vibegrationsControlStop);
  let items = [AccessibilityStore];
  const obj3 = vibegrationsControlPhase(504);
  const stateFromStores = obj3.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp7 = "controlling" === vibegrationsControlPhase;
  dependencyMap = tmp7;
  const obj4 = vibegrationsControlPhase(4570);
  const sharedValue = obj4.useSharedValue(c10);
  const obj5 = vibegrationsControlPhase(4570);
  const sharedValue1 = obj5.useSharedValue(0.5);
  const items1 = [sharedValue, vibegrationsControlPhase];
  const effect = sharedValue.useEffect(() => {
    let Easing;
    if ("controlling" === vibegrationsControlPhase) {
      set2 = sharedValue.set;
      const obj2 = spring;
      set2(obj2.withSpring(0, springPresets.SUBTLE_SPRING));
    } else if ("handoff" === tmp) {
      set = sharedValue.set;
      const withDelay = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const diff = useVibegrationsControlBar.VIBEGRATIONS_CONTROL_HANDOFF_MS - duration;
      const obj = { duration, easing: Easing.in(ReanimatedRexport.Easing.ease) };
      const withTiming = timing.withTiming;
      timing;
      Easing = ReanimatedRexport.Easing;
      const result = set(withDelay(diff, withTiming(c10, obj)));
    } else {
      const result1 = sharedValue.set(c10);
    }
  }, items1);
  const items2 = [tmp7, sharedValue1, stateFromStores];
  const effect1 = sharedValue.useEffect(() => {
    let Easing;
    const tmp = closure_2;
    if (tmp) {
      let fn;
      const tmp2 = stateFromStores;
      if (!tmp2) {
        const result = sharedValue1.set(0.2);
        set = sharedValue1.set;
        const withRepeat = ReanimatedRexport.withRepeat;
        ReanimatedRexport;
        let obj = { duration: 1200, easing: Easing.inOut(ReanimatedRexport.Easing.ease) };
        const withTiming = timing.withTiming;
        timing;
        Easing = ReanimatedRexport.Easing;
        const result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
        fn = () => {
          const obj = vibegrationsControlPhase(closure_2[10]);
          return obj.cancelAnimation(sharedValue1);
        };
      }
      return fn;
    }
    const obj2 = ReanimatedRexport;
    obj2.cancelAnimation(sharedValue1);
    const result2 = sharedValue1.set(0.5);
  }, items2);
  const obj6 = vibegrationsControlPhase(4570);
  class V {
    constructor() {
      let items;
      const obj = { transform: items };
      items = [{ translateY: sharedValue.get() }];
      ({ translateY: sharedValue.get() });
      return obj;
    }
  }
  V.__closure = { barOffset: sharedValue };
  V.__workletHash = 15853514192304;
  V.__initData = __initData3;
  const animatedStyle = obj6.useAnimatedStyle(V);
  vibegrationsControlPhase(4570);
  class R {
    constructor() {
      const obj = { opacity: sharedValue1.get() };
      return obj;
    }
  }
  R.__closure = { pulse: sharedValue1 };
  R.__workletHash = 6305914726055;
  R.__initData = __initData4;
  let tmp29Result4 = null;
  if ("idle" !== vibegrationsControlPhase) {
    let tmp29Result = null;
    if (tmp7) {
      const obj7 = { children: items3 };
      const obj8 = { style: tmp.block, pointerEvents: "box-only" };
      items3 = [closure_6(sharedValue1, obj8), , ];
      const obj9 = { style: items4, pointerEvents: "none" };
      items4 = [tmp.glow, tmp14];
      items3[1] = closure_6(stateFromStores(4570).View, obj9);
      const obj10 = { style: tmp.border, pointerEvents: "none" };
      items3[2] = closure_6(sharedValue1, obj10);
      tmp29Result = tmp29(tmp30, obj7);
    }
    const items5 = [tmp29Result, ];
    const obj11 = { style: tmp.barArea, pointerEvents: "box-none", children: closure_8(View, obj12) };
    obj12 = { style: items6, accessibilityLiveRegion: "polite", children: null };
    items6 = [tmp.bar, animatedStyle];
    const obj13 = { style: tmp.status, children: items7 };
    View = stateFromStores(4570).View;
    const obj14 = { size: "sm", color: stateFromStores(588).colors.TEXT_OVERLAY_LIGHT };
    const SparklesIcon = tmp2(16292).SparklesIcon;
    items7 = [closure_6(SparklesIcon, obj14), , ];
    let tmp20Result = null;
    if (tmp7) {
      tmp20Result = tmp20(tmp2(13937).AILoader, { size: 12, color: "text-overlay-light" });
    }
    items7[1] = tmp20Result;
    const obj15 = { style: tmp.copy, children: items8 };
    const Text = tmp2(4833).Text;
    const intl = tmp2(1127).intl;
    const string = intl.string;
    const tmp22Result = stateFromStores(3718);
    const obj16 = { variant: "text-sm/semibold", color: "text-overlay-light", children: string(tmp7 ? tmp22Result.ydhvN1 : tmp22Result["7U6tIB"]) };
    items8 = [tmp20(Text, obj16), ];
    let tmp20Result4 = null;
    if (tmp7) {
      const obj17 = { variant: "text-xs/medium", color: "text-overlay-light", children: intl2.string(stateFromStores(3718).NldIIG) };
      const Text2 = tmp2(4833).Text;
      intl2 = tmp2(1127).intl;
      tmp20Result4 = tmp20(Text2, obj17);
    }
    items8[1] = tmp20Result4;
    items7[2] = closure_8(sharedValue1, obj15);
    const items9 = [closure_8(sharedValue1, obj13), ];
    let tmp29Result3 = null;
    if (tmp7) {
      let tmp20Result5 = null;
      const obj18 = { style: tmp.actions, children: items10 };
      if (null != onOpenPublishedApp) {
        const obj19 = { variant: "secondary-overlay", size: "sm", text: intl3.string(stateFromStores(3718).kj5epw), onPress: onOpenPublishedApp };
        const Button = tmp2(5282).Button;
        intl3 = tmp2(1127).intl;
        tmp20Result5 = tmp20(Button, obj19);
      }
      items10 = [tmp20Result5, ];
      let tmp20Result6 = null;
      if (null != stop) {
        const obj20 = { variant: "primary-overlay", size: "sm", text: intl4.string(stateFromStores(3718)["2HalWx"]), loading: stopping, onPress: stop };
        const Button2 = tmp2(5282).Button;
        intl4 = tmp2(1127).intl;
        tmp20Result6 = tmp20(Button2, obj20);
      }
      items10[1] = tmp20Result6;
      tmp29Result3 = tmp29(tmp21, obj18);
    }
    const obj21 = { children: items5 };
    items9[1] = tmp29Result3;
    class V {
      constructor() {
        let items;
        const obj = { transform: items };
        items = [{ translateY: sharedValue.get() }];
        ({ translateY: sharedValue.get() });
        return obj;
      }
    }
    items5[1] = closure_6(sharedValue1, obj11);
    tmp29Result4 = tmp29(tmp30, obj21);
  }
  return tmp29Result4;
});
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeControlOverlay.tsx");

export default tmp9;
