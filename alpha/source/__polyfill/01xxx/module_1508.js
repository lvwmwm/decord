// Module ID: 1508
// Function ID: 1509
// Dependencies: [19]
// Exports: useLazyValue

// Module 1508
import noop from "module_19" /* 19 */;


export const useLazyValue = function useLazyValue(fn) {
  const ref = noop.useRef(undefined);
  if (undefined === ref.current) {
    ref.current = fn();
  }
  return ref.current;
};
