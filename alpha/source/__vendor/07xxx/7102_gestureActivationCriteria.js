// Module ID: 7102
// Function ID: 7103
// Name: gestureActivationCriteria
// Dependencies: [7094]
// Exports: gestureActivationCriteria

// Module 7102 (gestureActivationCriteria)
import _mod7094 from "module_7094" /* 7094 */;


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
    const obj9 = _mod7094;
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
