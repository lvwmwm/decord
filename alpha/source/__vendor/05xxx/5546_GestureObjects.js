// Module ID: 5546
// Function ID: 5547
// Name: GestureObjects
// Dependencies: [5547, 5548, 5549, 5550, 5551, 5552, 5553, 5554, 5555, 5467, 5446]

// Module 5546 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 5446 */;
import HoverEffect from "HoverEffect" /* 5467 */;
import TapGesture from "TapGesture" /* 5547 */;
import PanGesture from "PanGesture" /* 5548 */;
import PinchGesture from "PinchGesture" /* 5549 */;
import RotationGesture from "RotationGesture" /* 5550 */;
import FlingGesture from "FlingGesture" /* 5551 */;
import LongPressGesture from "LongPressGesture" /* 5552 */;
import ForceTouchGesture from "ForceTouchGesture" /* 5553 */;
import NativeGesture from "NativeGesture" /* 5554 */;
import ManualGesture from "ManualGesture" /* 5555 */;


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
