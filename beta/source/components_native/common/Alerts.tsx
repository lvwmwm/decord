// Module ID: 16738
// Function ID: 16739
// Name: Alerts
// Dependencies: [19, 17, 4825, 13295, 13888, 5027, 11040, 21, 16739, 16740, 16744, 16745, 4836, 576, 4540, 5204, 5262, 5890, 504, 558, 5276, 11916, 1177, 2]

// Module 16738 (Alerts)
import shallowEqualDefault from "shallowEqual" /* 558 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 4540 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5204 */;
import Dialog2 from "Dialog" /* 5262 */;
import KeyboardAwareViewDefault from "KeyboardAwareView" /* 5890 */;
import ModalRegistryDefault from "ModalRegistry" /* 16739 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import PermissionSpeakStore from "PermissionSpeakStore" /* 13295 */;
import PermissionVADStore from "PermissionVADStore" /* 13888 */;
import SurveyStore from "SurveyStore" /* 5027 */;
import AlertStore from "AlertStore" /* 11040 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let _require, openModal;

let closure_14;
let hasOwnProperty;
let items;
let items2;
let items3;
let map1;
let metroImportDefault;
let metroRequire;
let obj5;
const StyleSheet = react_native.StyleSheet;
({ Animated: hasOwnProperty, Easing: metroRequire, TouchableWithoutFeedback: metroImportDefault } = react_native);
({ jsx: map1, jsxs: closure_14 } = Fragment);
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
let obj4 = { alertWrapper: obj5, alertContentWrapper: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" } };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, justifyContent: "center", alignItems: "center" };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
const authStore3 = createLegacyClassComponentStyles(obj4);
const PureComponent = react.PureComponent;
class AlertWrapper extends PureComponent {
  constructor() {
    let value;
    let value2;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const require = applyArgumentsResult;
    let obj = { opacity: value, scale: value2 };
    value = new RN.Value(0);
    let num = 0;
    const Value = RN.Value;
    if (applyArgumentsResult.props.useReducedMotion) {
      num = 1;
    }
    value2 = new Value(num);
    applyArgumentsResult.state = obj;
    applyArgumentsResult.componentDidAppear = function componentDidAppear() {
      const opacity = require.state.opacity;
      opacity.setValue(1);
      const scale = require.state.scale;
      scale.setValue(1);
    };
    applyArgumentsResult.componentWillEnter = function componentWillEnter(arg0) {
      const items = [];
      const obj2 = { toValue: 1, easing: metroRequire.linear, duration: 250, useNativeDriver: true };
      items[0] = hasOwnProperty.timing(require.state.opacity, obj2);
      const tmp = require;
      if (!require.props.useReducedMotion) {
        items.push(hasOwnProperty.spring(tmp.state.scale, { toValue: 1, useNativeDriver: true }));
      }
      const parallelResult = hasOwnProperty.parallel(items);
      parallelResult.start(arg0);
    };
    applyArgumentsResult.componentWillLeave = function componentWillLeave(arg0) {
      const items = [];
      const obj2 = { toValue: 0, easing: metroRequire.linear, duration: 100, useNativeDriver: true };
      items[0] = hasOwnProperty.timing(require.state.opacity, obj2);
      const tmp = require;
      if (!require.props.useReducedMotion) {
        const push = items.push;
        const timing = obj.timing;
        const scale = tmp.state.scale;
        const obj4 = { toValue: 0, easing: metroRequire.in(metroRequire.ease), duration: 100, useNativeDriver: true };
        push(timing(scale, obj4));
      }
      const parallelResult = hasOwnProperty.parallel(items);
      parallelResult.start(arg0);
    };
    applyArgumentsResult.handleRequestClose = function handleRequestClose() {
      if (require.props.isDismissable) {
        const obj = actions_AlertActionCreatorsDefault;
        obj.close();
      }
    };
    return applyArgumentsResult;
  }
  render() {
    let items;
    let items1;
    let items2;
    let items3;
    let obj3;
    let obj5;
    let obj7;
    let opacity;
    let scale;
    let tmp3;
    const self = this;
    const tmp = closure_16(this.context);
    let str = this.props.renderKey;
    if (str == null) {
      str = "alerts-component";
    }
    const props = self.props;
    const state = self.state;
    ({ opacity, scale } = state);
    const obj = { onClose: actions_AlertActionCreatorsDefault.close };
    const obj2 = { dialogKey: str, onDismiss: self.handleRequestClose, children: authStore2(tmp3, obj3) };
    const renderAlertResult = props.renderAlert(obj);
    const Dialog = Dialog2.Dialog;
    obj3 = { style: items, children: items2 };
    items = [StyleSheet.absoluteFill, tmp.alertContentWrapper];
    const obj4 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none", accessible: false, onPress: self.handleRequestClose, children: map1(hasOwnProperty.View, obj5) };
    obj5 = { style: items1 };
    items1 = [tmp.alertWrapper, self.props.style, { opacity }];
    tmp3 = KeyboardAwareViewDefault;
    items2 = [map1(metroImportDefault, obj4), ];
    const obj6 = { style: obj7, children: renderAlertResult };
    obj7 = { transform: items3 };
    items3 = [{ scale }];
    items2[1] = map1(hasOwnProperty.View, obj6);
    return map1(Dialog, obj2);
  }
}
const prototype = AlertWrapper.prototype;
AlertWrapper.contextType = native.ThemeContext;
let closure_18 = Object.freeze({ renderAlert: "Array", renderKey: "add", props: "ao" });
const memoResult = react.memo(function Alerts() {
  let alertDismissable;
  let ref;
  let renderAlert;
  let stateFromStores;
  let useReducedMotion;
  _require = renderAlert.useRef(closure_18);
  let tmp2 = stateFromStores;
  let obj = require("get initialized");
  const items = [AlertStore, ...closure_15.getStores()];
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
        return { renderAlert: "Array", renderKey: "add", props: "ao" };
      }
    }
  });
  const effect = renderAlert.useEffect(() => {
    ref.current = stateFromStoresObject;
  });
  let obj2 = require("get initialized");
  const items1 = [AlertStore];
  stateFromStores = obj2.useStateFromStores(items1, () => alertDismissable.isAlertDismissable());
  const obj3 = require("get initialized");
  const items2 = [AccessibilityStore];
  renderAlert = stateFromStoresObject.renderAlert;
  const renderKey = stateFromStoresObject.renderKey;
  const items3 = [renderAlert, stateFromStores];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  const callback = renderAlert.useCallback(() => {
    const tmp2 = null != renderAlert && stateFromStores;
    if (tmp2) {
      const obj = actions_AlertActionCreatorsDefault;
      obj.close();
    }
    return null != renderAlert;
  }, items3);
  stateFromStoresObject(stateFromStores[20])(callback);
  let tmp9;
  if (null != renderAlert) {
    const obj4 = { isDismissable: stateFromStores, renderAlert, renderKey, useReducedMotion: stateFromStores1 };
    tmp9 = closure_13(AlertWrapper, obj4, renderKey);
  }
  const obj5 = { component: require("native").TransitionGroupOverlayView, style: StyleSheet.absoluteFill, children: tmp9 };
  const TransitionGroup = tmp(tmp2[21]).TransitionGroup;
  return closure_13(TransitionGroup, obj5);
});
const result = size.fileFinishedImporting("components_native/common/Alerts.tsx");

export default memoResult;
