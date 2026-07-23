// Module ID: 15599
// Function ID: 120252
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 4122, 12676, 13329, 9277, 9491, 33, 15600, 15601, 15605, 15606, 4130, 689, 4471, 4524, 5587, 3842, 566, 620, 4540, 10364, 1273, 2]

// Module 15599 (_isNativeReflectConstruct)
import getActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_createForOfIteratorHelperLoose";
import closure_7 from "_createForOfIteratorHelperLoose";
import importAllResult from "result";
import get_ActivityIndicator from "Button";
import closure_13 from "_isNativeReflectConstruct";
import importDefaultResult from "_isNativeReflectConstruct";
import importDefaultResult1 from "_isNativeReflectConstruct";
import importDefaultResult2 from "_isNativeReflectConstruct";
import closure_17 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import importDefaultResult3 from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_18;
let closure_19;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
const StyleSheet = get_ActivityIndicator.StyleSheet;
({ Animated: closure_10, Easing: closure_11, TouchableWithoutFeedback: closure_12 } = get_ActivityIndicator);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
let obj = {
  stores: items,
  center: true,
  isOpen() {
    return importDefaultResult.shouldShowWarning();
  },
  getComponent() {
    return require(15601) /* _isNativeReflectConstruct */.default;
  }
};
items = [importDefaultResult];
let items1 = [obj, , ];
obj = {
  stores: items2,
  center: true,
  isOpen() {
    return importDefaultResult1.shouldShowWarning();
  },
  getComponent() {
    return require(15605) /* _isNativeReflectConstruct */.default;
  }
};
items2 = [importDefaultResult1];
items1[1] = obj;
let items3 = [importDefaultResult2];
items1[2] = {
  stores: items3,
  center: true,
  isOpen() {
    return null != importDefaultResult2.getCurrentSurvey();
  },
  getComponent() {
    return require(15606) /* MobileSurvey */.default;
  }
};
importDefaultResult3 = new importDefaultResult3(items1);
let obj2 = {};
const obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3["backgroundColor"] = require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SCRIM;
obj3["justifyContent"] = "center";
obj3["alignItems"] = "center";
obj2.alertWrapper = obj3;
obj2.alertContentWrapper = { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" };
let closure_21 = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(obj2);
const tmp10 = ((PureComponent) => {
  class AlertWrapper {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_3(this, apply);
      items1 = [...items];
      obj = outer1_6(apply);
      tmp2 = outer1_5;
      if (outer1_24()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      obj = {};
      value = new outer1_10.Value(0);
      obj.opacity = value;
      num = 0;
      if (tmp2Result.props.useReducedMotion) {
        num = 1;
      }
      value1 = new outer1_10.Value(num);
      obj.scale = value1;
      tmp2Result.state = obj;
      tmp2Result.componentDidAppear = () => {
        const opacity = tmp2Result.state.opacity;
        opacity.setValue(1);
        const scale = tmp2Result.state.scale;
        scale.setValue(1);
      };
      tmp2Result.componentWillEnter = (arg0) => {
        const obj = { toValue: 1, easing: outer2_11.linear, duration: 250, useNativeDriver: true };
        const items = [outer2_10.timing(tmp2Result.state.opacity, obj)];
        if (!tmp2Result.props.useReducedMotion) {
          items.push(outer2_10.spring(tmp2Result.state.scale, { toValue: 1, useNativeDriver: true }));
        }
        outer2_10.parallel(items).start(arg0);
      };
      tmp2Result.componentWillLeave = (arg0) => {
        let obj = { toValue: 0, easing: outer2_11.linear, duration: 100, useNativeDriver: true };
        const items = [outer2_10.timing(tmp2Result.state.opacity, obj)];
        if (!tmp2Result.props.useReducedMotion) {
          obj = { toValue: 0, easing: outer2_11.in(outer2_11.ease), duration: 100, useNativeDriver: true };
          items.push(outer2_10.timing(tmp2Result.state.scale, obj));
        }
        outer2_10.parallel(items).start(arg0);
      };
      tmp2Result.handleRequestClose = () => {
        if (tmp2Result.props.isDismissable) {
          outer2_1(outer2_2[19]).close();
          const obj = outer2_1(outer2_2[19]);
        }
      };
      return tmp2Result;
    }
  }
  callback2(AlertWrapper, PureComponent);
  let items = [
    {
      key: "render",
      value() {
        let opacity;
        let scale;
        const self = this;
        const tmp = outer1_21(this.context);
        const renderKey = this.props.renderKey;
        let str = "alerts-component";
        if (null != renderKey) {
          str = renderKey;
        }
        const props = self.props;
        let obj = { onClose: outer1_1(outer1_2[19]).close };
        ({ opacity, scale } = self.state);
        obj = { dialogKey: str, onDismiss: self.handleRequestClose };
        obj = { style: items };
        items = [outer1_9.absoluteFill, tmp.alertContentWrapper];
        const obj1 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none", accessible: false, onPress: self.handleRequestClose };
        const items1 = [tmp.alertWrapper, self.props.style, { opacity }];
        const renderAlertResult = props.renderAlert(obj);
        obj1.children = outer1_18(outer1_10.View, { style: items1 });
        const items2 = [outer1_18(outer1_12, obj1), ];
        const items3 = [{ scale }];
        items2[1] = outer1_18(outer1_10.View, { style: { transform: items3 }, children: renderAlertResult });
        obj.children = items2;
        obj.children = outer1_19(outer1_1(outer1_2[21]), obj);
        return outer1_18(AlertWrapper(outer1_2[20]).Dialog, obj);
      }
    }
  ];
  return callback(AlertWrapper, items);
})(importAllResult.PureComponent);
let closure_22 = tmp10;
tmp10.contextType = require("ManaContext").ThemeContext;
let closure_23 = Object.freeze({ renderAlert: undefined, renderKey: undefined, props: undefined });
const memoResult = importAllResult.memo(function Alerts() {
  const _require = importAllResult.useRef(closure_23);
  let obj = _require(stateFromStores[23]);
  const items = [closure_17, ...importDefaultResult3.getStores()];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const _alert = outer1_17.getAlert();
    if (null != _alert) {
      let obj = { renderAlert: _alert, renderKey: outer1_17.getAlertKey(), props: null };
      return obj;
    } else {
      const openModal = outer1_20.getOpenModal();
      if (null != openModal) {
        const props = openModal.props;
        const _HermesInternal = HermesInternal;
        const combined = "alert-registery-" + openModal.key;
        obj = {};
        if (combined === openModal.current.renderKey) {
          if (stateFromStoresObject(stateFromStores[24])(props, openModal.current.props)) {
            let fn = openModal.current.renderAlert;
          }
          obj.renderAlert = fn;
          obj.renderKey = combined;
          obj.props = openModal.props;
          return obj;
        }
        fn = (arg0) => {
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(props);
          return <openModal.component />;
        };
      } else {
        obj = { renderAlert: undefined, renderKey: undefined, props: undefined };
        return obj;
      }
    }
  });
  const effect = importAllResult.useEffect(() => {
    closure_0.current = stateFromStoresObject;
  });
  const items1 = [closure_17];
  stateFromStores = _require(stateFromStores[23]).useStateFromStores(items1, () => outer1_17.isAlertDismissable());
  const obj2 = _require(stateFromStores[23]);
  const items2 = [closure_13];
  const renderAlert = stateFromStoresObject.renderAlert;
  const renderKey = stateFromStoresObject.renderKey;
  const items3 = [renderAlert, stateFromStores];
  const stateFromStores1 = _require(stateFromStores[23]).useStateFromStores(items2, () => outer1_13.useReducedMotion);
  const callback = importAllResult.useCallback(() => {
    let tmp2 = tmp;
    if (null != renderAlert) {
      tmp2 = stateFromStores;
    }
    if (tmp2) {
      stateFromStoresObject(stateFromStores[19]).close();
      const obj = stateFromStoresObject(stateFromStores[19]);
    }
    return null != renderAlert;
  }, items3);
  stateFromStoresObject(stateFromStores[25])(callback);
  let tmp7;
  if (null != renderAlert) {
    obj = { isDismissable: stateFromStores, renderAlert, renderKey, useReducedMotion: stateFromStores1 };
    tmp7 = callback3(closure_22, obj, renderKey);
  }
  obj = { component: _require(stateFromStores[27]).TransitionGroupOverlayView, style: StyleSheet.absoluteFill, children: tmp7 };
  return callback3(_require(stateFromStores[26]).TransitionGroup, obj);
});
let obj1 = {
  stores: items3,
  center: true,
  isOpen() {
    return null != importDefaultResult2.getCurrentSurvey();
  },
  getComponent() {
    return require(15606) /* MobileSurvey */.default;
  }
};
let result = require("_possibleConstructorReturn").fileFinishedImporting("components_native/common/Alerts.tsx");

export default memoResult;
