// Module ID: 11278
// Function ID: 11279
// Name: ReferralMessageUtils
// Dependencies: [4491, 6865, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 11278 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 4491 */;
import UserOfferStore from "UserOfferStore" /* 6865 */;

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
