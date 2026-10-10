// Module ID: 8237
// Function ID: 8238
// Name: useGameProfileObscured
// Dependencies: [1390, 6042, 558, 576, 504, 2]
// Exports: isGameProfileObscured

// Module 8237 (useGameProfileObscured)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import utils from "utils" /* 6042 */;
import UserStore from "UserStore" /* 1390 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let currentUser;

function isGameProfileObscured(game, nsfwAllowed) {
  let result = null != game && false === nsfwAllowed;
  if (result) {
    const obj = utils;
    result = obj.isAgeRestrictedContentClassification(game.contentClassification);
  }
  return result;
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameProfileObscured(contentClassification) {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      currentUser = currentUser.getCurrentUser();
      let nsfwAllowed;
      if (currentUser != null) {
        nsfwAllowed = currentUser.nsfwAllowed;
      }
      return nsfwAllowed;
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
  if (cResult[2] === contentClassification) {
    let tmp8;
    if (cResult[3] === stateFromStores) {
      tmp8 = cResult[4];
    }
    return tmp8;
  }
  let result = null != contentClassification && false === stateFromStores;
  if (result) {
    const tmpResult2 = utils;
    result = tmpResult2.isAgeRestrictedContentClassification(contentClassification.contentClassification);
  }
  cResult[2] = contentClassification;
  cResult[3] = stateFromStores;
  cResult[4] = result;
  tmp8 = result;
}) : (function useGameProfileObscured(contentClassification) {
  get_initialized;
  [][0] = UserStore;
  let result = null != contentClassification;
  if (result) {
    result = false === tmp4;
  }
  if (result) {
    const tmpResult = utils;
    result = tmpResult.isAgeRestrictedContentClassification(contentClassification.contentClassification);
  }
  return result;
});
let result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileObscured.tsx");

export default tmp2;
export { isGameProfileObscured };
