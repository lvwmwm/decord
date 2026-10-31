// Module ID: 5423
// Function ID: 5424
// Name: GestureObjects
// Dependencies: [5424, 5425, 5426, 5427, 5428, 5429, 5430, 5431, 5432, 5344, 5323]

// Module 5423 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 5323 */;
import HoverEffect from "HoverEffect" /* 5344 */;
import TapGesture from "TapGesture" /* 5424 */;
import PanGesture from "PanGesture" /* 5425 */;
import PinchGesture from "PinchGesture" /* 5426 */;
import RotationGesture from "RotationGesture" /* 5427 */;
import FlingGesture from "FlingGesture" /* 5428 */;
import LongPressGesture from "LongPressGesture" /* 5429 */;
import ForceTouchGesture from "ForceTouchGesture" /* 5430 */;
import NativeGesture from "NativeGesture" /* 5431 */;
import ManualGesture from "ManualGesture" /* 5432 */;


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
