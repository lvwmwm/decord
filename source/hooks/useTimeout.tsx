// Module ID: 7197
// Function ID: 57944
// Name: useTimeout
// Dependencies: [31, 2]
// Exports: default

// Module 7197 (useTimeout)
import result from "result";

({ useEffect: closure_0, useRef: closure_1 } = result);
result = require("set").fileFinishedImporting("hooks/useTimeout.tsx");

export default function useTimeout(arg0, arg1) {
  const callback = arg0;
  const callback2 = arg1;
  const tmp = callback2(arg0);
  let closure_2 = tmp;
  const items = [arg0];
  callback(() => {
    closure_2.current = closure_0;
  }, items);
  const items1 = [arg1, tmp];
  callback(() => {
    if (null !== closure_1) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => outer1_2.current(), closure_1);
      return () => clearTimeout(closure_0);
    }
  }, items1);
};
