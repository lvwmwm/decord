// Module ID: 15182
// Function ID: 15183
// Name: useReferralIncentiveEligibility
// Dependencies: [2176, 9240, 15179, 504, 2]
// Exports: useReferralIncentiveEligibility

// Module 15182 (useReferralIncentiveEligibility)
import get_initialized from "get initialized" /* 504 */;
import useIsEligibleSenderForReferralProgram from "useIsEligibleSenderForReferralProgram" /* 9240 */;
import PremiumReferralIncentivesExperiment from "PremiumReferralIncentivesExperiment" /* 15179 */;
import SubscriptionStore from "SubscriptionStore" /* 2176 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/referral_program/hooks/useReferralIncentiveEligibility.tsx");

export function useReferralIncentiveEligibility(preventFetch) {
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
  let isEligibleForIncentive = tmp8 && referralRewardType === tmp(15179).ReferralRewardType.ORBS;
  if (tmp8) {
    tmp8 = referralRewardType === tmp(15179).ReferralRewardType.DISCOUNT;
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
}
