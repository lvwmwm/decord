// Module ID: 1779
// Function ID: 19792
// Name: getLatestState
// Dependencies: [57, 31, 1774, 1572]
// Exports: useKeyboardState

// Module 1779 (getLatestState)
import _slicedToArray from "_slicedToArray";
import result from "result";

let closure_3;
let closure_4;
const require = arg1;
({ useEffect: closure_3, useState: closure_4 } = result);
let closure_5 = ["keyboardWillShow", "keyboardDidHide"];
function getLatestState() {
  const KeyboardController = require(1774) /* dismiss */.KeyboardController;
  const obj = {};
  const KeyboardController2 = require(1774) /* dismiss */.KeyboardController;
  obj.isVisible = KeyboardController2.isVisible();
  return Object.assign({}, KeyboardController.state(), obj);
}
function defaultSelector(arg0) {
  return arg0;
}

export const useKeyboardState = function useKeyboardState(arg0) {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    const tmp4 = callback(callback3(() => first(outer1_6())), 2);
    let closure_1 = tmp4[1];
    callback2(() => {
      const callback = outer1_5.map((arg0) => {
        const KeyboardEvents = first(table[3]).KeyboardEvents;
        return KeyboardEvents.addListener(arg0, () => outer2_1(callback(outer3_6())));
      });
      callback2(callback(outer1_6()));
      return () => {
        const item = closure_0.forEach((remove) => remove.remove());
      };
    }, []);
    return tmp4[0];
  }
  first = defaultSelector;
};
