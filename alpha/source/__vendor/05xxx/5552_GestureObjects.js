// Module ID: 5552
// Function ID: 5553
// Name: GestureObjects
// Dependencies: [5553, 5554, 5555, 5556, 5557, 5558, 5559, 5560, 5561, 5464, 5441]

// Module 5552 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 5441 */;
import hoverGestureHandlerProps from "hoverGestureHandlerProps" /* 5464 */;
import TapGesture from "TapGesture" /* 5553 */;
import PanGesture from "PanGesture" /* 5554 */;
import PinchGesture from "PinchGesture" /* 5555 */;
import RotationGesture from "RotationGesture" /* 5556 */;
import FlingGesture from "FlingGesture" /* 5557 */;
import LongPressGesture from "LongPressGesture" /* 5558 */;
import ForceTouchGesture from "ForceTouchGesture" /* 5559 */;
import NativeGesture from "NativeGesture" /* 5560 */;
import ManualGesture from "ManualGesture" /* 5561 */;


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
