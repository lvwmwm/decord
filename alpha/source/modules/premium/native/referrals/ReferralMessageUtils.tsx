// Module ID: 11497
// Function ID: 11498
// Name: ReferralMessageUtils
// Dependencies: [4524, 7066, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 11497 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 4524 */;
import UserOfferStore from "UserOfferStore" /* 7066 */;

const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/referrals/ReferralMessageUtils.tsx");

export const canOpenPremiumPlanDirectlyForReferralTrial = function canOpenPremiumPlanDirectlyForReferralTrial() {
  const premiumTypeSubscription = SubscriptionStore.getPremiumTypeSubscription(false);
  let result = SubscriptionStore.hasFetchedSubscriptions();
  if (result) {
    result = null == premiumTypeSubscription;
  }
  if (result) {
    result = !isFetchingOfferResult;
  }
  return result;
};
