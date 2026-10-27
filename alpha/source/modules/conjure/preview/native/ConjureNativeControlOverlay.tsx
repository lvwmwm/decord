// Module ID: 11788
// Function ID: 11789
// Name: ConjureNativeControlOverlay
// Dependencies: [19, 17, 4973, 21, 4972, 587, 558, 576, 11789, 10765, 504, 5053, 5248, 5249, 5207, 1125, 3831, 11790, 11794, 5235, 5245, 2]

// Module 11788 (ConjureNativeControlOverlay)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5053 */;
import timing from "timing" /* 5207 */;
import spring from "spring" /* 5248 */;
import springPresets from "springPresets" /* 5249 */;
import useConjureControlBar from "useConjureControlBar" /* 11789 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4973 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4972 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let cancelAnimationResult, dependencyMap, flag, num, num2, set, set2, tmp11, tmp13, tmp14, tmp3, tmp5, tmp6, tmp7;

let StyleSheet;
let closure_4;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let rect;
({ StyleSheet, View: closure_4 } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let c9 = 280;
let createStyles = createStyles_mod;
let obj = { root: { flex: 1 }, content: { flex: 1 }, block: obj2, border: obj3, glow: obj4, barArea: { overflow: "hidden" }, bar: rect, title: { flexGrow: 1, flexShrink: 1 }, actions: obj5 };
obj2 = {};
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { borderWidth: nativeDefault.space.PX_8, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
rect = { position: "absolute", top: 0, left: 0, right: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
const __initData = { code: "function ConjureNativeControlOverlayTsx1(){const{shown,barHeight}=this.__closure;return{height:Math.max(0,shown.get())*barHeight.get()};}" };
const __initData2 = { code: "function ConjureNativeControlOverlayTsx2(){const{shown,barHeight}=this.__closure;return{transform:[{translateY:(shown.get()-1)*barHeight.get()}]};}" };
const __initData3 = { code: "function ConjureNativeControlOverlayTsx3(){const{pulse}=this.__closure;return{opacity:pulse.get()};}" };
const __initData4 = { code: "function ConjureNativeControlOverlayTsx4(){const{shown,barHeight}=this.__closure;return{height:Math.max(0,shown.get())*barHeight.get()};}" };
const __initData5 = { code: "function ConjureNativeControlOverlayTsx5(){const{shown,barHeight}=this.__closure;return{transform:[{translateY:(shown.get()-1)*barHeight.get()}]};}" };
const __initData6 = { code: "function ConjureNativeControlOverlayTsx6(){const{pulse}=this.__closure;return{opacity:pulse.get()};}" };
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNativeControlOverlay(active) {
  let Button;
  let View2;
  let children;
  let closure_2;
  let combined;
  let conjureControlPhase;
  let items1;
  let items2;
  let obj10;
  let projectId;
  let sharedValue2;
  let stop;
  let stopping;
  let tmp8;
  let tmp9;
  let visible;
  let tmp = conjureControlPhase;
  let tmp2 = dependencyMap;
  let obj = conjureControlPhase(576);
  const cResult = obj.c(46);
  ({ projectId, visible, children } = active);
  active = active.active;
  const tmp4 = closure_10();
  let obj2 = conjureControlPhase(11789);
  conjureControlPhase = obj2.useConjureControlPhase(active);
  const obj3 = conjureControlPhase(11789);
  const conjureControlStop = obj3.useConjureControlStop(projectId);
  ({ stop, stopping } = conjureControlStop);
  const obj4 = conjureControlPhase(10765);
  const conjureControlTuning = obj4.useConjureControlTuning(projectId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp10 = sharedValue2;
    let items = [sharedValue2];
    let fn = function c() {
      return sharedValue2.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp8 = items;
    tmp9 = fn;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
  let tmp12 = visible;
  if (tmp12) {
    tmp12 = "controlling" === conjureControlPhase;
  }
  dependencyMap = tmp12;
  const tmpResult7 = tmp(5053);
  const sharedValue = tmpResult7.useSharedValue(0);
  const tmpResult8 = tmp(5053);
  const sharedValue1 = tmpResult8.useSharedValue(0);
  if (cResult[2] === conjureControlPhase) {
    if (cResult[3] === stateFromStores) {
      let tmp15;
      let tmp16;
      if (cResult[4] === sharedValue1) {
        tmp15 = cResult[5];
        tmp16 = cResult[6];
      }
      const effect = sharedValue.useEffect(tmp15, tmp16);
      let num3 = 0.5;
      const tmpResult9 = tmp(5053);
      sharedValue2 = tmpResult9.useSharedValue(0.5);
      const obj8 = sharedValue;
      if (cResult[7] === tmp12) {
        if (cResult[8] === sharedValue2) {
          let tmp19;
          let tmp20;
          if (cResult[9] === stateFromStores) {
            tmp19 = cResult[10];
            tmp20 = cResult[11];
          }
          const effect1 = obj8.useEffect(tmp19, tmp20);
          const tmpResult10 = tmp(5053);
          class B {
            constructor() {
              let bound;
              const obj = { height: bound * sharedValue.get() };
              bound = Math.max(0, sharedValue1.get());
              return obj;
            }
          }
          const obj5 = { shown: sharedValue1, barHeight: sharedValue };
          B.__closure = obj5;
          class P {
            constructor() {
              tmp = closure_2;
              if (tmp) {
                tmp2 = closure_1;
                if (!tmp2) {
                  tmp3 = closure_5;
                  num = 0.2;
                  result = closure_5.set(0.2);
                  tmp5 = closure_0;
                  tmp6 = closure_2;
                  set = closure_5.set;
                  tmp7 = closure_0(closure_2[11]);
                  tmp8 = closure_0;
                  tmp9 = closure_2;
                  withRepeat = tmp7.withRepeat;
                  tmp10 = closure_0(closure_2[14]);
                  obj = { duration: 1200, easing: null };
                  tmp11 = closure_0;
                  tmp12 = closure_2;
                  withTiming = tmp10.withTiming;
                  Easing = closure_0(closure_2[11]).Easing;
                  tmp13 = closure_0;
                  tmp14 = closure_2;
                  obj.easing = Easing.inOut(closure_0(closure_2[11]).Easing.ease);
                  num2 = 0.7;
                  flag = true;
                  num3 = -1;
                  result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
                  fn = () => {
                    const obj = conjureControlPhase(closure_2[11]);
                    return obj.cancelAnimation(sharedValue2);
                  };
                }
                return fn;
              }
              obj2 = closure_0(closure_2[11]);
              cancelAnimationResult = obj2.cancelAnimation(closure_5);
              result2 = closure_5.set(0.5);
              return;
            }
          }
          B.__workletHash = 5735939888549;
          B.__initData = __initData;
          const animatedStyle = tmpResult10.useAnimatedStyle(B);
          const fn2 = function z() {
            let diff;
            let items;
            const obj = { transform: items };
            const obj2 = { translateY: diff * sharedValue.get() };
            diff = sharedValue1.get() - 1;
            items = [obj2];
            return obj;
          };
          const obj6 = { shown: sharedValue1, barHeight: sharedValue };
          fn2.__closure = obj6;
          fn2.__workletHash = 11424550793114;
          fn2.__initData = __initData2;
          const tmpResult11 = tmp(5053);
          const animatedStyle1 = tmpResult11.useAnimatedStyle(fn2);
          const tmpResult12 = tmp(5053);
          class M {
            constructor() {
              const obj = { opacity: sharedValue2.get() };
              return obj;
            }
          }
          const obj7 = { pulse: sharedValue2 };
          M.__closure = obj7;
          M.__workletHash = 3342596553897;
          M.__initData = __initData3;
          const animatedStyle2 = tmpResult12.useAnimatedStyle(M);
          if (visible) {
            visible = "idle" !== conjureControlPhase;
          }
          if (cResult[12] === tmp12) {
            let tmp28;
            if (cResult[13] === conjureControlTuning) {
              tmp28 = cResult[14];
            }
            class B {
              constructor() {
                let bound;
                const obj = { height: bound * sharedValue.get() };
                bound = Math.max(0, sharedValue1.get());
                return obj;
              }
            }
            let tmp37Result4 = null;
            if (visible) {
              let tmp37Result;
              const obj9 = { style: tmp39, children: tmp40(View2, obj10) };
              class B {
                constructor() {
                  let bound;
                  const obj = { height: bound * sharedValue.get() };
                  bound = Math.max(0, sharedValue1.get());
                  return obj;
                }
              }
              tmp39[0] = tmp4.barArea;
              tmp39[1] = animatedStyle;
              const View = stateFromStores(5053).View;
              class P {
                constructor() {
                  tmp = closure_2;
                  if (tmp) {
                    tmp2 = closure_1;
                    if (!tmp2) {
                      tmp3 = closure_5;
                      num = 0.2;
                      result = closure_5.set(0.2);
                      tmp5 = closure_0;
                      tmp6 = closure_2;
                      set = closure_5.set;
                      tmp7 = closure_0(closure_2[11]);
                      tmp8 = closure_0;
                      tmp9 = closure_2;
                      withRepeat = tmp7.withRepeat;
                      tmp10 = closure_0(closure_2[14]);
                      obj = { duration: 1200, easing: null };
                      tmp11 = closure_0;
                      tmp12 = closure_2;
                      withTiming = tmp10.withTiming;
                      Easing = closure_0(closure_2[11]).Easing;
                      tmp13 = closure_0;
                      tmp14 = closure_2;
                      obj.easing = Easing.inOut(closure_0(closure_2[11]).Easing.ease);
                      num2 = 0.7;
                      flag = true;
                      num3 = -1;
                      result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
                      fn = () => {
                        const obj = conjureControlPhase(closure_2[11]);
                        return obj.cancelAnimation(sharedValue2);
                      };
                    }
                    return fn;
                  }
                  obj2 = closure_0(closure_2[11]);
                  cancelAnimationResult = obj2.cancelAnimation(closure_5);
                  result2 = closure_5.set(0.5);
                  return;
                }
              }
              obj10 = {
                style: items1,
                onLayout(nativeEvent) {
                              return sharedValue.set(nativeEvent.nativeEvent.layout.height);
                            },
                accessibilityLiveRegion: "polite",
                children: items2
              };
              items1 = [tmp4.bar, animatedStyle1];
              View2 = stateFromStores(5053).View;
              if (tmp12) {
                tmp37Result = closure_6(tmp(11790).AILoader, { size: 12, color: "text-overlay-light" });
              } else {
                ({ size: "sm", color: stateFromStores(587).colors.TEXT_OVERLAY_LIGHT });
                const SparklesIcon = tmp(11794).SparklesIcon;
                class B {
                  constructor() {
                    let bound;
                    const obj = { height: bound * sharedValue.get() };
                    bound = Math.max(0, sharedValue1.get());
                    return obj;
                  }
                }
              }
              items2 = [tmp37Result, , ];
              const obj12 = { variant: "text-sm/semibold", color: "text-overlay-light", lineClamp: 1, style: tmp4.title, accessibilityLabel: combined, children: null };
              combined = tmp28;
              const Text = tmp(5235).Text;
              if (tmp12) {
                const intl = tmp(1125).intl;
                const string2 = intl.string;
                const _HermesInternal = HermesInternal;
                class B {
                  constructor() {
                    let bound;
                    const obj = { height: bound * sharedValue.get() };
                    bound = Math.max(0, sharedValue1.get());
                    return obj;
                  }
                }
                combined = "" + tmp28 + ". " + string2(tmp38(3831).fg1sor);
              }
              class M {
                constructor() {
                  const obj = { opacity: sharedValue2.get() };
                  return obj;
                }
              }
              items2[1] = closure_6(Text, obj12);
              let tmp37Result3 = null;
              if (tmp12 && null != stop) {
                const obj13 = { style: tmp4.actions, children: closure_6(Button, tmp45) };
                class B {
                  constructor() {
                    let bound;
                    const obj = { height: bound * sharedValue.get() };
                    bound = Math.max(0, sharedValue1.get());
                    return obj;
                  }
                }
                Button = tmp(5245).Button;
                const intl2 = tmp(1125).intl;
                tmp45[2] = intl2.string(stateFromStores(3831).oU59sU);
                class P {
                  constructor() {
                    tmp = closure_2;
                    if (tmp) {
                      tmp2 = closure_1;
                      if (!tmp2) {
                        tmp3 = closure_5;
                        num = 0.2;
                        result = closure_5.set(0.2);
                        tmp5 = closure_0;
                        tmp6 = closure_2;
                        set = closure_5.set;
                        tmp7 = closure_0(closure_2[11]);
                        tmp8 = closure_0;
                        tmp9 = closure_2;
                        withRepeat = tmp7.withRepeat;
                        tmp10 = closure_0(closure_2[14]);
                        obj = { duration: 1200, easing: null };
                        tmp11 = closure_0;
                        tmp12 = closure_2;
                        withTiming = tmp10.withTiming;
                        Easing = closure_0(closure_2[11]).Easing;
                        tmp13 = closure_0;
                        tmp14 = closure_2;
                        obj.easing = Easing.inOut(closure_0(closure_2[11]).Easing.ease);
                        num2 = 0.7;
                        flag = true;
                        num3 = -1;
                        result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
                        fn = () => {
                          const obj = conjureControlPhase(closure_2[11]);
                          return obj.cancelAnimation(sharedValue2);
                        };
                      }
                      return fn;
                    }
                    obj2 = closure_0(closure_2[11]);
                    cancelAnimationResult = obj2.cancelAnimation(closure_5);
                    result2 = closure_5.set(0.5);
                    return;
                  }
                }
                tmp45[4] = stop;
                tmp37Result3 = tmp37(sharedValue1, obj13);
              }
              items2[2] = tmp37Result3;
              tmp37Result4 = tmp37(View, obj9);
            }
            cResult[15] = animatedStyle;
            class P {
              constructor() {
                tmp = closure_2;
                if (tmp) {
                  tmp2 = closure_1;
                  if (!tmp2) {
                    tmp3 = closure_5;
                    num = 0.2;
                    result = closure_5.set(0.2);
                    tmp5 = closure_0;
                    tmp6 = closure_2;
                    set = closure_5.set;
                    tmp7 = closure_0(closure_2[11]);
                    tmp8 = closure_0;
                    tmp9 = closure_2;
                    withRepeat = tmp7.withRepeat;
                    tmp10 = closure_0(closure_2[14]);
                    obj = { duration: 1200, easing: null };
                    tmp11 = closure_0;
                    tmp12 = closure_2;
                    withTiming = tmp10.withTiming;
                    Easing = closure_0(closure_2[11]).Easing;
                    tmp13 = closure_0;
                    tmp14 = closure_2;
                    obj.easing = Easing.inOut(closure_0(closure_2[11]).Easing.ease);
                    num2 = 0.7;
                    flag = true;
                    num3 = -1;
                    result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
                    fn = () => {
                      const obj = conjureControlPhase(closure_2[11]);
                      return obj.cancelAnimation(sharedValue2);
                    };
                  }
                  return fn;
                }
                obj2 = closure_0(closure_2[11]);
                cancelAnimationResult = obj2.cancelAnimation(closure_5);
                result2 = closure_5.set(0.5);
                return;
              }
            }
            cResult[16] = sharedValue;
            cResult[17] = animatedStyle1;
            cResult[18] = tmp12;
            cResult[19] = visible;
            cResult[20] = tmp12 && null != stop;
            cResult[21] = stop;
            cResult[22] = stopping;
            cResult[23] = tmp4.actions;
            class M {
              constructor() {
                const obj = { opacity: sharedValue2.get() };
                return obj;
              }
            }
            cResult[25] = tmp4.barArea;
            cResult[26] = tmp4.title;
            cResult[27] = tmp28;
            cResult[28] = tmp37Result4;
          }
          const string = tmp(1125).intl.string;
          const tmp30 = stateFromStores(3831);
          if (tmp12) {
            let prop = conjureControlTuning ? tmp30["VJW/5P"] : tmp30["+hD2Iz"];
          } else {
            prop = tmp30["h+i1r9"];
          }
          class R {
            constructor() {
              let Easing;
              if ("controlling" === conjureControlPhase) {
                let num5 = 1;
                set2 = sharedValue1.set;
                if (!stateFromStores) {
                  const obj2 = spring;
                  num5 = obj2.withSpring(1, springPresets.SUBTLE_SPRING);
                }
                set2(num5);
              } else if ("handoff" === tmp) {
                set = sharedValue1.set;
                const withDelay = ReanimatedRexport.withDelay;
                ReanimatedRexport;
                const diff = useConjureControlBar.CONJURE_CONTROL_HANDOFF_MS - c9;
                let num3 = 0;
                const withTiming = timing.withTiming;
                timing;
                const tmp10 = c9;
                if (!stateFromStores) {
                  num3 = tmp10;
                }
                const obj = { duration: num3, easing: Easing.in(ReanimatedRexport.Easing.ease) };
                Easing = ReanimatedRexport.Easing;
                const result = set(withDelay(diff, withTiming(0, obj)));
              } else {
                const result1 = sharedValue1.set(0);
              }
            }
          }
          cResult[12] = tmp12;
          cResult[13] = conjureControlTuning;
          cResult[14] = tmp32;
          tmp28 = tmp32;
        }
      }
      class P {
        constructor() {
          tmp = closure_2;
          if (tmp) {
            tmp2 = closure_1;
            if (!tmp2) {
              tmp3 = closure_5;
              num = 0.2;
              result = closure_5.set(0.2);
              tmp5 = closure_0;
              tmp6 = closure_2;
              set = closure_5.set;
              tmp7 = closure_0(closure_2[11]);
              tmp8 = closure_0;
              tmp9 = closure_2;
              withRepeat = tmp7.withRepeat;
              tmp10 = closure_0(closure_2[14]);
              obj = { duration: 1200, easing: null };
              tmp11 = closure_0;
              tmp12 = closure_2;
              withTiming = tmp10.withTiming;
              Easing = closure_0(closure_2[11]).Easing;
              tmp13 = closure_0;
              tmp14 = closure_2;
              obj.easing = Easing.inOut(closure_0(closure_2[11]).Easing.ease);
              num2 = 0.7;
              flag = true;
              num3 = -1;
              result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
              fn = () => {
                const obj = conjureControlPhase(closure_2[11]);
                return obj.cancelAnimation(sharedValue2);
              };
            }
            return fn;
          }
          obj2 = closure_0(closure_2[11]);
          cancelAnimationResult = obj2.cancelAnimation(closure_5);
          result2 = closure_5.set(0.5);
          return;
        }
      }
      const items3 = [tmp12, sharedValue2, stateFromStores];
      cResult[7] = tmp12;
      let num5 = 8;
      cResult[8] = sharedValue2;
      cResult[9] = stateFromStores;
      cResult[10] = P;
      cResult[11] = items3;
      tmp20 = items3;
      tmp19 = P;
    }
  }
  class R {
    constructor() {
      let Easing;
      if ("controlling" === conjureControlPhase) {
        let num5 = 1;
        set2 = sharedValue1.set;
        if (!stateFromStores) {
          const obj2 = spring;
          num5 = obj2.withSpring(1, springPresets.SUBTLE_SPRING);
        }
        set2(num5);
      } else if ("handoff" === tmp) {
        set = sharedValue1.set;
        const withDelay = ReanimatedRexport.withDelay;
        ReanimatedRexport;
        const diff = useConjureControlBar.CONJURE_CONTROL_HANDOFF_MS - c9;
        let num3 = 0;
        const withTiming = timing.withTiming;
        timing;
        const tmp10 = c9;
        if (!stateFromStores) {
          num3 = tmp10;
        }
        const obj = { duration: num3, easing: Easing.in(ReanimatedRexport.Easing.ease) };
        Easing = ReanimatedRexport.Easing;
        const result = set(withDelay(diff, withTiming(0, obj)));
      } else {
        const result1 = sharedValue1.set(0);
      }
    }
  }
  const items4 = [sharedValue1, conjureControlPhase, stateFromStores];
  cResult[2] = conjureControlPhase;
  cResult[3] = stateFromStores;
  cResult[4] = sharedValue1;
  cResult[5] = R;
  cResult[6] = items4;
  tmp16 = items4;
  tmp15 = R;
}) : (function ConjureNativeControlOverlay(arg0) {
  let Button;
  let View2;
  let active;
  let children;
  let closure_2;
  let combined;
  let intl3;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj11;
  let obj7;
  let projectId;
  let prop1;
  let stop;
  let stopping;
  let tmp20;
  let visible;
  ({ projectId, visible } = arg0);
  let conjureControlPhase;
  dependencyMap = undefined;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  ({ active, children } = arg0);
  let tmp = closure_10();
  let tmp2 = conjureControlPhase;
  let obj = conjureControlPhase(11789);
  conjureControlPhase = obj.useConjureControlPhase(active);
  let obj2 = conjureControlPhase(11789);
  const conjureControlStop = obj2.useConjureControlStop(projectId);
  ({ stop, stopping } = conjureControlStop);
  const obj3 = conjureControlPhase(10765);
  const conjureControlTuning = obj3.useConjureControlTuning(projectId);
  let items = [sharedValue2];
  const obj4 = conjureControlPhase(504);
  const stateFromStores = obj4.useStateFromStores(items, () => sharedValue2.useReducedMotion);
  let tmp8 = visible;
  if (tmp8) {
    tmp8 = "controlling" === conjureControlPhase;
  }
  dependencyMap = tmp8;
  const tmp2Result = tmp2(5053);
  sharedValue = tmp2Result.useSharedValue(0);
  const tmp2Result6 = tmp2(5053);
  sharedValue1 = tmp2Result6.useSharedValue(0);
  const items1 = [sharedValue1, conjureControlPhase, stateFromStores];
  const effect = sharedValue.useEffect(() => {
    let Easing;
    if ("controlling" === conjureControlPhase) {
      let num5 = 1;
      set2 = sharedValue1.set;
      if (!stateFromStores) {
        const obj2 = spring;
        num5 = obj2.withSpring(1, springPresets.SUBTLE_SPRING);
      }
      set2(num5);
    } else if ("handoff" === tmp) {
      set = sharedValue1.set;
      const withDelay = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const diff = useConjureControlBar.CONJURE_CONTROL_HANDOFF_MS - c9;
      let num3 = 0;
      const withTiming = timing.withTiming;
      timing;
      const tmp10 = c9;
      if (!stateFromStores) {
        num3 = tmp10;
      }
      const obj = { duration: num3, easing: Easing.in(ReanimatedRexport.Easing.ease) };
      Easing = ReanimatedRexport.Easing;
      const result = set(withDelay(diff, withTiming(0, obj)));
    } else {
      const result1 = sharedValue1.set(0);
    }
  }, items1);
  const tmp2Result7 = tmp2(5053);
  sharedValue2 = tmp2Result7.useSharedValue(0.5);
  const items2 = [tmp8, sharedValue2, stateFromStores];
  const effect1 = sharedValue.useEffect(() => {
    let Easing;
    const tmp = closure_2;
    if (tmp) {
      let fn;
      const tmp2 = stateFromStores;
      if (!tmp2) {
        const result = sharedValue2.set(0.2);
        set = sharedValue2.set;
        const withRepeat = ReanimatedRexport.withRepeat;
        ReanimatedRexport;
        let obj = { duration: 1200, easing: Easing.inOut(ReanimatedRexport.Easing.ease) };
        const withTiming = timing.withTiming;
        timing;
        Easing = ReanimatedRexport.Easing;
        const result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
        fn = () => {
          const obj = conjureControlPhase(closure_2[11]);
          return obj.cancelAnimation(sharedValue2);
        };
      }
      return fn;
    }
    const obj2 = ReanimatedRexport;
    obj2.cancelAnimation(sharedValue2);
    const result2 = sharedValue2.set(0.5);
  }, items2);
  const tmp2Result8 = tmp2(5053);
  class D {
    constructor() {
      let bound;
      const obj = { height: bound * sharedValue.get() };
      bound = Math.max(0, sharedValue1.get());
      return obj;
    }
  }
  D.__closure = { shown: sharedValue1, barHeight: sharedValue };
  D.__workletHash = 10340375351296;
  D.__initData = __initData4;
  const animatedStyle = tmp2Result8.useAnimatedStyle(D);
  const tmp2Result9 = tmp2(5053);
  class V {
    constructor() {
      let diff;
      let items;
      const obj = { transform: items };
      const obj2 = { translateY: diff * sharedValue.get() };
      diff = sharedValue1.get() - 1;
      items = [obj2];
      return obj;
    }
  }
  V.__closure = { shown: sharedValue1, barHeight: sharedValue };
  V.__workletHash = 13798762691965;
  V.__initData = __initData5;
  const animatedStyle1 = tmp2Result9.useAnimatedStyle(V);
  const tmp2Result10 = tmp2(5053);
  class L {
    constructor() {
      const obj = { opacity: sharedValue2.get() };
      return obj;
    }
  }
  L.__closure = { pulse: sharedValue2 };
  L.__workletHash = 6446462441996;
  L.__initData = __initData6;
  const animatedStyle2 = tmp2Result10.useAnimatedStyle(L);
  const intl = tmp2(1125).intl;
  const string = intl.string;
  const tmp18 = stateFromStores(3831);
  if (tmp8) {
    let prop;
    let tmp22;
    if (conjureControlTuning) {
      prop = tmp18["VJW/5P"];
      tmp22 = tmp17;
    } else {
      prop = tmp18["+hD2Iz"];
      tmp22 = tmp17;
    }
    tmp20 = tmp22;
    prop1 = prop;
  } else {
    prop1 = tmp18["h+i1r9"];
    tmp20 = tmp17;
  }
  const stringResult = string(prop1);
  let tmp36Result4 = null;
  const obj5 = { style: tmp.root, children: items6 };
  if (visible) {
    tmp36Result4 = null;
    if ("idle" !== conjureControlPhase) {
      let tmp36Result;
      const obj6 = { style: items3, children: closure_7(View2, obj7) };
      items3 = [tmp.barArea, animatedStyle];
      const View = tmp20(5053).View;
      obj7 = {
        style: items4,
        onLayout(nativeEvent) {
              return sharedValue.set(nativeEvent.nativeEvent.layout.height);
            },
        accessibilityLiveRegion: "polite",
        children: items5
      };
      items4 = [tmp.bar, animatedStyle1];
      View2 = tmp20(5053).View;
      if (tmp8) {
        tmp36Result = tmp36(tmp2(11790).AILoader, { size: 12, color: "text-overlay-light" });
      } else {
        const obj8 = { size: "sm", color: tmp20(587).colors.TEXT_OVERLAY_LIGHT };
        const SparklesIcon = tmp2(11794).SparklesIcon;
        tmp36Result = tmp36(SparklesIcon, obj8);
      }
      items5 = [tmp36Result, , ];
      const obj9 = { variant: "text-sm/semibold", color: "text-overlay-light", lineClamp: 1, style: tmp.title, accessibilityLabel: combined, children: stringResult };
      combined = stringResult;
      const Text = tmp2(5235).Text;
      if (tmp8) {
        const intl2 = tmp2(1125).intl;
        const _HermesInternal = HermesInternal;
        combined = "" + stringResult + ". " + intl2.string(tmp20(3831).fg1sor);
      }
      items5[1] = closure_6(Text, obj9);
      let tmp36Result3 = null;
      if (tmp8) {
        tmp36Result3 = null;
        if (null != stop) {
          const obj10 = { style: tmp.actions, children: closure_6(Button, obj11) };
          obj11 = { variant: "primary-overlay", size: "sm", text: intl3.string(tmp20(3831).oU59sU), loading: stopping, onPress: stop };
          Button = tmp2(5245).Button;
          intl3 = tmp2(1125).intl;
          tmp36Result3 = tmp36(tmp25, obj10);
        }
      }
      items5[2] = tmp36Result3;
      tmp36Result4 = tmp36(View, obj6);
    }
  }
  items6 = [tmp36Result4, , ];
  const obj12 = { style: tmp.content, children: items7 };
  items7 = [children, ];
  let tmp31 = null;
  if (tmp8) {
    const obj13 = { style: tmp.block, pointerEvents: "box-only" };
    tmp31 = closure_6(tmp25, obj13);
  }
  items7[1] = tmp31;
  items6[1] = closure_7(sharedValue1, obj12);
  let tmp24Result = null;
  if (tmp8) {
    const obj15 = { style: items8, pointerEvents: "none" };
    items8 = [tmp.glow, animatedStyle2];
    const obj14 = { children: items9 };
    items9 = [closure_6(tmp20(5053).View, obj15), ];
    const obj16 = { style: tmp.border, pointerEvents: "none" };
    items9[1] = closure_6(sharedValue1, obj16);
    tmp24Result = tmp24(closure_8, obj14);
  }
  items6[2] = tmp24Result;
  return closure_7(sharedValue1, obj5);
});
let result = size.fileFinishedImporting("modules/conjure/preview/native/ConjureNativeControlOverlay.tsx");

export default tmp8;
