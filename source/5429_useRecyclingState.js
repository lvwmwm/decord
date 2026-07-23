// Module ID: 5429
// Function ID: 46513
// Name: useRecyclingState
// Dependencies: [5359, 31, 5377]
// Exports: useRecyclingState

// Module 5429 (useRecyclingState)
import _slicedToArray from "_slicedToArray";
import result from "result";

let closure_3;
let closure_4;
let closure_5;
const require = arg1;
({ useCallback: closure_3, useMemo: closure_4, useRef: closure_5 } = result);

export const useRecyclingState = function useRecyclingState(arg0, items, arg2) {
  const _require = arg0;
  const dependencyMap = arg2;
  let tmp = callback4(undefined);
  const callback = tmp;
  const obj = _require(5377);
  const tmp3 = callback(_require(5377).useLayoutState(0), 2)[1];
  const callback2 = tmp3;
  callback3(() => {
    if ("function" === typeof callback) {
      let tmp = callback();
    } else {
      tmp = callback;
    }
    _slicedToArray.current = tmp;
    if (null != callback2) {
      callback2();
    }
  }, items);
  items = [tmp3];
  const items1 = [
    tmp.current,
    callback2((arg0, arg1) => {
      let tmp = arg0;
      if ("function" === typeof arg0) {
        tmp = arg0(tmp.current);
      }
      if (tmp !== tmp.current) {
        tmp.current = tmp;
        tmp((arg0) => arg0 + 1, arg1);
      }
    }, items)
  ];
  return items1;
};
