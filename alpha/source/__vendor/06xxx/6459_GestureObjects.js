// Module ID: 6459
// Function ID: 6460
// Name: GestureObjects
// Dependencies: [6460, 6461, 6462, 6463, 6464, 6465, 6466, 6467, 6468, 6380, 6359]

// Module 6459 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 6359 */;
import HoverEffect from "HoverEffect" /* 6380 */;
import TapGesture from "TapGesture" /* 6460 */;
import PanGesture from "PanGesture" /* 6461 */;
import PinchGesture from "PinchGesture" /* 6462 */;
import RotationGesture from "RotationGesture" /* 6463 */;
import FlingGesture from "FlingGesture" /* 6464 */;
import LongPressGesture from "LongPressGesture" /* 6465 */;
import ForceTouchGesture from "ForceTouchGesture" /* 6466 */;
import NativeGesture from "NativeGesture" /* 6467 */;
import ManualGesture from "ManualGesture" /* 6468 */;


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
