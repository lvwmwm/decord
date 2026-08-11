// Module ID: 1800
// Function ID: 1801
// Name: useEvent
// Dependencies: [19, 1758]
// Exports: useEvent

// Module 1800 (useEvent)
import { useRef } from "noop";


export const useEvent = function useEvent(fn, closure_4, doDependenciesDiffer) {
  let items = closure_4;
  if (closure_4 === undefined) {
    items = [];
  }
  let flag = doDependenciesDiffer;
  if (doDependenciesDiffer === undefined) {
    flag = false;
  }
  const tmp = useRef(null);
  if (null === tmp.current) {
    let workletEventHandler = new require(1758) /* importDefaultResult1 */.WorkletEventHandler(fn, items);
    let obj = { workletEventHandler: null };
    obj[0] = workletEventHandler;
    tmp.current = obj;
  } else if (flag) {
    workletEventHandler = tmp.current.workletEventHandler;
    workletEventHandler.updateEventHandler(fn, items);
    obj = { workletEventHandler: null };
    obj[0] = workletEventHandler;
    tmp.current = obj;
  }
  return tmp.current;
};
