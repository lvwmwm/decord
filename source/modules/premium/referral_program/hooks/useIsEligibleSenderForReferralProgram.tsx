// Module ID: 7987
// Function ID: 7988
// Name: useIsEligibleSenderForReferralProgram
// Dependencies: [7386, 7988, 586, 2]
// Exports: useIsEligibleSenderForReferralProgram

// Module 7987 (useIsEligibleSenderForReferralProgram)
import initialize from "initialize" /* 586 */;
import useMaybeFetchReferralsRemaining from "useMaybeFetchReferralsRemaining" /* 7988 */;
import closure_2 from "emitChanges" /* 7386 */;

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
