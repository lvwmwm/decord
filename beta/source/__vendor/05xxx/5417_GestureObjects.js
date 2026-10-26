// Module ID: 5417
// Function ID: 5418
// Name: GestureObjects
// Dependencies: [5418, 5419, 5420, 5421, 5422, 5423, 5424, 5425, 5426, 5338, 5317]

// Module 5417 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 5317 */;
import HoverEffect from "HoverEffect" /* 5338 */;
import TapGesture from "TapGesture" /* 5418 */;
import PanGesture from "PanGesture" /* 5419 */;
import PinchGesture from "PinchGesture" /* 5420 */;
import RotationGesture from "RotationGesture" /* 5421 */;
import FlingGesture from "FlingGesture" /* 5422 */;
import LongPressGesture from "LongPressGesture" /* 5423 */;
import ForceTouchGesture from "ForceTouchGesture" /* 5424 */;
import NativeGesture from "NativeGesture" /* 5425 */;
import ManualGesture from "ManualGesture" /* 5426 */;


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
