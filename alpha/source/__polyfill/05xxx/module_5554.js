// Module ID: 5554
// Function ID: 5555
// Dependencies: [5536, 19, 5555]
// Exports: useLayoutState

// Module 5554
import react2 from "react" /* 5555 */;
import _slicedToArray from "_slicedToArray" /* 5536 */;
import react from "react" /* 19 */;

let c3;
let closure_4;
({ useState: c3, useCallback: closure_4 } = react);

export function useLayoutState(arg0) {
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
}
