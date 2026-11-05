// Module ID: 5709
// Function ID: 5710
// Dependencies: [5643, 19, 5661]
// Exports: useRecyclingState

// Module 5709
import _mod5661 from "module_5661" /* 5661 */;
import _slicedToArray from "_slicedToArray" /* 5643 */;
import react from "react" /* 19 */;

let c3;
let closure_4;
let hasOwnProperty;
({ useCallback: c3, useMemo: closure_4, useRef: hasOwnProperty } = react);

export function useRecyclingState(arg0, arg1, arg2) {
  let tmp3;
  let closure_0 = arg0;
  let closure_1 = arg2;
  let tmp = hasOwnProperty(undefined);
  let closure_2 = tmp;
  const obj = _mod5661;
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
}
