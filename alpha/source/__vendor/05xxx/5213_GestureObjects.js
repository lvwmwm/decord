// Module ID: 5213
// Function ID: 5214
// Name: GestureObjects
// Dependencies: [5214, 5215, 5216, 5217, 5218, 5219, 5220, 5221, 5222, 5125, 5102]

// Module 5213 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 5102 */;
import hoverGestureHandlerProps from "hoverGestureHandlerProps" /* 5125 */;
import TapGesture from "TapGesture" /* 5214 */;
import PanGesture from "PanGesture" /* 5215 */;
import PinchGesture from "PinchGesture" /* 5216 */;
import RotationGesture from "RotationGesture" /* 5217 */;
import FlingGesture from "FlingGesture" /* 5218 */;
import LongPressGesture from "LongPressGesture" /* 5219 */;
import ForceTouchGesture from "ForceTouchGesture" /* 5220 */;
import NativeGesture from "NativeGesture" /* 5221 */;
import ManualGesture from "ManualGesture" /* 5222 */;


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
