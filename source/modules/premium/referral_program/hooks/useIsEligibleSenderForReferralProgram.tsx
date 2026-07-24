// Module ID: 7831
// Function ID: 61817
// Name: useIsEligibleSenderForReferralProgram
// Dependencies: [6689, 7832, 566, 2]
// Exports: useIsEligibleSenderForReferralProgram

// Module 7831 (useIsEligibleSenderForReferralProgram)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx");

export const useIsEligibleSenderForReferralProgram = function useIsEligibleSenderForReferralProgram(result) {
  let flag = result;
  if (result === undefined) {
    flag = false;
  }
  const maybeFetchReferralsRemaining = require(7832) /* useMaybeFetchReferralsRemaining */.useMaybeFetchReferralsRemaining(flag);
  const obj = require(7832) /* useMaybeFetchReferralsRemaining */;
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getIsEligibleToSendReferrals());
};
