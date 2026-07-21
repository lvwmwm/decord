// Module ID: 1572
// Function ID: 17635
// Name: nativeEventEmitter
// Dependencies: []
// Exports: RCTKeyboardExtender

// Module 1572 (nativeEventEmitter)
const _module = require(dependencyMap[0]);
if (require(dependencyMap[1]).default) {
  let _default = require(dependencyMap[1]).default;
} else {
  const _Proxy = Proxy;
  let obj = {
    get() {
        const error = new Error("The package 'react-native-keyboard-controller' doesn't seem to be linked. Make sure: \n\n- You rebuilt the app after installing the package\n- You are not using Expo Go\n");
        throw error;
      }
  };
  _default = new Proxy({}, obj);
}
let closure_0 = "KeyboardController::";
const nativeEventEmitter = new _module.NativeEventEmitter(_default);
obj = {
  addListener(arg0, arg1) {
    return nativeEventEmitter.addListener(closure_0 + arg0, arg1);
  }
};
obj = {
  addListener(arg0, arg1) {
    return nativeEventEmitter.addListener(closure_0 + arg0, arg1);
  }
};
if (_module.Platform.Version >= 30) {
  let fn = require(dependencyMap[2]).default;
} else {
  fn = (children) => children.children;
}

export const KeyboardControllerNative = _default;
export const KeyboardEvents = obj;
export const FocusedInputEvents = obj;
export const WindowDimensionsEvents = {
  addListener(arg0, arg1) {
    return nativeEventEmitter.addListener(closure_0 + arg0, arg1);
  }
};
export const KeyboardControllerView = require(dependencyMap[3]).default;
export const KeyboardControllerViewCommands = require(dependencyMap[3]).Commands;
export const KeyboardGestureArea = fn;
export const RCTOverKeyboardView = require(dependencyMap[4]).default;
export const KeyboardBackgroundView = require(dependencyMap[5]).default;
export const RCTKeyboardExtender = (children) => children.children;
export const ClippingScrollView = require(dependencyMap[6]).default;
export const RCTKeyboardToolbarGroupView = require(dependencyMap[7]).default;
