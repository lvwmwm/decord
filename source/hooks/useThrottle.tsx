// Module ID: 10799
// Function ID: 83838
// Name: throttleStateFn
// Dependencies: [31, 22, 2]
// Exports: useThrottledState

// Module 10799 (throttleStateFn)
import result from "result";

const require = arg1;
function throttleStateFn(arg0) {
  return arg0;
}
function useThrottledFunction(callback4, arg1, items, sharedValue) {
  const _require = callback4;
  const dependencyMap = arg1;
  if (items === undefined) {
    items = [];
  }
  const React = sharedValue;
  let ref;
  ref = React.useRef(_require(22).throttle(callback4, arg1, sharedValue));
  const items1 = [callback4, arg1, sharedValue, ...items];
  const effect = React.useEffect(() => {
    ref.current = callback4(table[1]).throttle(callback4, table, result);
    return () => {
      const current = outer1_3.current;
      if (null != current) {
        current.cancel();
      }
    };
  }, items1);
  return ref.current;
}
const result = require("set").fileFinishedImporting("hooks/useThrottle.tsx");

export const useThrottledState = (arg0, arg1, items, sharedValue) => {
  let current = arg0;
  let closure_0 = arg0;
  if (items === undefined) {
    items = [];
  }
  let c1;
  let ref;
  const tmp = useThrottledFunction(throttleStateFn, arg1, items, sharedValue);
  c1 = tmp;
  ref = ref.useRef(current);
  const items1 = [current, tmp];
  const effect = ref.useEffect(() => {
    ref.current = _undefined(closure_0);
  }, items1);
  if (0 !== arg1) {
    current = ref.current;
  }
  return current;
};
export { useThrottledFunction };
