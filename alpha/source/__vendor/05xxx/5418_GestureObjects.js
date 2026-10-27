// Module ID: 5418
// Function ID: 5419
// Name: GestureObjects
// Dependencies: [5419, 5420, 5421, 5422, 5423, 5424, 5425, 5426, 5427, 5339, 5318]

// Module 5418 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 5318 */;
import HoverEffect from "HoverEffect" /* 5339 */;
import TapGesture from "TapGesture" /* 5419 */;
import PanGesture from "PanGesture" /* 5420 */;
import PinchGesture from "PinchGesture" /* 5421 */;
import RotationGesture from "RotationGesture" /* 5422 */;
import FlingGesture from "FlingGesture" /* 5423 */;
import LongPressGesture from "LongPressGesture" /* 5424 */;
import ForceTouchGesture from "ForceTouchGesture" /* 5425 */;
import NativeGesture from "NativeGesture" /* 5426 */;
import ManualGesture from "ManualGesture" /* 5427 */;


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
