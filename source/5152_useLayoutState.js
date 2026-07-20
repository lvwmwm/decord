// Module ID: 5152
// Function ID: 43613
// Name: useLayoutState
// Dependencies: []
// Exports: useLayoutState

// Module 5152 (useLayoutState)
let closure_2 = importDefault(dependencyMap[0]);
({ useState: closure_3, useCallback: closure_4 } = arg1(dependencyMap[1]));

export const useLayoutState = function useLayoutState(arg0) {
  const tmp = callback2(callback3(arg0), 2);
  const callback = tmp[1];
  const recyclerViewContext = callback(dependencyMap[2]).useRecyclerViewContext();
  const dependencyMap = recyclerViewContext;
  const items = [tmp[0], ];
  const items1 = [recyclerViewContext];
  items[1] = callback4((arg0, arg1) => {
    let tmp = arg1;
    const callback = arg0;
    callback((arg0) => {
      if ("function" === typeof arg0) {
        let tmp = arg0(arg0);
      } else {
        tmp = arg0;
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
