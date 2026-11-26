// Module ID: 5433
// Function ID: 5434
// Name: GestureObjects
// Dependencies: [5434, 5435, 5436, 5437, 5438, 5439, 5440, 5441, 5442, 5345, 5322]

// Module 5433 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 5322 */;
import hoverGestureHandlerProps from "hoverGestureHandlerProps" /* 5345 */;
import TapGesture from "TapGesture" /* 5434 */;
import PanGesture from "PanGesture" /* 5435 */;
import PinchGesture from "PinchGesture" /* 5436 */;
import RotationGesture from "RotationGesture" /* 5437 */;
import FlingGesture from "FlingGesture" /* 5438 */;
import LongPressGesture from "LongPressGesture" /* 5439 */;
import ForceTouchGesture from "ForceTouchGesture" /* 5440 */;
import NativeGesture from "NativeGesture" /* 5441 */;
import ManualGesture from "ManualGesture" /* 5442 */;


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
