// Module ID: 5616
// Function ID: 5617
// Name: useRecyclingState
// Dependencies: [5550, 19, 5568]
// Exports: useRecyclingState

// Module 5616 (useRecyclingState)
import _slicedToArray from "_slicedToArray";
import noop from "noop";

let c3;
let c4;
let c5;
const require = arg1;
({ useCallback: c3, useMemo: c4, useRef: c5 } = noop);

export const useRecyclingState = function useRecyclingState(arg0, arg1, arg2) {
  let tmp3;
  const _require = arg0;
  const dependencyMap = arg2;
  let tmp = callback4(undefined);
  const callback = tmp;
  const obj = _require(5568);
  [r10015, tmp3] = callback(_require(5568).useLayoutState(0), 2);
  const callback2 = tmp3;
  callback3(() => {
    let tmpResult = closure_0;
    if (typeof closure_0 === "function") {
      tmpResult = tmp();
    }
    _slicedToArray.current = tmpResult;
    if (closure_1 != null) {
      tmp3();
    }
  }, arg1);
  const items = [tmp3];
  const items1 = [
    tmp.current,
    callback2((fn) => {
      let tmp = fn;
      if (typeof fn === "function") {
        tmp = fn(tmp.current);
      }
      if (tmp !== tmp.current) {
        tmp2.current = tmp;
        arg1((arg0) => arg0 + 1, arg1);
      }
    }, items)
  ];
  return items1;
};
