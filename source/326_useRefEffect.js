// Module ID: 326
// Function ID: 4903
// Name: useRefEffect
// Dependencies: [31]
// Exports: default

// Module 326 (useRefEffect)
import result from "result";

({ useCallback: closure_0, useRef: closure_1 } = result);

export default function useRefEffect(arg0) {
  const callback = arg0;
  callback2 = callback2(undefined);
  const items = [arg0];
  return callback((arg0) => {
    if (ref.current) {
      ref.current();
      ref.current = undefined;
    }
    if (null != arg0) {
      ref.current = callback(arg0);
    }
  }, items);
};
