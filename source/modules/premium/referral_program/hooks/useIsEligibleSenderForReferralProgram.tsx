// Module ID: 8056
// Function ID: 8057
// Name: useIsEligibleSenderForReferralProgram
// Dependencies: [7452, 8057, 504, 2]
// Exports: useIsEligibleSenderForReferralProgram

// Module 8056 (useIsEligibleSenderForReferralProgram)
import initialize from "initialize" /* 504 */;
import useMaybeFetchReferralsRemaining from "useMaybeFetchReferralsRemaining" /* 8057 */;
import closure_2 from "emitChanges" /* 7452 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx");

export const useIsEligibleSenderForReferralProgram = function useIsEligibleSenderForReferralProgram(result) {
  let flag = result;
  if (result === undefined) {
    flag = false;
  }
  const maybeFetchReferralsRemaining = useMaybeFetchReferralsRemaining.useMaybeFetchReferralsRemaining(flag);
  const obj = useMaybeFetchReferralsRemaining;
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => isEligibleToSendReferrals.getIsEligibleToSendReferrals());
};
