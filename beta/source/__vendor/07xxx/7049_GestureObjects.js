// Module ID: 7049
// Function ID: 7050
// Name: GestureObjects
// Dependencies: [7050, 7051, 7052, 7053, 7054, 7055, 7056, 7057, 7058, 6970, 6949]

// Module 7049 (GestureObjects)
import _mod6949 from "module_6949" /* 6949 */;
import _mod6970 from "module_6970" /* 6970 */;
import _mod7050 from "module_7050" /* 7050 */;
import _mod7051 from "module_7051" /* 7051 */;
import _mod7052 from "module_7052" /* 7052 */;
import _mod7053 from "module_7053" /* 7053 */;
import _mod7054 from "module_7054" /* 7054 */;
import _mod7055 from "module_7055" /* 7055 */;
import _mod7056 from "module_7056" /* 7056 */;
import _mod7057 from "module_7057" /* 7057 */;
import _mod7058 from "module_7058" /* 7058 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod7050.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod7051.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod7052.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod7053.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod7054.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod7055.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod7056.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod7057.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod7058.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6970.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6949.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6949.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6949.ExclusiveGesture(...items);
  }
};
