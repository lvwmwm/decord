// Module ID: 5449
// Function ID: 5450
// Name: GestureObjects
// Dependencies: [5450, 5451, 5452, 5453, 5454, 5455, 5456, 5457, 5458, 5370, 5349]

// Module 5449 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 5349 */;
import HoverEffect from "HoverEffect" /* 5370 */;
import TapGesture from "TapGesture" /* 5450 */;
import PanGesture from "PanGesture" /* 5451 */;
import PinchGesture from "PinchGesture" /* 5452 */;
import RotationGesture from "RotationGesture" /* 5453 */;
import FlingGesture from "FlingGesture" /* 5454 */;
import LongPressGesture from "LongPressGesture" /* 5455 */;
import ForceTouchGesture from "ForceTouchGesture" /* 5456 */;
import NativeGesture from "NativeGesture" /* 5457 */;
import ManualGesture from "ManualGesture" /* 5458 */;


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
