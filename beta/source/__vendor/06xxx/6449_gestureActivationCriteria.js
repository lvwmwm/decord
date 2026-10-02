// Module ID: 6449
// Function ID: 6450
// Name: gestureActivationCriteria
// Dependencies: [6441]
// Exports: gestureActivationCriteria

// Module 6449 (gestureActivationCriteria)
import _mod6441 from "module_6441" /* 6441 */;


export const gestureActivationCriteria = (direction) => {
  let gestureDirection;
  let gestureResponseDistance;
  let layout;
  let obj7;
  let obj8;
  ({ gestureDirection, gestureResponseDistance, layout } = direction);
  direction = direction.direction;
  if (undefined === gestureResponseDistance) {
    let num;
    if ("vertical" === gestureDirection) {
      num = 135;
    } else {
      num = 50;
    }
    gestureResponseDistance = num;
  }
  if ("vertical" === gestureDirection) {
    const obj2 = { maxDeltaX: 15, minOffsetY: 5, hitSlop: obj3, enableTrackpadTwoFingerGesture: true };
    return obj2;
  } else if ("vertical-inverted" === gestureDirection) {
    const obj4 = { maxDeltaX: 15, minOffsetY: -5, hitSlop: obj5, enableTrackpadTwoFingerGesture: true };
    return obj4;
  } else {
    let obj;
    const sum = -layout.width + gestureResponseDistance;
    const obj9 = _mod6441;
    if (1 === obj9.getInvertedMultiplier(gestureDirection, "rtl" === direction)) {
      const obj6 = { minOffsetX: 5, maxDeltaY: 20, hitSlop: obj7, enableTrackpadTwoFingerGesture: true };
      obj = obj6;
      obj7 = { right: sum };
    } else {
      obj = { minOffsetX: -5, maxDeltaY: 20, hitSlop: obj8, enableTrackpadTwoFingerGesture: true };
      obj8 = { left: sum };
    }
    return obj;
  }
};
