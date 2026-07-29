// Module ID: 7837
// Function ID: 7838
// Name: useIsEligibleSenderForReferralProgram
// Dependencies: [6212, 7838, 589, 2]
// Exports: useIsEligibleSenderForReferralProgram

// Module 7837 (useIsEligibleSenderForReferralProgram)
import emitChanges from "emitChanges";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx");

export const useIsEligibleSenderForReferralProgram = function useIsEligibleSenderForReferralProgram(result) {
  let flag = result;
  if (result === undefined) {
    flag = false;
  }
  const maybeFetchReferralsRemaining = require(7838) /* useMaybeFetchReferralsRemaining */.useMaybeFetchReferralsRemaining(flag);
  const obj = require(7838) /* useMaybeFetchReferralsRemaining */;
  const items = [emitChanges];
  return require(589) /* initialize */.useStateFromStores(items, () => isEligibleToSendReferrals.getIsEligibleToSendReferrals());
};
