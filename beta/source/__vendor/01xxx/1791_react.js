// Module ID: 1791
// Function ID: 1792
// Name: react
// Dependencies: [19, 1749]
// Exports: useEvent

// Module 1791 (react)
import react from "react" /* 19 */;
import WorkletEventHandler from "WorkletEventHandler" /* 1749 */;

const useRef = react.useRef;

export const useEvent = function useEvent(fn, cResult, doDependenciesDiffer) {
  let items = cResult;
  if (cResult === undefined) {
    items = [];
  }
  let flag = doDependenciesDiffer;
  if (doDependenciesDiffer === undefined) {
    flag = false;
  }
  const tmp = useRef(null);
  if (null === tmp.current) {
    const self = this;
    const self2 = this;
    tmp.current = { workletEventHandler: new WorkletEventHandler.WorkletEventHandler(fn, items) };
    const obj2 = { workletEventHandler: new WorkletEventHandler.WorkletEventHandler(fn, items) };
  } else if (flag) {
    tmp.current.workletEventHandler.updateEventHandler(fn, items);
    const obj = { workletEventHandler: tmp.current.workletEventHandler };
    tmp.current = obj;
  }
  return tmp.current;
};
