// Module ID: 331
// Function ID: 4920
// Name: useWindowDimensions
// Dependencies: [57, 31, 97]
// Exports: default

// Module 331 (useWindowDimensions)
import _slicedToArray from "_slicedToArray";
import result from "result";

let closure_3;
let closure_4;
({ useEffect: closure_3, useState: closure_4 } = result);

export default function useWindowDimensions() {
  let tmp = callback(callback3(() => first(97).get("window")), 2);
  const first = tmp[0];
  let closure_1 = tmp[1];
  const items = [first];
  callback2(() => {
    function handleChange(window) {
      const _window = window.window;
      let tmp = closure_0.width === _window.width;
      if (tmp) {
        tmp = closure_0.height === _window.height;
      }
      if (tmp) {
        tmp = closure_0.scale === _window.scale;
      }
      if (tmp) {
        tmp = closure_0.fontScale === _window.fontScale;
      }
      if (!tmp) {
        outer1_1(_window);
      }
    }
    let obj = first(97);
    let closure_0 = obj.addEventListener("change", handleChange);
    obj = { window: first(97).get("window") };
    handleChange(obj);
    return () => {
      closure_0.remove();
    };
  }, items);
  return first;
};
