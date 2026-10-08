// Module ID: 1852
// Function ID: 1853
// Dependencies: [32, 19, 1847, 1645]
// Exports: useKeyboardState

// Module 1852
import KeyboardController3 from "KeyboardController" /* 1847 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;

let c3;
let closure_4;
({ useEffect: c3, useState: closure_4 } = react);
let closure_5 = ["keyboardWillShow", "keyboardDidHide"];
function getLatestState() {

}
function defaultSelector(arg0) {
  return arg0;
}

export const useKeyboardState = function useKeyboardState(cResult) {
  let closure_1;
  let first;
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = defaultSelector;
  }
  let closure_0 = tmp;
  closure_1 = undefined;
  [first, closure_1] = closure_4(() => {
    let KeyboardController2;
    if (typeof getLatestState === "function") {
      const obj = { isVisible: KeyboardController2.isVisible() };
      const KeyboardController = KeyboardController3.KeyboardController;
      const merged = Object.assign(KeyboardController.state());
      KeyboardController2 = KeyboardController3.KeyboardController;
      return tmp(obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  });
  const tmp4 = closure_3(() => {
    let KeyboardController2;
    closure_0 = closure_1_5.map((item) => {
      const KeyboardEvents = closure_0(closure_1[3]).KeyboardEvents;
      return KeyboardEvents.addListener(item, () => {
        let KeyboardController2;
        if (typeof closure_2_6 === "function") {
          const obj = { isVisible: KeyboardController2.isVisible() };
          const KeyboardController = closure_0(closure_2_1[2]).KeyboardController;
          const merged = Object.assign(KeyboardController.state());
          KeyboardController2 = closure_0(closure_2_1[2]).KeyboardController;
          return tmp(tmp2(obj));
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      });
    });
    if (typeof getLatestState === "function") {
      let obj = { isVisible: KeyboardController2.isVisible() };
      let KeyboardController = closure_0(closure_1[2]).KeyboardController;
      let merged = Object.assign(KeyboardController.state());
      KeyboardController2 = closure_0(closure_1[2]).KeyboardController;
      tmp(tmp2(obj));
      return () => {
        const item = closure_0.forEach((remove) => remove.remove());
      };
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }, []);
  return first;
};
