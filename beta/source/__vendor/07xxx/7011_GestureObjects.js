// Module ID: 7011
// Function ID: 7012
// Name: GestureObjects
// Dependencies: [7012, 7013, 7014, 7015, 7016, 7017, 7018, 7019, 7020, 6932, 6911]

// Module 7011 (GestureObjects)
import _mod6911 from "module_6911" /* 6911 */;
import _mod6932 from "module_6932" /* 6932 */;
import _mod7012 from "module_7012" /* 7012 */;
import _mod7013 from "module_7013" /* 7013 */;
import _mod7014 from "module_7014" /* 7014 */;
import _mod7015 from "module_7015" /* 7015 */;
import _mod7016 from "module_7016" /* 7016 */;
import _mod7017 from "module_7017" /* 7017 */;
import _mod7018 from "module_7018" /* 7018 */;
import _mod7019 from "module_7019" /* 7019 */;
import _mod7020 from "module_7020" /* 7020 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod7012.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod7013.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod7014.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod7015.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod7016.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod7017.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod7018.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod7019.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod7020.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6932.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6911.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6911.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6911.ExclusiveGesture(...items);
  }
};
