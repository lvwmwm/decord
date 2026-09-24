// Module ID: 12156
// Function ID: 12157
// Name: ReferralMessageUtils
// Dependencies: [4489, 7780, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 12156 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 4489 */;
import UserOfferStore from "UserOfferStore" /* 7780 */;

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
