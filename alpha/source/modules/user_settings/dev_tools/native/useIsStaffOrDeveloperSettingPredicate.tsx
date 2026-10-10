// Module ID: 15098
// Function ID: 15099
// Name: useIsStaffOrDeveloperSettingPredicate
// Dependencies: [7408, 558, 576, 504, 2]

// Module 15098 (useIsStaffOrDeveloperSettingPredicate)
import react from "react" /* 576 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 7408 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useStaffOrDeveloperSettingPredicate() {
  let isDeveloper;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DeveloperExperimentStore];
    const fn = function s() {
      return isDeveloper.isDeveloper;
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
}) : (function useStaffOrDeveloperSettingPredicate() {
  let isDeveloper;
  const items = [DeveloperExperimentStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => isDeveloper.isDeveloper);
});
const result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx");

export const useStaffOrDeveloperSettingPredicate = tmp2;
