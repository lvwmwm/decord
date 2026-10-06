// Module ID: 1514
// Function ID: 1515
// Name: react
// Dependencies: [19]
// Exports: useLazyValue

// Module 1514 (react)
import react from "react" /* 19 */;


export const useLazyValue = function useLazyValue(fn) {
  const ref = react.useRef(undefined);
  if (undefined === ref.current) {
    ref.current = fn();
  }
  return ref.current;
};
