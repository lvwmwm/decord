// Module ID: 8401
// Function ID: 8402
// Name: useIsEligibleSenderForReferralProgram
// Dependencies: [7780, 8402, 504, 2]
// Exports: useIsEligibleSenderForReferralProgram

// Module 8401 (useIsEligibleSenderForReferralProgram)
import initialize from "initialize" /* 504 */;
import useMaybeFetchReferralsRemaining from "useMaybeFetchReferralsRemaining" /* 8402 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7780 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx");

export const useIsEligibleSenderForReferralProgram = function useIsEligibleSenderForReferralProgram(flag) {
  if (flag === undefined) {
    flag = false;
  }
  const maybeFetchReferralsRemaining = useMaybeFetchReferralsRemaining.useMaybeFetchReferralsRemaining(flag);
  const items = [ReferralTrialStore];
  return initialize.useStateFromStores(items, () => isEligibleToSendReferrals.getIsEligibleToSendReferrals());
};
