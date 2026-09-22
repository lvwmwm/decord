// Module ID: 17719
// Function ID: 17720
// Name: useIsInRestrictedHours
// Dependencies: [1376, 7784, 558, 568, 504, 17720, 2]

// Module 17719 (useIsInRestrictedHours)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import RestrictedHoursManager from "RestrictedHoursManager" /* 17720 */;
import UserStore from "UserStore" /* 1376 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7784 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore, FamilyCenterStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  return initialize.useStateFromStores(first, RestrictedHoursManager.getCurrentRestrictedHoursState);
}) : (() => {
  const items = [UserStore, FamilyCenterStore];
  return initialize.useStateFromStores(items, RestrictedHoursManager.getCurrentRestrictedHoursState);
});
