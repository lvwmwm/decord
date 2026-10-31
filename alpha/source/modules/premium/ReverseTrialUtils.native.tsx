// Module ID: 8533
// Function ID: 8534
// Name: ReverseTrialUtils
// Dependencies: [1383, 504, 2]
// Exports: maybeShowReverseTrialFollowupUpsellModal, maybeShowReverseTrialInitialUpsellModal, useIsInReverseTrial, useReverseTrialDaysRemaining

// Module 8533 (ReverseTrialUtils)
import get_initialized from "get initialized" /* 504 */;
import UserStore from "UserStore" /* 1383 */;
import size from "module_2" /* 2 */;

let currentUser;

const result = size.fileFinishedImporting("modules/premium/ReverseTrialUtils.native.tsx");

export function useIsInReverseTrial() {
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
}
export function useReverseTrialDaysRemaining() {
  return 0;
}
export function maybeShowReverseTrialInitialUpsellModal() {

}
export function maybeShowReverseTrialFollowupUpsellModal() {

}
