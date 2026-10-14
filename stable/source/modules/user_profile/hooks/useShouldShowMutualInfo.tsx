// Module ID: 12813
// Function ID: 12814
// Name: useShouldShowMutualInfo
// Dependencies: [1377, 558, 576, 504, 12814, 2]

// Module 12813 (useShouldShowMutualInfo)
import react from "react" /* 576 */;
import useIsUserProfileObfuscatedDefault from "useIsUserProfileObfuscated" /* 12814 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let id;

let tmp;
const get_initialized = tmp(504);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
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
  id = undefined;
  const tmp8 = useIsUserProfileObfuscatedDefault(id);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  return id !== id.id && !tmp8;
}) : ((id) => {
  let currentUser;
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  id = undefined;
  const tmp2 = useIsUserProfileObfuscatedDefault(id);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  return id !== id.id && !tmp2;
});
const result = size.fileFinishedImporting("modules/user_profile/hooks/useShouldShowMutualInfo.tsx");

export default tmp2;
