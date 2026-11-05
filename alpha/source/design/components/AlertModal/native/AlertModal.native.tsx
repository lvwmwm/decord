// Module ID: 6102
// Function ID: 6103
// Name: AlertModal
// Dependencies: [5, 32, 717, 19, 17, 1340, 1083, 21, 5143, 575, 5209, 6098, 1652, 2017, 6103, 6155, 1259, 1705, 5736, 1113, 5157, 1627, 6159, 1493, 6160, 6165, 5763, 6166, 5773, 5770, 2]
// Exports: showConfirmModal, useDismissModalCallback

// Module 6102 (AlertModal)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import intl2 from "intl" /* 1113 */;
import StandardAnalyticsConstants from "StandardAnalyticsConstants" /* 1340 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 2017 */;
import native from "native" /* 5209 */;
import components_Button_Button from "components/Button/Button" /* 5770 */;
import spring_spring from "spring/spring" /* 5773 */;
import useAlertStore2 from "useAlertStore" /* 6098 */;
import OverlayViewDefault from "OverlayView" /* 6103 */;
import Dialog2 from "Dialog" /* 6155 */;
import react_native from "react-native" /* 6159 */;
import Stack_Stack from "Stack/Stack" /* 6165 */;
import useTrackImpressionDefault from "useTrackImpression" /* 6166 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _toArray from "_toArray" /* 717 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5143 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let c9;
let closure_12;
let map1;
let metroImportAll;
let metroImportDefault;
let size;
let tmp7;
let tmp8;
let tmp9;
let unpackModuleId;
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
      const useAlertStore = context1(ref[11]).useAlertStore;
      const obj = { alerts };
      return useAlertStore.setState(obj);
    });
  }
}
function AlertModalBackdrop() {
  let intl;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp18;
  let tmp3;
  let tmp4;
  let tmp9;
  const context = react.useContext(closure_16);
  [tmp3, tmp4] = _slicedToArray(useSharedAnimationState(), 2);
  const tmp2 = _slicedToArray(useSharedAnimationState(), 2);
  let obj = useAlertStore2;
  const alertStore = obj.useAlertStore((arg0) => {
    const first = arg0.alerts[0];
    let dismissable;
    if (first != null) {
      dismissable = first.dismissable;
    }
    return false !== dismissable;
  });
  const items = [closure_22, withAlertModalSpring, tmp4, tmp3, , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[4] = native.TransitionStates;
  items[5] = _mod1705.scheduleOnRN;
  items[6] = context;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items;
  class AlertModalNativeTsx1 {
    constructor() {
      obj = {
        opacity: closure_0(closure_1.get(), (arg0) => {
              const tmp = true === arg0 && 0 === _undefined2.get() && closure_1_2.get() === constants.YEETED;
              if (tmp) {
                closure_1_4(closure_1_5);
              }
            })
      };
      return obj;
    }
  }
  const items1 = [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15];
  AlertModalNativeTsx1.__closure = items1;
  AlertModalNativeTsx1.__workletHash = 8433984846056;
  AlertModalNativeTsx1.__initData = tmp9;
  const animatedStyle = useAnimatedStyle(AlertModalNativeTsx1);
  const obj2 = { blur: "strong", style: animatedStyle, onDismiss: tmp18, accessibilityLabel: intl.string(intl2.t.Xkfav5) };
  tmp18 = null;
  const Backdrop = tmp5(5736).Backdrop;
  const tmp17 = unpackModuleId;
  if (alertStore) {
    tmp18 = dismissTopAlert;
  }
  intl = tmp5(1113).intl;
  return tmp17(Backdrop, obj2);
}
class AlertModal {
  constructor(arg0) {
    let Stack;
    let actions;
    let bottom;
    let content;
    let extraContent;
    let header;
    let items4;
    let items5;
    let items6;
    let items7;
    let title;
    let tmp10;
    let tmp11;
    let tmp16;
    let tmp17;
    let tmp18;
    let tmp19;
    let tmp20;
    let tmp21;
    let tmp22;
    let tmp23;
    let tmp24;
    let tmp25;
    let tmp26;
    let tmp27;
    let tmp28;
    let tmp29;
    let top;
    let trackingProps;
    ({ content, actions, trackingProps } = arg0);
    let ref;
    let obj = react;
    ({ header, title, extraContent } = arg0);
    const context = react.useContext(closure_16);
    let context1 = react.useContext(closure_17);
    const tmp3 = closure_14();
    const context2 = react.useContext(closure_19);
    let tmp5 = context1;
    const enabled = react.useContext(context1(ref[20]).AccessibilityPreferencesContext).reducedMotion.enabled;
    ref = react.useRef(null);
    let obj2 = context1(ref[12]);
    const sharedValue = obj2.useSharedValue(context1);
    [tmp10, tmp11] = useSharedAnimationState();
    _slicedToArray(useSharedAnimationState(), 2);
    let items = [context1];
    ({ top, bottom } = context2(ref[21])());
    context2(ref[21])();
    const effect = react.useEffect(() => {
      if (0 === context1) {
        const obj2 = { ref, delay: 300 };
        const obj = react_native;
        const result = obj.setAccessibilityFocus(obj2);
      }
    }, items);
    const height = context2(ref[23])().height;
    const items1 = [closure_24, tmp11, tmp10, , , , , , , , , , , ];
    const useAnimatedStyle = context1(ref[12]).useAnimatedStyle;
    context1(ref[12]);
    items1[3] = context1(ref[10]).TransitionStates;
    items1[4] = context1(ref[17]).scheduleOnRN;
    items1[5] = context;
    items1[6] = height;
    items1[7] = 16;
    items1[8] = top;
    items1[9] = bottom;
    items1[10] = withAlertModalSpring;
    items1[11] = sharedValue;
    items1[12] = context2;
    items1[13] = enabled;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let c7;
    let c8;
    let c9;
    let c10;
    let c11;
    let c12;
    [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29] = items1;
    class AlertModalNativeTsx2 {
      constructor() {
        let items;
        let result;
        let str;
        const diff = c5 - 2 * c6;
        const obj = {
          position: "absolute",
          opacity: _undefined2(_undefined.get(), function onComplete(arg0) {
            const tmp = true === arg0 && 0 === _undefined.get() && closure_1_1.get() === constants.YEETED;
            if (tmp) {
              closure_1_3(closure_1_4);
            }
          }),
          zIndex: 10 - _undefined3.get(),
          height: str,
          maxHeight: diff - result,
          transform: items
        };
        result = 2 * Math.max(c7, c8);
        str = "auto";
        if (_undefined3.get() > 0) {
          str = _undefined4.get();
        }
        const tmp5 = c12;
        if (tmp5) {
          items = [];
        } else {
          let diff1;
          let num = 0.7;
          if (1 === _undefined.get()) {
            num = 1 - 0.1 * obj3.get();
          }
          items = [{ scale: _undefined2(num) }, ];
          const obj4 = { scale: _undefined2(num) };
          if (1 === _undefined.get()) {
            let result1 = [0, -20, -34][obj3.get(obj3)];
            if (result1 == null) {
              result1 = -12 * obj2.get();
            }
            diff1 = result1;
          } else {
            diff1 = 50 - 50 * obj3.get();
          }
          items[1] = { translateY: _undefined2(diff1) };
          const obj5 = { translateY: _undefined2(diff1) };
        }
        return obj;
      }
    }
    const items2 = [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29];
    AlertModalNativeTsx2.__closure = items2;
    AlertModalNativeTsx2.__workletHash = 6860087159970;
    AlertModalNativeTsx2.__initData = tmp16;
    const items3 = [context1, sharedValue];
    const animatedStyle = useAnimatedStyle(AlertModalNativeTsx2);
    const layoutEffect = obj.useLayoutEffect(() => {
      const result = sharedValue.set(context1);
    }, items3);
    context2(ref[24])(() => {
      let alerts;
      let useAlertStore = context1(ref[11]).useAlertStore;
      const arr = closure_5(useAlertStore.getState().alerts);
      const first = arr[0];
      context1 = arr.slice(1);
      const tmp4 = null != first && false === first.dismissable;
      if (!tmp4) {
        let key;
        const dismissAlert = context1(ref[11]).dismissAlert;
        context1(ref[11]);
        if (first != null) {
          key = first.key;
        }
        dismissAlert(key);
        const tmpResult2 = context1(ref[16]);
        tmpResult2.batchUpdates(() => {
          const useAlertStore = context1(ref[11]).useAlertStore;
          const obj = { alerts };
          return useAlertStore.setState(obj);
        });
      }
      return true;
    });
    let str = "no-hide-descendants";
    const View = tmp12(tmp6[12]).View;
    if (0 === context1) {
      str = "auto";
    }
    const obj3 = {
      importantForAccessibility: str,
      accessibilityElementsHidden: 0 !== context1,
      style: items4,
      onLayout(nativeEvent) {
        const result = context2.set(nativeEvent.nativeEvent.layout.height);
      },
      children: items5
    };
    items4 = [tmp3.content, animatedStyle];
    let tmp35 = null;
    if (0 === context1) {
      tmp35 = null;
      if (null != trackingProps) {
        let obj4 = { trackingProps };
        tmp35 = closure_11(AlertModalImpression, obj4);
      }
    }
    items5 = [tmp35, ];
    let obj5 = { style: tmp3.overflow, children: closure_12(Stack, { spacing: 24, children: items6 }) };
    items6 = [header, , , ];
    Stack = tmp5(tmp6[25]).Stack;
    const obj6 = { spacing: 8, style: tmp3.body, children: items7 };
    const Stack2 = tmp5(tmp6[25]).Stack;
    items7 = [closure_11(tmp5(tmp6[26]).Text, { ref, variant: "heading-lg/semibold", accessibilityRole: "header", color: "mobile-text-heading-primary", children: title }), ];
    let tmp38Result = null;
    const tmp39 = closure_9;
    const tmp40 = closure_7;
    if (null != content) {
      tmp38Result = null;
      if ("" !== content) {
        const obj7 = { variant: "body-md/medium", color: "text-default", style: tmp3.contentText, children: content };
        tmp38Result = tmp38(tmp5(tmp6[26]).Text, obj7);
      }
    }
    items7[1] = tmp38Result;
    items6[1] = closure_12(Stack2, obj6);
    items6[2] = extraContent;
    let tmp38Result2 = null;
    if (null != actions) {
      const obj8 = { children: actions };
      tmp38Result2 = tmp38(AlertActions, obj8);
    }
    items6[3] = tmp38Result2;
    const obj9 = { alwaysBounceVertical: false, children: closure_11(tmp40, obj5) };
    items5[1] = closure_11(tmp39, obj9);
    return closure_12(View, obj3);
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
  const obj2 = { disableTrack: trackingProps.disableTrack, trackOnInitialLoad: true };
  tmp(obj, obj2);
  return null;
}
function useSharedAnimationState() {
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let obj = react;
  const context = react.useContext(closure_15);
  const context1 = react.useContext(closure_16);
  const useSharedValue = _mod1652.useSharedValue;
  let num = 0;
  if (context === native.TransitionStates.MOUNTED) {
    num = 1;
  }
  const sharedValue = useSharedValue(num);
  const tmp3Result = _mod1652;
  const sharedValue1 = tmp3Result.useSharedValue(context);
  const items = [sharedValue, context, sharedValue1];
  const layoutEffect = obj.useLayoutEffect(() => {
    const result = sharedValue1.set(context);
  }, items);
  const items1 = [closure_28, sharedValue1];
  let c0;
  [tmp10, tmp11] = items1;
  const tmp3Result2 = _mod1652;
  class AlertModalNativeTsx4 {
    constructor() {
      return _undefined.get();
    }
  }
  const items2 = [tmp11];
  AlertModalNativeTsx4.__closure = items2;
  AlertModalNativeTsx4.__workletHash = 2986600542944;
  AlertModalNativeTsx4.__initData = tmp10;
  const items3 = [closure_29, , , , ];
  const useAnimatedReaction = tmp3Result2.useAnimatedReaction;
  items3[1] = native.TransitionStates;
  items3[2] = sharedValue;
  items3[3] = _mod1705.scheduleOnRN;
  items3[4] = context1;
  c0 = undefined;
  let c1;
  let c2;
  let c3;
  [tmp12, tmp13, tmp14, tmp15, tmp16] = items3;
  class AlertModalNativeTsx5 {
    constructor(arg0) {
      if (arg0 === _undefined.YEETED) {
        const obj = _undefined2;
        if (1 === _undefined2.get()) {
          const result = obj.set(0);
        } else {
          _undefined3(c3);
        }
      } else {
        const result1 = _undefined2.set(1);
      }
    }
  }
  const items4 = [tmp13, tmp14, tmp15, tmp16];
  AlertModalNativeTsx5.__closure = items4;
  AlertModalNativeTsx5.__workletHash = 3535842432212;
  AlertModalNativeTsx5.__initData = tmp12;
  const animatedReaction = useAnimatedReaction(AlertModalNativeTsx4, AlertModalNativeTsx5);
  const items5 = [sharedValue1, sharedValue];
  return items5;
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
    dependencyMap = react.useContext(closure_18);
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
          const obj2 = { value, done: true };
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
let context = react.createContext(native.TransitionStates.YEETED);
let context2 = react.createContext(NOOP);
const context3 = react.createContext(0);
const context4 = react.createContext("");
const context5 = react.createContext(null);
let closure_22 = { code: "(function AlertModalNativeTsx1(){let[withAlertModalSpring,sharedVisible,sharedTransitionState,TransitionStates,scheduleOnRN,cleanUp]=this.__closure;return{opacity:withAlertModalSpring(sharedVisible.get(),function(finished){if(finished===true&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){scheduleOnRN(cleanUp);}})};})" };
let closure_24 = { code: "(function AlertModalNativeTsx2(){let[sharedVisible,sharedTransitionState,TransitionStates,scheduleOnRN,cleanUp,windowHeight,ALERT_MODAL_MARGIN,safeAreaTop,safeAreaBottom,withAlertModalSpring,sharedIndex,sharedTopHeight,useReducedMotion]=this.__closure;var _CARD_OFFSETS$sharedI;function onComplete(finished){if(finished===true&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){scheduleOnRN(cleanUp);}}const CARD_OFFSETS=[0,-20,-34];const maxHeight=windowHeight-ALERT_MODAL_MARGIN*2-Math.max(safeAreaTop,safeAreaBottom)*2;return{position:'absolute',opacity:withAlertModalSpring(sharedVisible.get(),onComplete),zIndex:10-sharedIndex.get(),height:sharedIndex.get()>0?sharedTopHeight.get():'auto',maxHeight:maxHeight,transform:useReducedMotion?[]:[{scale:withAlertModalSpring(sharedVisible.get()===1?1-sharedIndex.get()*0.1:0.7)},{translateY:withAlertModalSpring(sharedVisible.get()===1?(_CARD_OFFSETS$sharedI=CARD_OFFSETS[sharedIndex.get()])!==null&&_CARD_OFFSETS$sharedI!==void 0?_CARD_OFFSETS$sharedI:sharedVisible.get()*-12:50-sharedIndex.get()*50)}]};})" };
let items = [{ code: "(function withAlertModalSpring_AlertModalNativeTsx3(value,callback){let[withSpring,MODAL_SPRING]=this.__closure;return withSpring(value,MODAL_SPRING,'animate-always',callback);})" }, , ];
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
  let obj2 = require("module_1652");
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
    let obj2;
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
    let obj2;
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
items[1] = spring_spring.withSpring;
items[2] = { overshootClamping: true, damping: 35, stiffness: 450, mass: 0.5 };
let c0;
let c1;
[tmp7, tmp8, tmp9] = items;
function withAlertModalSpring(arg0, arg1) {
  return _undefined(arg0, c1, "animate-always", arg1);
}
let items1 = [tmp8, tmp9];
withAlertModalSpring.__closure = items1;
withAlertModalSpring.__workletHash = 11763504821693;
withAlertModalSpring.__initData = tmp7;
let closure_28 = { code: "(function AlertModalNativeTsx4(){let[sharedTransitionState]=this.__closure;return sharedTransitionState.get();})" };
let closure_29 = { code: "(function AlertModalNativeTsx5(transitionState){let[TransitionStates,sharedVisible,scheduleOnRN,cleanUp]=this.__closure;if(transitionState===TransitionStates.YEETED){if(sharedVisible.get()===1){sharedVisible.set(0);}else{scheduleOnRN(cleanUp);}}else{sharedVisible.set(1);}})" };
size = size_mod;
let result = size.fileFinishedImporting("design/components/AlertModal/native/AlertModal.native.tsx");

export const AlertModalContainer = memoResult;
export function useDismissModalCallback() {
  const context = react.useContext(closure_18);
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
  let obj2;
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
