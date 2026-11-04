// Module ID: 5558
// Function ID: 5559
// Name: GestureObjects
// Dependencies: [5559, 5560, 5561, 5562, 5563, 5564, 5565, 5566, 5567, 5470, 5447]

// Module 5558 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 5447 */;
import hoverGestureHandlerProps from "hoverGestureHandlerProps" /* 5470 */;
import TapGesture from "TapGesture" /* 5559 */;
import PanGesture from "PanGesture" /* 5560 */;
import PinchGesture from "PinchGesture" /* 5561 */;
import RotationGesture from "RotationGesture" /* 5562 */;
import FlingGesture from "FlingGesture" /* 5563 */;
import LongPressGesture from "LongPressGesture" /* 5564 */;
import ForceTouchGesture from "ForceTouchGesture" /* 5565 */;
import NativeGesture from "NativeGesture" /* 5566 */;
import ManualGesture from "ManualGesture" /* 5567 */;


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
