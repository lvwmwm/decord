// Module ID: 11426
// Function ID: 11427
// Name: useConjureWindowFocused
// Dependencies: [1999, 1085, 558, 576, 504, 2]

// Module 11426 (useConjureWindowFocused)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import AppStateStore from "AppStateStore" /* 1999 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const AppStates = Constants.AppStates;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureWindowFocused() {
  let state;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AppStateStore];
    const fn = function u() {
      return state.getState() === constants.ACTIVE;
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
}) : (function useConjureWindowFocused() {
  let state;
  const items = [AppStateStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => state.getState() === constants.ACTIVE);
});
const result = size.fileFinishedImporting("modules/conjure/shared/useConjureWindowFocused.native.tsx");

export default tmp2;
