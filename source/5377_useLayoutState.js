// Module ID: 5377
// Function ID: 46050
// Name: useLayoutState
// Dependencies: [5359, 31, 5378]
// Exports: useLayoutState

// Module 5377 (useLayoutState)
import _slicedToArray from "_slicedToArray";
import result from "result";

let closure_3;
let closure_4;
const require = arg1;
({ useState: closure_3, useCallback: closure_4 } = result);

export const useLayoutState = function useLayoutState(arg0) {
  let tmp = callback(callback2(arg0), 2);
  const _require = tmp[1];
  recyclerViewContext = _require(recyclerViewContext[2]).useRecyclerViewContext();
  const items = [tmp[0], ];
  const items1 = [recyclerViewContext];
  items[1] = callback3((arg0, arg1) => {
    let tmp = arg1;
    const callback = arg0;
    callback((arg0) => {
      if ("function" === typeof callback) {
        let tmp = callback(arg0);
      } else {
        tmp = callback;
      }
      return tmp;
    });
    if (!arg1) {
      tmp = null == recyclerViewContext;
    }
    if (!tmp) {
      recyclerViewContext.layout();
    }
  }, items1);
  return items;
};
