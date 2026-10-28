// Module ID: 7159
// Function ID: 7160
// Name: gestureActivationCriteria
// Dependencies: [7151]
// Exports: gestureActivationCriteria

// Module 7159 (gestureActivationCriteria)
import _mod7151 from "module_7151" /* 7151 */;


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
    const obj = _mod7151;
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
