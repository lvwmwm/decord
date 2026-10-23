// Module ID: 5415
// Function ID: 5416
// Name: GestureObjects
// Dependencies: [5416, 5417, 5418, 5419, 5420, 5421, 5422, 5423, 5424, 5336, 5315]

// Module 5415 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 5315 */;
import HoverEffect from "HoverEffect" /* 5336 */;
import TapGesture from "TapGesture" /* 5416 */;
import PanGesture from "PanGesture" /* 5417 */;
import PinchGesture from "PinchGesture" /* 5418 */;
import RotationGesture from "RotationGesture" /* 5419 */;
import FlingGesture from "FlingGesture" /* 5420 */;
import LongPressGesture from "LongPressGesture" /* 5421 */;
import ForceTouchGesture from "ForceTouchGesture" /* 5422 */;
import NativeGesture from "NativeGesture" /* 5423 */;
import ManualGesture from "ManualGesture" /* 5424 */;


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
