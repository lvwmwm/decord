// Module ID: 1577
// Function ID: 1578
// Name: useScheduleUpdate
// Dependencies: [19, 1530, 1578]
// Exports: useScheduleUpdate

// Module 1577 (useScheduleUpdate)
import noop from "noop";

const require = arg1;

export const useScheduleUpdate = function useScheduleUpdate(arg0) {
  let dependencyMap;
  let flushUpdates;
  const _require = arg0;
  const context = React.useContext(_require(1530).NavigationBuilderContext);
  ({ scheduleUpdate: dependencyMap, flushUpdates } = context);
  const insertionEffect = React.useInsertionEffect(() => {
    callback(closure_0);
  });
  const clientLayoutEffect = _require(1578).useClientLayoutEffect(flushUpdates);
};
