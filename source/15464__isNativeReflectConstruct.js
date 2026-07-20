// Module ID: 15464
// Function ID: 117972
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15464 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const importAllResult = importAll(dependencyMap[5]);
const tmp2 = arg1(dependencyMap[6]);
const StyleSheet = tmp2.StyleSheet;
({ Animated: closure_10, Easing: closure_11, TouchableWithoutFeedback: closure_12 } = tmp2);
let closure_13 = importDefault(dependencyMap[7]);
const importDefaultResult = importDefault(dependencyMap[8]);
const importDefaultResult1 = importDefault(dependencyMap[9]);
const importDefaultResult2 = importDefault(dependencyMap[10]);
let closure_17 = importDefault(dependencyMap[11]);
({ jsx: closure_18, jsxs: closure_19 } = arg1(dependencyMap[12]));
let importDefaultResult3 = importDefault(dependencyMap[13]);
let obj = {
  stores: items,
  center: true,
  isOpen() {
    return importDefaultResult.shouldShowWarning();
  },
  getComponent() {
    return arg1(dependencyMap[14]).default;
  }
};
const items = [importDefaultResult];
const items1 = [obj, , ];
obj = {
  stores: items2,
  center: true,
  isOpen() {
    return importDefaultResult1.shouldShowWarning();
  },
  getComponent() {
    return arg1(dependencyMap[15]).default;
  }
};
const items2 = [importDefaultResult1];
items1[1] = obj;
const items3 = [importDefaultResult2];
items1[2] = {
  stores: items3,
  center: true,
  isOpen() {
    return null != importDefaultResult2.getCurrentSurvey();
  },
  getComponent() {
    return arg1(dependencyMap[16]).default;
  }
};
importDefaultResult3 = new importDefaultResult3(items1);
const obj1 = {
  stores: items3,
  center: true,
  isOpen() {
    return null != importDefaultResult2.getCurrentSurvey();
  },
  getComponent() {
    return arg1(dependencyMap[16]).default;
  }
};
const tmp6 = arg1(dependencyMap[12]);
const obj2 = {};
const obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3["backgroundColor"] = importDefault(dependencyMap[18]).colors.BACKGROUND_SCRIM;
obj3["justifyContent"] = "center";
obj3["alignItems"] = "center";
obj2.alertWrapper = obj3;
obj2.alertContentWrapper = { fill: 0, backgroundColor: 0, size: 0, color: 0 };
let closure_21 = arg1(dependencyMap[17]).createLegacyClassComponentStyles(obj2);
const tmp10 = (PureComponent) => {
  class AlertWrapper {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, AlertWrapper);
      items1 = [...items];
      obj = closure_6(AlertWrapper);
      tmp2 = closure_5;
      if (closure_24()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      AlertWrapper = tmp2Result;
      obj = {};
      value = new closure_10.Value(0);
      obj.opacity = value;
      num = 0;
      if (tmp2Result.props.useReducedMotion) {
        num = 1;
      }
      value1 = new closure_10.Value(num);
      obj.scale = value1;
      tmp2Result.state = obj;
      tmp2Result.componentDidAppear = () => {
        const opacity = tmp2Result.state.opacity;
        opacity.setValue(1);
        const scale = tmp2Result.state.scale;
        scale.setValue(1);
      };
      tmp2Result.componentWillEnter = (arg0) => {
        const obj = { 0: null, 0: null, 0: null, 0: null, easing: closure_11.linear };
        const items = [closure_10.timing(tmp2Result.state.opacity, obj)];
        if (!tmp2Result.props.useReducedMotion) {
          items.push(closure_10.spring(tmp2Result.state.scale, { top: 760348674, left: 291798377 }));
        }
        closure_10.parallel(items).start(arg0);
      };
      tmp2Result.componentWillLeave = (arg0) => {
        let obj = { easing: closure_11.linear };
        const items = [closure_10.timing(tmp2Result.state.opacity, obj)];
        if (!tmp2Result.props.useReducedMotion) {
          obj = { easing: closure_11.in(closure_11.ease) };
          items.push(closure_10.timing(tmp2Result.state.scale, obj));
        }
        closure_10.parallel(items).start(arg0);
      };
      tmp2Result.handleRequestClose = () => {
        if (tmp2Result.props.isDismissable) {
          callback(closure_2[19]).close();
          const obj = callback(closure_2[19]);
        }
      };
      return tmp2Result;
    }
  }
  const arg1 = AlertWrapper;
  callback3(AlertWrapper, PureComponent);
  const items = [
    {
      key: "render",
      value() {
        let opacity;
        let scale;
        const self = this;
        const tmp = callback6(this.context);
        const renderKey = this.props.renderKey;
        let str = "alerts-component";
        if (null != renderKey) {
          str = renderKey;
        }
        const props = self.props;
        let obj = { onClose: callback(closure_2[19]).close };
        ({ opacity, scale } = self.state);
        obj = { dialogKey: str, onDismiss: self.handleRequestClose };
        obj = { style: items };
        const items = [absoluteFill.absoluteFill, tmp.alertContentWrapper];
        const obj1 = { onPress: self.handleRequestClose };
        const items1 = [tmp.alertWrapper, self.props.style, { opacity }];
        const renderAlertResult = props.renderAlert(obj);
        obj1.children = callback4(RN.View, { style: items1 });
        const items2 = [callback4(closure_12, obj1), ];
        const items3 = [{ scale }];
        items2[1] = callback4(RN.View, { style: { transform: items3 }, children: renderAlertResult });
        obj.children = items2;
        obj.children = callback5(callback(closure_2[21]), obj);
        return callback4(AlertWrapper(closure_2[20]).Dialog, obj);
      }
    }
  ];
  return callback2(AlertWrapper, items);
}(importAllResult.PureComponent);
tmp10.contextType = arg1(dependencyMap[22]).ThemeContext;
let closure_23 = Object.freeze({ renderAlert: undefined, renderKey: undefined, props: undefined });
const obj5 = arg1(dependencyMap[17]);
const memoResult = importAllResult.memo(function Alerts() {
  let callback = importAllResult.useRef(closure_23);
  let obj = callback(dependencyMap[23]);
  const items = [closure_17, ...closure_20.getStores()];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const _alert = store.getAlert();
    if (null != _alert) {
      let obj = { renderAlert: _alert, renderKey: store.getAlertKey(), props: null };
      return obj;
    } else {
      const openModal = openModal.getOpenModal();
      if (null != openModal) {
        const props = openModal.props;
        const stateFromStoresObject = props;
        const _HermesInternal = HermesInternal;
        const combined = "alert-registery-" + openModal.key;
        obj = {};
        if (combined === ref.current.renderKey) {
          if (stateFromStoresObject(stateFromStores[24])(props, ref.current.props)) {
            let fn = ref.current.renderAlert;
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
  const importDefault = stateFromStoresObject;
  const effect = importAllResult.useEffect(() => {
    closure_0.current = stateFromStoresObject;
  });
  const items1 = [closure_17];
  const stateFromStores = callback(dependencyMap[23]).useStateFromStores(items1, () => store.isAlertDismissable());
  const dependencyMap = stateFromStores;
  const obj2 = callback(dependencyMap[23]);
  const items2 = [closure_13];
  const renderAlert = stateFromStoresObject.renderAlert;
  let closure_3 = renderAlert;
  const renderKey = stateFromStoresObject.renderKey;
  const items3 = [renderAlert, stateFromStores];
  const stateFromStores1 = callback(dependencyMap[23]).useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  callback = importAllResult.useCallback(() => {
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
  importDefault(dependencyMap[25])(callback);
  let tmp7;
  if (null != renderAlert) {
    obj = { isDismissable: stateFromStores, renderAlert, renderKey, useReducedMotion: stateFromStores1 };
    tmp7 = callback4(tmp10, obj, renderKey);
  }
  obj = { component: callback(dependencyMap[27]).TransitionGroupOverlayView, style: StyleSheet.absoluteFill, children: tmp7 };
  return callback4(callback(dependencyMap[26]).TransitionGroup, obj);
});
const result = arg1(dependencyMap[28]).fileFinishedImporting("components_native/common/Alerts.tsx");

export default memoResult;
