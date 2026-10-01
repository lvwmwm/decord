// Module ID: 6193
// Function ID: 6194
// Name: GestureObjects
// Dependencies: [6194, 6195, 6196, 6197, 6198, 6199, 6200, 6201, 6202, 6114, 6093]

// Module 6193 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 6093 */;
import HoverEffect from "HoverEffect" /* 6114 */;
import TapGesture from "TapGesture" /* 6194 */;
import PanGesture from "PanGesture" /* 6195 */;
import PinchGesture from "PinchGesture" /* 6196 */;
import RotationGesture from "RotationGesture" /* 6197 */;
import FlingGesture from "FlingGesture" /* 6198 */;
import LongPressGesture from "LongPressGesture" /* 6199 */;
import ForceTouchGesture from "ForceTouchGesture" /* 6200 */;
import NativeGesture from "NativeGesture" /* 6201 */;
import ManualGesture from "ManualGesture" /* 6202 */;


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
