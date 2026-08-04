// Module ID: 7972
// Function ID: 7973
// Name: useIsEligibleSenderForReferralProgram
// Dependencies: [6824, 7973, 589, 2]
// Exports: useIsEligibleSenderForReferralProgram

// Module 7972 (useIsEligibleSenderForReferralProgram)
import emitChanges from "emitChanges";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx");

export const useIsEligibleSenderForReferralProgram = function useIsEligibleSenderForReferralProgram(result) {
  let flag = result;
  if (result === undefined) {
    flag = false;
  }
  const maybeFetchReferralsRemaining = require(7973) /* useMaybeFetchReferralsRemaining */.useMaybeFetchReferralsRemaining(flag);
  const obj = require(7973) /* useMaybeFetchReferralsRemaining */;
  const items = [emitChanges];
  return require(589) /* initialize */.useStateFromStores(items, () => isEligibleToSendReferrals.getIsEligibleToSendReferrals());
};
