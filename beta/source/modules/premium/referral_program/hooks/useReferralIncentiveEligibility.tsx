// Module ID: 12979
// Function ID: 12980
// Name: useReferralIncentiveEligibility
// Dependencies: [4494, 7500, 12977, 504, 2]
// Exports: useReferralIncentiveEligibility

// Module 12979 (useReferralIncentiveEligibility)
import get_initialized from "get initialized" /* 504 */;
import useIsEligibleSenderForReferralProgram from "useIsEligibleSenderForReferralProgram" /* 7500 */;
import PremiumReferralIncentivesExperiment from "PremiumReferralIncentivesExperiment" /* 12977 */;
import SubscriptionStore from "SubscriptionStore" /* 4494 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/referral_program/hooks/useReferralIncentiveEligibility.tsx");

export const useReferralIncentiveEligibility = function useReferralIncentiveEligibility(preventFetch) {
  let premiumTypeSubscription;
  let referralRewardType;
  let useAltReferralCardArt;
  let flag = preventFetch.preventFetch;
  const _location = preventFetch.location;
  if (flag === undefined) {
    flag = true;
  }
  const obj = useIsEligibleSenderForReferralProgram;
  const isEligibleSenderForReferralProgram = obj.useIsEligibleSenderForReferralProgram(flag);
  const obj2 = PremiumReferralIncentivesExperiment;
  const premiumReferralIncentivesVariant = obj2.usePremiumReferralIncentivesVariant(_location);
  ({ referralRewardType, useAltReferralCardArt } = premiumReferralIncentivesVariant);
  const items = [SubscriptionStore];
  const obj3 = get_initialized;
  const stateFromStores = obj3.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let tmp8 = true === isEligibleSenderForReferralProgram;
  const tmp6 = null != stateFromStores && !stateFromStores.isPurchasedExternally;
  const tmp7 = null != stateFromStores && stateFromStores.hasPremiumNitroMonthly;
  let isEligibleForIncentive = tmp8 && referralRewardType === tmp(12977).ReferralRewardType.ORBS;
  if (tmp8) {
    tmp8 = referralRewardType === tmp(12977).ReferralRewardType.DISCOUNT;
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
