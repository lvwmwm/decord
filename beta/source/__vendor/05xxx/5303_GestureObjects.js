// Module ID: 5303
// Function ID: 5304
// Name: GestureObjects
// Dependencies: [5304, 5305, 5306, 5307, 5308, 5309, 5310, 5311, 5312, 5215, 5192]

// Module 5303 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 5192 */;
import hoverGestureHandlerProps from "hoverGestureHandlerProps" /* 5215 */;
import TapGesture from "TapGesture" /* 5304 */;
import PanGesture from "PanGesture" /* 5305 */;
import PinchGesture from "PinchGesture" /* 5306 */;
import RotationGesture from "RotationGesture" /* 5307 */;
import FlingGesture from "FlingGesture" /* 5308 */;
import LongPressGesture from "LongPressGesture" /* 5309 */;
import ForceTouchGesture from "ForceTouchGesture" /* 5310 */;
import NativeGesture from "NativeGesture" /* 5311 */;
import ManualGesture from "ManualGesture" /* 5312 */;


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
