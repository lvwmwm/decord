// Module ID: 1788
// Function ID: 1789
// Dependencies: [19, 1746]
// Exports: useEvent

// Module 1788
import _mod19 from "module_19" /* 19 */;
import WorkletEventHandlerNative from "WorkletEventHandlerNative" /* 1746 */;

const useRef = _mod19.useRef;

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
    const workletEventHandler1 = new WorkletEventHandlerNative.WorkletEventHandler(fn, items);
    const obj2 = { workletEventHandler: workletEventHandler1 };
    tmp.current = obj2;
  } else if (flag) {
    tmp.current.workletEventHandler.updateEventHandler(fn, items);
    const obj = { workletEventHandler: tmp.current.workletEventHandler };
    tmp.current = obj;
  }
  return tmp.current;
};
