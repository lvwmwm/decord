// Module ID: 10422
// Function ID: 10423
// Name: useLazyValue
// Dependencies: [19]
// Exports: default

// Module 10422 (useLazyValue)
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
