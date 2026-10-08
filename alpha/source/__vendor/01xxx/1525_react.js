// Module ID: 1525
// Function ID: 1526
// Name: react
// Dependencies: [19]
// Exports: useLazyValue

// Module 1525 (react)
import react from "react" /* 19 */;


export const useLazyValue = function useLazyValue(fn) {
  const ref = react.useRef(undefined);
  if (undefined === ref.current) {
    ref.current = fn();
  }
  return ref.current;
};
