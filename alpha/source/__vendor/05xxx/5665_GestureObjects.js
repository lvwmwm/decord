// Module ID: 5665
// Function ID: 5666
// Name: GestureObjects
// Dependencies: [5666, 5667, 5668, 5669, 5670, 5671, 5672, 5673, 5674, 5577, 5554]

// Module 5665 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 5554 */;
import hoverGestureHandlerProps from "hoverGestureHandlerProps" /* 5577 */;
import TapGesture from "TapGesture" /* 5666 */;
import PanGesture from "PanGesture" /* 5667 */;
import PinchGesture from "PinchGesture" /* 5668 */;
import RotationGesture from "RotationGesture" /* 5669 */;
import FlingGesture from "FlingGesture" /* 5670 */;
import LongPressGesture from "LongPressGesture" /* 5671 */;
import ForceTouchGesture from "ForceTouchGesture" /* 5672 */;
import NativeGesture from "NativeGesture" /* 5673 */;
import ManualGesture from "ManualGesture" /* 5674 */;


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
