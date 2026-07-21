// Module ID: 5206
// Function ID: 44117
// Name: useRecyclingState
// Dependencies: []
// Exports: useRecyclingState

// Module 5206 (useRecyclingState)
let closure_2 = importDefault(dependencyMap[0]);
({ useCallback: closure_3, useMemo: closure_4, useRef: closure_5 } = arg1(dependencyMap[1]));

export const useRecyclingState = function useRecyclingState(arg0, items, arg2) {
  items = arg0;
  const dependencyMap = arg2;
  const tmp = callback3(undefined);
  const callback = tmp;
  const obj = items(dependencyMap[2]);
  const tmp3 = callback(items(dependencyMap[2]).useLayoutState(0), 2)[1];
  callback2(() => {
    if ("function" === typeof arg0) {
      let tmp = arg0();
    } else {
      tmp = arg0;
    }
    tmp.current = tmp;
    if (null != arg2) {
      arg2();
    }
  }, items);
  items = [tmp3];
  const items1 = [
    tmp.current,
    tmp3((arg0, arg1) => {
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
