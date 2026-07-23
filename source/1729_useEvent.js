// Module ID: 1729
// Function ID: 19394
// Name: useEvent
// Dependencies: [31, 1687]
// Exports: useEvent

// Module 1729 (useEvent)
import { useRef } from "result";


export const useEvent = function useEvent(pnpm_ReanimatedNativeStackScreenTsx1, closure_4, doDependenciesDiffer) {
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let items = arguments[1];
    }
    const tmp4 = useRef(null);
    if (null === tmp4.current) {
      const WorkletEventHandler = require(1687) /* WorkletEventHandlerNative */.WorkletEventHandler;
      const prototype = WorkletEventHandler.prototype;
      let workletEventHandler = new WorkletEventHandler(pnpm_ReanimatedNativeStackScreenTsx1, items);
      let obj = { workletEventHandler };
      tmp4.current = obj;
    } else if (tmp) {
      workletEventHandler = tmp4.current.workletEventHandler;
      workletEventHandler.updateEventHandler(pnpm_ReanimatedNativeStackScreenTsx1, items);
      obj = { workletEventHandler };
      tmp4.current = obj;
    }
    return tmp4.current;
  }
  items = [];
};
