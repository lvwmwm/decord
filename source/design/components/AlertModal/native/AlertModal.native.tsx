// Module ID: 4475
// Function ID: 39534
// Name: getAlertModalItemKey
// Dependencies: [5, 57, 830, 31, 27, 482, 33, 4130, 689, 4476, 4472, 3991, 1820, 4477, 4524, 682, 4531, 1212, 3849, 1557, 4539, 1450, 4540, 4541, 4126, 4542, 4543, 2]
// Exports: showConfirmModal, useDismissModalCallback

// Module 4475 (getAlertModalItemKey)
import sum from "sum";
import _slicedToArray from "_slicedToArray";
import _toArray from "_toArray";
import importAllResult from "result";
import get_ActivityIndicator from "set";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import context3 from "asyncGeneratorStep";

let closure_10;
let closure_11;
let closure_12;
let closure_7;
let closure_8;
let closure_9;
let require = arg1;
function getAlertModalItemKey(key) {
  return key.key;
}
function dismissTopAlert() {
  let useAlertStore = _require(4472).useAlertStore;
  const arr = callback2(useAlertStore.getState().alerts);
  const first = arr[0];
  _require = arr.slice(1);
  let tmp2 = null != first;
  if (tmp2) {
    tmp2 = false === first.dismissable;
  }
  if (!tmp2) {
    let key;
    if (null != first) {
      key = first.key;
    }
    _require(4472).dismissAlert(key);
    const obj = _require(4472);
    _require(682).batchUpdates(() => {
      const useAlertStore = callback(outer1_2[10]).useAlertStore;
      return useAlertStore.setState({ alerts: callback });
    });
    const obj2 = _require(682);
  }
}
function AlertModalBackdrop() {
  const context = importAllResult.useContext(closure_16);
  const tmp2 = callback(useSharedAnimationState(), 2);
  let first = tmp2[0];
  const dependencyMap = tmp4;
  let obj = context(4472);
  const alertStore = obj.useAlertStore((arg0) => {
    const first = arg0.alerts[0];
    let dismissable;
    if (null != first) {
      dismissable = first.dismissable;
    }
    return false !== dismissable;
  });
  const fn = function t() {
    return {
      opacity: outer1_23(tmp4.get(), (arg0) => {
        let tmp = true === arg0;
        if (tmp) {
          tmp = 0 === outer1_2.get();
        }
        if (tmp) {
          const value = outer1_1.get();
          tmp = value === context(4476).TransitionStates.YEETED;
        }
        if (tmp) {
          context(3991).runOnJS(outer1_0)();
          const obj = context(3991);
        }
      })
    };
  };
  obj = { withAlertModalSpring: closure_23, sharedVisible: tmp4, sharedTransitionState: first, TransitionStates: context(4476).TransitionStates, runOnJS: context(3991).runOnJS, cleanUp: context };
  fn.__closure = obj;
  fn.__workletHash = 4470729133936;
  fn.__initData = closure_20;
  const animatedStyle = context(3991).useAnimatedStyle(fn);
  obj = { blur: "strong", style: animatedStyle };
  let tmp8 = null;
  if (alertStore) {
    tmp8 = dismissTopAlert;
  }
  obj.onDismiss = tmp8;
  const intl = context(1212).intl;
  obj.accessibilityLabel = intl.string(context(1212).t.Xkfav5);
  return closure_10(context(4531).Backdrop, obj);
}
class AlertModal {
  constructor(arg0) {
    ({ content, actions } = global);
    ({ header, title, extraContent } = global);
    context = Object.useContext(createContext);
    closure_0 = context;
    context1 = Object.useContext(createContext);
    closure_1 = context1;
    tmp3 = c13();
    context2 = Object.useContext(c19);
    closure_2 = context2;
    enabled = Object.useContext(require("context").AccessibilityPreferencesContext).reducedMotion.enabled;
    ref = Object.useRef(null);
    c4 = ref;
    obj = require("module_3991");
    sharedValue = obj.useSharedValue(context1);
    c5 = sharedValue;
    tmp7 = c4(useSharedAnimationState(), 2);
    first = tmp7[0];
    Object = first;
    tmp9 = tmp7[1];
    View = tmp9;
    rect = require("useSafeAreaInsets")();
    top = rect.top;
    bottom = rect.bottom;
    items = [];
    items[0] = context1;
    effect = Object.useEffect(() => {
      if (0 === context1) {
        let obj = context(context2[20]);
        obj = { ref, delay: 300 };
        const result = obj.setAccessibilityFocus(obj);
      }
    }, items);
    height = require("useWindowDimensions")().height;
    obj2 = require("module_3991");
    class B {
      constructor() {
        diff = height - 32;
        obj = { position: "absolute" };
        result = 2 * Math.max(top, bottom);
        obj.opacity = outer1_23(closure_7.get(), (arg0) => {
          let tmp = true === arg0;
          if (tmp) {
            tmp = 0 === outer1_7.get();
          }
          if (tmp) {
            const value = outer1_6.get();
            tmp = value === context(context2[9]).TransitionStates.YEETED;
          }
          if (tmp) {
            context(context2[11]).runOnJS(outer1_0)();
            const obj = context(context2[11]);
          }
        });
        obj.zIndex = 10 - _toArray.get();
        str = "auto";
        if (_toArray.get() > 0) {
          tmp3 = closure_2;
          str = closure_2.get();
        }
        obj.height = str;
        obj.maxHeight = diff - result;
        if (enabled) {
          items = [];
        } else {
          obj = {};
          tmp5 = closure_7;
          tmp4 = outer1_23;
          num = 0.7;
          num2 = 1;
          if (1 === closure_7.get()) {
            tmp6 = _toArray;
            num3 = 0.1;
            num = 1 - 0.1 * _toArray.get();
          }
          obj.scale = tmp4(num);
          items = [, ];
          items[0] = obj;
          obj1 = {};
          tmp8 = closure_7;
          tmp7 = outer1_23;
          if (1 === closure_7.get()) {
            items1 = [0];
            num5 = -20;
            items1[1] = -20;
            num6 = -34;
            items1[2] = -34;
            tmp11 = _toArray;
            result1 = items1[_toArray.get(_toArray)];
            tmp13 = null;
            if (null == result1) {
              tmp14 = closure_7;
              num7 = -12;
              result1 = -12 * closure_7.get();
            }
            diff1 = result1;
          } else {
            tmp9 = _toArray;
            num4 = 50;
            diff1 = 50 - 50 * _toArray.get();
          }
          obj1.translateY = tmp7(diff1);
          items[1] = obj1;
        }
        obj.transform = items;
        return obj;
      }
    }
    obj = { sharedVisible: tmp9, sharedTransitionState: first, TransitionStates: require("_createForOfIteratorHelperLoose").TransitionStates, runOnJS: require("module_3991").runOnJS, cleanUp: context, windowHeight: height, ALERT_MODAL_MARGIN: 16, safeAreaTop: top, safeAreaBottom: bottom, withAlertModalSpring: f39566, sharedIndex: sharedValue, sharedTopHeight: context2, useReducedMotion: enabled };
    B.__closure = obj;
    B.__workletHash = 655123755546;
    B.__initData = memo;
    items1 = [, ];
    items1[0] = context1;
    items1[1] = sharedValue;
    animatedStyle = obj2.useAnimatedStyle(B);
    layoutEffect = Object.useLayoutEffect(() => {
      const result = sharedValue.set(context1);
    }, items1);
    tmp13 = require("useBackPressHandler")(() => {
      outer1_27();
      return true;
    });
    tmp14 = height;
    obj1 = {};
    str = "no-hide-descendants";
    if (0 === context1) {
      str = "auto";
    }
    obj1.importantForAccessibility = str;
    obj1.accessibilityElementsHidden = 0 !== context1;
    items2 = [, ];
    items2[0] = tmp3.content;
    items2[1] = animatedStyle;
    obj1.style = items2;
    obj1.onLayout = function onLayout(nativeEvent) {
      const result = context2.set(nativeEvent.nativeEvent.layout.height);
    };
    obj2 = { alwaysBounceVertical: false };
    obj3 = { style: tmp3.overflow };
    tmp15 = height;
    tmp16 = bottom;
    tmp17 = height;
    tmp18 = View;
    tmp19 = jsxs;
    obj4 = { spacing: 24 };
    items3 = [, , , ];
    items3[0] = header;
    tmp20 = jsxs;
    obj5 = { spacing: 8, style: items4 };
    items4 = [];
    items4[0] = tmp3.body;
    obj6 = { ref: null, variant: "heading-lg/bold", accessibilityRole: "header", color: "mobile-text-heading-primary" };
    obj6.ref = ref;
    obj6.children = title;
    items5 = [, ];
    items5[0] = height(require("Text").Text, obj6);
    tmp21 = null;
    if (null != content) {
      str2 = "";
      tmp21 = null;
      if ("" !== content) {
        tmp22 = height;
        tmp23 = closure_0;
        tmp24 = closure_2;
        obj7 = { variant: "text-md/medium", color: "text-default" };
        obj7.style = tmp3.contentText;
        obj7.children = content;
        tmp21 = height(require("Text").Text, obj7);
      }
    }
    items5[1] = tmp21;
    obj5.children = items5;
    items3[1] = tmp20(require("Stack").Stack, obj5);
    items3[2] = extraContent;
    tmp25 = null;
    if (null != actions) {
      tmp26 = height;
      tmp27 = AlertActions;
      obj8 = {};
      obj8.children = actions;
      tmp25 = height(AlertActions, obj8);
    }
    items3[3] = tmp25;
    obj4.children = items3;
    obj3.children = tmp19(require("Stack").Stack, obj4);
    obj2.children = tmp17(tmp18, obj3);
    obj1.children = tmp15(tmp16, obj2);
    return tmp14(require("module_3991").View, obj1);
  }
}
function useSharedAnimationState() {
  const context = importAllResult.useContext(closure_15);
  const context1 = importAllResult.useContext(closure_16);
  let obj = context(sharedValue[11]);
  let num = 0;
  if (context === context(sharedValue[9]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = obj.useSharedValue(num);
  const sharedValue1 = context(sharedValue[11]).useSharedValue(context);
  const items = [sharedValue, context, sharedValue1];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    const result = sharedValue1.set(context);
  }, items);
  const obj2 = context(sharedValue[11]);
  const fn = function n() {
    return sharedValue1.get();
  };
  fn.__closure = { sharedTransitionState: sharedValue1 };
  fn.__workletHash = 14603144870585;
  fn.__initData = closure_24;
  const fn2 = function t(arg0) {
    if (arg0 === context(sharedValue[9]).TransitionStates.YEETED) {
      if (1 === sharedValue.get()) {
        const result = sharedValue.set(0);
      } else {
        context(sharedValue[11]).runOnJS(context1)();
        const obj = context(sharedValue[11]);
      }
    } else {
      const result1 = sharedValue.set(1);
    }
  };
  obj = { TransitionStates: context(sharedValue[9]).TransitionStates, sharedVisible: sharedValue, runOnJS: context(sharedValue[11]).runOnJS, cleanUp: context1 };
  fn2.__closure = obj;
  fn2.__workletHash = 9486923983340;
  fn2.__initData = closure_25;
  const animatedReaction = context(sharedValue[11]).useAnimatedReaction(fn, fn2);
  const items1 = [sharedValue1, sharedValue];
  return items1;
}
class AlertActions {
  constructor(arg0) {
    return jsx(require("Stack").Stack, { spacing: 12, children: global.children });
  }
}
class AlertActionButton {
  constructor(arg0) {
    ({ onPress, loading } = global);
    obj = Object.create(null);
    obj.onPress = 0;
    obj.loading = 0;
    merged = Object.assign(global, obj);
    tmp3 = c4(Object.useState(false), 2);
    first = tmp3[0];
    c1 = tmp3[1];
    c2 = Object.useContext(c18);
    tmp5 = jsx;
    obj = {};
    merged1 = Object.assign(merged);
    obj["grow"] = true;
    if (null != loading) {
      first = loading;
    }
    obj["loading"] = first;
    obj["onPress"] = (() => {
      let closure_0 = outer1_3(async (arg0) => {
        let tmp;
        if (null != callback) {
          tmp = callback(arg0);
        }
        if (null != tmp) {
          if (tmp4 instanceof Promise) {
            outer2_1(true);
            yield tmp4;
          }
        }
        outer3_0(table[10]).dismissAlert(outer2_2);
      });
      return function() {
        return callback(...arguments);
      };
    })();
    return tmp5(require("Button").Button, obj);
  }
}
({ View: closure_7, StyleSheet: closure_8, ScrollView: closure_9 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
let obj = { root: { flex: 1, position: "relative", justifyContent: "center", alignItems: "center", paddingHorizontal: 16 } };
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ALERT_BACKGROUND_DEFAULT, margin: 16, width: "100%", maxWidth: 400, height: "100%", borderRadius: require("_createForOfIteratorHelperLoose").radii.xl, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
let merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_TOP_HIGH);
obj.content = obj;
obj.overflow = { width: "100%", height: "100%", overflow: "hidden", padding: 24, position: "relative" };
obj.body = { alignItems: "center" };
obj.contentText = { textAlign: "center" };
let closure_13 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_14 = { overshootClamping: true, damping: 35, stiffness: 450, mass: 0.5, restDisplacementThreshold: 0.001 };
let context = importAllResult.createContext(require("_createForOfIteratorHelperLoose").TransitionStates.YEETED);
let context2 = importAllResult.createContext(require("sum").NOOP);
const context4 = importAllResult.createContext("");
const context5 = importAllResult.createContext(null);
let closure_20 = { code: "function AlertModalNativeTsx1(){const{withAlertModalSpring,sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withAlertModalSpring(sharedVisible.get(),function(finished){if(finished===true&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}})};}" };
let closure_21 = { code: "function AlertModalNativeTsx2(){const{sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp,windowHeight,ALERT_MODAL_MARGIN,safeAreaTop,safeAreaBottom,withAlertModalSpring,sharedIndex,sharedTopHeight,useReducedMotion}=this.__closure;var _CARD_OFFSETS$sharedI;function onComplete(finished){if(finished===true&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}const CARD_OFFSETS=[0,-20,-34];const maxHeight=windowHeight-ALERT_MODAL_MARGIN*2-Math.max(safeAreaTop,safeAreaBottom)*2;return{position:'absolute',opacity:withAlertModalSpring(sharedVisible.get(),onComplete),zIndex:10-sharedIndex.get(),height:sharedIndex.get()>0?sharedTopHeight.get():'auto',maxHeight:maxHeight,transform:useReducedMotion?[]:[{scale:withAlertModalSpring(sharedVisible.get()===1?1-sharedIndex.get()*0.1:0.7)},{translateY:withAlertModalSpring(sharedVisible.get()===1?(_CARD_OFFSETS$sharedI=CARD_OFFSETS[sharedIndex.get()])!==null&&_CARD_OFFSETS$sharedI!==void 0?_CARD_OFFSETS$sharedI:sharedVisible.get()*-12:50-sharedIndex.get()*50)}]};}" };
let closure_22 = { code: "function withAlertModalSpring_AlertModalNativeTsx3(value,callback){const{withSpring,MODAL_SPRING}=this.__closure;return withSpring(value,MODAL_SPRING,'animate-always',callback);}" };
let closure_23 = (() => {
  function withAlertModalSpring(targetHeight, fn) {
    return outer1_0(outer1_2[25]).withSpring(targetHeight, outer1_14, "animate-always", fn);
  }
  withAlertModalSpring.__closure = { withSpring: require(4542) /* withSpring */.withSpring, MODAL_SPRING: closure_14 };
  withAlertModalSpring.__workletHash = 15556562210180;
  withAlertModalSpring.__initData = closure_22;
  return withAlertModalSpring;
})();
let closure_24 = { code: "function AlertModalNativeTsx4(){const{sharedTransitionState}=this.__closure;return sharedTransitionState.get();}" };
let closure_25 = { code: "function AlertModalNativeTsx5(transitionState){const{TransitionStates,sharedVisible,runOnJS,cleanUp}=this.__closure;if(transitionState===TransitionStates.YEETED){if(sharedVisible.get()===1){sharedVisible.set(0);}else{runOnJS(cleanUp)();}}else{sharedVisible.set(1);}}" };
const memoResult = importAllResult.memo(() => {
  let tmp = callback5();
  const require = tmp;
  let obj = require(4472) /* useAlertStore */;
  const alertStore = obj.useAlertStore((alerts) => alerts.alerts);
  const sharedValue = require(3991).useSharedValue(0);
  const tmp4 = (function createTransitionGroupItems(alertStore) {
    if (0 === alertStore.length) {
      return [];
    } else {
      const items = [{ type: "backdrop", key: "backdrop" }];
      const substr = alertStore.slice(0, 3);
      const item = substr.forEach((alert, index) => {
        items.push({ type: "alert", alert, key: alert.key, index });
      });
      return items;
    }
  })(alertStore);
  const dependencyMap = tmp4;
  let items = [tmp4];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    if (tmp4.length > 0) {
      const result = tmp(tmp4[12]).dismissGlobalKeyboard();
      const obj = tmp(tmp4[12]);
    }
  }, items);
  const items1 = [tmp];
  const items2 = [sharedValue];
  const callback = importAllResult.useCallback((children) => {
    let obj = { style: outer1_8.absoluteFillObject };
    const tmp = sharedValue(tmp4[13]);
    obj = { onDismiss: outer1_27 };
    obj = { style: tmp.root, pointerEvents: "box-none", children };
    obj.children = outer1_10(outer1_7, obj);
    obj.children = outer1_10(tmp(tmp4[14]).Dialog, obj);
    return outer1_10(tmp, obj);
  }, items1);
  const callback1 = importAllResult.useCallback((value, type, value2, value3) => {
    if ("alert" === type.type) {
      let node = type.alert.node;
    } else {
      node = outer1_10(outer1_28, {});
    }
    let num = -1;
    if ("alert" === type.type) {
      num = type.index;
    }
    let obj = { value: sharedValue };
    obj = { value: value3 };
    obj = { value: value2 };
    const obj1 = { value: num };
    const obj3 = { fallback: null, children: node };
    obj1.children = outer1_10(outer1_18.Provider, { value, children: outer1_10(outer1_6.Suspense, obj3) });
    obj.children = outer1_10(outer1_17.Provider, obj1);
    obj.children = outer1_10(outer1_15.Provider, obj);
    obj.children = outer1_10(outer1_16.Provider, obj);
    return outer1_10(outer1_19.Provider, obj, value);
  }, items2);
  obj = { wrapChildren: callback, items: tmp4, renderItem: callback1, getItemKey: getAlertModalItemKey };
  return callback3(require(4476) /* _createForOfIteratorHelperLoose */.TransitionGroup, obj);
});
let result = require("_toArray").fileFinishedImporting("design/components/AlertModal/native/AlertModal.native.tsx");

export const AlertModalContainer = memoResult;
export const useDismissModalCallback = function useDismissModalCallback() {
  const context = importAllResult.useContext(closure_18);
  const items = [context];
  return importAllResult.useCallback(() => {
    context(outer1_2[10]).dismissAlert(context);
  }, items);
};
export { AlertModal };
export { AlertActions };
export { AlertActionButton };
export const showConfirmModal = function showConfirmModal(arg0) {
  let cancelText;
  let confirmText;
  let content;
  let dismissable;
  let extraContent;
  let key;
  let onCancel;
  let onCloseCallback;
  let onConfirm;
  let title;
  let variant;
  ({ key, cancelText } = arg0);
  ({ title, content, confirmText } = arg0);
  if (cancelText === undefined) {
    const intl = require(1212) /* getSystemLocale */.intl;
    cancelText = intl.string(require(1212) /* getSystemLocale */.t["ETE/oC"]);
  }
  ({ variant, extraContent } = arg0);
  if (variant === undefined) {
    variant = "destructive";
  }
  ({ onConfirm, onCancel, onCloseCallback, dismissable } = arg0);
  let obj = require(4472) /* useAlertStore */;
  obj = { title, content, extraContent };
  obj = {};
  const obj1 = { variant, text: confirmText, onPress: onConfirm };
  const items = [callback3(AlertActionButton, obj1), ];
  const obj2 = { variant: "secondary", text: cancelText, onPress: onCancel };
  items[1] = callback3(AlertActionButton, obj2);
  obj.children = items;
  obj.actions = callback4(closure_12, obj);
  obj.openAlert(key, callback3(AlertModal, obj), onCloseCallback, { dismissable });
};
