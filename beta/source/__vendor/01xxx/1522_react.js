// Module ID: 1522
// Function ID: 1523
// Name: react
// Dependencies: [19]
// Exports: useLazyValue

// Module 1522 (react)
import react from "react" /* 19 */;


export function useLazyValue(fn) {
  const ref = react.useRef(undefined);
  if (undefined === ref.current) {
    ref.current = fn();
  }
  return ref.current;
}
