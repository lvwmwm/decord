// Module ID: 17403
// Function ID: 17404
// Name: Alerts
// Dependencies: [19, 17, 5079, 13871, 14478, 7466, 9579, 21, 17404, 17405, 17409, 17410, 5090, 587, 558, 576, 504, 4810, 4787, 5091, 5374, 5378, 5298, 5370, 6720, 5356, 5304, 568, 2]

// Module 17403 (Alerts)
import shallowEqualDefault from "shallowEqual" /* 568 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 4787 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import timing from "timing" /* 5091 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5298 */;
import OverlayViewDefault from "OverlayView" /* 5304 */;
import spring from "spring" /* 5374 */;
import springPresets from "springPresets" /* 5378 */;
import ModalRegistryDefault from "ModalRegistry" /* 17404 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;
import PermissionSpeakStore from "PermissionSpeakStore" /* 13871 */;
import PermissionVADStore from "PermissionVADStore" /* 14478 */;
import SurveyStore from "SurveyStore" /* 7466 */;
import AlertStore from "AlertStore" /* 9579 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, obj1, set, value1;

let closure_12;
let hasOwnProperty;
let items;
let items2;
let items3;
let map1;
let metroRequire;
let obj5;
function getAlertItemKey(renderKey) {
  return renderKey.renderKey;
}
function wrapAlerts(children) {
  let obj2;
  const obj = { style: StyleSheet.absoluteFill, children: closure_12(metroRequire, obj2) };
  obj2 = { style: StyleSheet.absoluteFill, children };
  const tmp = OverlayViewDefault;
  return closure_12(tmp, obj);
}
const StyleSheet = react_native.StyleSheet;
({ TouchableWithoutFeedback: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let obj = {
  stores: items,
  center: true,
  isOpen() {
    return PermissionSpeakStore.shouldShowWarning();
  },
  getComponent() {
    return require("Suppressed").default;
  }
};
items = [PermissionSpeakStore];
let items1 = [obj, , ];
let obj2 = {
  stores: items2,
  center: true,
  isOpen() {
    return PermissionVADStore.shouldShowWarning();
  },
  getComponent() {
    return require("VADPermission").default;
  }
};
items2 = [PermissionVADStore];
items1[1] = obj2;
let obj3 = {
  stores: items3,
  center: true,
  isOpen() {
    return null != SurveyStore.getCurrentSurvey();
  },
  getComponent() {
    return require("MobileSurvey").default;
  }
};
items3 = [SurveyStore];
items1[2] = obj3;
const tmp7 = new ModalRegistryDefault(items1);
const stores = tmp7;
let createStyles = createStyles_mod;
let obj4 = { alertWrapper: obj5, alertContentWrapper: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" } };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, justifyContent: "center", alignItems: "center" };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_15 = createStyles(obj4);
const __initData = { code: "function AlertsTsx1(){const{visible,withTiming,Easing,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;const isVisible=visible.get()===1;return{opacity:withTiming(visible.get(),{duration:isVisible?250:100,easing:Easing.linear},\"animate-always\",function(finished){if(finished&&visible.get()===0&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}})};}" };
const __initData2 = { code: "function AlertsTsx2(finished){const{visible,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&visible.get()===0&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const __initData3 = { code: "function AlertsTsx3(){const{useReducedMotion,visible,withSpring,SUBTLE_SPRING,withTiming,Easing}=this.__closure;if(useReducedMotion){return{transform:[{scale:1}]};}return{transform:[{scale:visible.get()===1?withSpring(1,SUBTLE_SPRING):withTiming(0,{duration:100,easing:Easing.in(Easing.ease)})}]};}" };
const __initData4 = { code: "function AlertsTsx4(){const{visible,withTiming,Easing,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;const isVisible=visible.get()===1;return{opacity:withTiming(visible.get(),{duration:isVisible?250:100,easing:Easing.linear},'animate-always',function(finished){if(finished&&visible.get()===0&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}})};}" };
let closure_20 = { code: "function AlertsTsx5(finished){const{visible,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&visible.get()===0&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const __initData5 = { code: "function AlertsTsx6(){const{useReducedMotion,visible,withSpring,SUBTLE_SPRING,withTiming,Easing}=this.__closure;if(useReducedMotion){return{transform:[{scale:1}]};}return{transform:[{scale:visible.get()===1?withSpring(1,SUBTLE_SPRING):withTiming(0,{duration:100,easing:Easing.in(Easing.ease)})}]};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function AlertWrapper(cleanUp) {
  let isDismissable;
  let item;
  let items2;
  let items3;
  let renderAlert;
  let renderKey;
  let tmp5;
  let tmp6;
  let transitionState;
  let useReducedMotion;
  let tmp = transitionState;
  let obj = transitionState(isDismissable[15]);
  const cResult = obj.c(29);
  ({ item, transitionState } = cleanUp);
  cleanUp = cleanUp.cleanUp;
  ({ renderAlert, renderKey, isDismissable } = item);
  const tmp4 = closure_15();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    let fn = function u() {
      return useReducedMotion.useReducedMotion;
    };
    let num = 0;
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(isDismissable[16]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const useSharedValue = tmp(tmp2[17]).useSharedValue;
  let num3 = 0;
  tmp(isDismissable[17]);
  if (transitionState === tmp(isDismissable[18]).TransitionStates.MOUNTED) {
    num3 = 1;
  }
  const sharedValue = useSharedValue(num3);
  if (cResult[2] === transitionState) {
    let tmp11;
    let tmp12;
    let tmp26;
    if (cResult[3] === sharedValue) {
      tmp11 = cResult[4];
      tmp12 = cResult[5];
    }
    const effect = stateFromStores.useEffect(tmp11, tmp12);
    const tmpResult5 = tmp(isDismissable[17]);
    class I {
      constructor() {
        tmp = closure_4;
        tmp3 = closure_0;
        tmp4 = closure_2;
        value = closure_4.get();
        tmp5 = closure_0(closure_2[19]);
        withTiming = tmp5.withTiming;
        value1 = closure_4.get();
        num = 100;
        if (1 === value) {
          num = 250;
        }
        obj = { opacity: null };
        obj1 = { duration: num, easing: tmp3(tmp4[17]).Easing.linear };
        fn = function t(arg0) {
          const tmp = arg0 && 0 === sharedValue.get() && closure_1_0 === transitionState(isDismissable[18]).TransitionStates.YEETED;
          if (tmp) {
            const obj = transitionState(isDismissable[17]);
            obj.runOnJS(cleanUp)();
          }
        };
        obj4 = { visible: tmp, transitionState, TransitionStates: tmp3(tmp4[18]).TransitionStates, runOnJS: tmp3(tmp4[17]).runOnJS, cleanUp };
        fn.__closure = obj4;
        fn.__workletHash = 9063471386550;
        fn.__initData = closure_17;
        obj.opacity = withTiming(value1, obj1, "animate-always", fn);
        return obj;
      }
    }
    let obj2 = { visible: sharedValue, withTiming: tmp(tmp2[19]).withTiming, Easing: tmp(tmp2[17]).Easing, transitionState, TransitionStates: tmp(tmp2[18]).TransitionStates, runOnJS: tmp(tmp2[17]).runOnJS, cleanUp };
    const useAnimatedStyle = tmpResult5.useAnimatedStyle;
    I.__closure = obj2;
    I.__workletHash = 3031596332050;
    I.__initData = __initData;
    const animatedStyle = useAnimatedStyle(I);
    const tmpResult6 = tmp(isDismissable[17]);
    class J {
      constructor() {
        let Easing;
        let tmp14;
        const obj = { transform: null };
        if (stateFromStores) {
          const items = [{ scale: 1 }];
          obj.transform = items;
          tmp14 = obj;
        } else {
          let withSpringResult;
          if (1 === sharedValue.get()) {
            const obj3 = spring;
            withSpringResult = obj3.withSpring(1, springPresets.SUBTLE_SPRING);
          } else {
            const obj2 = { duration: 100, easing: Easing.in(ReanimatedRexport.Easing.ease) };
            const withTiming = timing.withTiming;
            timing;
            Easing = ReanimatedRexport.Easing;
            withSpringResult = withTiming(0, obj2);
          }
          const items1 = [{ scale: withSpringResult }];
          const obj4 = { scale: withSpringResult };
          obj.transform = items1;
          tmp14 = obj;
        }
        return tmp14;
      }
    }
    let obj3 = { useReducedMotion: stateFromStores, visible: sharedValue, withSpring: tmp(tmp2[20]).withSpring, SUBTLE_SPRING: tmp(tmp2[21]).SUBTLE_SPRING, withTiming: tmp(tmp2[19]).withTiming, Easing: tmp(tmp2[17]).Easing };
    const useAnimatedStyle2 = tmpResult6.useAnimatedStyle;
    J.__closure = obj3;
    J.__workletHash = 7591026156474;
    class D {
      constructor() {
        let num = 1;
        set = sharedValue.set;
        if (transitionState === native.TransitionStates.YEETED) {
          num = 0;
        }
        const result = set(num);
      }
    }
    J.__initData = __initData3;
    const animatedStyle2 = useAnimatedStyle2(J);
    if (cResult[6] !== isDismissable) {
      class F {
        constructor() {
          const tmp = isDismissable;
          if (tmp) {
            const obj = actions_AlertActionCreatorsDefault;
            obj.close();
          }
          return true;
        }
      }
      cResult[6] = isDismissable;
      class I {
        constructor() {
          tmp = closure_4;
          tmp3 = closure_0;
          tmp4 = closure_2;
          value = closure_4.get();
          tmp5 = closure_0(closure_2[19]);
          withTiming = tmp5.withTiming;
          value1 = closure_4.get();
          num = 100;
          if (1 === value) {
            num = 250;
          }
          obj = { opacity: null };
          obj1 = { duration: num, easing: tmp3(tmp4[17]).Easing.linear };
          fn = function t(arg0) {
            const tmp = arg0 && 0 === sharedValue.get() && closure_1_0 === transitionState(isDismissable[18]).TransitionStates.YEETED;
            if (tmp) {
              const obj = transitionState(isDismissable[17]);
              obj.runOnJS(cleanUp)();
            }
          };
          obj4 = { visible: tmp, transitionState, TransitionStates: tmp3(tmp4[18]).TransitionStates, runOnJS: tmp3(tmp4[17]).runOnJS, cleanUp };
          fn.__closure = obj4;
          fn.__workletHash = 9063471386550;
          fn.__initData = closure_17;
          obj.opacity = withTiming(value1, obj1, "animate-always", fn);
          return obj;
        }
      }
    } else {
      class F {
        constructor() {
          const tmp = isDismissable;
          if (tmp) {
            const obj = actions_AlertActionCreatorsDefault;
            obj.close();
          }
          return true;
        }
      }
    }
    cleanUp(isDismissable[23])(tmp20);
    if (cResult[8] !== renderAlert) {
      class F {
        constructor() {
          const tmp = isDismissable;
          if (tmp) {
            const obj = actions_AlertActionCreatorsDefault;
            obj.close();
          }
          return true;
        }
      }
      tmp24[0] = cleanUp(isDismissable[22]).close;
      const renderAlertResult = renderAlert(tmp24);
      class I {
        constructor() {
          tmp = closure_4;
          tmp3 = closure_0;
          tmp4 = closure_2;
          value = closure_4.get();
          tmp5 = closure_0(closure_2[19]);
          withTiming = tmp5.withTiming;
          value1 = closure_4.get();
          num = 100;
          if (1 === value) {
            num = 250;
          }
          obj = { opacity: null };
          obj1 = { duration: num, easing: tmp3(tmp4[17]).Easing.linear };
          fn = function t(arg0) {
            const tmp = arg0 && 0 === sharedValue.get() && closure_1_0 === transitionState(isDismissable[18]).TransitionStates.YEETED;
            if (tmp) {
              const obj = transitionState(isDismissable[17]);
              obj.runOnJS(cleanUp)();
            }
          };
          obj4 = { visible: tmp, transitionState, TransitionStates: tmp3(tmp4[18]).TransitionStates, runOnJS: tmp3(tmp4[17]).runOnJS, cleanUp };
          fn.__closure = obj4;
          fn.__workletHash = 9063471386550;
          fn.__initData = closure_17;
          obj.opacity = withTiming(value1, obj1, "animate-always", fn);
          return obj;
        }
      }
      cResult[9] = renderAlertResult;
    } else {
      class F {
        constructor() {
          const tmp = isDismissable;
          if (tmp) {
            const obj = actions_AlertActionCreatorsDefault;
            obj.close();
          }
          return true;
        }
      }
    }
    if (cResult[10] !== tmp4.alertContentWrapper) {
      class F {
        constructor() {
          const tmp = isDismissable;
          if (tmp) {
            const obj = actions_AlertActionCreatorsDefault;
            obj.close();
          }
          return true;
        }
      }
      let items1 = [sharedValue.absoluteFill, tmp4.alertContentWrapper];
      class I {
        constructor() {
          tmp = closure_4;
          tmp3 = closure_0;
          tmp4 = closure_2;
          value = closure_4.get();
          tmp5 = closure_0(closure_2[19]);
          withTiming = tmp5.withTiming;
          value1 = closure_4.get();
          num = 100;
          if (1 === value) {
            num = 250;
          }
          obj = { opacity: null };
          obj1 = { duration: num, easing: tmp3(tmp4[17]).Easing.linear };
          fn = function t(arg0) {
            const tmp = arg0 && 0 === sharedValue.get() && closure_1_0 === transitionState(isDismissable[18]).TransitionStates.YEETED;
            if (tmp) {
              const obj = transitionState(isDismissable[17]);
              obj.runOnJS(cleanUp)();
            }
          };
          obj4 = { visible: tmp, transitionState, TransitionStates: tmp3(tmp4[18]).TransitionStates, runOnJS: tmp3(tmp4[17]).runOnJS, cleanUp };
          fn.__closure = obj4;
          fn.__workletHash = 9063471386550;
          fn.__initData = closure_17;
          obj.opacity = withTiming(value1, obj1, "animate-always", fn);
          return obj;
        }
      }
      cResult[10] = tmp4.alertContentWrapper;
      cResult[11] = items1;
      tmp26 = items1;
    } else {
      class F {
        constructor() {
          const tmp = isDismissable;
          if (tmp) {
            const obj = actions_AlertActionCreatorsDefault;
            obj.close();
          }
          return true;
        }
      }
    }
    if (cResult[12] === animatedStyle) {
      class F {
        constructor() {
          const tmp = isDismissable;
          if (tmp) {
            const obj = actions_AlertActionCreatorsDefault;
            obj.close();
          }
          return true;
        }
      }
      if (cResult[15] === tmp20) {
        class F {
          constructor() {
            const tmp = isDismissable;
            if (tmp) {
              const obj = actions_AlertActionCreatorsDefault;
              obj.close();
            }
            return true;
          }
        }
        if (cResult[18] === tmp23) {
          class F {
            constructor() {
              const tmp = isDismissable;
              if (tmp) {
                const obj = actions_AlertActionCreatorsDefault;
                obj.close();
              }
              return true;
            }
          }
          if (cResult[21] === tmp30) {
            class F {
              constructor() {
                const tmp = isDismissable;
                if (tmp) {
                  const obj = actions_AlertActionCreatorsDefault;
                  obj.close();
                }
                return true;
              }
            }
          }
          let obj4 = { style: null, children: items2 };
          class I {
            constructor() {
              tmp = closure_4;
              tmp3 = closure_0;
              tmp4 = closure_2;
              value = closure_4.get();
              tmp5 = closure_0(closure_2[19]);
              withTiming = tmp5.withTiming;
              value1 = closure_4.get();
              num = 100;
              if (1 === value) {
                num = 250;
              }
              obj = { opacity: null };
              obj1 = { duration: num, easing: tmp3(tmp4[17]).Easing.linear };
              fn = function t(arg0) {
                const tmp = arg0 && 0 === sharedValue.get() && closure_1_0 === transitionState(isDismissable[18]).TransitionStates.YEETED;
                if (tmp) {
                  const obj = transitionState(isDismissable[17]);
                  obj.runOnJS(cleanUp)();
                }
              };
              obj4 = { visible: tmp, transitionState, TransitionStates: tmp3(tmp4[18]).TransitionStates, runOnJS: tmp3(tmp4[17]).runOnJS, cleanUp };
              fn.__closure = obj4;
              fn.__workletHash = 9063471386550;
              fn.__initData = closure_17;
              obj.opacity = withTiming(value1, obj1, "animate-always", fn);
              return obj;
            }
          }
          items2 = [tmp30, tmp35];
          cResult[21] = tmp30;
          cResult[22] = tmp35;
          cResult[23] = tmp26;
          cResult[24] = closure_13(cleanUp(isDismissable[24]), obj4);
          const tmp40 = closure_13(cleanUp(isDismissable[24]), obj4);
        }
        const obj5 = { style: null, children: tmp23 };
        class I {
          constructor() {
            tmp = closure_4;
            tmp3 = closure_0;
            tmp4 = closure_2;
            value = closure_4.get();
            tmp5 = closure_0(closure_2[19]);
            withTiming = tmp5.withTiming;
            value1 = closure_4.get();
            num = 100;
            if (1 === value) {
              num = 250;
            }
            obj = { opacity: null };
            obj1 = { duration: num, easing: tmp3(tmp4[17]).Easing.linear };
            fn = function t(arg0) {
              const tmp = arg0 && 0 === sharedValue.get() && closure_1_0 === transitionState(isDismissable[18]).TransitionStates.YEETED;
              if (tmp) {
                const obj = transitionState(isDismissable[17]);
                obj.runOnJS(cleanUp)();
              }
            };
            obj4 = { visible: tmp, transitionState, TransitionStates: tmp3(tmp4[18]).TransitionStates, runOnJS: tmp3(tmp4[17]).runOnJS, cleanUp };
            fn.__closure = obj4;
            fn.__workletHash = 9063471386550;
            fn.__initData = closure_17;
            obj.opacity = withTiming(value1, obj1, "animate-always", fn);
            return obj;
          }
        }
        cResult[18] = tmp23;
        cResult[19] = animatedStyle2;
        cResult[20] = closure_12(cleanUp(isDismissable[17]).View, obj5);
        const tmp37 = closure_12(cleanUp(isDismissable[17]).View, obj5);
      }
      class I {
        constructor() {
          tmp = closure_4;
          tmp3 = closure_0;
          tmp4 = closure_2;
          value = closure_4.get();
          tmp5 = closure_0(closure_2[19]);
          withTiming = tmp5.withTiming;
          value1 = closure_4.get();
          num = 100;
          if (1 === value) {
            num = 250;
          }
          obj = { opacity: null };
          obj1 = { duration: num, easing: tmp3(tmp4[17]).Easing.linear };
          fn = function t(arg0) {
            const tmp = arg0 && 0 === sharedValue.get() && closure_1_0 === transitionState(isDismissable[18]).TransitionStates.YEETED;
            if (tmp) {
              const obj = transitionState(isDismissable[17]);
              obj.runOnJS(cleanUp)();
            }
          };
          obj4 = { visible: tmp, transitionState, TransitionStates: tmp3(tmp4[18]).TransitionStates, runOnJS: tmp3(tmp4[17]).runOnJS, cleanUp };
          fn.__closure = obj4;
          fn.__workletHash = 9063471386550;
          fn.__initData = closure_17;
          obj.opacity = withTiming(value1, obj1, "animate-always", fn);
          return obj;
        }
      }
      tmp33[4] = tmp20;
      tmp33[5] = tmp27;
      cResult[15] = tmp20;
      cResult[16] = tmp27;
      cResult[17] = closure_12(closure_5, tmp33);
      const tmp34 = closure_12(closure_5, tmp33);
    }
    const obj6 = { style: items3 };
    items3 = [tmp4.alertWrapper, animatedStyle];
    cResult[12] = animatedStyle;
    cResult[13] = tmp4.alertWrapper;
    cResult[14] = closure_12(cleanUp(isDismissable[17]).View, obj6);
    const tmp29 = closure_12(cleanUp(isDismissable[17]).View, obj6);
  }
  class D {
    constructor() {
      let num = 1;
      set = sharedValue.set;
      if (transitionState === native.TransitionStates.YEETED) {
        num = 0;
      }
      const result = set(num);
    }
  }
  const items4 = [transitionState, sharedValue];
  cResult[2] = transitionState;
  cResult[3] = sharedValue;
  cResult[4] = D;
  cResult[5] = items4;
  tmp12 = items4;
  tmp11 = D;
}) : (function AlertWrapper(item) {
  let items3;
  let items4;
  let items5;
  let obj6;
  let obj8;
  let renderAlert;
  let renderKey;
  let tmp13;
  let useReducedMotion;
  item = item.item;
  const isDismissable = item.isDismissable;
  const transitionState = item.transitionState;
  const cleanUp = item.cleanUp;
  let sharedValue;
  ({ renderAlert, renderKey } = item);
  let tmp = closure_15();
  const tmp3 = cleanUp;
  let obj = isDismissable(cleanUp[16]);
  let items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let tmp5 = isDismissable(cleanUp[17]);
  const useSharedValue = tmp5.useSharedValue;
  let num = 0;
  if (transitionState === isDismissable(cleanUp[18]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  let items1 = [transitionState, sharedValue];
  const effect = stateFromStores.useEffect(() => {
    let num = 1;
    set = sharedValue.set;
    if (transitionState === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = set(num);
  }, items1);
  let fn = function b() {
    let fn;
    let obj2;
    let tmp = sharedValue;
    const value = sharedValue.get();
    const withTiming = timing.withTiming;
    const value2 = sharedValue.get();
    let num = 100;
    if (1 === value) {
      num = 250;
    }
    let obj = { opacity: withTiming(value2, obj2, "animate-always", fn) };
    fn = function t(arg0) {
      const tmp = arg0 && 0 === sharedValue.get() && transitionState === isDismissable(cleanUp[18]).TransitionStates.YEETED;
      if (tmp) {
        const obj = isDismissable(cleanUp[17]);
        obj.runOnJS(closure_1_2)();
      }
    };
    obj2 = { duration: num, easing: ReanimatedRexport.Easing.linear };
    fn.__closure = { visible: tmp, transitionState, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    fn.__workletHash = 1014175478769;
    fn.__initData = __initData;
    ({ visible: tmp, transitionState, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp });
    return obj;
  };
  const tmp2Result = isDismissable(tmp3[17]);
  let obj2 = { visible: sharedValue, withTiming: tmp2(tmp3[19]).withTiming, Easing: tmp2(tmp3[17]).Easing, transitionState, TransitionStates: tmp2(tmp3[18]).TransitionStates, runOnJS: tmp2(tmp3[17]).runOnJS, cleanUp };
  fn.__closure = obj2;
  fn.__workletHash = 2573956772599;
  fn.__initData = __initData4;
  const animatedStyle = tmp2Result.useAnimatedStyle(fn);
  const fn2 = function v() {
    let Easing;
    let tmp14;
    const obj = { transform: null };
    if (stateFromStores) {
      const items = [{ scale: 1 }];
      obj.transform = items;
      tmp14 = obj;
    } else {
      let withSpringResult;
      if (1 === sharedValue.get()) {
        const obj3 = spring;
        withSpringResult = obj3.withSpring(1, springPresets.SUBTLE_SPRING);
      } else {
        const obj2 = { duration: 100, easing: Easing.in(ReanimatedRexport.Easing.ease) };
        const withTiming = timing.withTiming;
        timing;
        Easing = ReanimatedRexport.Easing;
        withSpringResult = withTiming(0, obj2);
      }
      const items1 = [{ scale: withSpringResult }];
      const obj4 = { scale: withSpringResult };
      obj.transform = items1;
      tmp14 = obj;
    }
    return tmp14;
  };
  const tmp2Result2 = isDismissable(tmp3[17]);
  let obj3 = { useReducedMotion: stateFromStores, visible: sharedValue, withSpring: tmp2(tmp3[20]).withSpring, SUBTLE_SPRING: tmp2(tmp3[21]).SUBTLE_SPRING, withTiming: tmp2(tmp3[19]).withTiming, Easing: tmp2(tmp3[17]).Easing };
  fn2.__closure = obj3;
  fn2.__workletHash = 3013477716479;
  fn2.__initData = __initData5;
  const items2 = [isDismissable];
  const animatedStyle1 = tmp2Result2.useAnimatedStyle(fn2);
  const callback = stateFromStores.useCallback(() => {
    const tmp = isDismissable;
    if (tmp) {
      const obj = actions_AlertActionCreatorsDefault;
      obj.close();
    }
    return true;
  }, items2);
  transitionState(tmp3[23])(callback);
  let obj4 = { onClose: transitionState(tmp3[22]).close };
  const obj5 = { dialogKey: renderKey, onDismiss: callback, children: closure_13(tmp13, obj6) };
  const renderAlertResult = renderAlert(obj4);
  const Dialog = tmp2(tmp3[25]).Dialog;
  obj6 = { style: items3, children: items5 };
  items3 = [sharedValue.absoluteFill, tmp.alertContentWrapper];
  const obj7 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none", accessible: false, onPress: callback, children: closure_12(transitionState(tmp3[17]).View, obj8) };
  obj8 = { style: items4 };
  items4 = [tmp.alertWrapper, animatedStyle];
  tmp13 = transitionState(tmp3[24]);
  items5 = [closure_12(closure_5, obj7), closure_12(transitionState(tmp3[17]).View, { style: animatedStyle1, children: renderAlertResult })];
  return closure_12(Dialog, obj5);
});
function renderAlertItem(arg0, item, transitionState, cleanUp) {
  const obj = { item, transitionState, cleanUp };
  return closure_12(closure_22, obj, arg0);
}
let closure_26 = Object.freeze({ renderAlert: "useSharedValue", renderKey: "apply", props: "next" });
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function Alerts() {
  let alertDismissable;
  let items3;
  let openModal;
  let ref;
  let renderAlert;
  let renderKey;
  let tmp12;
  let tmp14;
  let tmp15;
  let tmp5;
  let tmp6;
  let obj = require("react");
  const cResult = obj.c(12);
  let obj2 = react;
  _require = react.useRef(closure_26);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AlertStore];
    HermesBuiltin.arraySpread(items, openModal.getStores(), 1);
    let fn = function s() {
      const _alert = AlertStore.getAlert();
      const obj = AlertStore;
      if (null != _alert) {
        const obj2 = { renderAlert: _alert, renderKey: obj.getAlertKey(), props: null };
        return obj2;
      } else {
        openModal = openModal.getOpenModal();
        if (null != openModal) {
          const props = openModal.props;
          const _HermesInternal = HermesInternal;
          const combined = "alert-registery-" + openModal.key;
          if (combined === ref.current.renderKey) {
            let fn;
            if (shallowEqualDefault(props, ref.current.props)) {
              fn = tmp4.current.renderAlert;
            }
            return { renderAlert: fn, renderKey: combined, props: openModal.props };
          }
          fn = (arg0) => {
            const createElement = React.createElement;
            const component = openModal.component;
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(props);
            return <component />;
          };
        } else {
          return { renderAlert: "useSharedValue", renderKey: "apply", props: "next" };
        }
      }
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmp2Result = require("get initialized");
  const stateFromStoresObject = tmp2Result.useStateFromStoresObject(tmp5, tmp6);
  if (cResult[2] !== stateFromStoresObject) {
    const fn2 = function c() {
      ref.current = stateFromStoresObject;
    };
    cResult[2] = stateFromStoresObject;
    cResult[3] = fn2;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[3];
  }
  const effect = obj2.useEffect(tmp12);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AlertStore];
    class S {
      constructor() {
        return alertDismissable.isAlertDismissable();
      }
    }
    cResult[4] = items1;
    cResult[5] = S;
    tmp15 = S;
    tmp14 = items1;
  } else {
    tmp14 = cResult[4];
    tmp15 = cResult[5];
  }
  const tmp2Result2 = require("get initialized");
  const stateFromStores = tmp2Result2.useStateFromStores(tmp14, tmp15);
  ({ renderAlert, renderKey } = stateFromStoresObject);
  if (cResult[6] === stateFromStores) {
    if (cResult[7] === renderAlert) {
      let tmp18;
      let tmp19;
      if (cResult[8] === renderKey) {
        tmp18 = cResult[9];
      }
      if (cResult[10] !== tmp18) {
        const obj3 = { items: tmp18, renderItem: renderAlertItem, getItemKey: getAlertItemKey, wrapChildren: wrapAlerts };
        class S {
          constructor() {
            return alertDismissable.isAlertDismissable();
          }
        }
        const tmp23 = closure_12(require("native").TransitionGroup, obj3);
        cResult[10] = tmp18;
        cResult[11] = tmp23;
        tmp19 = tmp23;
      } else {
        tmp19 = cResult[11];
      }
      return tmp19;
    }
  }
  if (null != renderAlert) {
    const obj4 = { renderAlert, renderKey, isDismissable: null };
    class S {
      constructor() {
        return alertDismissable.isAlertDismissable();
      }
    }
    const items2 = [obj4];
    items3 = items2;
  } else {
    items3 = [];
  }
  cResult[6] = stateFromStores;
  cResult[7] = renderAlert;
  cResult[8] = renderKey;
  cResult[9] = items3;
  tmp18 = items3;
}) : (function Alerts() {
  let alertDismissable;
  let ref;
  let renderAlert;
  let stateFromStores;
  _require = renderAlert.useRef(closure_26);
  let obj = require("get initialized");
  let items = [AlertStore, ...closure_14.getStores()];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const _alert = AlertStore.getAlert();
    const obj = AlertStore;
    if (null != _alert) {
      const obj2 = { renderAlert: _alert, renderKey: obj.getAlertKey(), props: null };
      return obj2;
    } else {
      openModal = openModal.getOpenModal();
      if (null != openModal) {
        const props = openModal.props;
        const _HermesInternal = HermesInternal;
        const combined = "alert-registery-" + openModal.key;
        if (combined === ref.current.renderKey) {
          let fn;
          if (shallowEqualDefault(props, ref.current.props)) {
            fn = tmp4.current.renderAlert;
          }
          return { renderAlert: fn, renderKey: combined, props: openModal.props };
        }
        fn = (arg0) => {
          const createElement = React.createElement;
          const component = openModal.component;
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(props);
          return <component />;
        };
      } else {
        return { renderAlert: "useSharedValue", renderKey: "apply", props: "next" };
      }
    }
  });
  const effect = renderAlert.useEffect(() => {
    ref.current = stateFromStoresObject;
  });
  let obj2 = require("get initialized");
  let items1 = [AlertStore];
  stateFromStores = obj2.useStateFromStores(items1, () => alertDismissable.isAlertDismissable());
  renderAlert = stateFromStoresObject.renderAlert;
  const renderKey = stateFromStoresObject.renderKey;
  const items2 = [renderAlert, renderKey, stateFromStores];
  const memo = renderAlert.useMemo(() => {
    let items1;
    if (null != renderAlert) {
      const items = [{ renderAlert: tmp, renderKey, isDismissable: stateFromStores }];
      items1 = items;
      const obj = { renderAlert: tmp, renderKey, isDismissable: stateFromStores };
    } else {
      items1 = [];
    }
    return items1;
  }, items2);
  const obj3 = { items: memo, renderItem: renderAlertItem, getItemKey: getAlertItemKey, wrapChildren: wrapAlerts };
  return closure_12(require("native").TransitionGroup, obj3);
}));
let result = size.fileFinishedImporting("components_native/common/Alerts.tsx");

export default memoResult;
