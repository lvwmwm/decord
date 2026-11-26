// Module ID: 9228
// Function ID: 9229
// Name: useLazyValue
// Dependencies: [19]
// Exports: default

// Module 9228 (useLazyValue)
import react from "react" /* 19 */;

const useRef = react.useRef;
let closure_1 = {};

export default function useLazyValue(fn) {
  const tmp = useRef(closure_1);
  if (tmp.current === closure_1) {
    tmp.current = fn();
  }
  return tmp.current;
};
