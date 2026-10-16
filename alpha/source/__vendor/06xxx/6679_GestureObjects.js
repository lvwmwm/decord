// Module ID: 6679
// Function ID: 6680
// Name: GestureObjects
// Dependencies: [6680, 6681, 6682, 6683, 6684, 6685, 6686, 6687, 6688, 6600, 6579]

// Module 6679 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 6579 */;
import HoverEffect from "HoverEffect" /* 6600 */;
import TapGesture from "TapGesture" /* 6680 */;
import PanGesture from "PanGesture" /* 6681 */;
import PinchGesture from "PinchGesture" /* 6682 */;
import RotationGesture from "RotationGesture" /* 6683 */;
import FlingGesture from "FlingGesture" /* 6684 */;
import LongPressGesture from "LongPressGesture" /* 6685 */;
import ForceTouchGesture from "ForceTouchGesture" /* 6686 */;
import NativeGesture from "NativeGesture" /* 6687 */;
import ManualGesture from "ManualGesture" /* 6688 */;


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
