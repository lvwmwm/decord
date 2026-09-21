// Module ID: 1565
// Function ID: 1566
// Dependencies: [19, 1518, 1566]
// Exports: useScheduleUpdate

// Module 1565
import NavigationBuilderContext from "NavigationBuilderContext" /* 1518 */;
import _mod1566 from "module_1566" /* 1566 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useScheduleUpdate = function useScheduleUpdate(arg0) {
  closure_0 = arg0;
  const context = noop.useContext(NavigationBuilderContext.NavigationBuilderContext);
  ({ scheduleUpdate: dependencyMap, flushUpdates } = context);
  const insertionEffect = noop.useInsertionEffect(() => {
    dependencyMap(closure_0);
  });
  const clientLayoutEffect = _mod1566.useClientLayoutEffect(flushUpdates);
};
