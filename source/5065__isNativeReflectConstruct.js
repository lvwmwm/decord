// Module ID: 5065
// Function ID: 43222
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5065 (_isNativeReflectConstruct)
let I18nManager;
let StyleSheet;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
importAll(dependencyMap[5]);
({ Animated: closure_7, StyleSheet, View: closure_8, I18nManager } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[7]));
const tmp5 = (Component) => {
  class Swipeable {
    constructor(arg0) {
      self = this;
      tmp = closure_2(this, Swipeable);
      items = [];
      items[0] = Component;
      obj = closure_5(Swipeable);
      tmp2 = closure_4;
      if (closure_12()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      Swipeable = tmp2Result;
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
        const items = [0.229, overshootFriction.friction];
        let obj = { inputRange: items1 };
        const items1 = [-bound - 1, -bound, num, num + 1];
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
        const interpolateResult = set.add(rowWidth.rowTranslation, dragX.interpolate({ inputRange: items, outputRange: [null, null] })).interpolate(obj);
        tmp2Result.transX = interpolateResult;
        if (num > 0) {
          obj = {};
          const items3 = [-1, 0, num];
          obj.inputRange = items3;
          obj.outputRange = [];
          let interpolateResult1 = interpolateResult.interpolate(obj);
        } else {
          const Value = set.Value;
          const prototype = Value.prototype;
          interpolateResult1 = new Value(0);
        }
        tmp2Result.showLeftAction = interpolateResult1;
        const showLeftAction = tmp2Result.showLeftAction;
        const items4 = [0.229, Number.MIN_VALUE];
        const items5 = [-10000, 0];
        tmp2Result.leftActionTranslate = showLeftAction.interpolate({ inputRange: items4, outputRange: items5, extrapolate: "clamp" });
        if (bound > 0) {
          const obj1 = {};
          const items6 = [-bound, 0, 1];
          obj1.inputRange = items6;
          obj1.outputRange = ["r", "isArray", "alignItems"];
          let interpolateResult2 = interpolateResult.interpolate(obj1);
        } else {
          const Value2 = set.Value;
          const prototype2 = Value2.prototype;
          interpolateResult2 = new Value2(0);
        }
        tmp2Result.showRightAction = interpolateResult2;
        const showRightAction = tmp2Result.showRightAction;
        const items7 = [0.229, Number.MIN_VALUE];
        const items8 = [-10000, 0];
        tmp2Result.rightActionTranslate = showRightAction.interpolate({ inputRange: items7, outputRange: items8, extrapolate: "clamp" });
      };
      tmp2Result.onTapHandlerStateChange = (nativeEvent) => {
        if (nativeEvent.nativeEvent.oldState === tmp2Result(closure_1[8]).State.ACTIVE) {
          tmp2Result.close();
        }
      };
      tmp2Result.onHandlerStateChange = (nativeEvent) => {
        if (nativeEvent.nativeEvent.oldState === tmp2Result(closure_1[8]).State.ACTIVE) {
          tmp2Result.handleRelease(nativeEvent);
        }
        if (nativeEvent.nativeEvent.state === tmp2Result(closure_1[8]).State.ACTIVE) {
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
        ({ dragX, rowTranslation } = arg0.state);
        dragX.setValue(0);
        rowTranslation.setValue(arg0);
        let obj = { rowState: Math.sign(toValue) };
        arg0.setState(obj);
        obj = { velocity, toValue, useNativeDriver: tmp2Result.props.useNativeAnimations };
        set.spring(rowTranslation, Object.assign(obj, arg0.props.animationOptions)).start((finished) => {
          if (finished.finished) {
            if (arg1 > 0) {
              if (null != finished.props.onSwipeableLeftOpen) {
                const props3 = finished.props;
                props3.onSwipeableLeftOpen();
              }
              if (null != finished.props.onSwipeableOpen) {
                const props4 = finished.props;
                props4.onSwipeableOpen("left", finished);
              }
            } else if (arg1 < 0) {
              if (null != finished.props.onSwipeableRightOpen) {
                const props = finished.props;
                props.onSwipeableRightOpen();
              }
              if (null != finished.props.onSwipeableOpen) {
                const props2 = finished.props;
                props2.onSwipeableOpen("right", finished);
              }
            } else {
              let str = "right";
              if (finished > 0) {
                str = "left";
              }
              if (null != finished.props.onSwipeableClose) {
                const props5 = finished.props;
                props5.onSwipeableClose(str, finished);
              }
            }
          }
        });
        if (toValue > 0) {
          if (null != tmp2Result.props.onSwipeableLeftWillOpen) {
            const props3 = tmp2Result.props;
            const result = props3.onSwipeableLeftWillOpen();
          }
          if (null != tmp2Result.props.onSwipeableWillOpen) {
            const props4 = tmp2Result.props;
            props4.onSwipeableWillOpen("left");
          }
        } else if (toValue < 0) {
          if (null != tmp2Result.props.onSwipeableRightWillOpen) {
            const props = tmp2Result.props;
            const result1 = props.onSwipeableRightWillOpen();
          }
          if (null != tmp2Result.props.onSwipeableWillOpen) {
            const props2 = tmp2Result.props;
            props2.onSwipeableWillOpen("right");
          }
        } else {
          let str = "right";
          if (arg0 > 0) {
            str = "left";
          }
          if (null != tmp2Result.props.onSwipeableWillClose) {
            const props5 = tmp2Result.props;
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
      value = new closure_7.Value(0);
      obj = { dragX: value };
      value1 = new closure_7.Value(0);
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
      tmp2Result.onGestureEvent = closure_7.event(items1, obj1);
      return tmp2Result;
    }
  }
  const arg1 = Swipeable;
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
  const items = [obj, ];
  obj = {
    key: "render",
    value: function render() {
      let dragOffsetFromLeftEdge;
      let renderLeftActions;
      let renderRightActions;
      const self = this;
      const Swipeable = this;
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
        const items = [closure_11.leftActions, ];
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
        items2[1] = callback3(closure_8, obj1);
        obj.children = items2;
        tmp = callback4(RN.View, obj);
      }
      let tmp7 = renderRightActions;
      if (renderRightActions) {
        const obj2 = {};
        const items3 = [closure_11.rightActions, ];
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
        items5[1] = callback3(closure_8, obj5);
        obj2.children = items5;
        tmp7 = callback4(RN.View, obj2);
      }
      const activeOffsetX = [-num2, num];
      const obj6 = { onGestureEvent: self.onGestureEvent, onHandlerStateChange: self.onHandlerStateChange };
      const obj7 = { onLayout: self.onRowLayout, style: items7 };
      const items7 = [closure_11.container, self.props.containerStyle];
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
      obj8.children = callback3(RN.View, obj9);
      items8[2] = callback3(Swipeable(closure_1[10]).TapGestureHandler, obj8);
      obj7.children = items8;
      obj6.children = callback4(RN.View, obj7);
      return callback3(Swipeable(closure_1[9]).PanGestureHandler, Object.assign({ activeOffsetX, touchAction: "pan-y" }, self.props, obj6));
    }
  };
  items[1] = obj;
  return callback(Swipeable, items);
}(arg1(dependencyMap[5]).Component);
tmp5.defaultProps = {};
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
