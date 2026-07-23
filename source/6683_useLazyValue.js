// Module ID: 6683
// Function ID: 51436
// Name: useLazyValue
// Dependencies: [31]
// Exports: default

// Module 6683 (useLazyValue)
import { useRef } from "result";

let closure_1 = {};

export default function useLazyValue(arg0) {
  const tmp = useRef(closure_1);
  if (tmp.current === closure_1) {
    tmp.current = arg0();
  }
  return tmp.current;
};
