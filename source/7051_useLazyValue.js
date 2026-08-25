// Module ID: 7051
// Function ID: 7052
// Name: useLazyValue
// Dependencies: [19]
// Exports: default

// Module 7051 (useLazyValue)
import noop from "noop" /* 19 */;

const useRef = noop.useRef;
let closure_1 = {};

export default function useLazyValue(arg0) {
  const tmp = useRef(closure_1);
  if (tmp.current === closure_1) {
    tmp.current = arg0();
  }
  return tmp.current;
};
