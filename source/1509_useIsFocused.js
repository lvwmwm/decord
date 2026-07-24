// Module ID: 1509
// Function ID: 17352
// Name: useIsFocused
// Dependencies: [57, 31, 1508]
// Exports: default

// Module 1509 (useIsFocused)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { useState } from "result";


export default function useIsFocused() {
  obj = obj(1508)();
  const tmp = callback(useState(obj.isFocused), 2);
  const dependencyMap = tmp2;
  const isFocusedResult = obj.isFocused();
  if (tmp[0] !== isFocusedResult) {
    tmp2(isFocusedResult);
  }
  const items = [obj];
  const effect = React.useEffect(() => {
    obj = obj.addListener("focus", () => callback2(true));
    let closure_1 = obj.addListener("blur", () => callback2(false));
    return () => {
      callback();
      callback2();
    };
  }, items);
  const debugValue = React.useDebugValue(isFocusedResult);
  return isFocusedResult;
};
