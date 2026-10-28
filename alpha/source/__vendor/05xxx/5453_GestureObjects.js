// Module ID: 5453
// Function ID: 5454
// Name: GestureObjects
// Dependencies: [5454, 5455, 5456, 5457, 5458, 5459, 5460, 5461, 5462, 5374, 5353]

// Module 5453 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 5353 */;
import HoverEffect from "HoverEffect" /* 5374 */;
import TapGesture from "TapGesture" /* 5454 */;
import PanGesture from "PanGesture" /* 5455 */;
import PinchGesture from "PinchGesture" /* 5456 */;
import RotationGesture from "RotationGesture" /* 5457 */;
import FlingGesture from "FlingGesture" /* 5458 */;
import LongPressGesture from "LongPressGesture" /* 5459 */;
import ForceTouchGesture from "ForceTouchGesture" /* 5460 */;
import NativeGesture from "NativeGesture" /* 5461 */;
import ManualGesture from "ManualGesture" /* 5462 */;


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
