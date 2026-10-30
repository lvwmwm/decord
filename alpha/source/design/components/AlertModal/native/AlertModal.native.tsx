// Module ID: 5959
// Function ID: 5960
// Name: AlertModal
// Dependencies: [5, 32, 717, 19, 17, 1341, 1083, 21, 5009, 575, 5075, 5955, 5090, 1889, 5960, 6012, 1260, 5593, 1114, 5023, 1626, 6016, 1492, 6017, 6022, 5619, 6023, 5632, 5629, 2]
// Exports: showConfirmModal, useDismissModalCallback

// Module 5959 (AlertModal)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import intl2 from "intl" /* 1114 */;
import StandardAnalyticsConstants from "StandardAnalyticsConstants" /* 1341 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1889 */;
import native from "native" /* 5075 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import spring from "spring" /* 5632 */;
import useAlertStore2 from "useAlertStore" /* 5955 */;
import OverlayViewDefault from "OverlayView" /* 5960 */;
import Dialog2 from "Dialog" /* 6012 */;
import react_native from "react-native" /* 6016 */;
import Stack_Stack from "Stack/Stack" /* 6022 */;
import useTrackImpressionDefault from "useTrackImpression" /* 6023 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _toArray from "_toArray" /* 717 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, c4, dependencyMap;

let c9;
let closure_12;
let map1;
let metroImportAll;
let metroImportDefault;
let size;
let tmp;
let unpackModuleId;
const ReanimatedRexport = tmp(5090);
function getAlertModalItemKey(key) {
  return key.key;
}
function dismissTopAlert() {
  let closure_0;
  const useAlertStore = require("useAlertStore").useAlertStore;
  const arr = _toArray(useAlertStore.getState().alerts);
  const first = arr[0];
  _require = arr.slice(1);
  const tmp4 = null != first && false === first.dismissable;
  if (!tmp4) {
    let key;
    const dismissAlert = require("useAlertStore").dismissAlert;
    require("useAlertStore");
    if (first != null) {
      key = first.key;
    }
    dismissAlert(key);
    const tmpResult2 = require("react-native");
    tmpResult2.batchUpdates(() => {
      const useAlertStore = context(context2[11]).useAlertStore;
      const obj = { alerts };
      return useAlertStore.setState(obj);
    });
  }
}
function AlertModalBackdrop() {
  let closure_2;
  let intl;
  let sharedTransitionState;
  let tmp10;
  let tmp4;
  const context = react.useContext(closure_17);
  [sharedTransitionState, tmp4] = useSharedAnimationState();
  dependencyMap = tmp4;
  const tmp5 = context;
  let obj = context(5955);
  const alertStore = obj.useAlertStore((arg0) => {
    const first = arg0.alerts[0];
    let dismissable;
    if (first != null) {
      dismissable = first.dismissable;
    }
    return false !== dismissable;
  });
  obj2 = context(5090);
  let fn = function t() {
    let fn;
    let value = closure_2.get();
    if (typeof withAlertModalSpring === "function") {
      let obj = { opacity: obj2.withSpring(value, obj2, "animate-always", fn) };
      fn = (arg0) => {
        let tmp = true === arg0 && 0 === closure_1_2.get();
        if (tmp) {
          const value = sharedTransitionState.get();
          tmp = value === context(closure_2[10]).TransitionStates.YEETED;
        }
        if (tmp) {
          const obj = context(closure_2[12]);
          obj.runOnJS(closure_1_0)();
        }
      };
      obj2 = spring;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  fn.__closure = { withAlertModalSpring, sharedVisible: tmp4, sharedTransitionState, TransitionStates: context(5075).TransitionStates, runOnJS: context(5090).runOnJS, cleanUp: context };
  fn.__workletHash = 4470729133936;
  fn.__initData = __initData;
  ({ withAlertModalSpring, sharedVisible: tmp4, sharedTransitionState, TransitionStates: context(5075).TransitionStates, runOnJS: context(5090).runOnJS, cleanUp: context });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj4 = { blur: "strong", style: animatedStyle, onDismiss: tmp10, accessibilityLabel: intl.string(tmp5(1114).t.Xkfav5) };
  tmp10 = null;
  const Backdrop = context(5593).Backdrop;
  const tmp9 = closure_11;
  if (alertStore) {
    tmp10 = dismissTopAlert;
  }
  intl = tmp5(1114).intl;
  return tmp9(Backdrop, obj4);
}
class AlertModal {
  constructor(arg0) {
    let Stack;
    let actions;
    let content;
    let extraContent;
    let header;
    let items2;
    let items3;
    let items4;
    let items5;
    let title;
    let trackingProps;
    ({ content, actions, trackingProps } = arg0);
    let sharedTransitionState;
    ({ header, title, extraContent } = arg0);
    let context = sharedTransitionState.useContext(closure_17);
    const context1 = sharedTransitionState.useContext(closure_18);
    const tmp3 = closure_14();
    const context2 = sharedTransitionState.useContext(closure_20);
    const tmp5 = context;
    const tmp6 = context2;
    const enabled = sharedTransitionState.useContext(context(context2[19]).AccessibilityPreferencesContext).reducedMotion.enabled;
    const ref = sharedTransitionState.useRef(null);
    let obj = context(context2[12]);
    const sharedValue = obj.useSharedValue(context1);
    const tmp9 = ref(useSharedAnimationState(), 2);
    sharedTransitionState = tmp9[0];
    let closure_7 = tmp11;
    const rect = context1(context2[20])();
    const top = rect.top;
    const bottom = rect.bottom;
    let items = [context1];
    const effect = sharedTransitionState.useEffect(() => {
      if (0 === context1) {
        obj2 = { ref, delay: 300 };
        const obj = react_native;
        const result = obj.setAccessibilityFocus(obj2);
      }
    }, items);
    const height = context1(context2[22])().height;
    obj2 = context(context2[12]);
    class B {
      constructor() {
        let items;
        let obj3;
        let onComplete;
        let str3;
        let tmp5Result;
        let tmp5Result2;
        const diff = height - 32;
        let obj = closure_7;
        const result = 2 * Math.max(top, bottom);
        let value = closure_7.get();
        if (typeof withAlertModalSpring === "function") {
          obj2 = { position: "absolute", opacity: obj3.withSpring(value, obj2, "animate-always", onComplete), zIndex: 10 - sharedValue.get(), height: str3, maxHeight: diff - result, transform: items };
          onComplete = function onComplete(arg0) {
            let tmp = true === arg0 && 0 === closure_1_7.get();
            if (tmp) {
              const value = sharedTransitionState.get();
              tmp = value === context(context2[10]).TransitionStates.YEETED;
            }
            if (tmp) {
              const obj = context(context2[12]);
              obj.runOnJS(closure_1_0)();
            }
          };
          obj3 = spring;
          str3 = "auto";
          if (sharedValue.get() > 0) {
            str3 = context2.get();
          }
          const tmp12 = enabled;
          if (tmp12) {
            items = [];
          } else {
            let num3 = 0.7;
            if (1 === obj.get()) {
              num3 = 1 - 0.1 * obj4.get();
            }
            if (typeof withAlertModalSpring === "function") {
              let diff1;
              const obj5 = { scale: tmp5Result.withSpring(num3, obj2, "animate-always", undefined) };
              items = [obj5, ];
              tmp5Result = spring;
              if (1 === obj.get()) {
                let result1 = [0, -20, -34][obj4.get(obj4)];
                if (result1 == null) {
                  result1 = -12 * obj.get();
                }
                diff1 = result1;
              } else {
                diff1 = 50 - 50 * obj4.get();
              }
              if (typeof withAlertModalSpring === "function") {
                const obj6 = { translateY: tmp5Result2.withSpring(diff1, obj2, "animate-always", undefined) };
                items[1] = obj6;
                tmp5Result2 = spring;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          return obj2;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
    let obj3 = { sharedVisible: tmp11, sharedTransitionState, TransitionStates: context(context2[10]).TransitionStates, runOnJS: context(context2[12]).runOnJS, cleanUp: context, windowHeight: height, ALERT_MODAL_MARGIN: 16, safeAreaTop: top, safeAreaBottom: bottom, withAlertModalSpring, sharedIndex: sharedValue, sharedTopHeight: context2, useReducedMotion: enabled };
    B.__closure = obj3;
    B.__workletHash = 655123755546;
    B.__initData = __initData2;
    const items1 = [context1, sharedValue];
    const animatedStyle = obj2.useAnimatedStyle(B);
    const layoutEffect = sharedTransitionState.useLayoutEffect(() => {
      const result = sharedValue.set(context1);
    }, items1);
    context1(context2[23])(() => {
      let alerts;
      let useAlertStore = context(context2[11]).useAlertStore;
      const arr = sharedValue(useAlertStore.getState().alerts);
      const first = arr[0];
      context = arr.slice(1);
      const tmp4 = null != first && false === first.dismissable;
      if (!tmp4) {
        let key;
        const dismissAlert = context(context2[11]).dismissAlert;
        context(context2[11]);
        if (first != null) {
          key = first.key;
        }
        dismissAlert(key);
        const tmpResult2 = context(context2[16]);
        tmpResult2.batchUpdates(() => {
          const useAlertStore = context(context2[11]).useAlertStore;
          const obj = { alerts };
          return useAlertStore.setState(obj);
        });
      }
      return true;
    });
    let str = "no-hide-descendants";
    const View = context1(context2[12]).View;
    if (0 === context1) {
      str = "auto";
    }
    const obj4 = {
      importantForAccessibility: str,
      accessibilityElementsHidden: 0 !== context1,
      style: items2,
      onLayout(nativeEvent) {
        const result = context2.set(nativeEvent.nativeEvent.layout.height);
      },
      children: items3
    };
    items2 = [tmp3.content, animatedStyle];
    let tmp18 = null;
    if (0 === context1) {
      tmp18 = null;
      if (null != trackingProps) {
        let obj5 = { trackingProps };
        tmp18 = closure_11(AlertModalImpression, obj5);
      }
    }
    items3 = [tmp18, ];
    let obj6 = { style: tmp3.overflow, children: closure_12(Stack, { spacing: 24, children: items4 }) };
    items4 = [header, , , ];
    Stack = tmp5(tmp6[24]).Stack;
    const obj7 = { spacing: 8, style: tmp3.body, children: items5 };
    const Stack2 = tmp5(tmp6[24]).Stack;
    items5 = [closure_11(tmp5(tmp6[25]).Text, { ref, variant: "heading-lg/bold", accessibilityRole: "header", color: "mobile-text-heading-primary", children: title }), ];
    let tmp21Result = null;
    const tmp22 = bottom;
    const tmp23 = closure_7;
    if (null != content) {
      tmp21Result = null;
      if ("" !== content) {
        const obj8 = { variant: "text-md/medium", color: "text-default", style: tmp3.contentText, children: content };
        tmp21Result = tmp21(tmp5(tmp6[25]).Text, obj8);
      }
    }
    items5[1] = tmp21Result;
    items4[1] = closure_12(Stack2, obj7);
    items4[2] = extraContent;
    let tmp21Result2 = null;
    if (null != actions) {
      const obj9 = { children: actions };
      tmp21Result2 = tmp21(AlertActions, obj9);
    }
    items4[3] = tmp21Result2;
    const obj10 = { alwaysBounceVertical: false, children: closure_11(tmp23, obj6) };
    items3[1] = closure_11(tmp22, obj10);
    return closure_12(View, obj4);
  }
}
function AlertModalImpression(trackingProps) {
  let impressionName;
  let impressionProperties;
  trackingProps = trackingProps.trackingProps;
  let MODAL = trackingProps.impressionType;
  const tmp = useTrackImpressionDefault;
  if (MODAL == null) {
    MODAL = ImpressionTypes.MODAL;
  }
  const impression = trackingProps.impression;
  const obj = { type: MODAL, name: impressionName, properties: impressionProperties };
  impressionName = undefined;
  if (impression != null) {
    impressionName = impression.impressionName;
  }
  const impression2 = trackingProps.impression;
  impressionProperties = undefined;
  if (impression2 != null) {
    impressionProperties = impression2.impressionProperties;
  }
  obj2 = { disableTrack: trackingProps.disableTrack, trackOnInitialLoad: true };
  tmp(obj, obj2);
  return null;
}
function useSharedAnimationState() {
  let sharedValue;
  let obj = react;
  const context = react.useContext(closure_16);
  const context1 = react.useContext(closure_17);
  const useSharedValue = context(sharedValue[12]).useSharedValue;
  let num = 0;
  const tmp5 = context(sharedValue[12]);
  if (context === context(sharedValue[10]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  const tmp3Result = context(sharedValue[12]);
  const sharedValue1 = tmp3Result.useSharedValue(context);
  const items = [sharedValue, context, sharedValue1];
  const layoutEffect = obj.useLayoutEffect(() => {
    const result = sharedValue1.set(context);
  }, items);
  const fn = function n() {
    return sharedValue1.get();
  };
  fn.__closure = { sharedTransitionState: sharedValue1 };
  fn.__workletHash = 14603144870585;
  fn.__initData = __initData3;
  const fn2 = function t(arg0) {
    if (arg0 === native.TransitionStates.YEETED) {
      const obj = sharedValue;
      if (1 === sharedValue.get()) {
        const result = obj.set(0);
      } else {
        const tmpResult = ReanimatedRexport;
        tmpResult.runOnJS(context1)();
      }
    } else {
      const result1 = sharedValue.set(1);
    }
  };
  const tmp3Result2 = context(sharedValue[12]);
  fn2.__closure = { TransitionStates: context(sharedValue[10]).TransitionStates, sharedVisible: sharedValue, runOnJS: context(sharedValue[12]).runOnJS, cleanUp: context1 };
  fn2.__workletHash = 9486923983340;
  fn2.__initData = __initData4;
  ({ TransitionStates: context(sharedValue[10]).TransitionStates, sharedVisible: sharedValue, runOnJS: context(sharedValue[12]).runOnJS, cleanUp: context1 });
  const animatedReaction = tmp3Result2.useAnimatedReaction(fn, fn2);
  const items1 = [sharedValue1, sharedValue];
  return items1;
}
class AlertActions {
  constructor(children) {
    return unpackModuleId(Stack_Stack.Stack, { spacing: 12, children: children.children });
  }
}
class AlertActionButton {
  constructor(arg0) {
    let closure_1;
    let closure_2;
    let first;
    let loading;
    let require;
    ({ onPress: require, loading } = arg0);
    const merged = Object.assign(arg0, Object.assign({ onPress: 0, loading: 0 }));
    closure_1 = undefined;
    [first, closure_1] = react.useState(false);
    dependencyMap = react.useContext(closure_19);
    const tmp4 = closure_11;
    let obj = {
      grow: true,
      loading,
      onPress: function() {
        return closure_0(...arguments);
      }
    };
    const Button = components_Button_Button.Button;
    const merged1 = Object.assign(merged);
    if (loading == null) {
      loading = first;
    }
    let closure_0 = _asyncToGenerator(async (arg0, value) => {
      closure_0 = arg0;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c3;
        try {
          c4 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let tmp8;
              if (closure_0 != null) {
                tmp8 = closure_0(closure_0);
              }
              if (null != tmp8) {
                if (tmp8 instanceof Promise) {
                  tmp(true);
                  c3 = 1;
                  c2 = 2;
                  c4 = 1;
                  const obj5 = { value: tmp8, done: false };
                  return obj5;
                }
              }
            }
          } else if (1 === tmp4) {
            c3 = 0;
            tmp(false);
            c4 = 3;
            const obj6 = { value: undefined, done: true };
            return obj6;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
          }
          const obj3 = closure_0(closure_2_2[11]);
          obj3.dismissAlert(c2);
          c4 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp16) {
          if (0 === c3) {
            c4 = 3;
            throw tmp16;
          } else {
            c2 = 1;
          }
        }
      }
    });
    return tmp4(Button, obj);
  }
}
({ View: metroImportDefault, StyleSheet: metroImportAll, ScrollView: c9 } = react_native2);
const ImpressionTypes = StandardAnalyticsConstants.ImpressionTypes;
const NOOP = Constants.NOOP;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { root: { flex: 1, position: "relative", justifyContent: "center", alignItems: "center", paddingHorizontal: 16 }, content: size, overflow: { width: "100%", height: "100%", overflow: "hidden", padding: 24, position: "relative" }, body: { alignItems: "center" }, contentText: { textAlign: "center" } };
size = { backgroundColor: nativeDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT, margin: 16, width: "100%", maxWidth: 400, height: "100%", borderRadius: nativeDefault.radii.xl, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
let merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
const authStore3 = createStyles(obj);
let obj2 = { overshootClamping: true, damping: 35, stiffness: 450, mass: 0.5, restDisplacementThreshold: 0.001 };
let context = react.createContext(native.TransitionStates.YEETED);
let context2 = react.createContext(NOOP);
const context3 = react.createContext(0);
const context4 = react.createContext("");
const context5 = react.createContext(null);
const __initData = { code: "function AlertModalNativeTsx1(){const{withAlertModalSpring,sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withAlertModalSpring(sharedVisible.get(),function(finished){if(finished===true&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}})};}" };
const __initData2 = { code: "function AlertModalNativeTsx2(){const{sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp,windowHeight,ALERT_MODAL_MARGIN,safeAreaTop,safeAreaBottom,withAlertModalSpring,sharedIndex,sharedTopHeight,useReducedMotion}=this.__closure;var _CARD_OFFSETS$sharedI;function onComplete(finished){if(finished===true&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}const CARD_OFFSETS=[0,-20,-34];const maxHeight=windowHeight-ALERT_MODAL_MARGIN*2-Math.max(safeAreaTop,safeAreaBottom)*2;return{position:'absolute',opacity:withAlertModalSpring(sharedVisible.get(),onComplete),zIndex:10-sharedIndex.get(),height:sharedIndex.get()>0?sharedTopHeight.get():'auto',maxHeight:maxHeight,transform:useReducedMotion?[]:[{scale:withAlertModalSpring(sharedVisible.get()===1?1-sharedIndex.get()*0.1:0.7)},{translateY:withAlertModalSpring(sharedVisible.get()===1?(_CARD_OFFSETS$sharedI=CARD_OFFSETS[sharedIndex.get()])!==null&&_CARD_OFFSETS$sharedI!==void 0?_CARD_OFFSETS$sharedI:sharedVisible.get()*-12:50-sharedIndex.get()*50)}]};}" };
function withAlertModalSpring(targetHeight, fn2) {
  const obj = spring;
  return obj.withSpring(targetHeight, obj2, "animate-always", fn2);
}
let obj3 = { withSpring: spring.withSpring, MODAL_SPRING: obj2 };
withAlertModalSpring.__closure = obj3;
withAlertModalSpring.__workletHash = 15556562210180;
withAlertModalSpring.__initData = { code: "function withAlertModalSpring_AlertModalNativeTsx3(value,callback){const{withSpring,MODAL_SPRING}=this.__closure;return withSpring(value,MODAL_SPRING,'animate-always',callback);}" };
const __initData3 = { code: "function AlertModalNativeTsx4(){const{sharedTransitionState}=this.__closure;return sharedTransitionState.get();}" };
const __initData4 = { code: "function AlertModalNativeTsx5(transitionState){const{TransitionStates,sharedVisible,runOnJS,cleanUp}=this.__closure;if(transitionState===TransitionStates.YEETED){if(sharedVisible.get()===1){sharedVisible.set(0);}else{runOnJS(cleanUp)();}}else{sharedVisible.set(1);}}" };
const memoResult = react.memo(function AlertModalContainer() {
  let items;
  let redux;
  let redux2;
  let redux3;
  let redux4;
  let redux5;
  let root;
  let tmp = closure_14();
  _require = tmp;
  let obj = require("useAlertStore");
  const alertStore = obj.useAlertStore((alerts) => alerts.alerts);
  obj2 = require("ReanimatedRexport");
  const sharedValue = obj2.useSharedValue(0);
  const tmp3 = items;
  items = undefined;
  const tmp2 = _require;
  if (0 === alertStore.length) {
    items = [];
  } else {
    items = [{ type: "backdrop", key: "backdrop" }];
    let num = 3;
    const substr = alertStore.slice(0, 3);
    const item = substr.forEach((alert, index) => {
      const obj = { type: "alert", alert, key: alert.key, index };
      items.push(obj);
    });
  }
  const items1 = [items];
  const layoutEffect = react.useLayoutEffect(() => {
    if (items.length > 0) {
      const obj = KeyboardManagerUtils;
      const result = obj.dismissGlobalKeyboard();
    }
  }, items1);
  const items2 = [tmp];
  const items3 = [sharedValue];
  const callback = react.useCallback((children) => {
    let Dialog;
    let obj3;
    const obj = { style: metroImportAll.absoluteFillObject, children: unpackModuleId(Dialog, obj2) };
    obj2 = { onDismiss: dismissTopAlert, children: unpackModuleId(metroImportDefault, obj3) };
    obj3 = { style: root.root, pointerEvents: "box-none", children };
    const tmp = OverlayViewDefault;
    Dialog = Dialog2.Dialog;
    return unpackModuleId(tmp, obj);
  }, items2);
  const callback1 = react.useCallback((value, type, value2, value3) => {
    let Provider2;
    let Provider3;
    let Provider4;
    let Provider5;
    let node;
    let obj3;
    let obj4;
    let obj5;
    if ("alert" === type.type) {
      node = type.alert.node;
    } else {
      node = unpackModuleId(AlertModalBackdrop, {});
    }
    let num = -1;
    if ("alert" === type.type) {
      num = type.index;
    }
    const obj = { value: sharedValue, children: unpackModuleId(Provider2, obj2) };
    obj2 = { value: value3, children: unpackModuleId(Provider3, obj3) };
    obj3 = { value: value2, children: unpackModuleId(Provider4, obj4) };
    const Provider = redux5.Provider;
    Provider2 = redux2.Provider;
    Provider3 = redux.Provider;
    Provider4 = redux3.Provider;
    obj4 = { value: num, children: unpackModuleId(Provider5, obj5) };
    Provider5 = redux4.Provider;
    obj5 = { value, children: unpackModuleId(react.Suspense, { fallback: null, children: node }) };
    return unpackModuleId(Provider, obj, value);
  }, items3);
  let obj3 = { wrapChildren: callback, items, renderItem: callback1, getItemKey: getAlertModalItemKey };
  return closure_11(tmp2(tmp3[10]).TransitionGroup, obj3);
});
size = size_mod;
let result = size.fileFinishedImporting("design/components/AlertModal/native/AlertModal.native.tsx");

export const AlertModalContainer = memoResult;
export function useDismissModalCallback() {
  const context = react.useContext(closure_19);
  const items = [context];
  return react.useCallback(() => {
    const obj = useAlertStore2;
    obj.dismissAlert(context);
  }, items);
}
export { AlertModal };
export { AlertActions };
export { AlertActionButton };
export function showConfirmModal(arg0) {
  let cancelText;
  let confirmText;
  let content;
  let dismissable;
  let extraContent;
  let items;
  let key;
  let onCancel;
  let onCloseCallback;
  let onConfirm;
  let title;
  let variant;
  ({ key, cancelText } = arg0);
  ({ title, content, confirmText } = arg0);
  if (cancelText === undefined) {
    const intl = intl2.intl;
    cancelText = intl.string(intl2.t["ETE/oC"]);
  }
  ({ variant, extraContent } = arg0);
  if (variant === undefined) {
    variant = "destructive";
  }
  ({ onConfirm, onCancel, onCloseCallback, dismissable } = arg0);
  const obj = { title, content, extraContent, actions: authStore2(map1, obj2) };
  obj2 = { children: items };
  const openAlert = useAlertStore2.openAlert;
  items = [, ];
  useAlertStore2;
  items[0] = unpackModuleId(AlertActionButton, { variant, text: confirmText, onPress: onConfirm });
  items[1] = unpackModuleId(AlertActionButton, { variant: "secondary", text: cancelText, onPress: onCancel });
  const obj3 = { dismissable };
  openAlert(key, unpackModuleId(AlertModal, obj), onCloseCallback, obj3);
}
