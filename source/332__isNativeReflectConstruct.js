// Module ID: 332
// Function ID: 4926
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 332 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = ["tabIndex", "selection", "selectionColor", "selectionHandleColor", "cursorColor", "lvs", "lv"];
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const createRef = arg1(dependencyMap[7]).createRef;
const jsx = arg1(dependencyMap[8]).jsx;

export default (Component) => {
  class KeyboardAvoidingView {
    constructor(arg0) {
      self = this;
      tmp = closure_5(this, KeyboardAvoidingView);
      items = [];
      items[0] = Component;
      obj = closure_8(KeyboardAvoidingView);
      tmp2 = closure_7;
      if (closure_12()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_8;
        constructResult = Reflect.construct(obj, items, closure_8(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      f4941 = tmp2Result;
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
      tmp2Result._onLayout = () => {
        let closure_0 = callback(async (arg0) => {
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
      }();
      tmp2Result._setBottom = (_bottom) => {
        const enabled = tmp2Result.props.enabled;
        tmp2Result._bottom = _bottom;
        if (tmp) {
          const obj = { bottom: _bottom };
          tmp2Result.setState(obj);
        }
      };
      tmp2Result._updateBottomIfNecessary = closure_4(async () => {
        let duration;
        let easing;
        if (null != lib._keyboardEvent) {
          const _keyboardEvent = lib._keyboardEvent;
          ({ duration, easing } = _keyboardEvent);
          const tmp4 = yield closure_0._relativeKeyboardHeight(_keyboardEvent.endCoordinates);
          if (lib._bottom !== tmp4) {
            lib._setBottom(tmp4);
            const enabled = lib.props.enabled;
            if (tmp6) {
              let obj = lib(closure_1[9]);
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
              obj.type = lib(closure_1[9]).Types[easing] || "keyboard";
              obj.update = obj;
              obj.configureNext(obj);
              const tmp11 = lib(closure_1[9]).Types[easing] || "keyboard";
            }
            const tmp6 = (null == enabled || enabled) && duration && easing;
          }
        } else {
          lib._setBottom(0);
        }
      });
      tmp2Result.state = { bottom: 0 };
      tmp2Result.viewRef = closure_10();
      return tmp2Result;
    }
  }
  const dependencyMap = KeyboardAvoidingView;
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
  const items = [obj, , , , ];
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
      const obj = callback(KeyboardAvoidingView[10]);
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
      const tmp2 = callback2(props, closure_2);
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
        const tmp20 = null != self._frame && self.state.bottom > 0;
        const tmp25 = callback(KeyboardAvoidingView[11]);
        obj.style = callback(KeyboardAvoidingView[12]).compose(style, tmp21);
        obj.onLayout = self._onLayout;
        const obj1 = { children };
        return callback7(tmp25, Object.assign(obj, tmp2, obj1));
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
        obj3.children = callback7(callback(KeyboardAvoidingView[11]), obj4);
        return callback7(tmp16, Object.assign(obj2, tmp2, obj3));
      } else if ("padding" === behavior) {
        const _Object2 = Object;
        const obj6 = { ref: self.viewRef };
        obj3 = callback(KeyboardAvoidingView[12]);
        const obj7 = { paddingBottom: num };
        obj6.style = obj3.compose(style, obj7);
        obj6.onLayout = self._onLayout;
        const obj8 = { children };
        return callback7(callback(KeyboardAvoidingView[11]), Object.assign(obj6, tmp2, obj8));
      } else {
        const _Object = Object;
        obj = {};
        ({ viewRef: obj.ref, _onLayout: obj.onLayout } = self);
        obj.style = style;
        obj9 = { children };
        return callback7(callback(KeyboardAvoidingView[11]), Object.assign(obj, tmp2, obj9));
      }
    }
  };
  return callback2(KeyboardAvoidingView, items);
}(importAll(dependencyMap[7]).Component);
