// Module ID: 13799
// Function ID: 13800
// Name: useReferralIncentiveEligibility
// Dependencies: [4487, 8401, 13798, 504, 2]
// Exports: useReferralIncentiveEligibility

// Module 13799 (useReferralIncentiveEligibility)
import initialize from "initialize" /* 504 */;
import useIsEligibleSenderForReferralProgram from "useIsEligibleSenderForReferralProgram" /* 8401 */;
import PremiumReferralIncentivesExperiment from "PremiumReferralIncentivesExperiment" /* 13798 */;
import SubscriptionStore from "SubscriptionStore" /* 4487 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/referral_program/hooks/useReferralIncentiveEligibility.tsx");

export const useReferralIncentiveEligibility = function useReferralIncentiveEligibility(preventFetch) {
  let flag = preventFetch.preventFetch;
  if (flag === undefined) {
    flag = true;
  }
  const isEligibleSenderForReferralProgram = useIsEligibleSenderForReferralProgram.useIsEligibleSenderForReferralProgram(flag);
  const premiumReferralIncentivesVariant = PremiumReferralIncentivesExperiment.usePremiumReferralIncentivesVariant(preventFetch.location);
  ({ referralRewardType, useAltReferralCardArt } = premiumReferralIncentivesVariant);
  const items = [SubscriptionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let tmp8 = true === isEligibleSenderForReferralProgram;
  let isEligibleForIncentive = tmp8;
  if (tmp8) {
    isEligibleForIncentive = referralRewardType === tmp(13798).ReferralRewardType.ORBS;
  }
  if (tmp8) {
    tmp8 = referralRewardType === tmp(13798).ReferralRewardType.DISCOUNT;
  }
  if (tmp8) {
    tmp8 = tmp6;
  }
  if (tmp8) {
    tmp8 = tmp7;
  }
  if (!isEligibleForIncentive) {
    isEligibleForIncentive = tmp8;
  }
  return { isEligibleForIncentive, referralRewardType, useAltReferralCardArt };
};
