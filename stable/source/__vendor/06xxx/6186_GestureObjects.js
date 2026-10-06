// Module ID: 6186
// Function ID: 6187
// Name: GestureObjects
// Dependencies: [6187, 6188, 6189, 6190, 6191, 6192, 6193, 6194, 6195, 6107, 6086]

// Module 6186 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 6086 */;
import HoverEffect from "HoverEffect" /* 6107 */;
import TapGesture from "TapGesture" /* 6187 */;
import PanGesture from "PanGesture" /* 6188 */;
import PinchGesture from "PinchGesture" /* 6189 */;
import RotationGesture from "RotationGesture" /* 6190 */;
import FlingGesture from "FlingGesture" /* 6191 */;
import LongPressGesture from "LongPressGesture" /* 6192 */;
import ForceTouchGesture from "ForceTouchGesture" /* 6193 */;
import NativeGesture from "NativeGesture" /* 6194 */;
import ManualGesture from "ManualGesture" /* 6195 */;


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
