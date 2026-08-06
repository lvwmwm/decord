// Module ID: 1557
// Function ID: 1558
// Name: useScheduleUpdate
// Dependencies: [19, 1510, 1558]
// Exports: useScheduleUpdate

// Module 1557 (useScheduleUpdate)
import noop from "noop";

const require = arg1;

export const useScheduleUpdate = function useScheduleUpdate(arg0) {
  let dependencyMap;
  let flushUpdates;
  const _require = arg0;
  const context = React.useContext(_require(1510).NavigationBuilderContext);
  ({ scheduleUpdate: dependencyMap, flushUpdates } = context);
  const insertionEffect = React.useInsertionEffect(() => {
    callback(closure_0);
  });
  const clientLayoutEffect = _require(1558).useClientLayoutEffect(flushUpdates);
};
