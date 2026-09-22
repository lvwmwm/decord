// Module ID: 8161
// Function ID: 8162
// Name: useIsEligibleSenderForReferralProgram
// Dependencies: [7555, 8162, 504, 2]
// Exports: useIsEligibleSenderForReferralProgram

// Module 8161 (useIsEligibleSenderForReferralProgram)
import initialize from "initialize" /* 504 */;
import useMaybeFetchReferralsRemaining from "useMaybeFetchReferralsRemaining" /* 8162 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7555 */;

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
