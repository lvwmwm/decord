// Module ID: 8228
// Function ID: 8229
// Name: useIsEligibleSenderForReferralProgram
// Dependencies: [6984, 8229, 589, 2]
// Exports: useIsEligibleSenderForReferralProgram

// Module 8228 (useIsEligibleSenderForReferralProgram)
import emitChanges from "emitChanges";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx");

export const useIsEligibleSenderForReferralProgram = function useIsEligibleSenderForReferralProgram(result) {
  let flag = result;
  if (result === undefined) {
    flag = false;
  }
  const maybeFetchReferralsRemaining = require(8229) /* useMaybeFetchReferralsRemaining */.useMaybeFetchReferralsRemaining(flag);
  const obj = require(8229) /* useMaybeFetchReferralsRemaining */;
  const items = [emitChanges];
  return require(589) /* initialize */.useStateFromStores(items, () => isEligibleToSendReferrals.getIsEligibleToSendReferrals());
};
