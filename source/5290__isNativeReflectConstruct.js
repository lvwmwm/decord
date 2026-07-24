// Module ID: 5290
// Function ID: 45664
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 33, 5222, 5247, 5235]

// Module 5290 (_isNativeReflectConstruct)
import getActivityIndicator from "get ActivityIndicator";
import closure_3 from "jsxProd";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let I18nManager;
let StyleSheet;
let closure_10;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ Animated: closure_7, StyleSheet, View: closure_8, I18nManager } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const tmp5 = ((Component) => {
  class Swipeable {
    constructor(arg0) {
      self = this;
      tmp = outer1_2(this, apply);
      items = [];
      items[0] = Component;
      obj = outer1_5(apply);
      tmp2 = outer1_4;
      if (outer1_12()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj, items, outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.updateAnimatedEvent = (overshootFriction, rowWidth) => {
        let dragX;
        let leftWidth;
        overshootFriction = overshootFriction.overshootFriction;
        ({ dragX, leftWidth } = rowWidth);
        let num = 0;
        if (undefined !== leftWidth) {
          num = leftWidth;
        }
        rowWidth = rowWidth.rowWidth;
        let num2 = 0;
        if (undefined !== rowWidth) {
          num2 = rowWidth;
        }
        let rightOffset = rowWidth.rightOffset;
        if (undefined === rightOffset) {
          rightOffset = num2;
        }
        const bound = Math.max(0, num2 - rightOffset);
        let overshootLeft = overshootFriction.overshootLeft;
        if (undefined === overshootLeft) {
          overshootLeft = num > 0;
        }
        let overshootRight = overshootFriction.overshootRight;
        if (undefined === overshootRight) {
          overshootRight = bound > 0;
        }
        const items = [0, overshootFriction.friction];
        let obj = { inputRange: items1 };
        items1 = [-bound - 1, -bound, num, num + 1];
        let num3 = 0;
        if (overshootRight) {
          num3 = 1 / overshootFriction;
        }
        const items2 = [-bound - num3, -bound, num, ];
        let num4 = 0;
        if (overshootLeft) {
          num4 = 1 / overshootFriction;
        }
        items2[3] = num + num4;
        obj.outputRange = items2;
        const interpolateResult = outer2_7.add(rowWidth.rowTranslation, dragX.interpolate({ inputRange: items, outputRange: [0, 1] })).interpolate(obj);
        tmp2Result.transX = interpolateResult;
        if (num > 0) {
          obj = {};
          const items3 = [-1, 0, num];
          obj.inputRange = items3;
          obj.outputRange = [0, 0, 1];
          let interpolateResult1 = interpolateResult.interpolate(obj);
        } else {
          const Value = outer2_7.Value;
          const prototype = Value.prototype;
          interpolateResult1 = new Value(0);
        }
        tmp2Result.showLeftAction = interpolateResult1;
        const showLeftAction = tmp2Result.showLeftAction;
        const items4 = [0, Number.MIN_VALUE];
        const items5 = [-10000, 0];
        tmp2Result.leftActionTranslate = showLeftAction.interpolate({ inputRange: items4, outputRange: items5, extrapolate: "clamp" });
        if (bound > 0) {
          const obj1 = {};
          const items6 = [-bound, 0, 1];
          obj1.inputRange = items6;
          obj1.outputRange = [1, 0, 0];
          let interpolateResult2 = interpolateResult.interpolate(obj1);
        } else {
          const Value2 = outer2_7.Value;
          const prototype2 = Value2.prototype;
          interpolateResult2 = new Value2(0);
        }
        tmp2Result.showRightAction = interpolateResult2;
        const showRightAction = tmp2Result.showRightAction;
        const items7 = [0, Number.MIN_VALUE];
        const items8 = [-10000, 0];
        tmp2Result.rightActionTranslate = showRightAction.interpolate({ inputRange: items7, outputRange: items8, extrapolate: "clamp" });
      };
      tmp2Result.onTapHandlerStateChange = (nativeEvent) => {
        if (nativeEvent.nativeEvent.oldState === Swipeable(outer2_1[8]).State.ACTIVE) {
          tmp2Result.close();
        }
      };
      tmp2Result.onHandlerStateChange = (nativeEvent) => {
        if (nativeEvent.nativeEvent.oldState === Swipeable(outer2_1[8]).State.ACTIVE) {
          tmp2Result.handleRelease(nativeEvent);
        }
        if (nativeEvent.nativeEvent.state === Swipeable(outer2_1[8]).State.ACTIVE) {
          nativeEvent = nativeEvent.nativeEvent;
          const rowState = tmp2Result.state.rowState;
          let str = "right";
          let str2 = "right";
          if (-1 !== rowState) {
            if (1 === rowState) {
              str = "left";
            }
            str2 = str;
          }
          if (0 === rowState) {
            if (null != tmp2Result.props.onSwipeableOpenStartDrag) {
              const props2 = tmp2Result.props;
              const result = props2.onSwipeableOpenStartDrag(str2);
            }
          } else if (null != tmp2Result.props.onSwipeableCloseStartDrag) {
            const props = tmp2Result.props;
            const result1 = props.onSwipeableCloseStartDrag(str2);
          }
        }
      };
      tmp2Result.handleRelease = (nativeEvent) => {
        let friction;
        let leftThreshold;
        let translationX;
        let velocityX;
        ({ velocityX, translationX } = nativeEvent.nativeEvent);
        const state = tmp2Result.state;
        const leftWidth = state.leftWidth;
        let num = 0;
        if (undefined !== leftWidth) {
          num = leftWidth;
        }
        const rowWidth = state.rowWidth;
        let num2 = 0;
        if (undefined !== rowWidth) {
          num2 = rowWidth;
        }
        const rowState = state.rowState;
        let rightOffset = tmp2Result.state.rightOffset;
        if (undefined === rightOffset) {
          rightOffset = num2;
        }
        const diff = num2 - rightOffset;
        const props = tmp2Result.props;
        ({ friction, leftThreshold } = props);
        if (undefined === leftThreshold) {
          leftThreshold = num / 2;
        }
        let rightThreshold = props.rightThreshold;
        if (undefined === rightThreshold) {
          rightThreshold = diff / 2;
        }
        const result = (translationX + 0.05 * velocityX) / friction;
        const sum = tmp2Result.currentOffset() + translationX / friction;
        if (0 === rowState) {
          let num6 = num;
          if (result <= leftThreshold) {
            num6 = 0;
            if (result < -rightThreshold) {
              num6 = -diff;
            }
          }
        } else if (1 === rowState) {
          num6 = 0;
          if (result > -leftThreshold) {
            num6 = num;
          }
        } else {
          num6 = 0;
          if (result < rightThreshold) {
            num6 = -diff;
          }
        }
        tmp2Result.animateRow(sum, num6, velocityX / friction);
      };
      tmp2Result.animateRow = (arg0, toValue, velocity) => {
        let dragX;
        let rowTranslation;
        let closure_1 = toValue;
        ({ dragX, rowTranslation } = arg0.state);
        dragX.setValue(0);
        rowTranslation.setValue(arg0);
        let obj = { rowState: Math.sign(toValue) };
        arg0.setState(obj);
        obj = { restSpeedThreshold: 1.7, restDisplacementThreshold: 0.4, velocity, bounciness: 0, toValue, useNativeDriver: arg0.props.useNativeAnimations };
        outer2_7.spring(rowTranslation, Object.assign(obj, arg0.props.animationOptions)).start((finished) => {
          if (finished.finished) {
            if (closure_1 > 0) {
              if (null != closure_0.props.onSwipeableLeftOpen) {
                const props3 = closure_0.props;
                props3.onSwipeableLeftOpen();
              }
              if (null != closure_0.props.onSwipeableOpen) {
                const props4 = closure_0.props;
                props4.onSwipeableOpen("left", closure_0);
              }
            } else if (closure_1 < 0) {
              if (null != closure_0.props.onSwipeableRightOpen) {
                const props = closure_0.props;
                props.onSwipeableRightOpen();
              }
              if (null != closure_0.props.onSwipeableOpen) {
                const props2 = closure_0.props;
                props2.onSwipeableOpen("right", closure_0);
              }
            } else {
              let str = "right";
              if (closure_0 > 0) {
                str = "left";
              }
              if (null != closure_0.props.onSwipeableClose) {
                const props5 = closure_0.props;
                props5.onSwipeableClose(str, closure_0);
              }
            }
          }
        });
        if (toValue > 0) {
          if (null != tmp2Result.props.onSwipeableLeftWillOpen) {
            let props3 = tmp2Result.props;
            const result = props3.onSwipeableLeftWillOpen();
          }
          if (null != tmp2Result.props.onSwipeableWillOpen) {
            let props4 = tmp2Result.props;
            props4.onSwipeableWillOpen("left");
          }
        } else if (toValue < 0) {
          if (null != tmp2Result.props.onSwipeableRightWillOpen) {
            let props = tmp2Result.props;
            const result1 = props.onSwipeableRightWillOpen();
          }
          if (null != tmp2Result.props.onSwipeableWillOpen) {
            let props2 = tmp2Result.props;
            props2.onSwipeableWillOpen("right");
          }
        } else {
          let str = "right";
          if (arg0 > 0) {
            str = "left";
          }
          if (null != tmp2Result.props.onSwipeableWillClose) {
            let props5 = tmp2Result.props;
            props5.onSwipeableWillClose(str);
          }
        }
      };
      tmp2Result.onRowLayout = (nativeEvent) => {
        tmp2Result.setState({ rowWidth: nativeEvent.nativeEvent.layout.width });
      };
      tmp2Result.currentOffset = () => {
        const state = tmp2Result.state;
        const leftWidth = state.leftWidth;
        let num = 0;
        if (undefined !== leftWidth) {
          num = leftWidth;
        }
        const rowWidth = state.rowWidth;
        let num2 = 0;
        if (undefined !== rowWidth) {
          num2 = rowWidth;
        }
        const rowState = state.rowState;
        let rightOffset = tmp2Result.state.rightOffset;
        if (1 !== rowState) {
          let num4 = 0;
          if (-1 === rowState) {
            if (undefined === rightOffset) {
              rightOffset = num2;
            }
            num4 = -num2 - rightOffset;
          }
          num = num4;
        }
        return num;
      };
      tmp2Result.close = () => {
        tmp2Result.animateRow(tmp2Result.currentOffset(), 0);
      };
      tmp2Result.openLeft = () => {
        const leftWidth = tmp2Result.state.leftWidth;
        let num = 0;
        if (undefined !== leftWidth) {
          num = leftWidth;
        }
        tmp2Result.animateRow(tmp2Result.currentOffset(), num);
      };
      tmp2Result.openRight = () => {
        const rowWidth = tmp2Result.state.rowWidth;
        let num = 0;
        if (undefined !== rowWidth) {
          num = rowWidth;
        }
        let rightOffset = tmp2Result.state.rightOffset;
        if (undefined === rightOffset) {
          rightOffset = num;
        }
        const diff = num - rightOffset;
        tmp2Result.animateRow(tmp2Result.currentOffset(), -diff);
      };
      tmp2Result.reset = () => {
        let dragX;
        let rowTranslation;
        ({ dragX, rowTranslation } = tmp2Result.state);
        dragX.setValue(0);
        rowTranslation.setValue(0);
        tmp2Result.setState({ rowState: 0 });
      };
      value = new outer1_7.Value(0);
      obj = { dragX: value };
      value1 = new outer1_7.Value(0);
      obj.rowTranslation = value1;
      obj.rowState = 0;
      obj.leftWidth = undefined;
      obj.rightOffset = undefined;
      obj.rowWidth = undefined;
      tmp2Result.state = obj;
      updateAnimatedEventResult = tmp2Result.updateAnimatedEvent(Component, tmp2Result.state);
      items1 = [];
      items1[0] = { nativeEvent: { translationX: value } };
      obj1 = { useNativeDriver: Component.useNativeAnimations };
      tmp2Result.onGestureEvent = outer1_7.event(items1, obj1);
      return tmp2Result;
    }
  }
  callback2(Swipeable, Component);
  let obj = {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(friction, leftWidth) {
      const self = this;
      if (!tmp) {
        self.updateAnimatedEvent(friction, leftWidth);
      }
      return true;
    }
  };
  let items = [obj, ];
  obj = {
    key: "render",
    value: function render() {
      let dragOffsetFromLeftEdge;
      let renderLeftActions;
      let renderRightActions;
      let self = this;
      self = this;
      const rowState = this.state.rowState;
      const props = this.props;
      ({ renderLeftActions, renderRightActions, dragOffsetFromLeftEdge } = props);
      let num = 10;
      if (undefined !== dragOffsetFromLeftEdge) {
        num = dragOffsetFromLeftEdge;
      }
      const dragOffsetFromRightEdge = props.dragOffsetFromRightEdge;
      let num2 = 10;
      if (undefined !== dragOffsetFromRightEdge) {
        num2 = dragOffsetFromRightEdge;
      }
      let tmp = renderLeftActions;
      if (renderLeftActions) {
        let obj = {};
        const items = [outer1_11.leftActions, ];
        obj = {};
        obj = { translateX: self.leftActionTranslate };
        const items1 = [obj];
        obj.transform = items1;
        items[1] = obj;
        obj.style = items;
        const items2 = [renderLeftActions(self.showLeftAction, self.transX, self), ];
        const obj1 = {
          onLayout(leftWidth) {
              return self.setState({ leftWidth: leftWidth.nativeEvent.layout.x });
            }
        };
        items2[1] = outer1_9(outer1_8, obj1);
        obj.children = items2;
        tmp = outer1_10(outer1_7.View, obj);
      }
      let tmp7 = renderRightActions;
      if (renderRightActions) {
        const obj2 = {};
        const items3 = [outer1_11.rightActions, ];
        const obj3 = {};
        const obj4 = { translateX: self.rightActionTranslate };
        const items4 = [obj4];
        obj3.transform = items4;
        items3[1] = obj3;
        obj2.style = items3;
        const items5 = [renderRightActions(self.showRightAction, self.transX, self), ];
        const obj5 = {
          onLayout(nativeEvent) {
              return self.setState({ rightOffset: nativeEvent.nativeEvent.layout.x });
            }
        };
        items5[1] = outer1_9(outer1_8, obj5);
        obj2.children = items5;
        tmp7 = outer1_10(outer1_7.View, obj2);
      }
      const activeOffsetX = [-num2, num];
      const obj6 = { onGestureEvent: self.onGestureEvent, onHandlerStateChange: self.onHandlerStateChange };
      const obj7 = { onLayout: self.onRowLayout, style: items7 };
      items7 = [outer1_11.container, self.props.containerStyle];
      const items8 = [tmp, tmp7, ];
      const obj8 = { enabled: 0 !== rowState, touchAction: "pan-y", onHandlerStateChange: self.onTapHandlerStateChange };
      const obj9 = {};
      let str = "box-only";
      if (0 === rowState) {
        str = "auto";
      }
      obj9.pointerEvents = str;
      const items9 = [{ translateX: self.transX }];
      const items10 = [{ transform: items9 }, self.props.childrenContainerStyle];
      obj9.style = items10;
      obj9.children = props.children;
      obj8.children = outer1_9(outer1_7.View, obj9);
      items8[2] = outer1_9(Swipeable(outer1_1[10]).TapGestureHandler, obj8);
      obj7.children = items8;
      obj6.children = outer1_10(outer1_7.View, obj7);
      return outer1_9(Swipeable(outer1_1[9]).PanGestureHandler, Object.assign({ activeOffsetX, touchAction: "pan-y" }, self.props, obj6));
    }
  };
  items[1] = obj;
  return callback(Swipeable, items);
})(require("result").Component);
tmp5.defaultProps = { friction: 1, overshootFriction: 1, useNativeAnimations: true };
let obj = { container: { overflow: "hidden" } };
obj = {};
let str = "row";
if (I18nManager.isRTL) {
  str = "row-reverse";
}
obj.flexDirection = str;
obj.leftActions = Object.assign({}, StyleSheet.absoluteFillObject, obj);
obj = {};
let str2 = "row-reverse";
if (I18nManager.isRTL) {
  str2 = "row";
}
obj.flexDirection = str2;
obj.rightActions = Object.assign({}, StyleSheet.absoluteFillObject, obj);
const styles = StyleSheet.create(obj);

export default tmp5;
