// Module ID: 1801
// Function ID: 1802
// Name: useEvent
// Dependencies: [19, 1759]
// Exports: useEvent

// Module 1801 (useEvent)
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
    let workletEventHandler = new require(1759) /* importDefaultResult1 */.WorkletEventHandler(fn, items);
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
