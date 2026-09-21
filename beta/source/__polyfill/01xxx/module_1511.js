// Module ID: 1511
// Function ID: 1512
// Dependencies: [19]
// Exports: useLazyValue

// Module 1511
import noop from "module_19" /* 19 */;


export const useLazyValue = function useLazyValue(fn) {
  const ref = noop.useRef(undefined);
  if (undefined === ref.current) {
    ref.current = fn();
  }
  return ref.current;
};
