// Module ID: 5138
// Function ID: 5139
// Dependencies: [19]
// Exports: usePrevious

// Module 5138
import noop from "module_19" /* 19 */;

({ useEffect: closure_0, useRef: closure_1 } = noop);

export const usePrevious = function usePrevious(current) {
  const tmp = framebus(undefined);
  closure_1 = tmp;
  React(() => {
    closure_1.current = current;
  });
  return tmp.current;
};
