// Module ID: 14748
// Function ID: 112416
// Name: useMountTimer
// Dependencies: [57, 31, 2]
// Exports: default

// Module 14748 (useMountTimer)
import _slicedToArray from "_slicedToArray";
import result from "result";

const result = require("set").fileFinishedImporting("modules/devtools/native/components/screens/performance/useMountTimer.tsx");

export default function useMountTimer() {
  let _slicedToArray;
  let tmp2;
  [tmp2, _slicedToArray] = callback(React.useState(null), 2);
  React = React.useRef(0);
  let closure_2 = React.useRef(0);
  let closure_3 = React.useRef(null);
  const tmp = callback(React.useState(null), 2);
  return {
    run: tmp2,
    begin: React.useCallback((params) => {
      const sum = ref.current + 1;
      ref.current = sum;
      closure_3.current = sum;
      closure_2.current = performance.now();
      callback({ batchKey: sum, params });
    }, []),
    measure: React.useCallback((arg0) => {
      let diff = null;
      if (arg0 === ref3.current) {
        ref3.current = null;
        const _performance = performance;
        diff = performance.now() - ref2.current;
      }
      return diff;
    }, []),
    cancel: React.useCallback((arg0) => {
      if (arg0 === ref3.current) {
        ref3.current = null;
      }
    }, [])
  };
};
