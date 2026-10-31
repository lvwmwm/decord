// Module ID: 1640
// Function ID: 1641
// Name: KeyboardControllerNative
// Dependencies: [17, 1641, 1642, 1643, 1644, 1645, 1646, 1647]
// Exports: RCTKeyboardExtender

// Module 1640 (KeyboardControllerNative)
import react_native from "react-native" /* 1641 */;
import _mod1642 from "module_1642" /* 1642 */;
import _mod1643 from "module_1643" /* 1643 */;
import _mod1644 from "module_1644" /* 1644 */;
import _mod1645 from "module_1645" /* 1645 */;
import react_native2 from "react-native" /* 1646 */;
import _mod1647 from "module_1647" /* 1647 */;
import react_native3 from "react-native" /* 17 */;

let NativeEventEmitter;
let Platform;
let _default;
let fn;
({ NativeEventEmitter, Platform } = react_native3);
if (react_native.default) {
  _default = react_native.default;
} else {
  const _Proxy = Proxy;
  const self = this;
  const self2 = this;
  const obj = {
    get() {
        const error = new Error("The package 'react-native-keyboard-controller' doesn't seem to be linked. Make sure: \n\n- You rebuilt the app after installing the package\n- You are not using Expo Go\n");
        throw error;
      }
  };
  _default = new Proxy({}, obj);
}
let c0 = "KeyboardController::";
const nativeEventEmitter = new NativeEventEmitter(_default);
const obj2 = {
  addListener(arg0, arg1) {
    return nativeEventEmitter.addListener(c0 + arg0, arg1);
  }
};
const obj3 = {
  addListener(arg0, arg1) {
    return nativeEventEmitter.addListener(c0 + arg0, arg1);
  }
};
const obj4 = {
  addListener(arg0, arg1) {
    return nativeEventEmitter.addListener(c0 + arg0, arg1);
  }
};
if (Platform.Version >= 30) {
  fn = _mod1642.default;
} else {
  fn = (children) => children.children;
}

export const KeyboardControllerNative = _default;
export const KeyboardEvents = obj2;
export const FocusedInputEvents = obj3;
export const WindowDimensionsEvents = obj4;
export const KeyboardControllerView = _mod1643.default;
export const KeyboardControllerViewCommands = _mod1643.Commands;
export const KeyboardGestureArea = fn;
export const RCTOverKeyboardView = _mod1644.default;
export const KeyboardBackgroundView = _mod1645.default;
export const RCTKeyboardExtender = (children) => children.children;
export const ClippingScrollView = react_native2.default;
export const RCTKeyboardToolbarGroupView = _mod1647.default;
