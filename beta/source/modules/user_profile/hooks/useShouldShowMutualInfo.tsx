// Module ID: 13326
// Function ID: 13327
// Name: useShouldShowMutualInfo
// Dependencies: [1376, 558, 568, 504, 13327, 2]

// Module 13326 (useShouldShowMutualInfo)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import useIsUserProfileObfuscatedDefault from "useIsUserProfileObfuscated" /* 13327 */;
import UserStore from "UserStore" /* 1376 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useShouldShowMutualInfo.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  const cResult = c.c(2);
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
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  id = undefined;
  const tmpResult = initialize;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp8 = useIsUserProfileObfuscatedDefault(id);
  return id !== id.id && !useIsUserProfileObfuscatedDefault(id);
}) : ((id) => {
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp2 = useIsUserProfileObfuscatedDefault(id);
  return id !== id.id && !useIsUserProfileObfuscatedDefault(id);
});
