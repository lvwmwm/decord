// Module ID: 6360
// Function ID: 6361
// Dependencies: [6342, 19, 6361]
// Exports: useLayoutState

// Module 6360
import react2 from "react" /* 6361 */;
import _slicedToArray from "_slicedToArray" /* 6342 */;
import react from "react" /* 19 */;

let c3;
let closure_4;
({ useState: c3, useCallback: closure_4 } = react);

export const useLayoutState = function useLayoutState(arg0) {
  let closure_0;
  let first;
  [first, closure_0] = _false(arg0);
  let obj = react2;
  const recyclerViewContext = obj.useRecyclerViewContext();
  const items = [first, ];
  const items1 = [recyclerViewContext];
  items[1] = React3((arg0, arg1) => {
    closure_0 = arg0;
    const tmp = closure_0((arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        tmpResult = tmp(arg0);
      }
      return tmpResult;
    });
    const tmp2 = arg1;
    if (!tmp2) {
      const obj = recyclerViewContext;
      if (recyclerViewContext != null) {
        obj.layout();
      }
    }
  }, items1);
  return items;
};
