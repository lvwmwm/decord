// Module ID: 6453
// Function ID: 6454
// Name: GestureObjects
// Dependencies: [6454, 6455, 6456, 6457, 6458, 6459, 6460, 6461, 6462, 6374, 6353]

// Module 6453 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 6353 */;
import HoverEffect from "HoverEffect" /* 6374 */;
import TapGesture from "TapGesture" /* 6454 */;
import PanGesture from "PanGesture" /* 6455 */;
import PinchGesture from "PinchGesture" /* 6456 */;
import RotationGesture from "RotationGesture" /* 6457 */;
import FlingGesture from "FlingGesture" /* 6458 */;
import LongPressGesture from "LongPressGesture" /* 6459 */;
import ForceTouchGesture from "ForceTouchGesture" /* 6460 */;
import NativeGesture from "NativeGesture" /* 6461 */;
import ManualGesture from "ManualGesture" /* 6462 */;


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
