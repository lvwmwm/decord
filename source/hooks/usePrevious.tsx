// Module ID: 8122
// Function ID: 8123
// Name: usePrevious
// Dependencies: [19, 2]
// Exports: default, usePreviousWhen

// Module 8122 (usePrevious)
import noop from "noop";

let c0;
let closure_1;
({ useRef: c0, useEffect: closure_1 } = noop);
const result = require("set").fileFinishedImporting("hooks/usePrevious.tsx");

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
  const callback = value;
  const shouldUpdate = value.shouldUpdate;
  let c2;
  const tmp = callback(null);
  c2 = tmp;
  const items = [value, shouldUpdate];
  shouldUpdate(() => {
    if (shouldUpdate) {
      c2.current = closure_0;
    }
  }, items);
  return tmp.current;
};
