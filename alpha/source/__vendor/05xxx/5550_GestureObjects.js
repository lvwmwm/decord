// Module ID: 5550
// Function ID: 5551
// Name: GestureObjects
// Dependencies: [5551, 5552, 5553, 5554, 5555, 5556, 5557, 5558, 5559, 5462, 5439]

// Module 5550 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 5439 */;
import hoverGestureHandlerProps from "hoverGestureHandlerProps" /* 5462 */;
import TapGesture from "TapGesture" /* 5551 */;
import PanGesture from "PanGesture" /* 5552 */;
import PinchGesture from "PinchGesture" /* 5553 */;
import RotationGesture from "RotationGesture" /* 5554 */;
import FlingGesture from "FlingGesture" /* 5555 */;
import LongPressGesture from "LongPressGesture" /* 5556 */;
import ForceTouchGesture from "ForceTouchGesture" /* 5557 */;
import NativeGesture from "NativeGesture" /* 5558 */;
import ManualGesture from "ManualGesture" /* 5559 */;


export const GestureObjects = {
  Tap() {
    const tapGesture = new TapGesture.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new PanGesture.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new PinchGesture.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new RotationGesture.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new FlingGesture.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new LongPressGesture.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new ForceTouchGesture.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new NativeGesture.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new ManualGesture.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new hoverGestureHandlerProps.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return ComposedGesture.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return ComposedGesture.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return ComposedGesture.ExclusiveGesture(...items);
  }
};
