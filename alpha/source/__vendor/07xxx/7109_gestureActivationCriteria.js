// Module ID: 7109
// Function ID: 7110
// Name: gestureActivationCriteria
// Dependencies: [7101]
// Exports: gestureActivationCriteria

// Module 7109 (gestureActivationCriteria)
import _mod7101 from "module_7101" /* 7101 */;


export const gestureActivationCriteria = (direction) => {
  let gestureDirection;
  let gestureResponseDistance;
  let layout;
  let obj7;
  let obj9;
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
    let obj8;
    const sum = -layout.width + gestureResponseDistance;
    const obj = _mod7101;
    if (1 === obj.getInvertedMultiplier(gestureDirection, "rtl" === direction)) {
      const obj6 = { minOffsetX: 5, maxDeltaY: 20, hitSlop: obj7, enableTrackpadTwoFingerGesture: true };
      obj8 = obj6;
      obj7 = { right: sum };
    } else {
      obj8 = { minOffsetX: -5, maxDeltaY: 20, hitSlop: obj9, enableTrackpadTwoFingerGesture: true };
      obj9 = { left: sum };
    }
    return obj8;
  }
};
