// Module ID: 11875
// Function ID: 92037
// Name: onChange
// Dependencies: [31, 27, 33, 1450, 2]
// Exports: default

// Module 11875 (onChange)
import result from "result";
import closure_4 from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";

let closure_2;
let closure_3;
let closure_6;
let closure_7;
({ useEffect: closure_2, useRef: closure_3 } = result);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/VisibilitySensor.tsx");

export default function _default(onChange) {
  let children;
  let resetKey;
  onChange = onChange.onChange;
  let closure_5;
  function stopWatching(closure_5, arg1) {
    if (null !== ref.current) {
      const _clearInterval = clearInterval;
      clearInterval(ref.current);
      ref.current = null;
    }
  }
  ({ children, resetKey } = onChange);
  let tmp = width(null);
  const dependencyMap = tmp;
  let callback = width(false);
  const size = onChange(1450)();
  width = size.width;
  const height = size.height;
  closure_5 = width(null);
  const items = [resetKey];
  callback(() => {
    closure_2.current = false;
  }, items);
  const items1 = [onChange];
  callback = height.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (null === ref.current) {
      const _setInterval = setInterval;
      ref.current = setInterval(() => {
        if (null !== ref.current) {
          const current = ref.current;
          current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
            let tmp = arg5 + arg3 > 0;
            if (tmp) {
              tmp = arg5 < outer1_1;
            }
            if (tmp) {
              tmp = arg4 < outer1_0;
            }
            if (tmp) {
              tmp = arg4 + arg2 > 0;
            }
            if (tmp !== outer2_2.current) {
              outer2_2.current = tmp;
              callback(tmp);
            }
          });
        }
      }, 1000);
    }
  }, items1);
  const items2 = [callback, height, width];
  callback(() => {
    callback(width, height);
    return stopWatching;
  }, items2);
  const obj = { collapsable: false, ref: tmp };
  const items3 = [children, callback(closure_5, {})];
  obj.children = items3;
  return stopWatching(closure_5, obj);
};
