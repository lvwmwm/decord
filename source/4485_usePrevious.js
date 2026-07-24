// Module ID: 4485
// Function ID: 39609
// Name: usePrevious
// Dependencies: [31]
// Exports: usePrevious

// Module 4485 (usePrevious)
import result from "result";

({ useEffect: closure_0, useRef: closure_1 } = result);

export const usePrevious = function usePrevious(arg0) {
  const callback = arg0;
  const tmp = callback2(undefined);
  callback2 = tmp;
  callback(() => {
    closure_1.current = closure_0;
  });
  return tmp.current;
};
