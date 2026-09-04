// Module ID: 4880
// Function ID: 4881
// Name: usePrevious
// Dependencies: [19]
// Exports: usePrevious

// Module 4880 (usePrevious)
import noop from "noop" /* 19 */;

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
