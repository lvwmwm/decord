// Module ID: 6446
// Function ID: 6447
// Name: GestureObjects
// Dependencies: [6447, 6448, 6449, 6450, 6451, 6452, 6453, 6454, 6455, 6367, 6346]

// Module 6446 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 6346 */;
import HoverEffect from "HoverEffect" /* 6367 */;
import TapGesture from "TapGesture" /* 6447 */;
import PanGesture from "PanGesture" /* 6448 */;
import PinchGesture from "PinchGesture" /* 6449 */;
import RotationGesture from "RotationGesture" /* 6450 */;
import FlingGesture from "FlingGesture" /* 6451 */;
import LongPressGesture from "LongPressGesture" /* 6452 */;
import ForceTouchGesture from "ForceTouchGesture" /* 6453 */;
import NativeGesture from "NativeGesture" /* 6454 */;
import ManualGesture from "ManualGesture" /* 6455 */;


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
