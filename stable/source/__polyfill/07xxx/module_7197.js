// Module ID: 7197
// Function ID: 7198
// Dependencies: [7131, 19, 7149]
// Exports: useRecyclingState

// Module 7197
import _mod7149 from "module_7149" /* 7149 */;
import _slicedToArray from "module_7131" /* 7131 */;

require = fn;
const noop = fn(19);
({ useCallback: c3, useMemo: closure_4, useRef: hasOwnProperty } = noop);

export const useRecyclingState = function useRecyclingState(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg2;
  let tmp = hasOwnProperty(undefined);
  [r10015, tmp3] = _mod7149.useLayoutState(0);
  React4(() => {
    let tmpResult = closure_0;
    if (typeof closure_0 === "function") {
      tmpResult = tmp();
    }
    closure_2.current = tmpResult;
    if (closure_1 != null) {
      tmp3();
    }
  }, arg1);
  const items = [tmp3];
  const items1 = [
    tmp.current,
    React3((fn, arg1) => {
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
