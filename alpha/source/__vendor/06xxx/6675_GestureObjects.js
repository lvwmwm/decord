// Module ID: 6675
// Function ID: 6676
// Name: GestureObjects
// Dependencies: [6676, 6677, 6678, 6679, 6680, 6681, 6682, 6683, 6684, 6596, 6575]

// Module 6675 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 6575 */;
import HoverEffect from "HoverEffect" /* 6596 */;
import TapGesture from "TapGesture" /* 6676 */;
import PanGesture from "PanGesture" /* 6677 */;
import PinchGesture from "PinchGesture" /* 6678 */;
import RotationGesture from "RotationGesture" /* 6679 */;
import FlingGesture from "FlingGesture" /* 6680 */;
import LongPressGesture from "LongPressGesture" /* 6681 */;
import ForceTouchGesture from "ForceTouchGesture" /* 6682 */;
import NativeGesture from "NativeGesture" /* 6683 */;
import ManualGesture from "ManualGesture" /* 6684 */;


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
