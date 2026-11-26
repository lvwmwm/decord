// Module ID: 1901
// Function ID: 1902
// Name: react
// Dependencies: [19, 1865]
// Exports: useEvent

// Module 1901 (react)
import react from "react" /* 19 */;
import WorkletEventHandler from "WorkletEventHandler" /* 1865 */;

const useRef = react.useRef;

export function useEvent(FastListTsx2, items, doDependenciesDiffer) {
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
    tmp.current = { workletEventHandler: new WorkletEventHandler.WorkletEventHandler(FastListTsx2, items) };
    const obj2 = { workletEventHandler: new WorkletEventHandler.WorkletEventHandler(FastListTsx2, items) };
  } else if (flag) {
    tmp.current.workletEventHandler.updateEventHandler(FastListTsx2, items);
    const obj = { workletEventHandler: tmp.current.workletEventHandler };
    tmp.current = obj;
  }
  return tmp.current;
}
