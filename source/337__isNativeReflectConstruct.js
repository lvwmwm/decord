// Module ID: 337
// Function ID: 4974
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 337 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
class Wrapper {
  constructor(arg0) {
    return jsx(Component, Object.assign({}, closure_4(global, _isNativeReflectConstruct), { modalRef: global.ref }));
  }
}
let closure_3 = [null];
let closure_4 = importDefault(dependencyMap[0]);
const importDefaultResult = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const jsx = arg1(dependencyMap[8]).jsx;
let closure_11 = 0;
const tmp4 = (Component) => {
  class Modal {
    constructor(arg0) {
      self = this;
      tmp = closure_5(this, Modal);
      items = [];
      items[0] = Component;
      obj = closure_8(Modal);
      tmp2 = closure_7;
      if (closure_14()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_8;
        constructResult = Reflect.construct(obj, items, closure_8(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp7 = +closure_11;
      closure_11 = tmp7 + 1;
      tmp2Result._identifier = tmp7;
      obj = { isRendered: true === Component.visible };
      tmp2Result.state = obj;
      return tmp2Result;
    }
  }
  const arg1 = Modal;
  callback3(Modal, Component);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {

    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._eventSubscription) {
        const _eventSubscription = this._eventSubscription;
        _eventSubscription.remove();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "componentDidUpdate",
    value: function componentDidUpdate(visible) {
      const self = this;
      let tmp = false === visible.visible;
      if (tmp) {
        tmp = true === self.props.visible;
      }
      if (tmp) {
        const obj = { isRendered: true };
        self.setState(obj);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_shouldShowModal",
    value: function _shouldShowModal() {
      return true === this.props.visible;
    }
  };
  items[4] = {
    key: "render",
    value: function render() {
      const self = this;
      if (this._shouldShowModal()) {
        let obj = {};
        let str = "transparent";
        if (true !== self.props.transparent) {
          const backdropColor = self.props.backdropColor;
          let str2 = "white";
          if (null != backdropColor) {
            str2 = backdropColor;
          }
          str = str2;
        }
        obj.backgroundColor = str;
        let presentationStyle = self.props.presentationStyle;
        if (!presentationStyle) {
          let str3 = "fullScreen";
          if (true === self.props.transparent) {
            str3 = "overFullScreen";
          }
          presentationStyle = str3;
        }
        obj = {
          animationType: self.props.animationType || "none",
          presentationStyle,
          transparent: self.props.transparent,
          hardwareAccelerated: self.props.hardwareAccelerated,
          onRequestClose: self.props.onRequestClose,
          onShow: self.props.onShow,
          onDismiss() {

            },
          ref: self.props.modalRef,
          visible: self.props.visible,
          statusBarTranslucent: self.props.statusBarTranslucent,
          navigationBarTranslucent: self.props.navigationBarTranslucent,
          identifier: self._identifier,
          style: closure_13.modal,
          onStartShouldSetResponder: self._shouldSetResponder,
          supportedOrientations: self.props.supportedOrientations,
          onOrientationChange: self.props.onOrientationChange,
          allowSwipeDismissal: self.props.allowSwipeDismissal,
          testID: self.props.testID
        };
        obj = {};
        const obj1 = { value: null };
        const obj2 = {};
        const items = [closure_13.container, obj];
        obj2.style = items;
        obj2.collapsable = false;
        obj2.children = self.props.children;
        obj1.children = callback4(Modal(closure_2[12]).default, obj2);
        obj.children = callback4(Modal(closure_2[11]).default.Context.Provider, obj1);
        obj.children = callback4(callback(closure_2[10]).VirtualizedListContextResetter, obj);
        return callback4(callback(closure_2[9]), obj);
      } else {
        return null;
      }
    }
  };
  items[5] = {
    key: "_shouldSetResponder",
    value: function _shouldSetResponder() {
      return true;
    }
  };
  return callback2(Modal, items);
}(importAll(dependencyMap[7]).Component);
tmp4.defaultProps = { accessibilityRole: true, round: true };
tmp4.contextType = arg1(dependencyMap[13]).RootTagContext;
const importAllResult = importAll(dependencyMap[7]);
let str = "left";
if (_default.getConstants().isRTL) {
  str = "right";
}
const _default = arg1(dependencyMap[14]).default;
const obj = { modal: { position: "absolute" }, container: importDefaultResult(importDefaultResult(importDefaultResult({}, str, 0), "top", 0), "flex", 1) };
let closure_13 = arg1(dependencyMap[15]).default.create(obj);
Wrapper.displayName = "Modal";
Wrapper.Context = importDefault(dependencyMap[10]).VirtualizedListContextResetter;

export default Wrapper;
