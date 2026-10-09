// Module ID: 10879
// Function ID: 10880
// Name: useCurrentEmbeddedActivity
// Dependencies: [2063, 558, 576, 504, 2]

// Module 10879 (useCurrentEmbeddedActivity)
import react from "react" /* 576 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2063 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCurrentEmbeddedActivity() {
  let currentEmbeddedActivity;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmbeddedActivitiesStore];
    const fn = function n() {
      return currentEmbeddedActivity.getCurrentEmbeddedActivity();
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
}) : (function useCurrentEmbeddedActivity() {
  let currentEmbeddedActivity;
  const items = [EmbeddedActivitiesStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => currentEmbeddedActivity.getCurrentEmbeddedActivity());
});
const result = size.fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedActivity.tsx");

export default tmp2;
