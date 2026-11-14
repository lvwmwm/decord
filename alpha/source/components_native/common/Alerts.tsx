// Module ID: 19788
// Function ID: 19789
// Name: Alerts
// Dependencies: [19, 17, 5307, 16255, 16847, 12461, 21, 19789, 19790, 19794, 5306, 575, 504, 1655, 5377, 5548, 1708, 5939, 5940, 6269, 6332, 6327, 7474, 6275, 558, 19795, 2]

// Module 19788 (Alerts)
import shallowEqualDefault from "shallowEqual" /* 558 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 5377 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6269 */;
import OverlayViewDefault from "OverlayView" /* 6275 */;
import ModalRegistryDefault from "ModalRegistry" /* 19789 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import PermissionSpeakStore from "PermissionSpeakStore" /* 16255 */;
import PermissionVADStore from "PermissionVADStore" /* 16847 */;
import AlertStore from "AlertStore" /* 12461 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, _undefined, openModal, set, tmp2, tmp4;

let closure_12;
let hasOwnProperty;
let items;
let items2;
let map1;
let metroRequire;
let obj4;
let unpackModuleId;
function AlertWrapper(item) {
  let items7;
  let items8;
  let items9;
  let obj5;
  let obj7;
  let renderAlert;
  let renderKey;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp32;
  let tmp9;
  let useReducedMotion;
  item = item.item;
  const isDismissable = item.isDismissable;
  const transitionState = item.transitionState;
  let sharedValue;
  ({ renderAlert, renderKey } = item);
  const cleanUp = item.cleanUp;
  let tmp = closure_15();
  let tmp3 = sharedValue;
  let obj = isDismissable(sharedValue[12]);
  let items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp5 = isDismissable(sharedValue[13]);
  const useSharedValue = tmp5.useSharedValue;
  let num = 0;
  if (transitionState === isDismissable(sharedValue[14]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  let obj2 = react;
  let items1 = [transitionState, sharedValue];
  const effect = react.useEffect(() => {
    let num = 1;
    set = sharedValue.set;
    if (transitionState === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = set(num);
  }, items1);
  const items2 = [closure_17, sharedValue, , , , , , , ];
  const useAnimatedStyle = tmp2(tmp3[13]).useAnimatedStyle;
  isDismissable(tmp3[13]);
  items2[2] = isDismissable(tmp3[15]).withTiming;
  items2[3] = isDismissable(tmp3[13]).Easing;
  items2[4] = closure_16;
  items2[5] = transitionState;
  items2[6] = isDismissable(tmp3[14]).TransitionStates;
  items2[7] = isDismissable(tmp3[16]).scheduleOnRN;
  items2[8] = cleanUp;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items2;
  class AlertsTsx2 {
    constructor() {
      let _undefined2;
      let tmp10;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      let tmp = _undefined;
      const value = _undefined.get();
      const value2 = _undefined.get();
      let num = 100;
      const tmp3 = c1;
      if (1 === value) {
        num = 250;
      }
      const items = [, , , , , ];
      const obj = { duration: num, easing: _undefined2.linear };
      items[0] = c3;
      items[1] = tmp;
      items[2] = c4;
      items[3] = c5;
      items[4] = c6;
      items[5] = c7;
      _undefined = undefined;
      c1 = undefined;
      _undefined2 = undefined;
      c3 = undefined;
      c4 = undefined;
      [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items;
      const obj2 = { opacity: tmp3(value2, obj, "animate-always", AlertsTsx1) };
      class AlertsTsx1 {
        constructor(arg0) {
          tmp = arg0;
          if (tmp) {
            tmp2 = closure_0;
            num = 0;
            tmp = 0 === closure_0.get();
          }
          if (tmp) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            tmp = closure_1 === closure_2.YEETED;
          }
          if (tmp) {
            tmp5 = closure_3;
            tmp6 = closure_4;
            tmp7 = closure_3(closure_4);
          }
          return;
        }
      }
      const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10];
      AlertsTsx1.__closure = items1;
      AlertsTsx1.__workletHash = 9983200573389;
      AlertsTsx1.__initData = tmp5;
      return obj2;
    }
  }
  const items3 = [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
  AlertsTsx2.__closure = items3;
  AlertsTsx2.__workletHash = 13015713816035;
  AlertsTsx2.__initData = tmp9;
  const animatedStyle = useAnimatedStyle(AlertsTsx2);
  const items4 = [closure_18, stateFromStores, sharedValue, , , , , ];
  const useAnimatedStyle2 = tmp2(tmp3[13]).useAnimatedStyle;
  isDismissable(tmp3[13]);
  items4[3] = isDismissable(tmp3[15]).withTiming;
  items4[4] = isDismissable(tmp3[13]).Easing;
  items4[5] = isDismissable(tmp3[17]).withSpring;
  items4[6] = isDismissable(tmp3[18]).SUBTLE_SPRING;
  items4[7] = 0.7;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27] = items4;
  class AlertsTsx3 {
    constructor() {
      let items;
      let items1;
      let obj4;
      const tmp = c0;
      if (tmp) {
        const obj2 = { transform: items };
        items = [{ scale: 1 }];
        return obj2;
      } else {
        let tmp4Result;
        const tmp3 = 1 === _undefined.get();
        let num2 = 0;
        if (tmp3) {
          num2 = 1;
        }
        let num3 = 100;
        if (tmp3) {
          num3 = 150;
        }
        const obj = { opacity: _undefined(num2, obj4), transform: items1 };
        obj4 = { duration: num3, easing: _undefined2.linear };
        if (tmp3) {
          tmp4Result = _undefined3(1, c5);
        } else {
          const obj5 = { duration: 100, easing: _undefined2.in(_undefined2.ease) };
          tmp4Result = tmp4(c6, obj5);
        }
        items1 = [{ scale: tmp4Result }];
        return obj;
      }
    }
  }
  const items5 = [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27];
  AlertsTsx3.__closure = items5;
  AlertsTsx3.__workletHash = 2489423342319;
  AlertsTsx3.__initData = tmp20;
  const items6 = [isDismissable];
  const animatedStyle2 = useAnimatedStyle2(AlertsTsx3);
  const callback = obj2.useCallback(() => {
    const tmp = isDismissable;
    if (tmp) {
      const obj = actions_AlertActionCreatorsDefault;
      obj.close();
    }
    return true;
  }, items6);
  transitionState(tmp3[20])(callback);
  const obj3 = { onClose: transitionState(tmp3[19]).close };
  let obj4 = { dialogKey: renderKey, onDismiss: callback, children: closure_12(tmp32, obj5) };
  const renderAlertResult = renderAlert(obj3);
  const Dialog = tmp2(tmp3[21]).Dialog;
  obj5 = { style: items7, children: items9 };
  items7 = [StyleSheet.absoluteFill, tmp.alertContentWrapper];
  const obj6 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none", accessible: false, onPress: callback, children: closure_11(transitionState(tmp3[13]).View, obj7) };
  obj7 = { style: items8 };
  items8 = [tmp.alertWrapper, animatedStyle];
  tmp32 = transitionState(tmp3[22]);
  items9 = [closure_11(closure_5, obj6), closure_11(transitionState(tmp3[13]).View, { style: animatedStyle2, children: renderAlertResult })];
  return closure_11(Dialog, obj4);
}
function getAlertItemKey(renderKey) {
  return renderKey.renderKey;
}
function wrapAlerts(children) {
  let obj2;
  const obj = { style: StyleSheet.absoluteFill, children: unpackModuleId(metroRequire, obj2) };
  obj2 = { style: StyleSheet.absoluteFill, children };
  const tmp = OverlayViewDefault;
  return unpackModuleId(tmp, obj);
}
const StyleSheet = react_native.StyleSheet;
({ TouchableWithoutFeedback: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
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
let items1 = [obj, ];
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
let tmp6 = new ModalRegistryDefault(items1);
const stores = tmp6;
let createStyles = createStyles_mod;
let obj3 = { alertWrapper: obj4, alertContentWrapper: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" } };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, justifyContent: "center", alignItems: "center" };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_15 = createStyles(obj3);
let closure_16 = { code: "(function AlertsTsx1(finished){let[visible,transitionState,TransitionStates,scheduleOnRN,cleanUp]=this.__closure;if(finished&&visible.get()===0&&transitionState===TransitionStates.YEETED){scheduleOnRN(cleanUp);}})" };
let closure_17 = { code: "(function AlertsTsx2(){let[visible,withTiming,Easing,_worklet_9983200573389_init_data,transitionState,TransitionStates,scheduleOnRN,cleanUp]=this.__closure;const isVisible=visible.get()===1;return{opacity:withTiming(visible.get(),{duration:isVisible?250:100,easing:Easing.linear},'animate-always',function AlertsTsx1Factory([_worklet_9983200573389_init_data,visible,transitionState,TransitionStates,scheduleOnRN,cleanUp]){const AlertsTsx1=function(finished){if(finished&&visible.get()===0&&transitionState===TransitionStates.YEETED){scheduleOnRN(cleanUp);}};AlertsTsx1.__closure=[visible,transitionState,TransitionStates,scheduleOnRN,cleanUp];AlertsTsx1.__workletHash=9983200573389;AlertsTsx1.__initData=_worklet_9983200573389_init_data;return AlertsTsx1;}([_worklet_9983200573389_init_data,visible,transitionState,TransitionStates,scheduleOnRN,cleanUp]))};})" };
let closure_18 = { code: "(function AlertsTsx3(){let[useReducedMotion,visible,withTiming,Easing,withSpring,SUBTLE_SPRING,HIDDEN_CONTENT_SCALE]=this.__closure;if(useReducedMotion){return{transform:[{scale:1}]};}const isVisible=visible.get()===1;return{opacity:withTiming(isVisible?1:0,{duration:isVisible?150:100,easing:Easing.linear}),transform:[{scale:isVisible?withSpring(1,SUBTLE_SPRING):withTiming(HIDDEN_CONTENT_SCALE,{duration:100,easing:Easing.in(Easing.ease)})}]};})" };
function renderAlertItem(arg0, item, transitionState, cleanUp) {
  const obj = { item, transitionState, cleanUp };
  return unpackModuleId(AlertWrapper, obj, arg0);
}
let closure_23 = Object.freeze({ renderAlert: "channel_id", renderKey: "flex", props: "analyticsLocations" });
const memoResult = react.memo(function Alerts() {
  let alertDismissable;
  let ref;
  let renderAlert;
  let stateFromStores;
  _require = renderAlert.useRef(closure_23);
  const tmp = stateFromStores;
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
        return { renderAlert: "channel_id", renderKey: "flex", props: "analyticsLocations" };
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
  const children = [closure_11(require("native").TransitionGroup, obj3), ];
  let tmp8Result = null;
  const tmp6 = closure_12;
  const tmp7 = closure_13;
  const tmp8 = closure_11;
  if (null == renderAlert) {
    tmp8Result = tmp8(stateFromStoresObject(tmp[25]), {});
  }
  children[1] = tmp8Result;
  return tmp6(tmp7, { children });
});
let result = size.fileFinishedImporting("components_native/common/Alerts.tsx");

export default memoResult;
