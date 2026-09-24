// Module ID: 13808
// Function ID: 13809
// Name: useReferralIncentiveEligibility
// Dependencies: [4489, 8405, 13807, 504, 2]
// Exports: useReferralIncentiveEligibility

// Module 13808 (useReferralIncentiveEligibility)
import initialize from "initialize" /* 504 */;
import useIsEligibleSenderForReferralProgram from "useIsEligibleSenderForReferralProgram" /* 8405 */;
import PremiumReferralIncentivesExperiment from "PremiumReferralIncentivesExperiment" /* 13807 */;
import SubscriptionStore from "SubscriptionStore" /* 4489 */;

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
    isEligibleForIncentive = referralRewardType === tmp(13807).ReferralRewardType.ORBS;
  }
  if (tmp8) {
    tmp8 = referralRewardType === tmp(13807).ReferralRewardType.DISCOUNT;
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
