// Module ID: 5056
// Function ID: 43169
// Name: _callSuper
// Dependencies: []

// Module 5056 (_callSuper)
let Platform;
let StyleSheet;
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
  return closure_8(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = [];
let closure_3 = [false, false];
let closure_4 = [];
let closure_5 = importDefault(dependencyMap[0]);
let closure_6 = importDefault(dependencyMap[1]);
let closure_7 = importDefault(dependencyMap[2]);
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
const importAllResult = importAll(dependencyMap[6]);
const tmp2 = arg1(dependencyMap[7]);
const Animated = tmp2.Animated;
({ Platform, processColor: closure_12, StyleSheet } = tmp2);
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[8]));
const tmp3 = arg1(dependencyMap[8]);
const importDefaultResultResult = importDefault(dependencyMap[9])(importDefault(dependencyMap[10]), { 1415671984: null, 1644366417: null });
let closure_17 = null;
const tmp6 = (Component) => {
  class InnerBaseButton {
    constructor(arg0) {
      tmp = closure_6(this, InnerBaseButton);
      items = [];
      items[0] = Component;
      tmp2 = closure_25(this, InnerBaseButton, items);
      InnerBaseButton = tmp2;
      tmp2.handleEvent = (nativeEvent) => {
        let pointerInside;
        let state;
        nativeEvent = nativeEvent.nativeEvent;
        ({ state, pointerInside } = nativeEvent);
        let tmp = pointerInside;
        if (pointerInside) {
          tmp = state === tmp2(closure_1[11]).State.ACTIVE;
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
          onPress = nativeEvent.oldState === tmp2(closure_1[11]).State.ACTIVE;
        }
        if (onPress) {
          onPress = state !== tmp2(closure_1[11]).State.CANCELLED;
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
          if (state === tmp2(closure_1[11]).State.BEGAN) {
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
        let tmp20 = state !== tmp2(closure_1[11]).State.ACTIVE || pointerInside;
        if (!tmp20) {
          tmp20 = undefined === tmp2.longPressTimeout;
        }
        if (tmp20) {
          let tmp23 = undefined === tmp2.longPressTimeout;
          if (!tmp23) {
            let tmp26 = state !== tmp2(closure_1[11]).State.END;
            if (tmp26) {
              tmp26 = state !== tmp2(closure_1[11]).State.CANCELLED;
            }
            if (tmp26) {
              tmp26 = state !== tmp2(closure_1[11]).State.FAILED;
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
  const arg1 = InnerBaseButton;
  callback3(InnerBaseButton, Component);
  const items = [
    {
      key: "render",
      value: function render() {
        const self = this;
        const props = this.props;
        const rippleColor = props.rippleColor;
        if (null === closure_17) {
          let obj = InnerBaseButton(closure_1[12]);
          closure_17 = obj.isFabric();
        }
        let tmp5Result = rippleColor;
        if (!closure_17) {
          let tmp6;
          if (null != rippleColor) {
            tmp6 = rippleColor;
          }
          tmp5Result = closure_12(tmp6);
          const tmp5 = closure_12;
        }
        obj = { ref: self.props.innerRef, rippleColor: tmp5Result };
        const items = [props.style, false];
        obj.style = items;
        obj = { onGestureEvent: self.onGestureEvent, onHandlerStateChange: self.onHandlerStateChange };
        return callback3(closure_16, Object.assign(obj, callback(props, closure_2), obj));
      }
    }
  ];
  return callback(InnerBaseButton, items);
}(importAllResult.Component);
tmp6.defaultProps = { delayLongPress: 600 };
let closure_19 = Animated.createAnimatedComponent(tmp6);
const forwardRefResult = importAllResult.forwardRef((arg0, innerRef) => callback4(tmp6, Object.assign({ innerRef }, arg0)));
let closure_21 = importAllResult.forwardRef((arg0, innerRef) => callback4(closure_19, Object.assign({ innerRef }, arg0)));
const styles = StyleSheet.create({ underlay: { borderRadius: "center", accessibilityRole: null, count: 4, ks: 4, borderRadius: "rgba(0, 0, 0, 0.75)" } });
const tmp8 = (Component) => {
  class InnerRectButton {
    constructor(arg0) {
      tmp = closure_6(this, InnerRectButton);
      items = [];
      items[0] = Component;
      tmp2 = closure_25(this, InnerRectButton, items);
      InnerRectButton = tmp2;
      tmp2.onActiveStateChange = (arg0) => {
        if (null != tmp2.props.onActiveStateChange) {
          const props = tmp2.props;
          props.onActiveStateChange(arg0);
        }
      };
      value = new closure_11.Value(0);
      tmp2.opacity = value;
      return tmp2;
    }
  }
  const arg1 = InnerRectButton;
  callback3(InnerRectButton, Component);
  const items = [
    {
      key: "render",
      value: function render() {
        let children;
        let style;
        const self = this;
        const props = this.props;
        ({ children, style } = props);
        let flattenResult = closure_13.flatten(style);
        if (null == flattenResult) {
          flattenResult = {};
        }
        let obj = { ref: self.props.innerRef, style: flattenResult, onActiveStateChange: self.onActiveStateChange };
        const items = [underlay.underlay, ];
        obj = { opacity: self.opacity, backgroundColor: self.props.underlayColor };
        ({ borderRadius: obj3.borderRadius, borderTopLeftRadius: obj3.borderTopLeftRadius, borderTopRightRadius: obj3.borderTopRightRadius, borderBottomLeftRadius: obj3.borderBottomLeftRadius, borderBottomRightRadius: obj3.borderBottomRightRadius } = flattenResult);
        items[1] = obj;
        const items1 = [callback3(RN.View, { style: items }), children];
        obj.children = items1;
        return callback4(closure_20, Object.assign({}, callback(props, closure_3), obj));
      }
    }
  ];
  return callback(InnerRectButton, items);
}(importAllResult.Component);
tmp8.defaultProps = {};
const importDefaultResult = importDefault(dependencyMap[9]);
const tmp10 = (Component) => {
  class InnerBorderlessButton {
    constructor(arg0) {
      tmp = closure_6(this, InnerBorderlessButton);
      items = [];
      items[0] = Component;
      tmp2 = closure_25(this, InnerBorderlessButton, items);
      InnerBorderlessButton = tmp2;
      tmp2.onActiveStateChange = (arg0) => {
        if (null != tmp2.props.onActiveStateChange) {
          const props = tmp2.props;
          props.onActiveStateChange(arg0);
        }
      };
      value = new closure_11.Value(1);
      tmp2.opacity = value;
      return tmp2;
    }
  }
  const arg1 = InnerBorderlessButton;
  callback3(InnerBorderlessButton, Component);
  const items = [
    {
      key: "render",
      value: function render() {
        let children;
        let innerRef;
        let style;
        const props = this.props;
        ({ children, style, innerRef } = props);
        const items = [style, false];
        return callback3(closure_21, Object.assign({}, callback(props, closure_4), { innerRef, onActiveStateChange: this.onActiveStateChange, style: items, children }));
      }
    }
  ];
  return callback(InnerBorderlessButton, items);
}(importAllResult.Component);
tmp10.defaultProps = {};

export const RawButton = importDefaultResultResult;
export const BaseButton = forwardRefResult;
export const RectButton = importAllResult.forwardRef((arg0, innerRef) => callback4(tmp8, Object.assign({ innerRef }, arg0)));
export const BorderlessButton = importAllResult.forwardRef((arg0, innerRef) => callback4(tmp10, Object.assign({ innerRef }, arg0)));
export const PureNativeButton = importDefault(dependencyMap[10]);
