// Module ID: 332
// Function ID: 4926
// Name: _isNativeReflectConstruct
// Dependencies: [29, 5, 6, 7, 15, 17, 18, 31, 33, 333, 334, 112, 253]

// Module 332 (_isNativeReflectConstruct)
import _objectWithoutProperties from "_objectWithoutProperties";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import result from "result";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import closure_8 from "_getPrototypeOf";
import closure_9 from "_inherits";
import { createRef } from "result";
import { jsx } from "jsxProd";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = ["behavior", "children", "contentContainerStyle", "enabled", "keyboardVerticalOffset", "style", "onLayout"];

export default ((Component) => {
  class KeyboardAvoidingView {
    constructor(arg0) {
      self = this;
      tmp = outer1_5(this, KeyboardAvoidingView);
      items = [];
      items[0] = Component;
      obj = outer1_8(KeyboardAvoidingView);
      tmp2 = outer1_7;
      if (outer1_12()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_8;
        constructResult = Reflect.construct(obj, items, outer1_8(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result._frame = null;
      tmp2Result._keyboardEvent = null;
      tmp2Result._subscriptions = [];
      tmp2Result._initialFrameHeight = 0;
      tmp2Result._bottom = 0;
      tmp2Result._onKeyboardChange = (_keyboardEvent) => {
        tmp2Result._keyboardEvent = _keyboardEvent;
        const result = tmp2Result._updateBottomIfNecessary();
      };
      tmp2Result._onKeyboardHide = (arg0) => {
        tmp2Result._keyboardEvent = null;
        const result = tmp2Result._updateBottomIfNecessary();
      };
      tmp2Result._onLayout = (() => {
        let closure_0 = outer2_4(async (arg0) => {
          arg0.persist();
          const _frame = closure_0._frame;
          closure_0._frame = arg0.nativeEvent.layout;
          if (!closure_0._initialFrameHeight) {
            closure_0._initialFrameHeight = closure_0._frame.height;
          }
          let tmp3 = _frame;
          if (_frame) {
            tmp3 = _frame.height === closure_0._frame.height;
          }
          if (tmp3) {
            if (closure_0.props.onLayout) {
              const props = closure_0.props;
              props.onLayout(arg0);
            }
          } else {
            return yield closure_0._updateBottomIfNecessary();
          }
        });
        return function(arg0) {
          return callback(...arguments);
        };
      })();
      tmp2Result._setBottom = (_bottom) => {
        const enabled = tmp2Result.props.enabled;
        tmp2Result._bottom = _bottom;
        if (tmp) {
          const obj = { bottom: _bottom };
          tmp2Result.setState(obj);
        }
      };
      tmp2Result._updateBottomIfNecessary = outer1_4(async () => {
        let duration;
        let easing;
        if (null != outer1_0._keyboardEvent) {
          const _keyboardEvent = outer1_0._keyboardEvent;
          ({ duration, easing } = _keyboardEvent);
          const tmp4 = yield outer1_0._relativeKeyboardHeight(_keyboardEvent.endCoordinates);
          if (outer1_0._bottom !== tmp4) {
            outer1_0._setBottom(tmp4);
            const enabled = outer1_0.props.enabled;
            if (tmp6) {
              let obj = callback(KeyboardAvoidingView[9]);
              obj = {};
              let num3 = 10;
              let num4 = 10;
              if (duration > 10) {
                num4 = duration;
              }
              obj.duration = num4;
              obj = {};
              if (duration > num3) {
                num3 = duration;
              }
              obj.duration = num3;
              obj.type = callback(KeyboardAvoidingView[9]).Types[easing] || "keyboard";
              obj.update = obj;
              obj.configureNext(obj);
              const tmp11 = callback(KeyboardAvoidingView[9]).Types[easing] || "keyboard";
            }
            tmp6 = (null == enabled || enabled) && duration && easing;
          }
        } else {
          outer1_0._setBottom(0);
        }
      });
      tmp2Result.state = { bottom: 0 };
      tmp2Result.viewRef = outer1_10();
      return tmp2Result;
    }
  }
  callback3(KeyboardAvoidingView, Component);
  let obj = { key: "_relativeKeyboardHeight" };
  let closure_0 = callback(async function(arg0) {
    const self = this;
    if (obj) {
      return obj.resume();
    } else {
      const _frame = self._frame;
      if (_frame) {
        if (arg0) {
          const keyboardVerticalOffset = self.props.keyboardVerticalOffset;
          let num3 = 0;
          if (null != keyboardVerticalOffset) {
            num3 = keyboardVerticalOffset;
          }
          const diff = arg0.screenY - num3;
          if ("height" === self.props.behavior) {
            const _Math2 = Math;
            let bound = Math.max(self.state.bottom + _frame.y + _frame.height - diff, 0);
          } else {
            const _Math = Math;
            bound = Math.max(_frame.y + _frame.height - diff, 0);
          }
          return bound;
        }
      }
      return 0;
    }
  });
  obj.value = function _relativeKeyboardHeight(endCoordinates) {
    return callback(...arguments);
  };
  let items = [obj, , , , ];
  obj = {
    key: "componentDidUpdate",
    value: function componentDidUpdate(arg0, bottom) {
      const self = this;
      const enabled = this.props.enabled;
      let tmp = null == enabled || enabled;
      if (tmp) {
        tmp = self._bottom !== bottom.bottom;
      }
      if (tmp) {
        const obj = { bottom: self._bottom };
        self.setState(obj);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      const self = this;
      if (!obj.isVisible()) {
        self._keyboardEvent = null;
        self._setBottom(0);
      }
      obj = callback(KeyboardAvoidingView[10]);
      const items = [callback(KeyboardAvoidingView[10]).addListener("keyboardDidHide", self._onKeyboardChange), ];
      const obj2 = callback(KeyboardAvoidingView[10]);
      items[1] = callback(KeyboardAvoidingView[10]).addListener("keyboardDidShow", self._onKeyboardChange);
      self._subscriptions = items;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const _subscriptions = this._subscriptions;
      const item = _subscriptions.forEach((remove) => {
        remove.remove();
      });
    }
  };
  items[4] = {
    key: "render",
    value: function render() {
      let behavior;
      let children;
      let enabled;
      let keyboardVerticalOffset;
      let onLayout;
      let style;
      const self = this;
      const props = this.props;
      ({ behavior, children, enabled } = props);
      let tmp = undefined === enabled;
      if (!tmp) {
        tmp = enabled;
      }
      ({ keyboardVerticalOffset, style, onLayout } = props);
      const tmp2 = outer1_3(props, outer1_2);
      let num = 0;
      if (true === tmp) {
        num = self.state.bottom;
      }
      if ("height" === behavior) {
        let tmp21;
        if (tmp20) {
          let obj = { height: self._initialFrameHeight - num, flex: 0 };
          tmp21 = obj;
        }
        const _Object4 = Object;
        obj = { ref: self.viewRef };
        tmp20 = null != self._frame && self.state.bottom > 0;
        const tmp25 = callback(KeyboardAvoidingView[11]);
        obj.style = callback(KeyboardAvoidingView[12]).compose(style, tmp21);
        obj.onLayout = self._onLayout;
        const obj1 = { children };
        return outer1_11(tmp25, Object.assign(obj, tmp2, obj1));
      } else if ("position" === behavior) {
        const _Object3 = Object;
        const obj2 = { ref: self.viewRef, style, onLayout: self._onLayout };
        let obj3 = {};
        const obj4 = {};
        const tmp16 = callback(KeyboardAvoidingView[11]);
        let obj9 = callback(KeyboardAvoidingView[12]);
        const obj5 = { bottom: num };
        obj4.style = obj9.compose(props.contentContainerStyle, obj5);
        obj4.children = children;
        obj3.children = outer1_11(callback(KeyboardAvoidingView[11]), obj4);
        return outer1_11(tmp16, Object.assign(obj2, tmp2, obj3));
      } else if ("padding" === behavior) {
        const _Object2 = Object;
        const obj6 = { ref: self.viewRef };
        obj3 = callback(KeyboardAvoidingView[12]);
        const obj7 = { paddingBottom: num };
        obj6.style = obj3.compose(style, obj7);
        obj6.onLayout = self._onLayout;
        const obj8 = { children };
        return outer1_11(callback(KeyboardAvoidingView[11]), Object.assign(obj6, tmp2, obj8));
      } else {
        const _Object = Object;
        obj = {};
        ({ viewRef: obj.ref, _onLayout: obj.onLayout } = self);
        obj.style = style;
        obj9 = { children };
        return outer1_11(callback(KeyboardAvoidingView[11]), Object.assign(obj, tmp2, obj9));
      }
    }
  };
  return callback2(KeyboardAvoidingView, items);
})(require("result").Component);
