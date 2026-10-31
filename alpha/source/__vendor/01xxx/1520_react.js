// Module ID: 1520
// Function ID: 1521
// Name: react
// Dependencies: [19]
// Exports: useLazyValue

// Module 1520 (react)
import react from "react" /* 19 */;


export function useLazyValue(fn) {
  const ref = react.useRef(undefined);
  if (undefined === ref.current) {
    ref.current = fn();
  }
  return ref.current;
}
