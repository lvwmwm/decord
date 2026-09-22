// Module ID: 5008
// Function ID: 5009
// Dependencies: [19]
// Exports: usePrevious

// Module 5008
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
