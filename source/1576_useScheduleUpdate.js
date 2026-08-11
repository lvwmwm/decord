// Module ID: 1576
// Function ID: 1577
// Name: useScheduleUpdate
// Dependencies: [19, 1529, 1577]
// Exports: useScheduleUpdate

// Module 1576 (useScheduleUpdate)
import noop from "noop";

const require = arg1;

export const useScheduleUpdate = function useScheduleUpdate(arg0) {
  let dependencyMap;
  let flushUpdates;
  const _require = arg0;
  const context = React.useContext(_require(1529).NavigationBuilderContext);
  ({ scheduleUpdate: dependencyMap, flushUpdates } = context);
  const insertionEffect = React.useInsertionEffect(() => {
    callback(closure_0);
  });
  const clientLayoutEffect = _require(1577).useClientLayoutEffect(flushUpdates);
};
