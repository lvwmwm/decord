// Module ID: 15334
// Function ID: 15335
// Name: useMountTimer
// Dependencies: [32, 19, 2]
// Exports: default

// Module 15334 (useMountTimer)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/useMountTimer.tsx");

export default function useMountTimer() {
  let closure_0;
  let first;
  [first, closure_0] = react.useState(null);
  let closure_1 = react.useRef(0);
  let closure_2 = react.useRef(0);
  let closure_3 = react.useRef(null);
  let obj = {
    run: first,
    begin: react.useCallback((params) => {
      const sum = ref.current + 1;
      ref.current = sum;
      ref3.current = sum;
      ref2.current = performance.now();
      const obj = { batchKey: sum, params };
      closure_0(obj);
    }, []),
    measure: react.useCallback((arg0) => {
      let diff = null;
      if (arg0 === ref3.current) {
        ref3.current = null;
        const _performance = performance;
        diff = performance.now() - ref2.current;
      }
      return diff;
    }, []),
    cancel: react.useCallback((arg0) => {
      if (arg0 === ref3.current) {
        tmp.current = null;
      }
    }, [])
  };
  return obj;
};
