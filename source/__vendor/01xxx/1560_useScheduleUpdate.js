// Module ID: 1560
// Function ID: 1561
// Name: useScheduleUpdate
// Dependencies: [19, 1513, 1561]
// Exports: useScheduleUpdate

// Module 1560 (useScheduleUpdate)
import closure_2 from "noop" /* 19 */;

const require = arg1;

export const useScheduleUpdate = function useScheduleUpdate(arg0) {
  const _require = arg0;
  const context = React.useContext(_require(1513).NavigationBuilderContext);
  ({ scheduleUpdate: dependencyMap, flushUpdates } = context);
  const insertionEffect = React.useInsertionEffect(() => {
    callback(closure_0);
  });
  const clientLayoutEffect = _require(1561).useClientLayoutEffect(flushUpdates);
};
