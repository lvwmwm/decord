// Module ID: 6684
// Function ID: 51438
// Name: useInterval
// Dependencies: [31, 44, 2]
// Exports: default

// Module 6684 (useInterval)
import result from "result";

let closure_2;
let closure_3;
({ useEffect: closure_2, useRef: closure_3 } = result);
result = require("set").fileFinishedImporting("hooks/useInterval.tsx");

export default function useInterval(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const callback = callback2(arg0);
  callback2 = callback2(null);
  const items = [arg0];
  callback(() => {
    closure_2.current = closure_0;
  }, items);
  const items1 = [arg1];
  callback(() => {
    if (null !== closure_1) {
      const _setInterval = setInterval;
      ref.current = setInterval(() => {
        callback(table[1])(null != outer1_2.current, "Missing callback");
        outer1_2.current();
      }, closure_1);
      return () => clearInterval(outer1_3.current);
    } else if (null !== ref.current) {
      const _clearInterval = clearInterval;
      clearInterval(ref.current);
      ref.current = null;
    }
  }, items1);
};
