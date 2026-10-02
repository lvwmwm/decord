// Module ID: 7513
// Function ID: 7514
// Name: ReverseTrialUtils
// Dependencies: [1378, 558, 576, 504, 2]
// Exports: maybeShowReverseTrialFollowupUpsellModal, maybeShowReverseTrialInitialUpsellModal, useReverseTrialDaysRemaining

// Module 7513 (ReverseTrialUtils)
import react from "react" /* 576 */;
import UserStore from "UserStore" /* 1378 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let currentUser;

let tmp;
const get_initialized = tmp(504);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      currentUser = currentUser.getCurrentUser();
      let flag;
      if (currentUser != null) {
        flag = currentUser.isOnReverseTrial();
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
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
  const items = [UserStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.isOnReverseTrial();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
});
const result = size.fileFinishedImporting("modules/premium/ReverseTrialUtils.native.tsx");

export const useIsInReverseTrial = tmp2;
export function useReverseTrialDaysRemaining() {
  return 0;
}
export function maybeShowReverseTrialInitialUpsellModal() {

}
export function maybeShowReverseTrialFollowupUpsellModal() {

}
