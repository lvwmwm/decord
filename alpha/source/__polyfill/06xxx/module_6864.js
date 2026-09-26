// Module ID: 6864
// Function ID: 6865
// Dependencies: [19]
// Exports: default

// Module 6864
import _mod19 from "module_19" /* 19 */;

const useRef = _mod19.useRef;
let closure_1 = {};

export default function useLazyValue(fn) {
  const tmp = useRef(closure_1);
  if (tmp.current === closure_1) {
    tmp.current = fn();
  }
  return tmp.current;
};
