// Module ID: 1774
// Function ID: 19751
// Name: dismiss
// Dependencies: [5, 1572]

// Module 1774 (dismiss)
import asyncGeneratorStep from "asyncGeneratorStep";
import { KeyboardEvents } from "nativeEventEmitter";
import { KeyboardEvents as KeyboardEvents2 } from "nativeEventEmitter";

const require = arg1;
let c3 = true;
let obj = { height: 0, duration: 0, timestamp: new Date().getTime(), target: -1, type: "default", appearance: "light" };
KeyboardEvents.addListener("keyboardDidHide", (arg0) => {
  let c3 = true;
  let closure_4 = arg0;
});
KeyboardEvents2.addListener("keyboardWillShow", (arg0) => {
  let c3 = false;
  let closure_4 = arg0;
});
obj = {};
const date = new Date();
obj.setDefaultMode = require("nativeEventEmitter").KeyboardControllerNative.setDefaultMode;
obj.setInputMode = require("nativeEventEmitter").KeyboardControllerNative.setInputMode;
obj.setFocusTo = require("nativeEventEmitter").KeyboardControllerNative.setFocusTo;
obj.preload = require("nativeEventEmitter").KeyboardControllerNative.preload;
obj.dismiss = (() => {
  let closure_0 = callback(async (arg0) => {
    if (obj) {
      return obj.resume();
    } else {
      let closure_0;
      let closure_1;
      let keepFocus;
      if (null != arg0) {
        keepFocus = arg0.keepFocus;
      }
      closure_0 = null != keepFocus && keepFocus;
      let animated;
      if (null != arg0) {
        animated = arg0.animated;
      }
      closure_1 = null == animated || animated;
      const promise = new Promise((arg0) => {
        const callback = arg0;
        if (outer3_3) {
          arg0();
        } else {
          const KeyboardEvents = callback(outer3_1[1]).KeyboardEvents;
          let closure_1 = KeyboardEvents.addListener("keyboardDidHide", () => {
            callback(undefined);
            closure_1.remove();
          });
          const KeyboardControllerNative = callback(outer3_1[1]).KeyboardControllerNative;
          KeyboardControllerNative.dismiss(callback, closure_1);
        }
      });
      return promise;
    }
  });
  return function dismiss(arg0) {
    return callback(...arguments);
  };
})();
obj.isVisible = function isVisible() {
  return !c3;
};
obj.state = function state(Icon, items, value) {
  return obj;
};

export const KeyboardController = obj;
