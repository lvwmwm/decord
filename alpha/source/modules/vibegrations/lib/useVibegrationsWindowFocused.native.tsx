// Module ID: 16140
// Function ID: 16141
// Name: useVibegrationsWindowFocused
// Dependencies: [1986, 1085, 558, 576, 504, 2]

// Module 16140 (useVibegrationsWindowFocused)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import AppStateStore from "AppStateStore" /* 1986 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const AppStates = Constants.AppStates;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let state;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AppStateStore];
    const fn = function s() {
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
}) : (() => {
  let state;
  const items = [AppStateStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => state.getState() === constants.ACTIVE);
});
const result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsWindowFocused.native.tsx");

export default tmp2;
