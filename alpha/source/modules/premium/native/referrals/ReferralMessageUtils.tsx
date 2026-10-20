// Module ID: 12583
// Function ID: 12584
// Name: ReferralMessageUtils
// Dependencies: [2059, 7509, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 12583 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 2059 */;
import UserOfferStore from "UserOfferStore" /* 7509 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/premium/native/referrals/ReferralMessageUtils.tsx");

export const canOpenPremiumPlanDirectlyForReferralTrial = function canOpenPremiumPlanDirectlyForReferralTrial() {
  const premiumTypeSubscription = SubscriptionStore.getPremiumTypeSubscription(false);
  let result = SubscriptionStore.hasFetchedSubscriptions();
  const isFetchingOfferResult = UserOfferStore.isFetchingOffer();
  if (result) {
    result = null == premiumTypeSubscription;
  }
  if (result) {
    result = !isFetchingOfferResult;
  }
  return result;
};
