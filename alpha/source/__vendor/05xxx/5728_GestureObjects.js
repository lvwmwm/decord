// Module ID: 5728
// Function ID: 5729
// Name: GestureObjects
// Dependencies: [5729, 5730, 5731, 5732, 5733, 5734, 5735, 5736, 5737, 5640, 5617]

// Module 5728 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 5617 */;
import hoverGestureHandlerProps from "hoverGestureHandlerProps" /* 5640 */;
import TapGesture from "TapGesture" /* 5729 */;
import PanGesture from "PanGesture" /* 5730 */;
import PinchGesture from "PinchGesture" /* 5731 */;
import RotationGesture from "RotationGesture" /* 5732 */;
import FlingGesture from "FlingGesture" /* 5733 */;
import LongPressGesture from "LongPressGesture" /* 5734 */;
import ForceTouchGesture from "ForceTouchGesture" /* 5735 */;
import NativeGesture from "NativeGesture" /* 5736 */;
import ManualGesture from "ManualGesture" /* 5737 */;


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
    const hoverGesture = new hoverGestureHandlerProps.HoverGesture();
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
