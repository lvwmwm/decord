// Module ID: 16595
// Function ID: 16596
// Name: VibegrationsNativeControlOverlay
// Dependencies: [19, 17, 4879, 21, 4890, 587, 558, 576, 16596, 504, 4612, 5597, 5598, 4891, 1126, 3723, 14207, 16597, 4886, 5594, 2]

// Module 16595 (VibegrationsNativeControlOverlay)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import spring from "spring" /* 5597 */;
import springPresets from "springPresets" /* 5598 */;
import useVibegrationsControlBar from "useVibegrationsControlBar" /* 16596 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let cancelAnimationResult, dependencyMap, flag, num, num2, set, set2, tmp12, tmp13, tmp3, tmp5, tmp6, tmp9;

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
const __initData = { code: "function VibegrationsNativeControlOverlayTsx1(){const{shown,barHeight}=this.__closure;return{height:Math.max(0,shown.get())*barHeight.get()};}" };
const __initData2 = { code: "function VibegrationsNativeControlOverlayTsx2(){const{shown,barHeight}=this.__closure;return{transform:[{translateY:(shown.get()-1)*barHeight.get()}]};}" };
const __initData3 = { code: "function VibegrationsNativeControlOverlayTsx3(){const{pulse}=this.__closure;return{opacity:pulse.get()};}" };
const __initData4 = { code: "function VibegrationsNativeControlOverlayTsx4(){const{shown,barHeight}=this.__closure;return{height:Math.max(0,shown.get())*barHeight.get()};}" };
const __initData5 = { code: "function VibegrationsNativeControlOverlayTsx5(){const{shown,barHeight}=this.__closure;return{transform:[{translateY:(shown.get()-1)*barHeight.get()}]};}" };
const __initData6 = { code: "function VibegrationsNativeControlOverlayTsx6(){const{pulse}=this.__closure;return{opacity:pulse.get()};}" };
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let View;
  let active;
  let children;
  let closure_2;
  let combined;
  let intl3;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj9;
  let onOpenPublishedApp;
  let projectId;
  let sharedValue2;
  let stop;
  let stopping;
  let tmp7;
  let tmp8;
  let vibegrationsControlPhase;
  let visible;
  let tmp = vibegrationsControlPhase;
  let tmp2 = dependencyMap;
  let obj = vibegrationsControlPhase(576);
  const cResult = obj.c(47);
  ({ visible, onOpenPublishedApp, children } = arg0);
  ({ projectId, active } = arg0);
  const tmp4 = closure_10();
  let obj2 = vibegrationsControlPhase(16596);
  vibegrationsControlPhase = obj2.useVibegrationsControlPhase(active);
  const obj3 = vibegrationsControlPhase(16596);
  const vibegrationsControlStop = obj3.useVibegrationsControlStop(projectId);
  ({ stop, stopping } = vibegrationsControlStop);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [sharedValue2];
    let fn = function c() {
      return sharedValue2.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  let tmp11 = visible;
  if (tmp11) {
    tmp11 = "controlling" === vibegrationsControlPhase;
  }
  dependencyMap = tmp11;
  const tmpResult7 = tmp(4612);
  const sharedValue = tmpResult7.useSharedValue(0);
  const tmpResult8 = tmp(4612);
  const sharedValue1 = tmpResult8.useSharedValue(0);
  if (cResult[2] === vibegrationsControlPhase) {
    if (cResult[3] === stateFromStores) {
      let tmp14;
      let tmp15;
      if (cResult[4] === sharedValue1) {
        tmp14 = cResult[5];
        tmp15 = cResult[6];
      }
      const effect = sharedValue.useEffect(tmp14, tmp15);
      let num3 = 0.5;
      const tmpResult9 = tmp(4612);
      sharedValue2 = tmpResult9.useSharedValue(0.5);
      const obj7 = sharedValue;
      if (cResult[7] === tmp11) {
        if (cResult[8] === sharedValue2) {
          let tmp18;
          let tmp19;
          let tmp27;
          if (cResult[9] === stateFromStores) {
            tmp18 = cResult[10];
            tmp19 = cResult[11];
          }
          const effect1 = obj7.useEffect(tmp18, tmp19);
          const fn2 = function j() {
            let bound;
            const obj = { height: bound * sharedValue.get() };
            bound = Math.max(0, sharedValue1.get());
            return obj;
          };
          const obj4 = { shown: sharedValue1, barHeight: sharedValue };
          fn2.__closure = obj4;
          const tmpResult10 = tmp(4612);
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
                    return obj.cancelAnimation(sharedValue2);
                  };
                }
                return fn;
              }
              obj2 = closure_0(closure_2[10]);
              cancelAnimationResult = obj2.cancelAnimation(closure_5);
              result2 = closure_5.set(0.5);
              return;
            }
          }
          fn2.__workletHash = 14537991883436;
          fn2.__initData = __initData;
          const animatedStyle = tmpResult10.useAnimatedStyle(fn2);
          const fn3 = function z() {
            let diff;
            let items;
            const obj = { transform: items };
            const obj2 = { translateY: diff * sharedValue.get() };
            diff = sharedValue1.get() - 1;
            items = [obj2];
            return obj;
          };
          const obj5 = { shown: sharedValue1, barHeight: sharedValue };
          fn3.__closure = obj5;
          fn3.__workletHash = 15879147207027;
          fn3.__initData = __initData2;
          const tmpResult11 = tmp(4612);
          const animatedStyle1 = tmpResult11.useAnimatedStyle(fn3);
          const tmpResult12 = tmp(4612);
          class M {
            constructor() {
              const obj = { opacity: sharedValue2.get() };
              return obj;
            }
          }
          const obj6 = { pulse: sharedValue2 };
          M.__closure = obj6;
          M.__workletHash = 4473224837152;
          M.__initData = __initData3;
          const animatedStyle2 = tmpResult12.useAnimatedStyle(M);
          if (visible) {
            visible = "idle" !== vibegrationsControlPhase;
          }
          if (cResult[12] !== tmp11) {
            const intl = tmp(1126).intl;
            const string = intl.string;
            const tmp29 = stateFromStores(3723);
            cResult[12] = tmp11;
            const stringResult = string(tmp11 ? tmp29.ydhvN1 : tmp29["7U6tIB"]);
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
                      return obj.cancelAnimation(sharedValue2);
                    };
                  }
                  return fn;
                }
                obj2 = closure_0(closure_2[10]);
                cancelAnimationResult = obj2.cancelAnimation(closure_5);
                result2 = closure_5.set(0.5);
                return;
              }
            }
            tmp27 = stringResult;
          } else {
            tmp27 = cResult[13];
          }
          const tmp33 = tmp11 && null != stop;
          class C {
            constructor() {
              let Easing;
              if ("controlling" === vibegrationsControlPhase) {
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
                const diff = useVibegrationsControlBar.VIBEGRATIONS_CONTROL_HANDOFF_MS - c9;
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
          let tmp38Result4 = null;
          if (visible) {
            let tmp38Result;
            let tmp41Result;
            const obj8 = { style: items1, children: closure_7(View, obj9) };
            items1 = [tmp4.barArea, animatedStyle];
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
                      return obj.cancelAnimation(sharedValue2);
                    };
                  }
                  return fn;
                }
                obj2 = closure_0(closure_2[10]);
                cancelAnimationResult = obj2.cancelAnimation(closure_5);
                result2 = closure_5.set(0.5);
                return;
              }
            }
            obj9 = {
              style: items2,
              onLayout(nativeEvent) {
                          return sharedValue.set(nativeEvent.nativeEvent.layout.height);
                        },
              accessibilityLiveRegion: "polite",
              children: items3
            };
            items2 = [tmp4.bar, animatedStyle1];
            View = stateFromStores(4612).View;
            if (tmp11) {
              tmp38Result = tmp38(tmp(14207).AILoader, { size: 12, color: "text-overlay-light" });
            } else {
              const obj10 = { size: "sm", color: stateFromStores(587).colors.TEXT_OVERLAY_LIGHT };
              const SparklesIcon = tmp(16597).SparklesIcon;
              tmp38Result = tmp38(SparklesIcon, obj10);
            }
            items3 = [tmp38Result, , ];
            const obj11 = { variant: "text-sm/semibold", color: "text-overlay-light", lineClamp: 1, style: tmp4.title, accessibilityLabel: combined, children: null };
            combined = tmp27;
            const Text = tmp(4886).Text;
            if (tmp11) {
              const intl2 = tmp(1126).intl;
              const _HermesInternal = HermesInternal;
              combined = "" + tmp27 + ". " + intl2.string(tmp39(3723).NldIIG);
            }
            class M {
              constructor() {
                const obj = { opacity: sharedValue2.get() };
                return obj;
              }
            }
            items3[1] = closure_6(Text, obj11);
            if (tmp11 && null != onOpenPublishedApp) {
              let tmp38Result3 = null;
              const obj12 = { style: tmp4.actions, children: items4 };
              const tmp45 = sharedValue1;
              if (null != onOpenPublishedApp) {
                const obj13 = { variant: "secondary-overlay", size: "sm", text: intl3.string(stateFromStores(3723).kj5epw), onPress: onOpenPublishedApp };
                const Button = tmp(5594).Button;
                intl3 = tmp(1126).intl;
                tmp38Result3 = tmp38(Button, obj13);
              }
              items4 = [tmp38Result3, ];
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
                        return obj.cancelAnimation(sharedValue2);
                      };
                    }
                    return fn;
                  }
                  obj2 = closure_0(closure_2[10]);
                  cancelAnimationResult = obj2.cancelAnimation(closure_5);
                  result2 = closure_5.set(0.5);
                  return;
                }
              }
              items4[1] = null;
              tmp41Result = tmp41(tmp45, obj12);
            } else {
              tmp41Result = null;
            }
            items3[2] = tmp41Result;
            tmp38Result4 = tmp38(tmp40, obj8);
          }
          cResult[14] = animatedStyle;
          cResult[15] = sharedValue;
          cResult[16] = animatedStyle1;
          cResult[17] = tmp11;
          cResult[18] = onOpenPublishedApp;
          cResult[19] = visible;
          cResult[20] = tmp11 && null != onOpenPublishedApp;
          cResult[21] = tmp33;
          cResult[22] = stop;
          cResult[23] = stopping;
          cResult[24] = tmp4.actions;
          cResult[25] = tmp4.bar;
          cResult[26] = tmp4.barArea;
          cResult[27] = tmp4.title;
          cResult[28] = tmp27;
          cResult[29] = tmp38Result4;
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
                return obj.cancelAnimation(sharedValue2);
              };
            }
            return fn;
          }
          obj2 = closure_0(closure_2[10]);
          cancelAnimationResult = obj2.cancelAnimation(closure_5);
          result2 = closure_5.set(0.5);
          return;
        }
      }
      const items5 = [tmp11, sharedValue2, stateFromStores];
      cResult[7] = tmp11;
      let num5 = 8;
      cResult[8] = sharedValue2;
      cResult[9] = stateFromStores;
      cResult[10] = P;
      cResult[11] = items5;
      tmp19 = items5;
      tmp18 = P;
    }
  }
  class C {
    constructor() {
      let Easing;
      if ("controlling" === vibegrationsControlPhase) {
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
        const diff = useVibegrationsControlBar.VIBEGRATIONS_CONTROL_HANDOFF_MS - c9;
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
  const items6 = [sharedValue1, vibegrationsControlPhase, stateFromStores];
  cResult[2] = vibegrationsControlPhase;
  cResult[3] = stateFromStores;
  cResult[4] = sharedValue1;
  cResult[5] = C;
  cResult[6] = items6;
  tmp15 = items6;
  tmp14 = C;
}) : ((arg0) => {
  let active;
  let children;
  let closure_2;
  let combined;
  let intl3;
  let intl4;
  let items10;
  let items3;
  let items4;
  let items6;
  let items7;
  let items8;
  let items9;
  let onOpenPublishedApp;
  let projectId;
  let stop;
  let stopping;
  let tmp19;
  let visible;
  let ydhvN1;
  ({ visible, onOpenPublishedApp } = arg0);
  let vibegrationsControlPhase;
  dependencyMap = undefined;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  ({ projectId, active, children } = arg0);
  let tmp = closure_10();
  let tmp2 = vibegrationsControlPhase;
  let obj = vibegrationsControlPhase(16596);
  vibegrationsControlPhase = obj.useVibegrationsControlPhase(active);
  let obj2 = vibegrationsControlPhase(16596);
  const vibegrationsControlStop = obj2.useVibegrationsControlStop(projectId);
  ({ stop, stopping } = vibegrationsControlStop);
  let items = [sharedValue2];
  const obj3 = vibegrationsControlPhase(504);
  const stateFromStores = obj3.useStateFromStores(items, () => sharedValue2.useReducedMotion);
  let tmp7 = visible;
  if (tmp7) {
    tmp7 = "controlling" === vibegrationsControlPhase;
  }
  dependencyMap = tmp7;
  const tmp2Result = tmp2(4612);
  sharedValue = tmp2Result.useSharedValue(0);
  const tmp2Result6 = tmp2(4612);
  sharedValue1 = tmp2Result6.useSharedValue(0);
  const items1 = [sharedValue1, vibegrationsControlPhase, stateFromStores];
  const effect = sharedValue.useEffect(() => {
    let Easing;
    if ("controlling" === vibegrationsControlPhase) {
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
      const diff = useVibegrationsControlBar.VIBEGRATIONS_CONTROL_HANDOFF_MS - c9;
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
  const tmp2Result7 = tmp2(4612);
  sharedValue2 = tmp2Result7.useSharedValue(0.5);
  const items2 = [tmp7, sharedValue2, stateFromStores];
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
          const obj = vibegrationsControlPhase(closure_2[10]);
          return obj.cancelAnimation(sharedValue2);
        };
      }
      return fn;
    }
    const obj2 = ReanimatedRexport;
    obj2.cancelAnimation(sharedValue2);
    const result2 = sharedValue2.set(0.5);
  }, items2);
  const tmp2Result8 = tmp2(4612);
  class R {
    constructor() {
      let bound;
      const obj = { height: bound * sharedValue.get() };
      bound = Math.max(0, sharedValue1.get());
      return obj;
    }
  }
  R.__closure = { shown: sharedValue1, barHeight: sharedValue };
  R.__workletHash = 10779878276009;
  R.__initData = __initData4;
  const animatedStyle = tmp2Result8.useAnimatedStyle(R);
  const tmp2Result9 = tmp2(4612);
  class D {
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
  D.__closure = { shown: sharedValue1, barHeight: sharedValue };
  D.__workletHash = 5836011547124;
  D.__initData = __initData5;
  const animatedStyle1 = tmp2Result9.useAnimatedStyle(D);
  let fn = function k() {
    const obj = { opacity: sharedValue2.get() };
    return obj;
  };
  fn.__closure = { pulse: sharedValue2 };
  fn.__workletHash = 11848386308389;
  fn.__initData = __initData6;
  const tmp2Result10 = tmp2(4612);
  const animatedStyle2 = tmp2Result10.useAnimatedStyle(fn);
  const intl = tmp2(1126).intl;
  const string = intl.string;
  const tmp17 = stateFromStores(3723);
  if (tmp7) {
    ydhvN1 = tmp17.ydhvN1;
    tmp19 = tmp16;
  } else {
    ydhvN1 = tmp17["7U6tIB"];
    tmp19 = tmp16;
  }
  const stringResult = string(ydhvN1);
  let tmp21 = tmp7;
  if (tmp21) {
    tmp21 = null != stop;
  }
  let tmp37Result4 = null;
  const obj4 = { style: tmp.root, children: items7 };
  if (visible) {
    tmp37Result4 = null;
    if ("idle" !== vibegrationsControlPhase) {
      let tmp37Result;
      const obj5 = { style: items3, children: null };
      items3 = [tmp.barArea, animatedStyle];
      const View = tmp19(4612).View;
      const obj6 = {
        style: items4,
        onLayout(nativeEvent) {
              return sharedValue.set(nativeEvent.nativeEvent.layout.height);
            },
        accessibilityLiveRegion: "polite",
        children: null
      };
      items4 = [tmp.bar, animatedStyle1];
      const View2 = tmp19(4612).View;
      if (tmp7) {
        tmp37Result = tmp37(tmp2(14207).AILoader, { size: 12, color: "text-overlay-light" });
      } else {
        const obj7 = { size: "sm", color: tmp19(587).colors.TEXT_OVERLAY_LIGHT };
        const SparklesIcon = tmp2(16597).SparklesIcon;
        tmp37Result = tmp37(SparklesIcon, obj7);
      }
      const items5 = [tmp37Result, , ];
      const obj8 = { variant: "text-sm/semibold", color: "text-overlay-light", lineClamp: 1, style: tmp.title, accessibilityLabel: combined, children: stringResult };
      combined = stringResult;
      const Text = tmp2(4886).Text;
      if (tmp7) {
        const intl2 = tmp2(1126).intl;
        const _HermesInternal = HermesInternal;
        combined = "" + stringResult + ". " + intl2.string(tmp19(3723).NldIIG);
      }
      items5[1] = closure_6(Text, obj8);
      if (!tmp7) {
        let tmp23Result = null;
        items5[2] = tmp23Result;
        obj6.children = items5;
        obj5.children = closure_7(View2, obj6);
        tmp37Result4 = tmp37(View, obj5);
      }
      let tmp37Result5 = null;
      const obj9 = { style: tmp.actions, children: items6 };
      if (null != onOpenPublishedApp) {
        const obj10 = { variant: "secondary-overlay", size: "sm", text: intl3.string(tmp19(3723).kj5epw), onPress: onOpenPublishedApp };
        const Button = tmp2(5594).Button;
        intl3 = tmp2(1126).intl;
        tmp37Result5 = tmp37(Button, obj10);
      }
      items6 = [tmp37Result5, ];
      let tmp37Result6 = null;
      if (tmp21) {
        const obj11 = { variant: "primary-overlay", size: "sm", text: intl4.string(tmp19(3723)["2HalWx"]), loading: stopping, onPress: stop };
        const Button2 = tmp2(5594).Button;
        intl4 = tmp2(1126).intl;
        tmp37Result6 = tmp37(Button2, obj11);
      }
      items6[1] = tmp37Result6;
      tmp23Result = tmp23(tmp24, obj9);
    }
  }
  items7 = [tmp37Result4, , ];
  const obj12 = { style: tmp.content, children: items8 };
  items8 = [children, ];
  let tmp32 = null;
  if (tmp7) {
    const obj13 = { style: tmp.block, pointerEvents: "box-only" };
    tmp32 = closure_6(tmp24, obj13);
  }
  items8[1] = tmp32;
  items7[1] = closure_7(sharedValue1, obj12);
  let tmp23Result2 = null;
  if (tmp7) {
    const obj15 = { style: items9, pointerEvents: "none" };
    items9 = [tmp.glow, animatedStyle2];
    const obj14 = { children: items10 };
    items10 = [closure_6(tmp19(4612).View, obj15), ];
    const obj16 = { style: tmp.border, pointerEvents: "none" };
    items10[1] = closure_6(sharedValue1, obj16);
    tmp23Result2 = tmp23(closure_8, obj14);
  }
  items7[2] = tmp23Result2;
  return closure_7(sharedValue1, obj4);
});
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeControlOverlay.tsx");

export default tmp8;
