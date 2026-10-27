// Module ID: 6732
// Function ID: 6733
// Name: GestureObjects
// Dependencies: [6733, 6734, 6735, 6736, 6737, 6738, 6739, 6740, 6741, 6653, 6632]

// Module 6732 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 6632 */;
import HoverEffect from "HoverEffect" /* 6653 */;
import TapGesture from "TapGesture" /* 6733 */;
import PanGesture from "PanGesture" /* 6734 */;
import PinchGesture from "PinchGesture" /* 6735 */;
import RotationGesture from "RotationGesture" /* 6736 */;
import FlingGesture from "FlingGesture" /* 6737 */;
import LongPressGesture from "LongPressGesture" /* 6738 */;
import ForceTouchGesture from "ForceTouchGesture" /* 6739 */;
import NativeGesture from "NativeGesture" /* 6740 */;
import ManualGesture from "ManualGesture" /* 6741 */;


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
