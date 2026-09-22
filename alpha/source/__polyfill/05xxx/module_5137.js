// Module ID: 5137
// Function ID: 5138
// Dependencies: [19]
// Exports: usePrevious

// Module 5137
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
