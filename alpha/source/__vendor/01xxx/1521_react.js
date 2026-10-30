// Module ID: 1521
// Function ID: 1522
// Name: react
// Dependencies: [19]
// Exports: useLazyValue

// Module 1521 (react)
import react from "react" /* 19 */;


export function useLazyValue(fn) {
  const ref = react.useRef(undefined);
  if (undefined === ref.current) {
    ref.current = fn();
  }
  return ref.current;
}
