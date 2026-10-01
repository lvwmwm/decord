// Module ID: 1628
// Function ID: 1629
// Name: KeyboardControllerNative
// Dependencies: [17, 1629, 1630, 1631, 1632, 1633, 1634, 1635]
// Exports: RCTKeyboardExtender

// Module 1628 (KeyboardControllerNative)
import react_native from "react-native" /* 1629 */;
import _mod1630 from "module_1630" /* 1630 */;
import _mod1631 from "module_1631" /* 1631 */;
import _mod1632 from "module_1632" /* 1632 */;
import _mod1633 from "module_1633" /* 1633 */;
import react_native2 from "react-native" /* 1634 */;
import _mod1635 from "module_1635" /* 1635 */;
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
  fn = _mod1630.default;
} else {
  fn = (children) => children.children;
}

export const KeyboardControllerNative = _default;
export const KeyboardEvents = obj2;
export const FocusedInputEvents = obj3;
export const WindowDimensionsEvents = obj4;
export const KeyboardControllerView = _mod1631.default;
export const KeyboardControllerViewCommands = _mod1631.Commands;
export const KeyboardGestureArea = fn;
export const RCTOverKeyboardView = _mod1632.default;
export const KeyboardBackgroundView = _mod1633.default;
export const RCTKeyboardExtender = (children) => children.children;
export const ClippingScrollView = react_native2.default;
export const RCTKeyboardToolbarGroupView = _mod1635.default;
