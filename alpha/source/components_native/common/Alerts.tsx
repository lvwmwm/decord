// Module ID: 19003
// Function ID: 19004
// Name: Alerts
// Dependencies: [19, 17, 5015, 15638, 16224, 7929, 10135, 21, 19004, 19005, 19009, 19010, 5014, 575, 504, 5095, 5080, 5254, 5637, 5638, 5959, 6022, 6017, 6954, 5965, 558, 2]

// Module 19003 (Alerts)
import shallowEqualDefault from "shallowEqual" /* 558 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 5080 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import timing from "timing" /* 5254 */;
import spring from "spring" /* 5637 */;
import springPresets from "springPresets" /* 5638 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5959 */;
import OverlayViewDefault from "OverlayView" /* 5965 */;
import ModalRegistryDefault from "ModalRegistry" /* 19004 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import PermissionSpeakStore from "PermissionSpeakStore" /* 15638 */;
import PermissionVADStore from "PermissionVADStore" /* 16224 */;
import SurveyStore from "SurveyStore" /* 7929 */;
import AlertStore from "AlertStore" /* 10135 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, obj1, openModal, set, tmp4, value, value1;

let closure_12;
let hasOwnProperty;
let items;
let items2;
let items3;
let map1;
let metroRequire;
let obj5;
function AlertWrapper(item) {
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
  let obj = isDismissable(cleanUp[14]);
  let items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let tmp5 = isDismissable(cleanUp[15]);
  const useSharedValue = tmp5.useSharedValue;
  let num = 0;
  if (transitionState === isDismissable(cleanUp[16]).TransitionStates.MOUNTED) {
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
  const tmp2Result = isDismissable(tmp3[15]);
  class A {
    constructor() {
      tmp = closure_4;
      tmp3 = closure_0;
      tmp4 = closure_2;
      value = closure_4.get();
      tmp5 = closure_0(closure_2[17]);
      withTiming = tmp5.withTiming;
      value1 = closure_4.get();
      num = 100;
      if (1 === value) {
        num = 250;
      }
      obj = { opacity: null };
      obj1 = { duration: num, easing: tmp3(tmp4[15]).Easing.linear };
      fn = function t(arg0) {
        const tmp = arg0 && 0 === sharedValue.get() && transitionState === isDismissable(cleanUp[16]).TransitionStates.YEETED;
        if (tmp) {
          const obj = isDismissable(cleanUp[15]);
          obj.runOnJS(closure_1_2)();
        }
      };
      obj4 = { visible: tmp, transitionState, TransitionStates: tmp3(tmp4[16]).TransitionStates, runOnJS: tmp3(tmp4[15]).runOnJS, cleanUp };
      fn.__closure = obj4;
      fn.__workletHash = 9063471386550;
      fn.__initData = closure_17;
      obj.opacity = withTiming(value1, obj1, "animate-always", fn);
      return obj;
    }
  }
  let obj2 = { visible: sharedValue, withTiming: tmp2(tmp3[17]).withTiming, Easing: tmp2(tmp3[15]).Easing, transitionState, TransitionStates: tmp2(tmp3[16]).TransitionStates, runOnJS: tmp2(tmp3[15]).runOnJS, cleanUp };
  A.__closure = obj2;
  A.__workletHash = 7547148666034;
  A.__initData = __initData;
  const animatedStyle = tmp2Result.useAnimatedStyle(A);
  const tmp2Result2 = isDismissable(tmp3[15]);
  class O {
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
  let obj3 = { useReducedMotion: stateFromStores, visible: sharedValue, withSpring: tmp2(tmp3[18]).withSpring, SUBTLE_SPRING: tmp2(tmp3[19]).SUBTLE_SPRING, withTiming: tmp2(tmp3[17]).withTiming, Easing: tmp2(tmp3[15]).Easing };
  O.__closure = obj3;
  O.__workletHash = 7591026156474;
  O.__initData = __initData3;
  const items2 = [isDismissable];
  const animatedStyle1 = tmp2Result2.useAnimatedStyle(O);
  const callback = stateFromStores.useCallback(() => {
    const tmp = isDismissable;
    if (tmp) {
      const obj = actions_AlertActionCreatorsDefault;
      obj.close();
    }
    return true;
  }, items2);
  transitionState(tmp3[21])(callback);
  let obj4 = { onClose: transitionState(tmp3[20]).close };
  const obj5 = { dialogKey: renderKey, onDismiss: callback, children: closure_13(tmp13, obj6) };
  const renderAlertResult = renderAlert(obj4);
  const Dialog = tmp2(tmp3[22]).Dialog;
  obj6 = { style: items3, children: items5 };
  items3 = [sharedValue.absoluteFill, tmp.alertContentWrapper];
  const obj7 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none", accessible: false, onPress: callback, children: closure_12(transitionState(tmp3[15]).View, obj8) };
  obj8 = { style: items4 };
  items4 = [tmp.alertWrapper, animatedStyle];
  tmp13 = transitionState(tmp3[23]);
  items5 = [closure_12(closure_5, obj7), closure_12(transitionState(tmp3[15]).View, { style: animatedStyle1, children: renderAlertResult })];
  return closure_12(Dialog, obj5);
}
function getAlertItemKey(renderKey) {
  return renderKey.renderKey;
}
function wrapAlerts(children) {
  let obj2;
  const obj = { style: StyleSheet.absoluteFill, children: authStore2(metroRequire, obj2) };
  obj2 = { style: StyleSheet.absoluteFill, children };
  const tmp = OverlayViewDefault;
  return authStore2(tmp, obj);
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
const stores = new ModalRegistryDefault(items1);
const tmp7 = new ModalRegistryDefault(items1);
let createStyles = createStyles_mod;
let obj4 = { alertWrapper: obj5, alertContentWrapper: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" } };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, justifyContent: "center", alignItems: "center" };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_15 = createStyles(obj4);
const __initData = { code: "function AlertsTsx1(){const{visible,withTiming,Easing,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;const isVisible=visible.get()===1;return{opacity:withTiming(visible.get(),{duration:isVisible?250:100,easing:Easing.linear},'animate-always',function(finished){if(finished&&visible.get()===0&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}})};}" };
const __initData2 = { code: "function AlertsTsx2(finished){const{visible,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&visible.get()===0&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const __initData3 = { code: "function AlertsTsx3(){const{useReducedMotion,visible,withSpring,SUBTLE_SPRING,withTiming,Easing}=this.__closure;if(useReducedMotion){return{transform:[{scale:1}]};}return{transform:[{scale:visible.get()===1?withSpring(1,SUBTLE_SPRING):withTiming(0,{duration:100,easing:Easing.in(Easing.ease)})}]};}" };
function renderAlertItem(arg0, item, transitionState, cleanUp) {
  const obj = { item, transitionState, cleanUp };
  return authStore2(AlertWrapper, obj, arg0);
}
let closure_23 = Object.freeze({ renderAlert: "dispatch", renderKey: "isArray", props: "isArray" });
const memoResult = react.memo(function Alerts() {
  let alertDismissable;
  let ref;
  let renderAlert;
  let stateFromStores;
  _require = renderAlert.useRef(closure_23);
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
        return { renderAlert: "dispatch", renderKey: "isArray", props: "isArray" };
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
});
let result = size.fileFinishedImporting("components_native/common/Alerts.tsx");

export default memoResult;
