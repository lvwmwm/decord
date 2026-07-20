// Module ID: 1774
// Function ID: 19744
// Name: dismiss
// Dependencies: []

// Module 1774 (dismiss)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = true;
let obj = { timestamp: new Date().getTime() };
const KeyboardEvents = arg1(dependencyMap[1]).KeyboardEvents;
KeyboardEvents.addListener("keyboardDidHide", (arg0) => {
  let closure_3 = true;
});
const KeyboardEvents2 = arg1(dependencyMap[1]).KeyboardEvents;
KeyboardEvents2.addListener("keyboardWillShow", (arg0) => {
  let closure_3 = false;
});
obj = {};
const date = new Date();
obj.setDefaultMode = arg1(dependencyMap[1]).KeyboardControllerNative.setDefaultMode;
obj.setInputMode = arg1(dependencyMap[1]).KeyboardControllerNative.setInputMode;
obj.setFocusTo = arg1(dependencyMap[1]).KeyboardControllerNative.setFocusTo;
obj.preload = arg1(dependencyMap[1]).KeyboardControllerNative.preload;
obj.dismiss = () => {
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
        if (closure_3) {
          arg0();
        } else {
          const KeyboardEvents = callback(closure_1[1]).KeyboardEvents;
          closure_1 = KeyboardEvents.addListener("keyboardDidHide", () => {
            arg0(undefined);
            closure_1.remove();
          });
          const KeyboardControllerNative = callback(closure_1[1]).KeyboardControllerNative;
          KeyboardControllerNative.dismiss(callback, closure_1);
        }
      });
      return promise;
    }
  });
  return function dismiss(arg0) {
    return callback(...arguments);
  };
}();
obj.isVisible = function isVisible() {
  return !closure_3;
};
obj.state = function state(Icon, arg1, value) {
  return obj;
};

export const KeyboardController = obj;
