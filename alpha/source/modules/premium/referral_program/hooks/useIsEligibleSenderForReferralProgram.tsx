// Module ID: 8516
// Function ID: 8517
// Name: useIsEligibleSenderForReferralProgram
// Dependencies: [7625, 8517, 504, 2]
// Exports: useIsEligibleSenderForReferralProgram

// Module 8516 (useIsEligibleSenderForReferralProgram)
import get_initialized from "get initialized" /* 504 */;
import useMaybeFetchReferralsRemaining from "useMaybeFetchReferralsRemaining" /* 8517 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7625 */;
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
