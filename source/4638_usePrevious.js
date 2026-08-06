// Module ID: 4638
// Function ID: 4639
// Name: usePrevious
// Dependencies: [19]
// Exports: usePrevious

// Module 4638 (usePrevious)
import noop from "noop";

let c0;
let closure_1;
({ useEffect: c0, useRef: closure_1 } = noop);

export const usePrevious = function usePrevious(arg0) {
  const callback = arg0;
  const tmp = callback2(undefined);
  callback2 = tmp;
  callback(() => {
    closure_1.current = closure_0;
  });
  return tmp.current;
};
