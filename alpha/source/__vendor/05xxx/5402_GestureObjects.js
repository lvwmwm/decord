// Module ID: 5402
// Function ID: 5403
// Name: GestureObjects
// Dependencies: [5403, 5404, 5405, 5406, 5407, 5408, 5409, 5410, 5411, 5314, 5291]

// Module 5402 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 5291 */;
import hoverGestureHandlerProps from "hoverGestureHandlerProps" /* 5314 */;
import TapGesture from "TapGesture" /* 5403 */;
import PanGesture from "PanGesture" /* 5404 */;
import PinchGesture from "PinchGesture" /* 5405 */;
import RotationGesture from "RotationGesture" /* 5406 */;
import FlingGesture from "FlingGesture" /* 5407 */;
import LongPressGesture from "LongPressGesture" /* 5408 */;
import ForceTouchGesture from "ForceTouchGesture" /* 5409 */;
import NativeGesture from "NativeGesture" /* 5410 */;
import ManualGesture from "ManualGesture" /* 5411 */;


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
