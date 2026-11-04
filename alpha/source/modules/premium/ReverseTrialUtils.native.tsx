// Module ID: 8674
// Function ID: 8675
// Name: ReverseTrialUtils
// Dependencies: [1385, 504, 2]
// Exports: maybeShowReverseTrialFollowupUpsellModal, maybeShowReverseTrialInitialUpsellModal, useIsInReverseTrial, useReverseTrialDaysRemaining

// Module 8674 (ReverseTrialUtils)
import get_initialized from "get initialized" /* 504 */;
import UserStore from "UserStore" /* 1385 */;
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
