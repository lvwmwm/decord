// Module ID: 5184
// Function ID: 5185
// Name: GestureObjects
// Dependencies: [5185, 5186, 5187, 5188, 5189, 5190, 5191, 5192, 5193, 5096, 5073]

// Module 5184 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 5073 */;
import hoverGestureHandlerProps from "hoverGestureHandlerProps" /* 5096 */;
import TapGesture from "TapGesture" /* 5185 */;
import PanGesture from "PanGesture" /* 5186 */;
import PinchGesture from "PinchGesture" /* 5187 */;
import RotationGesture from "RotationGesture" /* 5188 */;
import FlingGesture from "FlingGesture" /* 5189 */;
import LongPressGesture from "LongPressGesture" /* 5190 */;
import ForceTouchGesture from "ForceTouchGesture" /* 5191 */;
import NativeGesture from "NativeGesture" /* 5192 */;
import ManualGesture from "ManualGesture" /* 5193 */;


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
