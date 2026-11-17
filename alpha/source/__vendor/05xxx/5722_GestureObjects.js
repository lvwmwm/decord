// Module ID: 5722
// Function ID: 5723
// Name: GestureObjects
// Dependencies: [5723, 5724, 5725, 5726, 5727, 5728, 5729, 5730, 5731, 5634, 5611]

// Module 5722 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 5611 */;
import hoverGestureHandlerProps from "hoverGestureHandlerProps" /* 5634 */;
import TapGesture from "TapGesture" /* 5723 */;
import PanGesture from "PanGesture" /* 5724 */;
import PinchGesture from "PinchGesture" /* 5725 */;
import RotationGesture from "RotationGesture" /* 5726 */;
import FlingGesture from "FlingGesture" /* 5727 */;
import LongPressGesture from "LongPressGesture" /* 5728 */;
import ForceTouchGesture from "ForceTouchGesture" /* 5729 */;
import NativeGesture from "NativeGesture" /* 5730 */;
import ManualGesture from "ManualGesture" /* 5731 */;


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
