// Module ID: 9375
// Function ID: 9376
// Name: ReverseTrialUtils
// Dependencies: [1387, 504, 2]
// Exports: maybeShowReverseTrialFollowupUpsellModal, maybeShowReverseTrialInitialUpsellModal, useIsInReverseTrial, useReverseTrialDaysRemaining

// Module 9375 (ReverseTrialUtils)
import get_initialized from "get initialized" /* 504 */;
import UserStore from "UserStore" /* 1387 */;
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
