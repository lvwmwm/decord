// Module ID: 1578
// Function ID: 1579
// Dependencies: [19, 1531, 1579]
// Exports: useScheduleUpdate

// Module 1578
import react2 from "react" /* 1531 */;
import react3 from "react" /* 1579 */;
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
