// Module ID: 5279
// Function ID: 45565
// Name: _callSuper
// Dependencies: [29, 6, 7, 15, 17, 18, 31, 27, 33, 5251, 5280, 5222, 5221]

// Module 5279 (_callSuper)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import getActivityIndicator from "get ActivityIndicator";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import importDefaultResultResult from "__INTERNAL_VIEW_CONFIG";
import importDefaultResult from "createNativeWrapper";

let Platform;
let StyleSheet;
let closure_12;
let closure_14;
let closure_15;
const require = arg1;
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return _possibleConstructorReturn(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = ["rippleColor", "style"];
let closure_3 = ["children", "style"];
let closure_4 = ["children", "style", "innerRef"];
const Animated = get_ActivityIndicator.Animated;
({ Platform, processColor: closure_12, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let c17 = null;
let tmp6 = ((Component) => {
  class InnerBaseButton {
    constructor(arg0) {
      tmp = outer1_6(this, InnerBaseButton);
      items = [];
      items[0] = Component;
      tmp2 = outer1_25(this, InnerBaseButton, items);
      InnerBaseButton = tmp2;
      tmp2.handleEvent = (nativeEvent) => {
        let pointerInside;
        let state;
        nativeEvent = nativeEvent.nativeEvent;
        ({ state, pointerInside } = nativeEvent);
        let tmp = pointerInside;
        if (pointerInside) {
          tmp = state === InnerBaseButton(outer2_1[11]).State.ACTIVE;
        }
        let onActiveStateChange = tmp !== tmp2.lastActive;
        if (onActiveStateChange) {
          onActiveStateChange = tmp2.props.onActiveStateChange;
        }
        if (onActiveStateChange) {
          const props = tmp2.props;
          props.onActiveStateChange(tmp);
        }
        let onPress = !tmp2.longPressDetected;
        if (onPress) {
          onPress = nativeEvent.oldState === InnerBaseButton(outer2_1[11]).State.ACTIVE;
        }
        if (onPress) {
          onPress = state !== InnerBaseButton(outer2_1[11]).State.CANCELLED;
        }
        if (onPress) {
          onPress = tmp2.lastActive;
        }
        if (onPress) {
          onPress = tmp2.props.onPress;
        }
        if (onPress) {
          const props2 = tmp2.props;
          props2.onPress(pointerInside);
        }
        if (!tmp2.lastActive) {
          if (state === InnerBaseButton(outer2_1[11]).State.BEGAN) {
            if (pointerInside) {
              tmp2.longPressDetected = false;
              if (tmp2.props.onLongPress) {
                const _setTimeout = setTimeout;
                tmp2.longPressTimeout = setTimeout(tmp2.onLongPress, tmp2.props.delayLongPress);
              }
            }
            tmp2.lastActive = tmp;
          }
        }
        let tmp20 = state !== InnerBaseButton(outer2_1[11]).State.ACTIVE || pointerInside;
        if (!tmp20) {
          tmp20 = undefined === tmp2.longPressTimeout;
        }
        if (tmp20) {
          let tmp23 = undefined === tmp2.longPressTimeout;
          if (!tmp23) {
            let tmp26 = state !== InnerBaseButton(outer2_1[11]).State.END;
            if (tmp26) {
              tmp26 = state !== InnerBaseButton(outer2_1[11]).State.CANCELLED;
            }
            if (tmp26) {
              tmp26 = state !== InnerBaseButton(outer2_1[11]).State.FAILED;
            }
            tmp23 = tmp26;
          }
          tmp20 = tmp23;
        }
        if (!tmp20) {
          const _clearTimeout = clearTimeout;
          clearTimeout(tmp2.longPressTimeout);
          tmp2.longPressTimeout = undefined;
        }
      };
      tmp2.onLongPress = () => {
        tmp2.longPressDetected = true;
        if (null != tmp2.props.onLongPress) {
          const props = tmp2.props;
          props.onLongPress();
        }
      };
      tmp2.onHandlerStateChange = (arg0) => {
        if (null != tmp2.props.onHandlerStateChange) {
          const props = tmp2.props;
          props.onHandlerStateChange(arg0);
        }
        tmp2.handleEvent(arg0);
      };
      tmp2.onGestureEvent = (arg0) => {
        if (null != tmp2.props.onGestureEvent) {
          const props = tmp2.props;
          props.onGestureEvent(arg0);
        }
        tmp2.handleEvent(arg0);
      };
      tmp2.lastActive = false;
      tmp2.longPressDetected = false;
      return tmp2;
    }
  }
  callback3(InnerBaseButton, Component);
  let items = [
    {
      key: "render",
      value: function render() {
        const self = this;
        const props = this.props;
        const rippleColor = props.rippleColor;
        if (null === outer1_17) {
          let obj = InnerBaseButton(outer1_1[12]);
          outer1_17 = obj.isFabric();
        }
        let tmp5Result = rippleColor;
        if (!outer1_17) {
          let tmp6;
          if (null != rippleColor) {
            tmp6 = rippleColor;
          }
          tmp5Result = outer1_12(tmp6);
          const tmp5 = outer1_12;
        }
        obj = { ref: self.props.innerRef, rippleColor: tmp5Result };
        const items = [props.style, false];
        obj.style = items;
        obj = { onGestureEvent: self.onGestureEvent, onHandlerStateChange: self.onHandlerStateChange };
        return outer1_14(outer1_16, Object.assign(obj, outer1_5(props, outer1_2), obj));
      }
    }
  ];
  return callback(InnerBaseButton, items);
})(importAllResult.Component);
let closure_18 = tmp6;
tmp6.defaultProps = { delayLongPress: 600 };
let closure_19 = Animated.createAnimatedComponent(tmp6);
const forwardRefResult = importAllResult.forwardRef((arg0, innerRef) => callback4(closure_18, Object.assign({ innerRef }, arg0)));
let closure_21 = importAllResult.forwardRef((arg0, innerRef) => callback4(closure_19, Object.assign({ innerRef }, arg0)));
const styles = StyleSheet.create({ underlay: { position: "absolute", left: 0, right: 0, bottom: 0, top: 0 } });
const tmp8 = ((Component) => {
  class InnerRectButton {
    constructor(arg0) {
      tmp = outer1_6(this, InnerRectButton);
      items = [];
      items[0] = Component;
      tmp2 = outer1_25(this, InnerRectButton, items);
      InnerRectButton = tmp2;
      tmp2.onActiveStateChange = (arg0) => {
        if (null != tmp2.props.onActiveStateChange) {
          const props = tmp2.props;
          props.onActiveStateChange(arg0);
        }
      };
      value = new outer1_11.Value(0);
      tmp2.opacity = value;
      return tmp2;
    }
  }
  callback3(InnerRectButton, Component);
  let items = [
    {
      key: "render",
      value: function render() {
        let children;
        let style;
        const self = this;
        const props = this.props;
        ({ children, style } = props);
        let flattenResult = outer1_13.flatten(style);
        if (null == flattenResult) {
          flattenResult = {};
        }
        let obj = { ref: self.props.innerRef, style: flattenResult, onActiveStateChange: self.onActiveStateChange };
        const items = [outer1_22.underlay, ];
        obj = { opacity: self.opacity, backgroundColor: self.props.underlayColor };
        ({ borderRadius: obj3.borderRadius, borderTopLeftRadius: obj3.borderTopLeftRadius, borderTopRightRadius: obj3.borderTopRightRadius, borderBottomLeftRadius: obj3.borderBottomLeftRadius, borderBottomRightRadius: obj3.borderBottomRightRadius } = flattenResult);
        items[1] = obj;
        const items1 = [outer1_14(outer1_11.View, { style: items }), children];
        obj.children = items1;
        return outer1_15(outer1_20, Object.assign({}, outer1_5(props, outer1_3), obj));
      }
    }
  ];
  return callback(InnerRectButton, items);
})(importAllResult.Component);
let closure_23 = tmp8;
tmp8.defaultProps = { activeOpacity: 0.105, underlayColor: "black" };
const tmp10 = ((Component) => {
  class InnerBorderlessButton {
    constructor(arg0) {
      tmp = outer1_6(this, InnerBorderlessButton);
      items = [];
      items[0] = Component;
      tmp2 = outer1_25(this, InnerBorderlessButton, items);
      InnerBorderlessButton = tmp2;
      tmp2.onActiveStateChange = (arg0) => {
        if (null != tmp2.props.onActiveStateChange) {
          const props = tmp2.props;
          props.onActiveStateChange(arg0);
        }
      };
      value = new outer1_11.Value(1);
      tmp2.opacity = value;
      return tmp2;
    }
  }
  callback3(InnerBorderlessButton, Component);
  let items = [
    {
      key: "render",
      value: function render() {
        let children;
        let innerRef;
        let style;
        const props = this.props;
        ({ children, style, innerRef } = props);
        const items = [style, false];
        return outer1_14(outer1_21, Object.assign({}, outer1_5(props, outer1_4), { innerRef, onActiveStateChange: this.onActiveStateChange, style: items, children }));
      }
    }
  ];
  return callback(InnerBorderlessButton, items);
})(importAllResult.Component);
let closure_24 = tmp10;
tmp10.defaultProps = { activeOpacity: 0.3, borderless: true };

export const RawButton = importDefaultResultResult;
export const BaseButton = forwardRefResult;
export const RectButton = importAllResult.forwardRef((arg0, innerRef) => callback4(closure_23, Object.assign({ innerRef }, arg0)));
export const BorderlessButton = importAllResult.forwardRef((arg0, innerRef) => callback4(closure_24, Object.assign({ innerRef }, arg0)));
export const PureNativeButton = require("__INTERNAL_VIEW_CONFIG");
