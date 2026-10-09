// Module ID: 1646
// Function ID: 1647
// Name: KeyboardControllerNative
// Dependencies: [17, 1647, 1648, 1649, 1650, 1651, 1652, 1653]
// Exports: RCTKeyboardExtender

// Module 1646 (KeyboardControllerNative)
import react_native from "react-native" /* 1647 */;
import _mod1648 from "module_1648" /* 1648 */;
import _mod1649 from "module_1649" /* 1649 */;
import _mod1650 from "module_1650" /* 1650 */;
import _mod1651 from "module_1651" /* 1651 */;
import react_native2 from "react-native" /* 1652 */;
import _mod1653 from "module_1653" /* 1653 */;
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
  fn = _mod1648.default;
} else {
  fn = (children) => children.children;
}

export const KeyboardControllerNative = _default;
export const KeyboardEvents = obj2;
export const FocusedInputEvents = obj3;
export const WindowDimensionsEvents = obj4;
export const KeyboardControllerView = _mod1649.default;
export const KeyboardControllerViewCommands = _mod1649.Commands;
export const KeyboardGestureArea = fn;
export const RCTOverKeyboardView = _mod1650.default;
export const KeyboardBackgroundView = _mod1651.default;
export const RCTKeyboardExtender = (children) => children.children;
export const ClippingScrollView = react_native2.default;
export const RCTKeyboardToolbarGroupView = _mod1653.default;
