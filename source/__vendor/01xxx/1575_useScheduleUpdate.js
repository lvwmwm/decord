// Module ID: 1575
// Function ID: 1576
// Name: useScheduleUpdate
// Dependencies: [19, 1528, 1576]
// Exports: useScheduleUpdate

// Module 1575 (useScheduleUpdate)
import closure_2 from "noop" /* 19 */;

const require = arg1;

export const useScheduleUpdate = function useScheduleUpdate(arg0) {
  const _require = arg0;
  const context = React.useContext(_require(1528).NavigationBuilderContext);
  ({ scheduleUpdate: dependencyMap, flushUpdates } = context);
  const insertionEffect = React.useInsertionEffect(() => {
    callback(closure_0);
  });
  const clientLayoutEffect = _require(1576).useClientLayoutEffect(flushUpdates);
};
