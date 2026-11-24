// Module ID: 5307
// Function ID: 5308
// Name: GestureObjects
// Dependencies: [5308, 5309, 5310, 5311, 5312, 5313, 5314, 5315, 5316, 5219, 5196]

// Module 5307 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 5196 */;
import hoverGestureHandlerProps from "hoverGestureHandlerProps" /* 5219 */;
import TapGesture from "TapGesture" /* 5308 */;
import PanGesture from "PanGesture" /* 5309 */;
import PinchGesture from "PinchGesture" /* 5310 */;
import RotationGesture from "RotationGesture" /* 5311 */;
import FlingGesture from "FlingGesture" /* 5312 */;
import LongPressGesture from "LongPressGesture" /* 5313 */;
import ForceTouchGesture from "ForceTouchGesture" /* 5314 */;
import NativeGesture from "NativeGesture" /* 5315 */;
import ManualGesture from "ManualGesture" /* 5316 */;


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
