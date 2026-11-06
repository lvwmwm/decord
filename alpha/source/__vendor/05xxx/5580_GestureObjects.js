// Module ID: 5580
// Function ID: 5581
// Name: GestureObjects
// Dependencies: [5581, 5582, 5583, 5584, 5585, 5586, 5587, 5588, 5589, 5492, 5469]

// Module 5580 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 5469 */;
import hoverGestureHandlerProps from "hoverGestureHandlerProps" /* 5492 */;
import TapGesture from "TapGesture" /* 5581 */;
import PanGesture from "PanGesture" /* 5582 */;
import PinchGesture from "PinchGesture" /* 5583 */;
import RotationGesture from "RotationGesture" /* 5584 */;
import FlingGesture from "FlingGesture" /* 5585 */;
import LongPressGesture from "LongPressGesture" /* 5586 */;
import ForceTouchGesture from "ForceTouchGesture" /* 5587 */;
import NativeGesture from "NativeGesture" /* 5588 */;
import ManualGesture from "ManualGesture" /* 5589 */;


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
