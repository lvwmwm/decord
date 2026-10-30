// Module ID: 1575
// Function ID: 1576
// Dependencies: [19, 1528, 1576]
// Exports: useScheduleUpdate

// Module 1575
import react2 from "react" /* 1528 */;
import react3 from "react" /* 1576 */;
import react from "react" /* 19 */;


export function useScheduleUpdate(arg0) {
  let closure_129_1;
  let flushUpdates;
  let closure_0 = arg0;
  const context = react.useContext(react2.NavigationBuilderContext);
  ({ scheduleUpdate: closure_129_1, flushUpdates } = context);
  const insertionEffect = react.useInsertionEffect(() => {
    closure_1_1(closure_0);
  });
  const obj = react3;
  const clientLayoutEffect = obj.useClientLayoutEffect(flushUpdates);
}
