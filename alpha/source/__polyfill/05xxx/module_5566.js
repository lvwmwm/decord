// Module ID: 5566
// Function ID: 5567
// Dependencies: [5500, 19, 5518]
// Exports: useRecyclingState

// Module 5566
import _mod5518 from "module_5518" /* 5518 */;
import _slicedToArray from "_slicedToArray" /* 5500 */;
import react from "react" /* 19 */;

let c3;
let closure_4;
let hasOwnProperty;
({ useCallback: c3, useMemo: closure_4, useRef: hasOwnProperty } = react);

export const useRecyclingState = function useRecyclingState(arg0, arg1, arg2) {
  let tmp3;
  let closure_0 = arg0;
  let closure_1 = arg2;
  let tmp = hasOwnProperty(undefined);
  let closure_2 = tmp;
  const obj = _mod5518;
  const tmp2 = _slicedToArray(obj.useLayoutState(0), 2);
  [r10015, tmp3] = tmp2;
  let c3 = tmp3;
  React3(() => {
    let tmpResult = closure_0;
    if (typeof closure_0 === "function") {
      tmpResult = tmp();
    }
    ref.current = tmpResult;
    if (closure_1 != null) {
      tmp3();
    }
  }, arg1);
  const items = [tmp3];
  const items1 = [
    tmp.current,
    _false((fn, arg1) => {
      let tmp = fn;
      if (typeof fn === "function") {
        tmp = fn(ref.current);
      }
      if (tmp !== ref.current) {
        tmp2.current = tmp;
        arg1((arg0) => arg0 + 1, arg1);
      }
    }, items)
  ];
  return items1;
};
