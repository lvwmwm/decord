// Module ID: 5403
// Function ID: 5404
// Name: GestureObjects
// Dependencies: [5404, 5405, 5406, 5407, 5408, 5409, 5410, 5411, 5412, 5324, 5303]

// Module 5403 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 5303 */;
import HoverEffect from "HoverEffect" /* 5324 */;
import TapGesture from "TapGesture" /* 5404 */;
import PanGesture from "PanGesture" /* 5405 */;
import PinchGesture from "PinchGesture" /* 5406 */;
import RotationGesture from "RotationGesture" /* 5407 */;
import FlingGesture from "FlingGesture" /* 5408 */;
import LongPressGesture from "LongPressGesture" /* 5409 */;
import ForceTouchGesture from "ForceTouchGesture" /* 5410 */;
import NativeGesture from "NativeGesture" /* 5411 */;
import ManualGesture from "ManualGesture" /* 5412 */;


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
