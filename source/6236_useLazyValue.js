// Module ID: 6236
// Function ID: 6237
// Name: useLazyValue
// Dependencies: [19]
// Exports: default

// Module 6236 (useLazyValue)
import { useRef } from "noop";

let closure_1 = {};

export default function useLazyValue(arg0) {
  const tmp = useRef(closure_1);
  if (tmp.current === closure_1) {
    tmp.current = arg0();
  }
  return tmp.current;
};
