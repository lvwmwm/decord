// Module ID: 15167
// Function ID: 15168
// Name: useUserIsTeenAgeGroup
// Dependencies: [7258, 558, 576, 504, 2]

// Module 15167 (useUserIsTeenAgeGroup)
import react from "react" /* 576 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7258 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useUserIsTeenAgeGroup() {
  let ageGroup;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FamilyCenterStore];
    const fn = function s() {
      return ageGroup.getAgeGroup();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return "teen" === tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useUserIsTeenAgeGroup() {
  let ageGroup;
  const items = [FamilyCenterStore];
  const obj = get_initialized;
  return "teen" === obj.useStateFromStores(items, () => ageGroup.getAgeGroup());
});
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useUserIsTeenAgeGroup.tsx");

export default tmp2;
