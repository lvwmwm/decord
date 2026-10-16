// Module ID: 1528
// Function ID: 1529
// Name: react
// Dependencies: [19]
// Exports: useLazyValue

// Module 1528 (react)
import react from "react" /* 19 */;


export const useLazyValue = function useLazyValue(fn) {
  const ref = react.useRef(undefined);
  if (undefined === ref.current) {
    ref.current = fn();
  }
  return ref.current;
};
