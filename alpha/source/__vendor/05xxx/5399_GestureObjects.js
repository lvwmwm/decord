// Module ID: 5399
// Function ID: 5400
// Name: GestureObjects
// Dependencies: [5400, 5401, 5402, 5403, 5404, 5405, 5406, 5407, 5408, 5320, 5299]

// Module 5399 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 5299 */;
import HoverEffect from "HoverEffect" /* 5320 */;
import TapGesture from "TapGesture" /* 5400 */;
import PanGesture from "PanGesture" /* 5401 */;
import PinchGesture from "PinchGesture" /* 5402 */;
import RotationGesture from "RotationGesture" /* 5403 */;
import FlingGesture from "FlingGesture" /* 5404 */;
import LongPressGesture from "LongPressGesture" /* 5405 */;
import ForceTouchGesture from "ForceTouchGesture" /* 5406 */;
import NativeGesture from "NativeGesture" /* 5407 */;
import ManualGesture from "ManualGesture" /* 5408 */;


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
    const hoverGesture = new HoverEffect.HoverGesture();
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
