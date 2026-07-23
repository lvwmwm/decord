// Module ID: 8025
// Function ID: 63666
// Name: keys
// Dependencies: [27]
// Exports: default

// Module 8025 (keys)
import { PanResponder } from "get ActivityIndicator";

const keys = Object.keys(PanResponder.create({}).panHandlers);

export default function extractResponder(arg0, pointerEvents) {
  let delayLongPress;
  let delayPressIn;
  let delayPressOut;
  let disabled;
  let onLongPress;
  let onPress;
  let onPressIn;
  let onPressOut;
  pointerEvents = pointerEvents.pointerEvents;
  let num = 0;
  let flag = false;
  let flag2 = false;
  ({ onPress, disabled, onPressIn, onPressOut, onLongPress, delayPressIn, delayPressOut, delayLongPress } = pointerEvents);
  if (0 < length) {
    do {
      let tmp = keys;
      let tmp2 = keys[num];
      let tmp3 = pointerEvents[tmp2];
      if (tmp3) {
        arg0[tmp2] = tmp3;
        flag = true;
      }
      num = num + 1;
      let tmp4 = length;
      flag2 = flag;
    } while (num < length);
  }
  if (pointerEvents) {
    arg0.pointerEvents = pointerEvents;
  }
  if (tmp5) {
    ({ touchableHandleResponderMove: arg0.onResponderMove, touchableHandleResponderGrant: arg0.onResponderGrant, touchableHandleResponderRelease: arg0.onResponderRelease, touchableHandleResponderTerminate: arg0.onResponderTerminate, touchableHandleStartShouldSetResponder: arg0.onStartShouldSetResponder, touchableHandleResponderTerminationRequest: arg0.onResponderTerminationRequest } = arg2);
    flag2 = true;
  }
  if (flag2) {
    arg0.responsible = true;
  }
};
