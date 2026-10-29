// Module ID: 5952
// Function ID: 5953
// Name: AlertModal
// Dependencies: [5, 109, 32, 729, 19, 17, 1352, 1095, 21, 5005, 587, 5071, 558, 576, 5948, 5086, 1894, 5953, 6005, 1271, 1125, 5621, 5019, 1631, 6009, 1497, 6010, 5271, 6015, 6016, 5284, 5281, 2]
// Exports: showConfirmModal

// Module 5952 (AlertModal)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1095 */;
import intl2 from "intl" /* 1125 */;
import StandardAnalyticsConstants from "StandardAnalyticsConstants" /* 1352 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1894 */;
import native from "native" /* 5071 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import spring from "spring" /* 5284 */;
import useAlertStore2 from "useAlertStore" /* 5948 */;
import OverlayViewDefault from "OverlayView" /* 5953 */;
import Dialog2 from "Dialog" /* 6005 */;
import react_native from "react-native" /* 6009 */;
import useTrackImpressionDefault from "useTrackImpression" /* 6016 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _toArray from "_toArray" /* 729 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, batchUpdatesResult, c2, c4, dependencyMap, dismissAlertResult, flag, num2, num4, num5, num6, num7, obj1, str2, str4, str5, str6, str7, str8, tmp20, tmp21, tmp5Result1, tmpResult1;

let c10;
let c9;
let closure_14;
let closure_15;
let map1;
let size;
let tmp;
let unpackModuleId;
const ReanimatedRexport = tmp(5086);
const Stack_Stack = tmp(6015);
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
      const useAlertStore = context(context2[14]).useAlertStore;
      const obj = { alerts };
      return useAlertStore.setState(obj);
    });
  }
}
let closure_3 = ["onPress", "loading"];
({ View: c9, StyleSheet: c10, ScrollView: unpackModuleId } = react_native2);
const ImpressionTypes = StandardAnalyticsConstants.ImpressionTypes;
const NOOP = Constants.NOOP;
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { root: { flex: 1, position: "relative", justifyContent: "center", alignItems: "center", paddingHorizontal: 16 }, content: size, overflow: { width: "100%", height: "100%", overflow: "hidden", padding: 24, position: "relative" }, body: { alignItems: "center" }, contentText: { textAlign: "center" } };
size = { backgroundColor: nativeDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT, margin: 16, width: "100%", maxWidth: 400, height: "100%", borderRadius: nativeDefault.radii.xl, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
let merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
let closure_16 = createStyles(obj);
let obj2 = { overshootClamping: true, damping: 35, stiffness: 450, mass: 0.5, restDisplacementThreshold: 0.001 };
let context = react.createContext(native.TransitionStates.YEETED);
let context2 = react.createContext(NOOP);
const context3 = react.createContext(0);
const context4 = react.createContext("");
const context5 = react.createContext(null);
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
const __initData = { code: "function AlertModalNativeTsx1(){const{withAlertModalSpring,sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withAlertModalSpring(sharedVisible.get(),function(finished){if(finished===true&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}})};}" };
const __initData2 = { code: "function AlertModalNativeTsx2(){const{withAlertModalSpring,sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withAlertModalSpring(sharedVisible.get(),function(finished){if(finished===true&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}})};}" };
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function AlertModalContainer() {
  let first;
  let length;
  let redux;
  let redux2;
  let redux3;
  let redux4;
  let redux5;
  let root;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp7;
  let tmp9;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(14);
  const tmp4 = closure_16();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(alerts) {
      return alerts.alerts;
    };
    let num = 0;
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmpResult = tmp(5948);
  const alertStore = tmpResult.useAlertStore(first);
  const tmpResult2 = tmp(5086);
  const sharedValue = tmpResult2.useSharedValue(0);
  if (cResult[1] !== alertStore) {
    let items;
    if (0 === alertStore.length) {
      items = [];
    } else {
      items = [{ type: "backdrop", key: "backdrop" }];
      const substr = alertStore.slice(0, 3);
      const item = substr.forEach((alert, index) => {
        const obj = { type: "alert", alert, key: alert.key, index };
        items.push(obj);
      });
    }
    cResult[1] = alertStore;
    cResult[2] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[2];
  }
  dependencyMap = tmp7;
  if (cResult[3] !== tmp7) {
    const fn2 = function p() {
      if (length.length > 0) {
        const obj = KeyboardManagerUtils;
        const result = obj.dismissGlobalKeyboard();
      }
    };
    const items1 = [tmp7];
    cResult[3] = tmp7;
    cResult[4] = fn2;
    cResult[5] = items1;
    tmp10 = items1;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[4];
    tmp10 = cResult[5];
  }
  const layoutEffect = react.useLayoutEffect(tmp9, tmp10);
  if (cResult[6] !== tmp4.root) {
    const fn3 = function f(children) {
      let Dialog;
      let obj3;
      const obj = { style: authStore.absoluteFillObject, children: map1(Dialog, obj2) };
      obj2 = { onDismiss: dismissTopAlert, children: map1(React4, obj3) };
      obj3 = { style: root.root, pointerEvents: "box-none", children };
      const tmp = OverlayViewDefault;
      Dialog = Dialog2.Dialog;
      return map1(tmp, obj);
    };
    cResult[6] = tmp4.root;
    cResult[7] = fn3;
    tmp12 = fn3;
  } else {
    tmp12 = cResult[7];
  }
  if (cResult[8] !== sharedValue) {
    const fn4 = function b(value, type, value2, value3) {
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
        node = map1(closure_27, {});
      }
      let num = -1;
      if ("alert" === type.type) {
        num = type.index;
      }
      const obj = { value: sharedValue, children: map1(Provider2, obj2) };
      obj2 = { value: value3, children: map1(Provider3, obj3) };
      obj3 = { value: value2, children: map1(Provider4, obj4) };
      const Provider = redux5.Provider;
      Provider2 = redux2.Provider;
      Provider3 = redux.Provider;
      Provider4 = redux3.Provider;
      obj4 = { value: num, children: map1(Provider5, obj5) };
      Provider5 = redux4.Provider;
      obj5 = { value, children: map1(react.Suspense, { fallback: null, children: node }) };
      return map1(Provider, obj, value);
    };
    cResult[8] = sharedValue;
    cResult[9] = fn4;
    tmp13 = fn4;
  } else {
    tmp13 = cResult[9];
  }
  if (cResult[10] === tmp7) {
    if (cResult[11] === tmp13) {
      let tmp14;
      if (cResult[12] === tmp12) {
        tmp14 = cResult[13];
      }
      return tmp14;
    }
  }
  obj2 = { wrapChildren: tmp12, items: tmp7, renderItem: tmp13, getItemKey: getAlertModalItemKey };
  const tmp15 = closure_13(tmp(5071).TransitionGroup, obj2);
  cResult[10] = tmp7;
  cResult[11] = tmp13;
  cResult[12] = tmp12;
  cResult[13] = tmp15;
  tmp14 = tmp15;
}) : (function AlertModalContainer() {
  let items;
  let redux;
  let redux2;
  let redux3;
  let redux4;
  let redux5;
  let root;
  let tmp = closure_16();
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
    const obj = { style: authStore.absoluteFillObject, children: map1(Dialog, obj2) };
    obj2 = { onDismiss: dismissTopAlert, children: map1(React4, obj3) };
    obj3 = { style: root.root, pointerEvents: "box-none", children };
    const tmp = OverlayViewDefault;
    Dialog = Dialog2.Dialog;
    return map1(tmp, obj);
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
      node = map1(closure_27, {});
    }
    let num = -1;
    if ("alert" === type.type) {
      num = type.index;
    }
    const obj = { value: sharedValue, children: map1(Provider2, obj2) };
    obj2 = { value: value3, children: map1(Provider3, obj3) };
    obj3 = { value: value2, children: map1(Provider4, obj4) };
    const Provider = redux5.Provider;
    Provider2 = redux2.Provider;
    Provider3 = redux.Provider;
    Provider4 = redux3.Provider;
    obj4 = { value: num, children: map1(Provider5, obj5) };
    Provider5 = redux4.Provider;
    obj5 = { value, children: map1(react.Suspense, { fallback: null, children: node }) };
    return map1(Provider, obj, value);
  }, items3);
  let obj3 = { wrapChildren: callback, items, renderItem: callback1, getItemKey: getAlertModalItemKey };
  return closure_13(tmp2(tmp3[11]).TransitionGroup, obj3);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? (function AlertModalBackdrop() {
  let closure_2;
  let context;
  let first1;
  let sharedTransitionState;
  let tmp12;
  let tmp7;
  let tmp = context;
  let obj = context(576);
  const cResult = obj.c(5);
  context = react.useContext(closure_19);
  [sharedTransitionState, tmp7] = closure_37();
  dependencyMap = tmp7;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let fn = function t(arg0) {
      const first = arg0.alerts[0];
      let dismissable;
      if (first != null) {
        dismissable = first.dismissable;
      }
      return false !== dismissable;
    };
    cResult[0] = fn;
    first1 = fn;
  } else {
    first1 = cResult[0];
  }
  const tmpResult = tmp(5948);
  const alertStore = tmpResult.useAlertStore(first1);
  const fn2 = function p() {
    let fn;
    let value = closure_2.get();
    if (typeof withAlertModalSpring === "function") {
      let obj = { opacity: obj2.withSpring(value, obj2, "animate-always", fn) };
      fn = (arg0) => {
        let tmp = true === arg0 && 0 === closure_1_2.get();
        if (tmp) {
          const value = sharedTransitionState.get();
          tmp = value === context(closure_2[11]).TransitionStates.YEETED;
        }
        if (tmp) {
          const obj = context(closure_2[15]);
          obj.runOnJS(closure_1_0)();
        }
      };
      obj2 = spring;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  const tmpResult2 = tmp(5086);
  obj2 = { withAlertModalSpring, sharedVisible: tmp7, sharedTransitionState, TransitionStates: tmp(5071).TransitionStates, runOnJS: tmp(5086).runOnJS, cleanUp: context };
  fn2.__closure = obj2;
  fn2.__workletHash = 4470729133936;
  fn2.__initData = __initData;
  const animatedStyle = tmpResult2.useAnimatedStyle(fn2);
  let tmp11 = null;
  if (alertStore) {
    tmp11 = dismissTopAlert;
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(tmp(1125).t.Xkfav5);
    cResult[1] = stringResult;
    tmp12 = stringResult;
  } else {
    tmp12 = cResult[1];
  }
  if (cResult[2] === animatedStyle) {
    let tmp14;
    if (cResult[3] === tmp11) {
      tmp14 = cResult[4];
    }
    return tmp14;
  }
  const tmp15 = closure_13(tmp(5621).Backdrop, { blur: "strong", style: animatedStyle, onDismiss: tmp11, accessibilityLabel: tmp12 });
  cResult[2] = animatedStyle;
  cResult[3] = tmp11;
  cResult[4] = tmp15;
  tmp14 = tmp15;
}) : (function AlertModalBackdrop() {
  let closure_2;
  let intl;
  let sharedTransitionState;
  let tmp10;
  let tmp4;
  const context = react.useContext(closure_19);
  [sharedTransitionState, tmp4] = closure_37();
  dependencyMap = tmp4;
  const tmp5 = context;
  let obj = context(5948);
  const alertStore = obj.useAlertStore((arg0) => {
    const first = arg0.alerts[0];
    let dismissable;
    if (first != null) {
      dismissable = first.dismissable;
    }
    return false !== dismissable;
  });
  obj2 = context(5086);
  let fn = function t() {
    let fn;
    let value = closure_2.get();
    if (typeof withAlertModalSpring === "function") {
      let obj = { opacity: obj2.withSpring(value, obj2, "animate-always", fn) };
      fn = (arg0) => {
        let tmp = true === arg0 && 0 === closure_1_2.get();
        if (tmp) {
          const value = sharedTransitionState.get();
          tmp = value === context(closure_2[11]).TransitionStates.YEETED;
        }
        if (tmp) {
          const obj = context(closure_2[15]);
          obj.runOnJS(closure_1_0)();
        }
      };
      obj2 = spring;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  fn.__closure = { withAlertModalSpring, sharedVisible: tmp4, sharedTransitionState, TransitionStates: context(5071).TransitionStates, runOnJS: context(5086).runOnJS, cleanUp: context };
  fn.__workletHash = 10548540937715;
  fn.__initData = __initData2;
  ({ withAlertModalSpring, sharedVisible: tmp4, sharedTransitionState, TransitionStates: context(5071).TransitionStates, runOnJS: context(5086).runOnJS, cleanUp: context });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj4 = { blur: "strong", style: animatedStyle, onDismiss: tmp10, accessibilityLabel: intl.string(tmp5(1125).t.Xkfav5) };
  tmp10 = null;
  const Backdrop = context(5621).Backdrop;
  const tmp9 = closure_13;
  if (alertStore) {
    tmp10 = dismissTopAlert;
  }
  intl = tmp5(1125).intl;
  return tmp9(Backdrop, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
const __initData3 = { code: "function AlertModalNativeTsx3(){const{sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp,windowHeight,ALERT_MODAL_MARGIN,safeAreaTop,safeAreaBottom,withAlertModalSpring,sharedIndex,sharedTopHeight,useReducedMotion}=this.__closure;var _CARD_OFFSETS$sharedI;const onComplete=function onComplete(finished){if(finished===true&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}};const CARD_OFFSETS=[0,-20,-34];const maxHeight=windowHeight-ALERT_MODAL_MARGIN*2-Math.max(safeAreaTop,safeAreaBottom)*2;return{position:\"absolute\",opacity:withAlertModalSpring(sharedVisible.get(),onComplete),zIndex:10-sharedIndex.get(),height:sharedIndex.get()>0?sharedTopHeight.get():\"auto\",maxHeight:maxHeight,transform:useReducedMotion?[]:[{scale:withAlertModalSpring(sharedVisible.get()===1?1-sharedIndex.get()*0.1:0.7)},{translateY:withAlertModalSpring(sharedVisible.get()===1?(_CARD_OFFSETS$sharedI=CARD_OFFSETS[sharedIndex.get()])!==null&&_CARD_OFFSETS$sharedI!==void 0?_CARD_OFFSETS$sharedI:sharedVisible.get()*-12:50-sharedIndex.get()*50)}]};}" };
const __initData4 = { code: "function AlertModalNativeTsx4(){const{sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp,windowHeight,ALERT_MODAL_MARGIN,safeAreaTop,safeAreaBottom,withAlertModalSpring,sharedIndex,sharedTopHeight,useReducedMotion}=this.__closure;var _CARD_OFFSETS$sharedI;function onComplete(finished){if(finished===true&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}const CARD_OFFSETS=[0,-20,-34];const maxHeight=windowHeight-ALERT_MODAL_MARGIN*2-Math.max(safeAreaTop,safeAreaBottom)*2;return{position:'absolute',opacity:withAlertModalSpring(sharedVisible.get(),onComplete),zIndex:10-sharedIndex.get(),height:sharedIndex.get()>0?sharedTopHeight.get():'auto',maxHeight:maxHeight,transform:useReducedMotion?[]:[{scale:withAlertModalSpring(sharedVisible.get()===1?1-sharedIndex.get()*0.1:0.7)},{translateY:withAlertModalSpring(sharedVisible.get()===1?(_CARD_OFFSETS$sharedI=CARD_OFFSETS[sharedIndex.get()])!==null&&_CARD_OFFSETS$sharedI!==void 0?_CARD_OFFSETS$sharedI:sharedVisible.get()*-12:50-sharedIndex.get()*50)}]};}" };
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDismissModalCallback() {
  let context;
  let tmp3;
  let obj = context(576);
  const cResult = obj.c(2);
  context = react.useContext(closure_21);
  if (cResult[0] !== context) {
    const fn = function t() {
      const obj = useAlertStore2;
      obj.dismissAlert(context);
    };
    cResult[0] = context;
    cResult[1] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function useDismissModalCallback() {
  const context = react.useContext(closure_21);
  const items = [context];
  return react.useCallback(() => {
    const obj = useAlertStore2;
    obj.dismissAlert(context);
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function AlertModal(arg0) {
  let actions;
  let content;
  let context;
  let context2;
  let extraContent;
  let header;
  let items1;
  let sharedTransitionState;
  let title;
  let tmp14;
  let tmp15;
  let top;
  let trackingProps;
  let tmp = context;
  let obj = context(context2[13]);
  const cResult = obj.c(42);
  ({ header, title, content, actions, extraContent, trackingProps } = arg0);
  obj2 = top;
  context = top.useContext(closure_19);
  const context1 = top.useContext(closure_20);
  const tmp6 = closure_16();
  context2 = top.useContext(closure_22);
  const enabled = top.useContext(context(context2[22]).AccessibilityPreferencesContext).reducedMotion.enabled;
  const ref = top.useRef(null);
  let obj3 = context(context2[15]);
  const sharedValue = obj3.useSharedValue(context1);
  const tmp10 = sharedTransitionState(closure_37(), 2);
  sharedTransitionState = tmp10[0];
  let tmp12 = tmp10[1];
  let closure_7 = tmp12;
  const rect = context1(context2[23])();
  top = rect.top;
  const bottom = rect.bottom;
  if (cResult[0] !== context1) {
    const fn = function n() {
      if (0 === context1) {
        obj2 = { ref, delay: 300 };
        const obj = react_native;
        const result = obj.setAccessibilityFocus(obj2);
      }
    };
    let items = [context1];
    cResult[0] = context1;
    cResult[1] = fn;
    cResult[2] = items;
    tmp15 = items;
    tmp14 = fn;
  } else {
    tmp14 = cResult[1];
    tmp15 = cResult[2];
  }
  const effect = obj2.useEffect(tmp14, tmp15);
  const height = tmp13(tmp2[25])().height;
  const tmpResult = tmp(tmp2[15]);
  class Y {
    constructor() {
      diff = height - 32;
      tmp3 = withAlertModalSpring;
      obj = closure_7;
      result = 2 * Math.max(top, bottom);
      value = closure_7.get();
      if (typeof withAlertModalSpring === "function") {
        obj1 = { position: "absolute", opacity: null, zIndex: null, height: null, maxHeight: null, transform: null };
        tmp5 = closure_0;
        tmp6 = closure_2;
        onComplete = function onComplete(arg0) {
          let tmp = true === arg0 && 0 === closure_1_7.get();
          if (tmp) {
            const value = sharedTransitionState.get();
            tmp = value === context(context2[11]).TransitionStates.YEETED;
          }
          if (tmp) {
            const obj = context(context2[15]);
            obj.runOnJS(closure_1_0)();
          }
        };
        obj3 = closure_0(closure_2[30]);
        tmp7 = closure_17;
        str = "animate-always";
        tmp8 = obj3;
        tmp9 = value;
        tmp10 = closure_17;
        str2 = "animate-always";
        obj1.opacity = obj3.withSpring(value, closure_17, "animate-always", onComplete);
        obj4 = closure_5;
        num = 10;
        obj1.zIndex = 10 - closure_5.get();
        num2 = 0;
        str3 = "auto";
        if (closure_5.get() > 0) {
          tmp11 = closure_2;
          str3 = closure_2.get();
        }
        obj1.height = str3;
        obj1.maxHeight = diff - result;
        tmp12 = enabled;
        if (tmp12) {
          items = [];
        } else {
          num3 = 0.7;
          num4 = 1;
          if (1 === obj.get()) {
            num5 = 0.1;
            num3 = 1 - 0.1 * obj4.get();
          }
          if (typeof tmp3 === "function") {
            obj9 = { scale: null };
            tmp5Result = tmp5(tmp6[30]);
            tmp13 = tmp5Result;
            tmp14 = num3;
            tmp15 = tmp7;
            str4 = "animate-always";
            obj9.scale = tmp5Result.withSpring(num3, tmp7, "animate-always", undefined);
            items = [, ];
            items[0] = obj9;
            if (1 === obj.get()) {
              result1 = [0, -20, -34][obj4.get(obj4)];
              tmp18 = null;
              if (result1 == null) {
                num7 = -12;
                result1 = -12 * obj.get();
              }
              diff1 = result1;
            } else {
              num6 = 50;
              diff1 = 50 - 50 * obj4.get();
            }
            if (typeof tmp3 === "function") {
              obj10 = { translateY: null };
              tmp5Result1 = tmp5(tmp6[30]);
              tmp19 = tmp5Result1;
              tmp20 = diff1;
              tmp21 = tmp7;
              str5 = "animate-always";
              obj10.translateY = tmp5Result1.withSpring(diff1, tmp7, "animate-always", undefined);
              items[1] = obj10;
            } else {
              str8 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            str7 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
        obj1.transform = items;
        return obj1;
      } else {
        str6 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  const obj4 = { sharedVisible: tmp12, sharedTransitionState, TransitionStates: tmp(tmp2[11]).TransitionStates, runOnJS: tmp(tmp2[15]).runOnJS, cleanUp: context, windowHeight: height, ALERT_MODAL_MARGIN: 16, safeAreaTop: top, safeAreaBottom: bottom, withAlertModalSpring, sharedIndex: sharedValue, sharedTopHeight: context2, useReducedMotion: enabled };
  Y.__closure = obj4;
  Y.__workletHash = 15768220325168;
  Y.__initData = __initData3;
  const animatedStyle = tmpResult.useAnimatedStyle(Y);
  if (cResult[3] === context1) {
    let tmp18;
    let tmp19;
    let tmp22;
    if (cResult[4] === sharedValue) {
      tmp18 = cResult[5];
      tmp19 = cResult[6];
    }
    const layoutEffect = obj2.useLayoutEffect(tmp18, tmp19);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class W {
        constructor() {
          tmp = closure_0;
          tmp2 = closure_2;
          useAlertStore = closure_0(closure_2[14]).useAlertStore;
          arr = closure_7(useAlertStore.getState().alerts);
          first = arr[0];
          closure_0 = arr.slice(1);
          tmp4 = null != first;
          if (tmp4) {
            flag = false;
            tmp4 = false === first.dismissable;
          }
          if (!tmp4) {
            tmpResult = tmp(tmp2[14]);
            key = undefined;
            dismissAlert = tmpResult.dismissAlert;
            if (first != null) {
              key = first.key;
            }
            dismissAlertResult = dismissAlert(key);
            tmpResult1 = tmp(tmp2[19]);
            batchUpdatesResult = tmpResult1.batchUpdates(() => {
              const useAlertStore = context(context2[14]).useAlertStore;
              const obj = { alerts };
              return useAlertStore.setState(obj);
            });
          }
          return true;
        }
      }
      let num3 = 7;
      cResult[7] = W;
      tmp22 = W;
    } else {
      class W {
        constructor() {
          tmp = closure_0;
          tmp2 = closure_2;
          useAlertStore = closure_0(closure_2[14]).useAlertStore;
          arr = closure_7(useAlertStore.getState().alerts);
          first = arr[0];
          closure_0 = arr.slice(1);
          tmp4 = null != first;
          if (tmp4) {
            flag = false;
            tmp4 = false === first.dismissable;
          }
          if (!tmp4) {
            tmpResult = tmp(tmp2[14]);
            key = undefined;
            dismissAlert = tmpResult.dismissAlert;
            if (first != null) {
              key = first.key;
            }
            dismissAlertResult = dismissAlert(key);
            tmpResult1 = tmp(tmp2[19]);
            batchUpdatesResult = tmpResult1.batchUpdates(() => {
              const useAlertStore = context(context2[14]).useAlertStore;
              const obj = { alerts };
              return useAlertStore.setState(obj);
            });
          }
          return true;
        }
      }
    }
    context1(context2[26])(tmp22);
    if (0 === context1) {
      class W {
        constructor() {
          tmp = closure_0;
          tmp2 = closure_2;
          useAlertStore = closure_0(closure_2[14]).useAlertStore;
          arr = closure_7(useAlertStore.getState().alerts);
          first = arr[0];
          closure_0 = arr.slice(1);
          tmp4 = null != first;
          if (tmp4) {
            flag = false;
            tmp4 = false === first.dismissable;
          }
          if (!tmp4) {
            tmpResult = tmp(tmp2[14]);
            key = undefined;
            dismissAlert = tmpResult.dismissAlert;
            if (first != null) {
              key = first.key;
            }
            dismissAlertResult = dismissAlert(key);
            tmpResult1 = tmp(tmp2[19]);
            batchUpdatesResult = tmpResult1.batchUpdates(() => {
              const useAlertStore = context(context2[14]).useAlertStore;
              const obj = { alerts };
              return useAlertStore.setState(obj);
            });
          }
          return true;
        }
      }
    }
    if (cResult[8] === animatedStyle) {
      class W {
        constructor() {
          tmp = closure_0;
          tmp2 = closure_2;
          useAlertStore = closure_0(closure_2[14]).useAlertStore;
          arr = closure_7(useAlertStore.getState().alerts);
          first = arr[0];
          closure_0 = arr.slice(1);
          tmp4 = null != first;
          if (tmp4) {
            flag = false;
            tmp4 = false === first.dismissable;
          }
          if (!tmp4) {
            tmpResult = tmp(tmp2[14]);
            key = undefined;
            dismissAlert = tmpResult.dismissAlert;
            if (first != null) {
              key = first.key;
            }
            dismissAlertResult = dismissAlert(key);
            tmpResult1 = tmp(tmp2[19]);
            batchUpdatesResult = tmpResult1.batchUpdates(() => {
              const useAlertStore = context(context2[14]).useAlertStore;
              const obj = { alerts };
              return useAlertStore.setState(obj);
            });
          }
          return true;
        }
      }
      if (cResult[11] !== context2) {
        class Z {
          constructor(nativeEvent) {
            const result = context2.set(nativeEvent.nativeEvent.layout.height);
          }
        }
        cResult[11] = context2;
        cResult[12] = Z;
      } else {
        class Z {
          constructor(nativeEvent) {
            const result = context2.set(nativeEvent.nativeEvent.layout.height);
          }
        }
      }
      if (cResult[13] === context1) {
        class Z {
          constructor(nativeEvent) {
            const result = context2.set(nativeEvent.nativeEvent.layout.height);
          }
        }
        if (cResult[16] !== title) {
          class Z {
            constructor(nativeEvent) {
              const result = context2.set(nativeEvent.nativeEvent.layout.height);
            }
          }
          let obj5 = { ref, variant: "heading-lg/bold", accessibilityRole: "header", color: "mobile-text-heading-primary", children: title };
          cResult[16] = title;
          cResult[17] = closure_13(tmp(context2[27]).Text, obj5);
          const tmp31 = closure_13(tmp(context2[27]).Text, obj5);
        } else {
          class Z {
            constructor(nativeEvent) {
              const result = context2.set(nativeEvent.nativeEvent.layout.height);
            }
          }
        }
        if (cResult[18] === content) {
          class Z {
            constructor(nativeEvent) {
              const result = context2.set(nativeEvent.nativeEvent.layout.height);
            }
          }
          if (cResult[21] === tmp6.body) {
            class Z {
              constructor(nativeEvent) {
                const result = context2.set(nativeEvent.nativeEvent.layout.height);
              }
            }
          }
          let obj6 = { spacing: 8, style: tmp6.body, children: items1 };
          items1 = [tmp30, tmp32];
          cResult[21] = tmp6.body;
          cResult[22] = tmp30;
          cResult[23] = tmp32;
          cResult[24] = closure_14(tmp(context2[28]).Stack, obj6);
          const tmp36 = closure_14(tmp(context2[28]).Stack, obj6);
        }
        let tmp33 = null;
        if (null != content) {
          class Z {
            constructor(nativeEvent) {
              const result = context2.set(nativeEvent.nativeEvent.layout.height);
            }
          }
          tmp33 = null;
          if ("" !== content) {
            class Z {
              constructor(nativeEvent) {
                const result = context2.set(nativeEvent.nativeEvent.layout.height);
              }
            }
            const obj7 = { variant: "text-md/medium", color: "text-default", style: tmp6.contentText, children: content };
            tmp33 = closure_13(tmp(tmp2[27]).Text, obj7);
          }
        }
        cResult[18] = content;
        cResult[19] = tmp6.contentText;
        cResult[20] = tmp33;
      }
      let tmp28 = null;
      if (0 === context1) {
        class Z {
          constructor(nativeEvent) {
            const result = context2.set(nativeEvent.nativeEvent.layout.height);
          }
        }
        if (null != trackingProps) {
          class Z {
            constructor(nativeEvent) {
              const result = context2.set(nativeEvent.nativeEvent.layout.height);
            }
          }
          const obj8 = { trackingProps };
          tmp28 = closure_13(closure_31, obj8);
        }
      }
      cResult[13] = context1;
      cResult[14] = trackingProps;
      cResult[15] = tmp28;
    }
    const items2 = [tmp6.content, animatedStyle];
    cResult[8] = animatedStyle;
    cResult[9] = tmp6.content;
    cResult[10] = items2;
  }
  const fn2 = function j() {
    const result = sharedValue.set(context1);
  };
  const items3 = [context1, sharedValue];
  cResult[3] = context1;
  cResult[4] = sharedValue;
  cResult[5] = fn2;
  cResult[6] = items3;
  tmp19 = items3;
  tmp18 = fn2;
}) : (function AlertModal(arg0) {
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
  let top;
  ({ header, title, extraContent } = arg0);
  let context = top.useContext(closure_19);
  const context1 = top.useContext(closure_20);
  const tmp3 = closure_16();
  const context2 = top.useContext(closure_22);
  const tmp5 = context;
  const tmp6 = context2;
  const enabled = top.useContext(context(context2[22]).AccessibilityPreferencesContext).reducedMotion.enabled;
  const ref = top.useRef(null);
  let obj = context(context2[15]);
  const sharedValue = obj.useSharedValue(context1);
  const tmp9 = sharedTransitionState(closure_37(), 2);
  sharedTransitionState = tmp9[0];
  let closure_7 = tmp11;
  const rect = context1(context2[23])();
  top = rect.top;
  const bottom = rect.bottom;
  let items = [context1];
  const effect = top.useEffect(() => {
    if (0 === context1) {
      obj2 = { ref, delay: 300 };
      const obj = react_native;
      const result = obj.setAccessibilityFocus(obj2);
    }
  }, items);
  const height = context1(context2[25])().height;
  obj2 = context(context2[15]);
  class J {
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
            tmp = value === context(context2[11]).TransitionStates.YEETED;
          }
          if (tmp) {
            const obj = context(context2[15]);
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
  let obj3 = { sharedVisible: tmp11, sharedTransitionState, TransitionStates: context(context2[11]).TransitionStates, runOnJS: context(context2[15]).runOnJS, cleanUp: context, windowHeight: height, ALERT_MODAL_MARGIN: 16, safeAreaTop: top, safeAreaBottom: bottom, withAlertModalSpring, sharedIndex: sharedValue, sharedTopHeight: context2, useReducedMotion: enabled };
  J.__closure = obj3;
  J.__workletHash = 13605485290396;
  J.__initData = __initData4;
  const items1 = [context1, sharedValue];
  const animatedStyle = obj2.useAnimatedStyle(J);
  const layoutEffect = top.useLayoutEffect(() => {
    const result = sharedValue.set(context1);
  }, items1);
  context1(context2[26])(() => {
    let alerts;
    let useAlertStore = context(context2[14]).useAlertStore;
    const arr = closure_7(useAlertStore.getState().alerts);
    const first = arr[0];
    context = arr.slice(1);
    const tmp4 = null != first && false === first.dismissable;
    if (!tmp4) {
      let key;
      const dismissAlert = context(context2[14]).dismissAlert;
      context(context2[14]);
      if (first != null) {
        key = first.key;
      }
      dismissAlert(key);
      const tmpResult2 = context(context2[19]);
      tmpResult2.batchUpdates(() => {
        const useAlertStore = context(context2[14]).useAlertStore;
        const obj = { alerts };
        return useAlertStore.setState(obj);
      });
    }
    return true;
  });
  let str = "no-hide-descendants";
  const View = context1(context2[15]).View;
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
      tmp18 = closure_13(closure_31, obj5);
    }
  }
  items3 = [tmp18, ];
  let obj6 = { style: tmp3.overflow, children: closure_14(Stack, { spacing: 24, children: items4 }) };
  items4 = [header, , , ];
  Stack = tmp5(tmp6[28]).Stack;
  const obj7 = { spacing: 8, style: tmp3.body, children: items5 };
  const Stack2 = tmp5(tmp6[28]).Stack;
  items5 = [closure_13(tmp5(tmp6[27]).Text, { ref, variant: "heading-lg/bold", accessibilityRole: "header", color: "mobile-text-heading-primary", children: title }), ];
  let tmp21Result = null;
  const tmp22 = closure_11;
  const tmp23 = bottom;
  if (null != content) {
    tmp21Result = null;
    if ("" !== content) {
      const obj8 = { variant: "text-md/medium", color: "text-default", style: tmp3.contentText, children: content };
      tmp21Result = tmp21(tmp5(tmp6[27]).Text, obj8);
    }
  }
  items5[1] = tmp21Result;
  items4[1] = closure_14(Stack2, obj7);
  items4[2] = extraContent;
  let tmp21Result2 = null;
  if (null != actions) {
    const obj9 = { children: actions };
    tmp21Result2 = tmp21(closure_38, obj9);
  }
  items4[3] = tmp21Result2;
  const obj10 = { alwaysBounceVertical: false, children: closure_13(tmp23, obj6) };
  items3[1] = closure_13(tmp22, obj10);
  return closure_14(View, obj4);
});
let closure_30 = tmp8;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_31 = ReactCompilerGating.isReactCompilerEnabled() ? (function AlertModalImpression(trackingProps) {
  const obj = react2;
  const cResult = obj.c(6);
  trackingProps = trackingProps.trackingProps;
  let MODAL = trackingProps.impressionType;
  if (MODAL == null) {
    MODAL = ImpressionTypes.MODAL;
  }
  const impression = trackingProps.impression;
  let impressionName;
  if (impression != null) {
    impressionName = impression.impressionName;
  }
  const impression2 = trackingProps.impression;
  let impressionProperties;
  if (impression2 != null) {
    impressionProperties = impression2.impressionProperties;
  }
  if (cResult[0] === MODAL) {
    if (cResult[1] === impressionName) {
      let tmp6;
      let tmp7;
      if (cResult[2] === impressionProperties) {
        tmp6 = cResult[3];
      }
      if (cResult[4] !== trackingProps.disableTrack) {
        obj2 = { disableTrack: trackingProps.disableTrack, trackOnInitialLoad: true };
        cResult[4] = trackingProps.disableTrack;
        cResult[5] = obj2;
        tmp7 = obj2;
      } else {
        tmp7 = cResult[5];
      }
      useTrackImpressionDefault(tmp6, tmp7);
      return null;
    }
  }
  const obj3 = { type: MODAL, name: impressionName, properties: impressionProperties };
  cResult[0] = MODAL;
  cResult[1] = impressionName;
  cResult[2] = impressionProperties;
  cResult[3] = obj3;
  tmp6 = obj3;
}) : (function AlertModalImpression(trackingProps) {
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
});
function withAlertModalSpring(value, fn2) {
  const obj = spring;
  return obj.withSpring(value, obj2, "animate-always", fn2);
}
let obj3 = { withSpring: spring.withSpring, MODAL_SPRING: obj2 };
withAlertModalSpring.__closure = obj3;
withAlertModalSpring.__workletHash = 7851172244290;
withAlertModalSpring.__initData = { code: "function withAlertModalSpring_AlertModalNativeTsx5(value,callback){const{withSpring,MODAL_SPRING}=this.__closure;return withSpring(value,MODAL_SPRING,'animate-always',callback);}" };
const __initData5 = { code: "function AlertModalNativeTsx6(){const{sharedTransitionState}=this.__closure;return sharedTransitionState.get();}" };
const __initData6 = { code: "function AlertModalNativeTsx7(transitionState_0){const{TransitionStates,sharedVisible,runOnJS,cleanUp}=this.__closure;if(transitionState_0===TransitionStates.YEETED){if(sharedVisible.get()===1){sharedVisible.set(0);}else{runOnJS(cleanUp)();}}else{sharedVisible.set(1);}}" };
const __initData7 = { code: "function AlertModalNativeTsx8(){const{sharedTransitionState}=this.__closure;return sharedTransitionState.get();}" };
const __initData8 = { code: "function AlertModalNativeTsx9(transitionState_0){const{TransitionStates,sharedVisible,runOnJS,cleanUp}=this.__closure;if(transitionState_0===TransitionStates.YEETED){if(sharedVisible.get()===1){sharedVisible.set(0);}else{runOnJS(cleanUp)();}}else{sharedVisible.set(1);}}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_37 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSharedAnimationState() {
  let context;
  let sharedValue;
  let tmp = context;
  let obj = context(sharedValue[13]);
  const cResult = obj.c(10);
  context = react.useContext(closure_18);
  const context1 = react.useContext(closure_19);
  const useSharedValue = context(sharedValue[15]).useSharedValue;
  let num = 0;
  obj2 = react;
  const tmp6 = context(sharedValue[15]);
  if (context === context(sharedValue[11]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  let tmpResult = tmp(tmp2[15]);
  const sharedValue1 = tmpResult.useSharedValue(context);
  if (cResult[0] === sharedValue1) {
    let tmp9;
    if (cResult[1] === context) {
      tmp9 = cResult[2];
    }
    if (cResult[3] === sharedValue1) {
      if (cResult[4] === sharedValue) {
        let tmp10;
        if (cResult[5] === context) {
          tmp10 = cResult[6];
        }
        const layoutEffect = obj2.useLayoutEffect(tmp9, tmp10);
        const fn2 = function o() {
          return sharedValue1.get();
        };
        const obj3 = { sharedTransitionState: sharedValue1 };
        fn2.__closure = obj3;
        fn2.__workletHash = 11706255444795;
        fn2.__initData = __initData5;
        const fn3 = function s(arg0) {
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
        const obj4 = { TransitionStates: tmp(sharedValue[11]).TransitionStates, sharedVisible: sharedValue, runOnJS: tmp(sharedValue[15]).runOnJS, cleanUp: context1 };
        const useAnimatedReaction = tmp(tmp2[15]).useAnimatedReaction;
        tmp(sharedValue[15]);
        fn3.__closure = obj4;
        fn3.__workletHash = 819342653838;
        fn3.__initData = __initData6;
        const animatedReaction = useAnimatedReaction(fn2, fn3);
        if (cResult[7] === sharedValue1) {
          let tmp16;
          if (cResult[8] === sharedValue) {
            tmp16 = cResult[9];
          }
          return tmp16;
        }
        const items = [sharedValue1, sharedValue];
        cResult[7] = sharedValue1;
        cResult[8] = sharedValue;
        cResult[9] = items;
        tmp16 = items;
      }
    }
    const items1 = [sharedValue, context, sharedValue1];
    cResult[3] = sharedValue1;
    cResult[4] = sharedValue;
    cResult[5] = context;
    cResult[6] = items1;
    tmp10 = items1;
  }
  const fn = function t() {
    const result = sharedValue1.set(context);
  };
  cResult[0] = sharedValue1;
  cResult[1] = context;
  cResult[2] = fn;
  tmp9 = fn;
}) : (function useSharedAnimationState() {
  let sharedValue;
  let obj = react;
  const context = react.useContext(closure_18);
  const context1 = react.useContext(closure_19);
  const useSharedValue = context(sharedValue[15]).useSharedValue;
  let num = 0;
  const tmp5 = context(sharedValue[15]);
  if (context === context(sharedValue[11]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  const tmp3Result = context(sharedValue[15]);
  const sharedValue1 = tmp3Result.useSharedValue(context);
  const items = [sharedValue, context, sharedValue1];
  const layoutEffect = obj.useLayoutEffect(() => {
    const result = sharedValue1.set(context);
  }, items);
  const fn = function n() {
    return sharedValue1.get();
  };
  fn.__closure = { sharedTransitionState: sharedValue1 };
  fn.__workletHash = 1529466560437;
  fn.__initData = __initData7;
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
  const tmp3Result2 = context(sharedValue[15]);
  fn2.__closure = { TransitionStates: context(sharedValue[11]).TransitionStates, sharedVisible: sharedValue, runOnJS: context(sharedValue[15]).runOnJS, cleanUp: context1 };
  fn2.__workletHash = 15761977288448;
  fn2.__initData = __initData8;
  ({ TransitionStates: context(sharedValue[11]).TransitionStates, sharedVisible: sharedValue, runOnJS: context(sharedValue[15]).runOnJS, cleanUp: context1 });
  const animatedReaction = tmp3Result2.useAnimatedReaction(fn, fn2);
  const items1 = [sharedValue1, sharedValue];
  return items1;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (function AlertActions(children) {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  children = children.children;
  if (cResult[0] !== children) {
    obj2 = { spacing: 12, children };
    const tmp6 = map1(Stack_Stack.Stack, obj2);
    cResult[0] = children;
    cResult[1] = tmp6;
    tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function AlertActions(children) {
  return map1(Stack_Stack.Stack, { spacing: 12, children: children.children });
});
let closure_38 = tmp9;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? (function AlertActionButton(onPress) {
  let closure_1;
  let context;
  let first;
  let tmp4;
  let tmp6;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(11);
  const tmp2 = context;
  if (cResult[0] !== onPress) {
    onPress = onPress.onPress;
    _require = onPress;
    const loading = onPress.loading;
    let tmp8 = closure_3;
    const tmp9 = _objectWithoutProperties(onPress, closure_3);
    cResult[0] = onPress;
    cResult[1] = loading;
    cResult[2] = onPress;
    cResult[3] = tmp9;
    tmp6 = tmp9;
    tmp4 = loading;
  } else {
    tmp4 = cResult[1];
    _require = cResult[2];
    tmp6 = cResult[3];
  }
  [first, closure_1] = react.useState(false);
  context = react.useContext(closure_21);
  if (tmp4 == null) {
    tmp4 = first;
  }
  if (cResult[4] === context) {
    let tmp13;
    if (cResult[5] === tmp5) {
      tmp13 = cResult[6];
    }
    if (cResult[7] === tmp6) {
      if (cResult[8] === tmp4) {
        let tmp14;
        if (cResult[9] === tmp13) {
          tmp14 = cResult[10];
        }
        return tmp14;
      }
    }
    obj2 = { grow: true, loading: tmp4, onPress: tmp13 };
    const tmp16 = obj2;
    const Button = tmp(tmp2[31]).Button;
    const merged = Object.assign(tmp6);
    const tmp19 = closure_13(Button, obj2);
    cResult[7] = tmp6;
    cResult[8] = tmp4;
    cResult[9] = tmp13;
    cResult[10] = tmp19;
    tmp14 = tmp19;
  }
  _require = _asyncToGenerator(async (arg0, value) => {
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
        return { value: "IconComponent", done: "IconComponent" };
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
        const obj3 = closure_0(context[14]);
        obj3.dismissAlert(c2);
        c4 = 3;
        return { value: "IconComponent", done: "IconComponent" };
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
  function t2() {
    return closure_0(...arguments);
  }
  cResult[4] = context;
  cResult[5] = tmp5;
  cResult[6] = t2;
  tmp13 = t2;
}) : (function AlertActionButton(arg0) {
  let closure_1;
  let closure_2;
  let first;
  let loading;
  let require;
  ({ onPress: require, loading } = arg0);
  const merged = Object.assign(arg0, Object.assign({ onPress: 0, loading: 0 }));
  closure_1 = undefined;
  [first, closure_1] = react.useState(false);
  dependencyMap = react.useContext(closure_21);
  const tmp4 = closure_13;
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
        return { value: "IconComponent", done: "IconComponent" };
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
        const obj3 = closure_0(closure_2_2[14]);
        obj3.dismissAlert(c2);
        c4 = 3;
        return { value: "IconComponent", done: "IconComponent" };
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
});
let closure_39 = tmp10;
size = size_mod;
let result = size.fileFinishedImporting("design/components/AlertModal/native/AlertModal.native.tsx");

export const AlertModalContainer = memoResult;
export const useDismissModalCallback = tmp7;
export const AlertModal = tmp8;
export const AlertActions = tmp9;
export const AlertActionButton = tmp10;
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
  const obj = { title, content, extraContent, actions: syncedClientThemes(closure_15, obj2) };
  obj2 = { children: items };
  const openAlert = useAlertStore2.openAlert;
  items = [, ];
  useAlertStore2;
  items[0] = map1(closure_39, { variant, text: confirmText, onPress: onConfirm });
  items[1] = map1(closure_39, { variant: "secondary", text: cancelText, onPress: onCancel });
  const obj3 = { dismissable };
  openAlert(key, map1(closure_30, obj), onCloseCallback, obj3);
}
