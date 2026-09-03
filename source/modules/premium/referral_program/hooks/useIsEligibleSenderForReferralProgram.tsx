// Module ID: 7977
// Function ID: 7978
// Name: useIsEligibleSenderForReferralProgram
// Dependencies: [7207, 7978, 586, 2]
// Exports: useIsEligibleSenderForReferralProgram

// Module 7977 (useIsEligibleSenderForReferralProgram)
import initialize from "initialize" /* 586 */;
import useMaybeFetchReferralsRemaining from "useMaybeFetchReferralsRemaining" /* 7978 */;
import closure_2 from "emitChanges" /* 7207 */;

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
