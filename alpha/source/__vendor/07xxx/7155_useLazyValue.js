// Module ID: 7155
// Function ID: 7156
// Name: useLazyValue
// Dependencies: [19]
// Exports: default

// Module 7155 (useLazyValue)
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
