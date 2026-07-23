// Module ID: 8284
// Function ID: 65402
// Name: usePrevious
// Dependencies: [31, 2]
// Exports: default, usePreviousWhen

// Module 8284 (usePrevious)
import result from "result";

({ useRef: closure_0, useEffect: closure_1 } = result);
result = require("set").fileFinishedImporting("hooks/usePrevious.tsx");

export default function usePrevious(arg0) {
  const callback = arg0;
  const tmp = callback(null);
  const callback2 = tmp;
  const items = [arg0];
  callback2(() => {
    closure_1.current = closure_0;
  }, items);
  return tmp.current;
};
export const usePreviousWhen = function usePreviousWhen(value) {
  value = value.value;
  const shouldUpdate = value.shouldUpdate;
  const tmp = value(null);
  let closure_2 = tmp;
  const items = [value, shouldUpdate];
  shouldUpdate(() => {
    if (shouldUpdate) {
      closure_2.current = closure_0;
    }
  }, items);
  return tmp.current;
};
