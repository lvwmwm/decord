// Module ID: 8090
// Function ID: 64095
// Name: Mixin
// Dependencies: [27]
// Exports: default

// Module 8090 (Mixin)
let closure_1;
let closure_2;
let closure_3;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_0 = { top: 20, left: 20, right: 20, bottom: 30 };
const Mixin = require("get ActivityIndicator").Touchable.Mixin;
({ touchableHandleStartShouldSetResponder: closure_1, touchableHandleResponderTerminationRequest: closure_2, touchableHandleResponderGrant: closure_3, touchableHandleResponderMove: closure_4, touchableHandleResponderRelease: closure_5, touchableHandleResponderTerminate: closure_6, touchableGetInitialState: closure_7 } = Mixin);
const merged = Object.assign({}, Mixin, {
  touchableHandleStartShouldSetResponder(arg0) {
    const onStartShouldSetResponder = this.props.onStartShouldSetResponder;
    if (onStartShouldSetResponder) {
      let result = onStartShouldSetResponder(arg0);
    } else {
      result = callback.call(tmp, arg0);
    }
    return result;
  },
  touchableHandleResponderTerminationRequest(arg0) {
    const onResponderTerminationRequest = this.props.onResponderTerminationRequest;
    if (onResponderTerminationRequest) {
      let result = onResponderTerminationRequest(arg0);
    } else {
      result = callback2.call(tmp, arg0);
    }
    return result;
  },
  touchableHandleResponderGrant(arg0) {
    const onResponderGrant = this.props.onResponderGrant;
    if (onResponderGrant) {
      let onResponderGrantResult = onResponderGrant(arg0);
    } else {
      onResponderGrantResult = callback3.call(tmp, arg0);
    }
    return onResponderGrantResult;
  },
  touchableHandleResponderMove(arg0) {
    const onResponderMove = this.props.onResponderMove;
    if (onResponderMove) {
      let onResponderMoveResult = onResponderMove(arg0);
    } else {
      onResponderMoveResult = callback4.call(tmp, arg0);
    }
    return onResponderMoveResult;
  },
  touchableHandleResponderRelease(arg0) {
    const onResponderRelease = this.props.onResponderRelease;
    if (onResponderRelease) {
      let onResponderReleaseResult = onResponderRelease(arg0);
    } else {
      onResponderReleaseResult = callback5.call(tmp, arg0);
    }
    return onResponderReleaseResult;
  },
  touchableHandleResponderTerminate(arg0) {
    const onResponderTerminate = this.props.onResponderTerminate;
    if (onResponderTerminate) {
      let onResponderTerminateResult = onResponderTerminate(arg0);
    } else {
      onResponderTerminateResult = callback6.call(tmp, arg0);
    }
    return onResponderTerminateResult;
  },
  touchableHandlePress(nativeEvent) {
    const onPress = this.props.onPress;
    if (onPress) {
      onPress(nativeEvent);
    }
  },
  touchableHandleActivePressIn(nativeEvent) {
    const onPressIn = this.props.onPressIn;
    if (onPressIn) {
      onPressIn(nativeEvent);
    }
  },
  touchableHandleActivePressOut(closure_0) {
    const onPressOut = this.props.onPressOut;
    if (onPressOut) {
      onPressOut(closure_0);
    }
  },
  touchableHandleLongPress(nativeEvent) {
    const onLongPress = this.props.onLongPress;
    if (onLongPress) {
      onLongPress(nativeEvent);
    }
  },
  touchableGetPressRectOffset() {
    return this.props.pressRetentionOffset || closure_0;
  },
  touchableGetHitSlop() {
    return this.props.hitSlop;
  },
  touchableGetHighlightDelayMS() {
    return this.props.delayPressIn || 0;
  },
  touchableGetLongPressDelayMS() {
    let num = this.props.delayLongPress;
    let num2 = 0;
    if (0 !== num) {
      if (!num) {
        num = 500;
      }
      num2 = num;
    }
    return num2;
  },
  touchableGetPressOutDelayMS() {
    return this.props.delayPressOut || 0;
  }
});
const keys = Object.keys(merged);
let closure_10 = keys.map((arg0) => merged[arg0]);

export default function _default(iter) {
  let num = 0;
  if (0 < length) {
    do {
      let tmp = keys;
      let tmp2 = table;
      let obj = table[num];
      let bindResult = obj;
      if ("function" === typeof obj) {
        bindResult = obj.bind(iter);
      }
      iter[keys[num]] = bindResult;
      num = num + 1;
      let tmp4 = length;
    } while (num < length);
  }
  iter.state = callback7();
};
