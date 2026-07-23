// Module ID: 337
// Function ID: 4974
// Name: _isNativeReflectConstruct
// Dependencies: [29, 77, 6, 7, 15, 17, 18, 31, 33, 338, 303, 340, 112, 252, 404, 253]

// Module 337 (_isNativeReflectConstruct)
import _objectWithoutProperties from "_objectWithoutProperties";
import importDefaultResult from "_defineProperty";
import _inherits from "_inherits";
import result from "result";
import setStyleAttributePreprocessor from "setStyleAttributePreprocessor";
import _getPrototypeOf from "_getPrototypeOf";
import closure_9 from "_inherits";
import { jsx } from "jsxProd";
import importAllResult from "result";
import { default as _default } from "I18nManager";

const require = arg1;
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
    return jsx(Component, Object.assign({}, _objectWithoutProperties(global, _isNativeReflectConstruct), { modalRef: global.ref }));
  }
}
let closure_3 = ["ref"];
let c11 = 0;
const tmp4 = ((Component) => {
  class Modal {
    constructor(arg0) {
      self = this;
      tmp = outer1_5(this, Modal);
      items = [];
      items[0] = Component;
      obj = outer1_8(Modal);
      tmp2 = outer1_7;
      if (outer1_14()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_8;
        constructResult = Reflect.construct(obj, items, outer1_8(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp7 = +outer1_11;
      outer1_11 = tmp7 + 1;
      tmp2Result._identifier = tmp7;
      obj = { isRendered: true === Component.visible };
      tmp2Result.state = obj;
      return tmp2Result;
    }
  }
  callback3(Modal, Component);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {

    }
  };
  let items = [obj, , , , , ];
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
          style: outer1_13.modal,
          onStartShouldSetResponder: self._shouldSetResponder,
          supportedOrientations: self.props.supportedOrientations,
          onOrientationChange: self.props.onOrientationChange,
          allowSwipeDismissal: self.props.allowSwipeDismissal,
          testID: self.props.testID
        };
        obj = {};
        const obj1 = { value: null };
        const obj2 = {};
        const items = [outer1_13.container, obj];
        obj2.style = items;
        obj2.collapsable = false;
        obj2.children = self.props.children;
        obj1.children = outer1_10(Modal(outer1_2[12]).default, obj2);
        obj.children = outer1_10(Modal(outer1_2[11]).default.Context.Provider, obj1);
        obj.children = outer1_10(outer1_1(outer1_2[10]).VirtualizedListContextResetter, obj);
        return outer1_10(outer1_1(outer1_2[9]), obj);
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
})(require("result").Component);
let closure_12 = tmp4;
tmp4.defaultProps = { visible: true, hardwareAccelerated: false };
tmp4.contextType = require("RootTagContext").RootTagContext;
let str = "left";
if (_default.getConstants().isRTL) {
  str = "right";
}
let obj = { modal: { position: "absolute" }, container: importDefaultResult(importDefaultResult(importDefaultResult({}, str, 0), "top", 0), "flex", 1) };
let closure_13 = require("setStyleAttributePreprocessor").default.create(obj);
Wrapper.displayName = "Modal";
Wrapper.Context = require("get VirtualizedList").VirtualizedListContextResetter;

export default Wrapper;
