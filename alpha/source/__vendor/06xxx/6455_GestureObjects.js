// Module ID: 6455
// Function ID: 6456
// Name: GestureObjects
// Dependencies: [6456, 6457, 6458, 6459, 6460, 6461, 6462, 6463, 6464, 6376, 6355]

// Module 6455 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 6355 */;
import HoverEffect from "HoverEffect" /* 6376 */;
import TapGesture from "TapGesture" /* 6456 */;
import PanGesture from "PanGesture" /* 6457 */;
import PinchGesture from "PinchGesture" /* 6458 */;
import RotationGesture from "RotationGesture" /* 6459 */;
import FlingGesture from "FlingGesture" /* 6460 */;
import LongPressGesture from "LongPressGesture" /* 6461 */;
import ForceTouchGesture from "ForceTouchGesture" /* 6462 */;
import NativeGesture from "NativeGesture" /* 6463 */;
import ManualGesture from "ManualGesture" /* 6464 */;


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
