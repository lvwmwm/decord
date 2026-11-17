// Module ID: 9316
// Function ID: 9317
// Name: useIsEligibleSenderForReferralProgram
// Dependencies: [9302, 9317, 504, 2]
// Exports: useIsEligibleSenderForReferralProgram

// Module 9316 (useIsEligibleSenderForReferralProgram)
import get_initialized from "get initialized" /* 504 */;
import useMaybeFetchReferralsRemaining from "useMaybeFetchReferralsRemaining" /* 9317 */;
import ReferralTrialStore from "ReferralTrialStore" /* 9302 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx");

export function useIsEligibleSenderForReferralProgram(flag) {
  let isEligibleToSendReferrals;
  if (flag === undefined) {
    flag = false;
  }
  const obj = useMaybeFetchReferralsRemaining;
  const maybeFetchReferralsRemaining = obj.useMaybeFetchReferralsRemaining(flag);
  const items = [ReferralTrialStore];
  const obj2 = get_initialized;
  return obj2.useStateFromStores(items, () => isEligibleToSendReferrals.getIsEligibleToSendReferrals());
}
