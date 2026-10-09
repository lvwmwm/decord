// Module ID: 8286
// Function ID: 8287
// Name: useCurrentUser
// Dependencies: [1390, 558, 576, 504, 38, 2]

// Module 8286 (useCurrentUser)
import _modDef38 from "module_38" /* 38 */;
import react from "react" /* 576 */;
import UserStore from "UserStore" /* 1390 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCurrentUser() {
  let currentUser;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  _modDef38(null != stateFromStores, "user has to be signed in before accessing shop");
  return stateFromStores;
}) : (function useCurrentUser() {
  let currentUser;
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  _modDef38(null != stateFromStores, "user has to be signed in before accessing shop");
  return stateFromStores;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCurrentUserIfAvailable() {
  let currentUser;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      return currentUser.getCurrentUser();
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
}) : (function useCurrentUserIfAvailable() {
  let currentUser;
  const items = [UserStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => currentUser.getCurrentUser());
});
const result = size.fileFinishedImporting("modules/collectibles/hooks/useCurrentUser.tsx");

export const useCurrentUser = tmp2;
export const useCurrentUserIfAvailable = tmp3;
