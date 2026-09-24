// Module ID: 7043
// Function ID: 7044
// Name: GestureObjects
// Dependencies: [7044, 7045, 7046, 7047, 7048, 7049, 7050, 7051, 7052, 6964, 6943]

// Module 7043 (GestureObjects)
import _mod6943 from "module_6943" /* 6943 */;
import _mod6964 from "module_6964" /* 6964 */;
import _mod7044 from "module_7044" /* 7044 */;
import _mod7045 from "module_7045" /* 7045 */;
import _mod7046 from "module_7046" /* 7046 */;
import _mod7047 from "module_7047" /* 7047 */;
import _mod7048 from "module_7048" /* 7048 */;
import _mod7049 from "module_7049" /* 7049 */;
import _mod7050 from "module_7050" /* 7050 */;
import _mod7051 from "module_7051" /* 7051 */;
import _mod7052 from "module_7052" /* 7052 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod7044.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod7045.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod7046.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod7047.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod7048.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod7049.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod7050.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod7051.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod7052.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6964.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6943.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6943.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6943.ExclusiveGesture(...items);
  }
};
