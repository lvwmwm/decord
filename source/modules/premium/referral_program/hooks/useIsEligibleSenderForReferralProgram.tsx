// Module ID: 8203
// Function ID: 8204
// Name: useIsEligibleSenderForReferralProgram
// Dependencies: [6957, 8204, 589, 2]
// Exports: useIsEligibleSenderForReferralProgram

// Module 8203 (useIsEligibleSenderForReferralProgram)
import emitChanges from "emitChanges";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx");

export const useIsEligibleSenderForReferralProgram = function useIsEligibleSenderForReferralProgram(result) {
  let flag = result;
  if (result === undefined) {
    flag = false;
  }
  const maybeFetchReferralsRemaining = require(8204) /* useMaybeFetchReferralsRemaining */.useMaybeFetchReferralsRemaining(flag);
  const obj = require(8204) /* useMaybeFetchReferralsRemaining */;
  const items = [emitChanges];
  return require(589) /* initialize */.useStateFromStores(items, () => isEligibleToSendReferrals.getIsEligibleToSendReferrals());
};
