// Module ID: 8315
// Function ID: 8316
// Name: useIsEligibleSenderForReferralProgram
// Dependencies: [7059, 8316, 589, 2]
// Exports: useIsEligibleSenderForReferralProgram

// Module 8315 (useIsEligibleSenderForReferralProgram)
import initialize from "initialize" /* 589 */;
import useMaybeFetchReferralsRemaining from "useMaybeFetchReferralsRemaining" /* 8316 */;
import closure_2 from "emitChanges" /* 7059 */;

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
