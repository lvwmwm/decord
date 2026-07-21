// Module ID: 7422
// Function ID: 59649
// Name: useIsInReverseTrial
// Dependencies: []
// Exports: maybeShowReverseTrialFollowupUpsellModal, maybeShowReverseTrialInitialUpsellModal, useIsInReverseTrial, useReverseTrialDaysRemaining

// Module 7422 (useIsInReverseTrial)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/premium/ReverseTrialUtils.native.tsx");

export const useIsInReverseTrial = function useIsInReverseTrial() {
  const items = [closure_2];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
    let isOnReverseTrialResult;
    if (null != currentUser) {
      isOnReverseTrialResult = currentUser.isOnReverseTrial();
    }
    return null != isOnReverseTrialResult && isOnReverseTrialResult;
  });
};
export function useReverseTrialDaysRemaining() {
  return 0;
}
export function maybeShowReverseTrialInitialUpsellModal() {

}
export function maybeShowReverseTrialFollowupUpsellModal() {

}
