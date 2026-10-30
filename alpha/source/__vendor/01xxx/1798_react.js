// Module ID: 1798
// Function ID: 1799
// Name: react
// Dependencies: [19, 1756]
// Exports: useEvent

// Module 1798 (react)
import react from "react" /* 19 */;
import WorkletEventHandler from "WorkletEventHandler" /* 1756 */;

const useRef = react.useRef;

export function useEvent(fn, items, doDependenciesDiffer) {
  if (items === undefined) {
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
}
