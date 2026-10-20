// Module ID: 5378
// Function ID: 5379
// Name: GestureObjects
// Dependencies: [5379, 5380, 5381, 5382, 5383, 5384, 5385, 5386, 5387, 5299, 5278]

// Module 5378 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 5278 */;
import HoverEffect from "HoverEffect" /* 5299 */;
import TapGesture from "TapGesture" /* 5379 */;
import PanGesture from "PanGesture" /* 5380 */;
import PinchGesture from "PinchGesture" /* 5381 */;
import RotationGesture from "RotationGesture" /* 5382 */;
import FlingGesture from "FlingGesture" /* 5383 */;
import LongPressGesture from "LongPressGesture" /* 5384 */;
import ForceTouchGesture from "ForceTouchGesture" /* 5385 */;
import NativeGesture from "NativeGesture" /* 5386 */;
import ManualGesture from "ManualGesture" /* 5387 */;


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
