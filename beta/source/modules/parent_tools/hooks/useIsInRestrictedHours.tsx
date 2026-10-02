// Module ID: 17079
// Function ID: 17080
// Name: useIsInRestrictedHours
// Dependencies: [1378, 6961, 558, 576, 504, 17080, 2]

// Module 17079 (useIsInRestrictedHours)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import RestrictedHoursManager from "RestrictedHoursManager" /* 17080 */;
import UserStore from "UserStore" /* 1378 */;
import FamilyCenterStore from "FamilyCenterStore" /* 6961 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore, FamilyCenterStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(first, RestrictedHoursManager.getCurrentRestrictedHoursState);
}) : (() => {
  const items = [UserStore, FamilyCenterStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, RestrictedHoursManager.getCurrentRestrictedHoursState);
});
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default tmp2;
