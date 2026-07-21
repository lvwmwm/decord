// Module ID: 10788
// Function ID: 83765
// Name: throttleStateFn
// Dependencies: []
// Exports: useThrottledState

// Module 10788 (throttleStateFn)
function throttleStateFn(arg0) {
  return arg0;
}
let closure_2 = importAll(dependencyMap[0]);
function useThrottledFunction(callback4, arg1, items, closure_12) {
  arg1 = callback4;
  const dependencyMap = arg1;
  if (items === undefined) {
    items = [];
  }
  const React = closure_12;
  let useThrottledFunction;
  const ref = React.useRef(arg1(dependencyMap[1]).throttle(callback4, arg1, closure_12));
  useThrottledFunction = ref;
  const items1 = [callback4, arg1, closure_12, ...items];
  const effect = React.useEffect(() => {
    ref.current = arg0(arg1[1]).throttle(arg0, arg1, arg3);
    return () => {
      const current = ref.current;
      if (null != current) {
        current.cancel();
      }
    };
  }, items1);
  return ref.current;
}
const result = arg1(dependencyMap[2]).fileFinishedImporting("hooks/useThrottle.tsx");

export const useThrottledState = (arg0, arg1, items, closure_12) => {
  let current = arg0;
  arg1 = arg0;
  if (items === undefined) {
    items = [];
  }
  let dependencyMap;
  let React;
  const tmp = useThrottledFunction(throttleStateFn, arg1, items, closure_12);
  dependencyMap = tmp;
  const ref = React.useRef(current);
  React = ref;
  const items1 = [current, tmp];
  const effect = React.useEffect(() => {
    ref.current = tmp(arg0);
  }, items1);
  if (0 !== arg1) {
    current = ref.current;
  }
  return current;
};
export { useThrottledFunction };
