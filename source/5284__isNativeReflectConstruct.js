// Module ID: 5284
// Function ID: 45610
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 33, 5222, 5279]

// Module 5284 (_isNativeReflectConstruct)
import getActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let Platform;
let closure_7;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ Animated: closure_7, Platform } = get_ActivityIndicator);
let obj = { UNDETERMINED: 0, BEGAN: 1, MOVED_OUTSIDE: 2 };
let tmp4 = ((Component) => {
  class GenericTouchable {
    constructor() {
      self = this;
      tmp = outer1_2(this, apply);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = outer1_5(apply);
      tmp4 = outer1_4;
      if (outer1_10()) {
        items1 = combined;
        if (!combined) {
          items1 = [];
        }
        tmp6 = outer1_5;
        constructResult = Reflect.construct(obj, items1, outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp4Result = tmp4(self, constructResult);
      apply = tmp4Result;
      tmp4Result.longPressDetected = false;
      tmp4Result.pointerInside = true;
      tmp4Result.STATE = outer1_9.UNDETERMINED;
      tmp4Result.onGestureEvent = (nativeEvent) => {
        const pointerInside = nativeEvent.nativeEvent.pointerInside;
        if (tmp4Result.pointerInside !== pointerInside) {
          if (pointerInside) {
            obj.onMoveIn();
          } else {
            obj.onMoveOut();
          }
        }
        tmp4Result.pointerInside = pointerInside;
      };
      tmp4Result.onHandlerStateChange = (nativeEvent) => {
        const state = nativeEvent.nativeEvent.state;
        if (state !== GenericTouchable(outer2_1[8]).State.CANCELLED) {
          if (state !== GenericTouchable(outer2_1[8]).State.FAILED) {
            if (state === GenericTouchable(outer2_1[8]).State.BEGAN) {
              if (tmp4Result.STATE === outer2_9.UNDETERMINED) {
                tmp4Result.handlePressIn();
              }
            }
            if (state === GenericTouchable(outer2_1[8]).State.END) {
              let tmp7 = !tmp4Result.longPressDetected;
              if (tmp7) {
                tmp7 = tmp4Result.STATE !== outer2_9.MOVED_OUTSIDE;
              }
              if (tmp7) {
                tmp7 = null === tmp4Result.pressOutTimeout;
              }
              const result = tmp4Result.handleGoToUndetermined();
              if (tmp7) {
                if (null != tmp4Result.props.onPress) {
                  const props = tmp4Result.props;
                  props.onPress();
                }
              }
            }
          }
        }
        tmp4Result.moveToState(outer2_9.UNDETERMINED);
      };
      tmp4Result.onLongPressDetected = () => {
        tmp4Result.longPressDetected = true;
        if (null != tmp4Result.props.onLongPress) {
          const props = tmp4Result.props;
          props.onLongPress();
        }
      };
      return tmp4Result;
    }
  }
  callback2(GenericTouchable, Component);
  let obj = {
    key: "handlePressIn",
    value: function handlePressIn() {
      let self = this;
      self = this;
      if (this.props.delayPressIn) {
        const _setTimeout = setTimeout;
        self.pressInTimeout = setTimeout(() => {
          self.moveToState(outer2_9.BEGAN);
          self.pressInTimeout = null;
        }, self.props.delayPressIn);
      } else {
        self.moveToState(outer1_9.BEGAN);
      }
      if (self.props.onLongPress) {
        const _setTimeout2 = setTimeout;
        self.longPressTimeout = setTimeout(self.onLongPressDetected, (self.props.delayPressIn || 0) + (self.props.delayLongPress || 0));
        const tmp4 = self.props.delayPressIn || 0;
        const tmp5 = self.props.delayLongPress || 0;
      }
    }
  };
  let items = [obj, , , , , , , , , ];
  obj = {
    key: "handleMoveOutside",
    value: function handleMoveOutside() {
      let self = this;
      self = this;
      if (this.props.delayPressOut) {
        let pressOutTimeout = self.pressOutTimeout;
        if (!pressOutTimeout) {
          const _setTimeout = setTimeout;
          pressOutTimeout = setTimeout(() => {
            self.moveToState(outer2_9.MOVED_OUTSIDE);
            self.pressOutTimeout = null;
          }, self.props.delayPressOut);
        }
        self.pressOutTimeout = pressOutTimeout;
      } else {
        self.moveToState(outer1_9.MOVED_OUTSIDE);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "handleGoToUndetermined",
    value: function handleGoToUndetermined() {
      let self = this;
      self = this;
      clearTimeout(this.pressOutTimeout);
      if (this.props.delayPressOut) {
        const _setTimeout = setTimeout;
        self.pressOutTimeout = setTimeout(() => {
          if (self.STATE === outer2_9.UNDETERMINED) {
            self.moveToState(outer2_9.BEGAN);
          }
          self.moveToState(outer2_9.UNDETERMINED);
          self.pressOutTimeout = null;
        }, self.props.delayPressOut);
      } else {
        if (self.STATE === outer1_9.UNDETERMINED) {
          self.moveToState(outer1_9.BEGAN);
        }
        self.moveToState(outer1_9.UNDETERMINED);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.reset();
    }
  };
  items[4] = {
    key: "reset",
    value: function reset() {
      this.longPressDetected = false;
      this.pointerInside = true;
      clearTimeout(this.pressInTimeout);
      clearTimeout(this.pressOutTimeout);
      clearTimeout(this.longPressTimeout);
      this.pressOutTimeout = null;
      this.longPressTimeout = null;
      this.pressInTimeout = null;
    }
  };
  items[5] = {
    key: "moveToState",
    value: function moveToState(BEGAN) {
      const self = this;
      if (BEGAN !== this.STATE) {
        if (BEGAN === outer1_9.BEGAN) {
          const props3 = self.props;
          const onPressIn = props3.onPressIn;
          if (null != onPressIn) {
            onPressIn.call(props3);
          }
        } else if (BEGAN === outer1_9.MOVED_OUTSIDE) {
          const props2 = self.props;
          const onPressOut2 = props2.onPressOut;
          if (null != onPressOut2) {
            onPressOut2.call(props2);
          }
        } else if (BEGAN === outer1_9.UNDETERMINED) {
          self.reset();
          if (self.STATE === outer1_9.BEGAN) {
            const props = self.props;
            const onPressOut = props.onPressOut;
            if (null != onPressOut) {
              onPressOut.call(props);
            }
          }
        }
        const props4 = self.props;
        const onStateChange = props4.onStateChange;
        if (null != onStateChange) {
          onStateChange.call(props4, self.STATE, BEGAN);
        }
        self.STATE = BEGAN;
      }
    }
  };
  items[6] = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.reset();
    }
  };
  items[7] = {
    key: "onMoveIn",
    value: function onMoveIn() {
      const self = this;
      if (this.STATE === outer1_9.MOVED_OUTSIDE) {
        self.moveToState(outer1_9.BEGAN);
      }
    }
  };
  items[8] = {
    key: "onMoveOut",
    value: function onMoveOut() {
      const self = this;
      clearTimeout(this.longPressTimeout);
      this.longPressTimeout = null;
      if (this.STATE === outer1_9.BEGAN) {
        self.handleMoveOutside();
      }
    }
  };
  items[9] = {
    key: "render",
    value: function render() {
      const self = this;
      if ("number" === typeof this.props.hitSlop) {
        let obj = { top: self.props.hitSlop, left: self.props.hitSlop, bottom: self.props.hitSlop, right: self.props.hitSlop };
        let hitSlop = obj;
      } else {
        hitSlop = self.props.hitSlop;
      }
      let tmp;
      if (null != hitSlop) {
        tmp = hitSlop;
      }
      obj = { accessible: false !== self.props.accessible, accessibilityLabel: self.props.accessibilityLabel, accessibilityHint: self.props.accessibilityHint, accessibilityRole: self.props.accessibilityRole, accessibilityState: self.props.accessibilityState, accessibilityActions: self.props.accessibilityActions, onAccessibilityAction: self.props.onAccessibilityAction, nativeID: self.props.nativeID, onLayout: self.props.onLayout };
      obj = { style: self.props.containerStyle };
      let onHandlerStateChange;
      if (!self.props.disabled) {
        onHandlerStateChange = self.onHandlerStateChange;
      }
      obj.onHandlerStateChange = onHandlerStateChange;
      obj.onGestureEvent = self.onGestureEvent;
      obj.hitSlop = tmp;
      obj.userSelect = self.props.userSelect;
      obj.shouldActivateOnStart = self.props.shouldActivateOnStart;
      obj.disallowInterruption = self.props.disallowInterruption;
      obj.testID = self.props.testID;
      const touchSoundDisabled = self.props.touchSoundDisabled;
      obj.touchSoundDisabled = null != touchSoundDisabled && touchSoundDisabled;
      obj.enabled = !self.props.disabled;
      return outer1_8(GenericTouchable(outer1_1[9]).BaseButton, Object.assign(obj, self.props.extraButtonProps, { children: outer1_8(outer1_7.View, Object.assign({}, obj, obj2)) }));
    }
  };
  return callback(GenericTouchable, items);
})(require("result").Component);
tmp4.defaultProps = { delayLongPress: 600, extraButtonProps: { rippleColor: "transparent", exclusive: true } };

export default tmp4;
export const TOUCHABLE_STATE = obj;
