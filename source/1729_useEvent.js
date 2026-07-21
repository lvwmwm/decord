// Module ID: 1729
// Function ID: 19393
// Name: useEvent
// Dependencies: []
// Exports: useEvent

// Module 1729 (useEvent)
const useRef = require(dependencyMap[0]).useRef;

export const useEvent = function useEvent(pnpm_ReanimatedNativeStackScreenTsx1, closure_4, doDependenciesDiffer) {
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let items = arguments[1];
    }
    const tmp4 = useRef(null);
    if (null === tmp4.current) {
      const WorkletEventHandler = require(dependencyMap[1]).WorkletEventHandler;
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
