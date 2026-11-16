// Module ID: 5718
// Function ID: 5719
// Name: GestureObjects
// Dependencies: [5719, 5720, 5721, 5722, 5723, 5724, 5725, 5726, 5727, 5630, 5607]

// Module 5718 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 5607 */;
import hoverGestureHandlerProps from "hoverGestureHandlerProps" /* 5630 */;
import TapGesture from "TapGesture" /* 5719 */;
import PanGesture from "PanGesture" /* 5720 */;
import PinchGesture from "PinchGesture" /* 5721 */;
import RotationGesture from "RotationGesture" /* 5722 */;
import FlingGesture from "FlingGesture" /* 5723 */;
import LongPressGesture from "LongPressGesture" /* 5724 */;
import ForceTouchGesture from "ForceTouchGesture" /* 5725 */;
import NativeGesture from "NativeGesture" /* 5726 */;
import ManualGesture from "ManualGesture" /* 5727 */;


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
