// Module ID: 5182
// Function ID: 5183
// Name: GestureObjects
// Dependencies: [5183, 5184, 5185, 5186, 5187, 5188, 5189, 5190, 5191, 5094, 5071]

// Module 5182 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 5071 */;
import hoverGestureHandlerProps from "hoverGestureHandlerProps" /* 5094 */;
import TapGesture from "TapGesture" /* 5183 */;
import PanGesture from "PanGesture" /* 5184 */;
import PinchGesture from "PinchGesture" /* 5185 */;
import RotationGesture from "RotationGesture" /* 5186 */;
import FlingGesture from "FlingGesture" /* 5187 */;
import LongPressGesture from "LongPressGesture" /* 5188 */;
import ForceTouchGesture from "ForceTouchGesture" /* 5189 */;
import NativeGesture from "NativeGesture" /* 5190 */;
import ManualGesture from "ManualGesture" /* 5191 */;


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
