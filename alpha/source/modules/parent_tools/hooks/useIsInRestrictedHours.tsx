// Module ID: 17975
// Function ID: 17976
// Name: useIsInRestrictedHours
// Dependencies: [1390, 7258, 558, 576, 504, 2]

// Module 17975 (useIsInRestrictedHours)
import react from "react" /* 576 */;
import UserStore from "UserStore" /* 1390 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7258 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsInRestrictedHours() {
  let currentUserInRestrictedHours;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore, FamilyCenterStore];
    const fn = function n() {
      return currentUserInRestrictedHours.isCurrentUserInRestrictedHours();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useIsInRestrictedHours() {
  let currentUserInRestrictedHours;
  const items = [UserStore, FamilyCenterStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => currentUserInRestrictedHours.isCurrentUserInRestrictedHours());
});
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default tmp2;
