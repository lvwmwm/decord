// Module ID: 6677
// Function ID: 6678
// Name: GestureObjects
// Dependencies: [6678, 6679, 6680, 6681, 6682, 6683, 6684, 6685, 6686, 6598, 6577]

// Module 6677 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 6577 */;
import HoverEffect from "HoverEffect" /* 6598 */;
import TapGesture from "TapGesture" /* 6678 */;
import PanGesture from "PanGesture" /* 6679 */;
import PinchGesture from "PinchGesture" /* 6680 */;
import RotationGesture from "RotationGesture" /* 6681 */;
import FlingGesture from "FlingGesture" /* 6682 */;
import LongPressGesture from "LongPressGesture" /* 6683 */;
import ForceTouchGesture from "ForceTouchGesture" /* 6684 */;
import NativeGesture from "NativeGesture" /* 6685 */;
import ManualGesture from "ManualGesture" /* 6686 */;


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
