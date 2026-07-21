// Module ID: 4471
// Function ID: 39486
// Name: getAlertModalItemKey
// Dependencies: []
// Exports: showConfirmModal, useDismissModalCallback

// Module 4471 (getAlertModalItemKey)
import context3 from "module_0";

function getAlertModalItemKey(key) {
  return key.key;
}
function dismissTopAlert() {
  const useAlertStore = callback(dependencyMap[10]).useAlertStore;
  const arr = callback3(useAlertStore.getState().alerts);
  const first = arr[0];
  const callback = arr.slice(1);
  let tmp2 = null != first;
  if (tmp2) {
    tmp2 = false === first.dismissable;
  }
  if (!tmp2) {
    let key;
    if (null != first) {
      key = first.key;
    }
    callback(dependencyMap[10]).dismissAlert(key);
    const obj = callback(dependencyMap[10]);
    callback(dependencyMap[15]).batchUpdates(() => {
      const useAlertStore = callback(closure_2[10]).useAlertStore;
      return useAlertStore.setState({ alerts: callback });
    });
    const obj2 = callback(dependencyMap[15]);
  }
}
function AlertModalBackdrop() {
  const context = importAllResult.useContext(closure_16);
  const arg1 = context;
  const tmp2 = callback2(useSharedAnimationState(), 2);
  const first = tmp2[0];
  const importDefault = first;
  const dependencyMap = tmp4;
  let obj = arg1(dependencyMap[10]);
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
      opacity: callback(tmp4.get(), (arg0) => {
        let tmp = true === arg0;
        if (tmp) {
          tmp = 0 === closure_2.get();
        }
        if (tmp) {
          const value = closure_1.get();
          tmp = value === callback(closure_2[9]).TransitionStates.YEETED;
        }
        if (tmp) {
          callback(closure_2[11]).runOnJS(callback)();
          const obj = callback(closure_2[11]);
        }
      })
    };
  };
  obj = { withAlertModalSpring: closure_23, sharedVisible: tmp4, sharedTransitionState: first, TransitionStates: arg1(dependencyMap[9]).TransitionStates, runOnJS: arg1(dependencyMap[11]).runOnJS, cleanUp: context };
  fn.__closure = obj;
  fn.__workletHash = 4470729133936;
  fn.__initData = closure_20;
  const animatedStyle = arg1(dependencyMap[11]).useAnimatedStyle(fn);
  obj = { blur: "strong", style: animatedStyle };
  let tmp8 = null;
  if (alertStore) {
    tmp8 = dismissTopAlert;
  }
  obj.onDismiss = tmp8;
  const intl = arg1(dependencyMap[17]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[17]).t.Xkfav5);
  return closure_10(arg1(dependencyMap[16]).Backdrop, obj);
}
class AlertModal {
  constructor(arg0) {
    ({ content, actions } = global);
    ({ header, title, extraContent } = global);
    context = Object.useContext(createContext);
    arg1 = context;
    context1 = Object.useContext(createContext);
    importDefault = context1;
    tmp3 = closure_13();
    context2 = Object.useContext(closure_19);
    dependencyMap = context2;
    enabled = Object.useContext(arg1(dependencyMap[18]).AccessibilityPreferencesContext).reducedMotion.enabled;
    ref = Object.useRef(null);
    closure_4 = ref;
    obj = arg1(dependencyMap[11]);
    sharedValue = obj.useSharedValue(context1);
    closure_5 = sharedValue;
    tmp7 = closure_4(useSharedAnimationState(), 2);
    first = tmp7[0];
    Object = first;
    tmp9 = tmp7[1];
    View = tmp9;
    rect = importDefault(dependencyMap[19])();
    top = rect.top;
    StyleSheet = top;
    bottom = rect.bottom;
    ScrollView = bottom;
    items = [];
    items[0] = context1;
    effect = Object.useEffect(() => {
      if (0 === context1) {
        let obj = context(context2[20]);
        obj = { ref, delay: 300 };
        const result = obj.setAccessibilityFocus(obj);
      }
    }, items);
    height = importDefault(dependencyMap[21])().height;
    jsx = height;
    obj2 = arg1(dependencyMap[11]);
    class B {
      constructor() {
        diff = height - 32;
        obj = { position: "absolute" };
        result = 2 * Math.max(top, bottom);
        obj.opacity = closure_23(closure_7.get(), (arg0) => {
          let tmp = true === arg0;
          if (tmp) {
            tmp = 0 === closure_7.get();
          }
          if (tmp) {
            const value = closure_6.get();
            tmp = value === callback(closure_2[9]).TransitionStates.YEETED;
          }
          if (tmp) {
            callback(closure_2[11]).runOnJS(callback)();
            const obj = callback(closure_2[11]);
          }
        });
        obj.zIndex = 10 - closure_5.get();
        str = "auto";
        if (closure_5.get() > 0) {
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
          tmp4 = closure_23;
          num = 0.7;
          num2 = 1;
          if (1 === closure_7.get()) {
            tmp6 = closure_5;
            num3 = 0.1;
            num = 1 - 0.1 * closure_5.get();
          }
          obj.scale = tmp4(num);
          items = [, ];
          items[0] = obj;
          obj1 = {};
          tmp8 = closure_7;
          tmp7 = closure_23;
          if (1 === closure_7.get()) {
            items1 = [0.229];
            num5 = -20;
            items1[1] = -20;
            num6 = -34;
            items1[2] = -34;
            tmp11 = closure_5;
            result1 = items1[closure_5.get(closure_5)];
            tmp13 = null;
            if (null == result1) {
              tmp14 = closure_7;
              num7 = -12;
              result1 = -12 * closure_7.get();
            }
            diff1 = result1;
          } else {
            tmp9 = closure_5;
            num4 = 50;
            diff1 = 50 - 50 * closure_5.get();
          }
          obj1.translateY = tmp7(diff1);
          items[1] = obj1;
        }
        obj.transform = items;
        return obj;
      }
    }
    obj = { sharedVisible: tmp9, sharedTransitionState: first, TransitionStates: arg1(dependencyMap[9]).TransitionStates, runOnJS: arg1(dependencyMap[11]).runOnJS, cleanUp: context, windowHeight: height, ALERT_MODAL_MARGIN: 16, safeAreaTop: top, safeAreaBottom: bottom, withAlertModalSpring: f39518, sharedIndex: sharedValue, sharedTopHeight: context2, useReducedMotion: enabled };
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
    tmp13 = importDefault(dependencyMap[22])(() => {
      callback2();
      return true;
    });
    tmp14 = jsx;
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
    tmp15 = jsx;
    tmp16 = ScrollView;
    tmp17 = jsx;
    tmp18 = View;
    tmp19 = jsxs;
    obj4 = { spacing: 24 };
    items3 = [, , , ];
    items3[0] = header;
    tmp20 = jsxs;
    obj5 = { spacing: 8, style: items4 };
    items4 = [];
    items4[0] = tmp3.body;
    obj6 = { onAttached: 7667713, onDetached: 0, onPressHeaderBarButtonItem: 0, onPressHeaderBarButtonMenuItem: 0 };
    obj6.ref = ref;
    obj6.children = title;
    items5 = [, ];
    items5[0] = jsx(arg1(dependencyMap[24]).Text, obj6);
    tmp21 = null;
    if (null != content) {
      str2 = "";
      tmp21 = null;
      if ("" !== content) {
        tmp22 = jsx;
        tmp23 = arg1;
        tmp24 = dependencyMap;
        obj7 = {};
        obj7.style = tmp3.contentText;
        obj7.children = content;
        tmp21 = jsx(arg1(dependencyMap[24]).Text, obj7);
      }
    }
    items5[1] = tmp21;
    obj5.children = items5;
    items3[1] = tmp20(arg1(dependencyMap[23]).Stack, obj5);
    items3[2] = extraContent;
    tmp25 = null;
    if (null != actions) {
      tmp26 = jsx;
      tmp27 = AlertActions;
      obj8 = {};
      obj8.children = actions;
      tmp25 = jsx(AlertActions, obj8);
    }
    items3[3] = tmp25;
    obj4.children = items3;
    obj3.children = tmp19(arg1(dependencyMap[23]).Stack, obj4);
    obj2.children = tmp17(tmp18, obj3);
    obj1.children = tmp15(tmp16, obj2);
    return tmp14(importDefault(dependencyMap[11]).View, obj1);
  }
}
function useSharedAnimationState() {
  const context = importAllResult.useContext(closure_15);
  const arg1 = context;
  const context1 = importAllResult.useContext(closure_16);
  const importDefault = context1;
  let obj = arg1(dependencyMap[11]);
  let num = 0;
  if (context === arg1(dependencyMap[9]).TransitionStates.MOUNTED) {
    num = 1;
  }
  const sharedValue = obj.useSharedValue(num);
  const dependencyMap = sharedValue;
  const sharedValue1 = arg1(dependencyMap[11]).useSharedValue(context);
  let closure_3 = sharedValue1;
  const items = [sharedValue, context, sharedValue1];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    const result = sharedValue1.set(context);
  }, items);
  const obj2 = arg1(dependencyMap[11]);
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
  obj = { TransitionStates: arg1(dependencyMap[9]).TransitionStates, sharedVisible: sharedValue, runOnJS: arg1(dependencyMap[11]).runOnJS, cleanUp: context1 };
  fn2.__closure = obj;
  fn2.__workletHash = 9486923983340;
  fn2.__initData = closure_25;
  const animatedReaction = arg1(dependencyMap[11]).useAnimatedReaction(fn, fn2);
  const items1 = [sharedValue1, sharedValue];
  return items1;
}
class AlertActions {
  constructor(arg0) {
    return jsx(arg1(dependencyMap[23]).Stack, { spacing: 12, children: global.children });
  }
}
class AlertActionButton {
  constructor(arg0) {
    ({ onPress: closure_0, loading } = global);
    obj = Object.create(null);
    obj.onPress = 0;
    obj.loading = 0;
    merged = Object.assign(global, obj);
    tmp3 = closure_4(Object.useState(false), 2);
    first = tmp3[0];
    closure_1 = tmp3[1];
    closure_2 = Object.useContext(closure_18);
    tmp5 = jsx;
    obj = {};
    merged1 = Object.assign(merged);
    obj["grow"] = true;
    if (null != loading) {
      first = loading;
    }
    obj["loading"] = first;
    obj["onPress"] = () => {
      let closure_0 = callback(async (arg0) => {
        let tmp;
        if (null != callback) {
          tmp = callback(arg0);
        }
        if (null != tmp) {
          if (tmp4 instanceof Promise) {
            callback2(true);
            yield tmp4;
          }
        }
        callback(closure_2[10]).dismissAlert(closure_2);
      });
      return function() {
        return callback(...arguments);
      };
    }();
    return tmp5(arg1(closure_2[26]).Button, obj);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const importAllResult = importAll(dependencyMap[3]);
({ View: closure_7, StyleSheet: closure_8, ScrollView: closure_9 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
let obj = { root: {} };
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.MOBILE_ALERT_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[8]).radii.xl, borderColor: importDefault(dependencyMap[8]).colors.BORDER_SUBTLE };
const merged = Object.assign(importDefault(dependencyMap[8]).shadows.SHADOW_TOP_HIGH);
obj.content = obj;
obj.overflow = { -1716629078: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000018583985124867038, 1375445090: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000004766925128869462, -698284748: 874213333671322200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 1405447249: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002121995796, -1342839484: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002458032051572824 };
obj.body = { alignItems: "center" };
obj.contentText = { textAlign: "center" };
let closure_13 = arg1(dependencyMap[7]).createStyles(obj);
let closure_14 = { margin: "hidden", resizeMode: null, fadeDuration: null, leftDisabled: "flex", rightDisabled: "column" };
const context = importAllResult.createContext(arg1(dependencyMap[9]).TransitionStates.YEETED);
const context2 = importAllResult.createContext(arg1(dependencyMap[5]).NOOP);
const context4 = importAllResult.createContext("");
const context5 = importAllResult.createContext(null);
let closure_20 = { code: "function AlertModalNativeTsx1(){const{withAlertModalSpring,sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withAlertModalSpring(sharedVisible.get(),function(finished){if(finished===true&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}})};}" };
let closure_21 = { code: "function AlertModalNativeTsx2(){const{sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp,windowHeight,ALERT_MODAL_MARGIN,safeAreaTop,safeAreaBottom,withAlertModalSpring,sharedIndex,sharedTopHeight,useReducedMotion}=this.__closure;var _CARD_OFFSETS$sharedI;function onComplete(finished){if(finished===true&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}const CARD_OFFSETS=[0,-20,-34];const maxHeight=windowHeight-ALERT_MODAL_MARGIN*2-Math.max(safeAreaTop,safeAreaBottom)*2;return{position:'absolute',opacity:withAlertModalSpring(sharedVisible.get(),onComplete),zIndex:10-sharedIndex.get(),height:sharedIndex.get()>0?sharedTopHeight.get():'auto',maxHeight:maxHeight,transform:useReducedMotion?[]:[{scale:withAlertModalSpring(sharedVisible.get()===1?1-sharedIndex.get()*0.1:0.7)},{translateY:withAlertModalSpring(sharedVisible.get()===1?(_CARD_OFFSETS$sharedI=CARD_OFFSETS[sharedIndex.get()])!==null&&_CARD_OFFSETS$sharedI!==void 0?_CARD_OFFSETS$sharedI:sharedVisible.get()*-12:50-sharedIndex.get()*50)}]};}" };
let closure_22 = { code: "function withAlertModalSpring_AlertModalNativeTsx3(value,callback){const{withSpring,MODAL_SPRING}=this.__closure;return withSpring(value,MODAL_SPRING,'animate-always',callback);}" };
const obj2 = arg1(dependencyMap[7]);
let closure_23 = () => {
  function withAlertModalSpring(targetHeight, fn) {
    return callback(closure_2[25]).withSpring(targetHeight, closure_14, "animate-always", fn);
  }
  withAlertModalSpring.__closure = { withSpring: arg1(dependencyMap[25]).withSpring, MODAL_SPRING: closure_14 };
  withAlertModalSpring.__workletHash = 15556562210180;
  withAlertModalSpring.__initData = closure_22;
  return withAlertModalSpring;
}();
let closure_24 = { code: "function AlertModalNativeTsx4(){const{sharedTransitionState}=this.__closure;return sharedTransitionState.get();}" };
let closure_25 = { code: "function AlertModalNativeTsx5(transitionState){const{TransitionStates,sharedVisible,runOnJS,cleanUp}=this.__closure;if(transitionState===TransitionStates.YEETED){if(sharedVisible.get()===1){sharedVisible.set(0);}else{runOnJS(cleanUp)();}}else{sharedVisible.set(1);}}" };
const memoResult = importAllResult.memo(() => {
  const tmp = callback6();
  const arg1 = tmp;
  let obj = arg1(dependencyMap[10]);
  const alertStore = obj.useAlertStore((alerts) => alerts.alerts);
  const sharedValue = arg1(dependencyMap[11]).useSharedValue(0);
  const importDefault = sharedValue;
  const tmp4 = function createTransitionGroupItems(alertStore) {
    if (0 === alertStore.length) {
      return [];
    } else {
      const items = [{ _desired: null, y: null }];
      const substr = alertStore.slice(0, 3);
      const item = substr.forEach((alert, index) => {
        items.push({ type: "alert", alert, key: alert.key, index });
      });
      return items;
    }
  }(alertStore);
  const dependencyMap = tmp4;
  const items = [tmp4];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    if (tmp4.length > 0) {
      const result = tmp(tmp4[12]).dismissGlobalKeyboard();
      const obj = tmp(tmp4[12]);
    }
  }, items);
  const items1 = [tmp];
  const items2 = [sharedValue];
  const callback = importAllResult.useCallback((children) => {
    let obj = { style: absoluteFillObject.absoluteFillObject };
    const tmp = sharedValue(tmp4[13]);
    obj = { onDismiss: closure_27 };
    obj = { style: tmp.root, pointerEvents: "box-none", children };
    obj.children = callback(closure_7, obj);
    obj.children = callback(tmp(tmp4[14]).Dialog, obj);
    return callback(tmp, obj);
  }, items1);
  const callback1 = importAllResult.useCallback((value, type, value2, value3) => {
    if ("alert" === type.type) {
      let node = type.alert.node;
    } else {
      node = callback(closure_28, {});
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
    obj1.children = callback(redux4.Provider, { value, children: callback(React.Suspense, obj3) });
    obj.children = callback(redux3.Provider, obj1);
    obj.children = callback(redux.Provider, obj);
    obj.children = callback(redux2.Provider, obj);
    return callback(redux5.Provider, obj, value);
  }, items2);
  obj = { wrapChildren: callback, items: tmp4, renderItem: callback1, getItemKey: getAlertModalItemKey };
  return callback4(arg1(dependencyMap[9]).TransitionGroup, obj);
});
const result = arg1(dependencyMap[27]).fileFinishedImporting("design/components/AlertModal/native/AlertModal.native.tsx");

export const AlertModalContainer = memoResult;
export const useDismissModalCallback = function useDismissModalCallback() {
  const context = importAllResult.useContext(closure_18);
  const arg1 = context;
  const items = [context];
  return importAllResult.useCallback(() => {
    context(closure_2[10]).dismissAlert(context);
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
    const intl = arg1(dependencyMap[17]).intl;
    cancelText = intl.string(arg1(dependencyMap[17]).t.ETE/oC);
  }
  ({ variant, extraContent } = arg0);
  if (variant === undefined) {
    variant = "destructive";
  }
  ({ onConfirm, onCancel, onCloseCallback, dismissable } = arg0);
  let obj = arg1(dependencyMap[10]);
  obj = { title, content, extraContent };
  obj = {};
  const obj1 = { variant, text: confirmText, onPress: onConfirm };
  const items = [callback4(AlertActionButton, obj1), ];
  const obj2 = { variant: "secondary", text: cancelText, onPress: onCancel };
  items[1] = callback4(AlertActionButton, obj2);
  obj.children = items;
  obj.actions = callback5(closure_12, obj);
  obj.openAlert(key, callback4(AlertModal, obj), onCloseCallback, { dismissable });
};
