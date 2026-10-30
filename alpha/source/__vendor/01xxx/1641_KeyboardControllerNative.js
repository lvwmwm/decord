// Module ID: 1641
// Function ID: 1642
// Name: KeyboardControllerNative
// Dependencies: [17, 1642, 1643, 1644, 1645, 1646, 1647, 1648]
// Exports: RCTKeyboardExtender

// Module 1641 (KeyboardControllerNative)
import react_native from "react-native" /* 1642 */;
import _mod1643 from "module_1643" /* 1643 */;
import _mod1644 from "module_1644" /* 1644 */;
import _mod1645 from "module_1645" /* 1645 */;
import _mod1646 from "module_1646" /* 1646 */;
import react_native2 from "react-native" /* 1647 */;
import _mod1648 from "module_1648" /* 1648 */;
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
  fn = _mod1643.default;
} else {
  fn = (children) => children.children;
}

export const KeyboardControllerNative = _default;
export const KeyboardEvents = obj2;
export const FocusedInputEvents = obj3;
export const WindowDimensionsEvents = obj4;
export const KeyboardControllerView = _mod1644.default;
export const KeyboardControllerViewCommands = _mod1644.Commands;
export const KeyboardGestureArea = fn;
export const RCTOverKeyboardView = _mod1645.default;
export const KeyboardBackgroundView = _mod1646.default;
export const RCTKeyboardExtender = (children) => children.children;
export const ClippingScrollView = react_native2.default;
export const RCTKeyboardToolbarGroupView = _mod1648.default;
