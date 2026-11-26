// Module ID: 1524
// Function ID: 1525
// Name: react
// Dependencies: [19]
// Exports: useLazyValue

// Module 1524 (react)
import react from "react" /* 19 */;


export function useLazyValue(fn) {
  const ref = react.useRef(undefined);
  if (undefined === ref.current) {
    ref.current = fn();
  }
  return ref.current;
}
