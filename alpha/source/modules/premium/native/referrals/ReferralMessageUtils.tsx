// Module ID: 12341
// Function ID: 12342
// Name: ReferralMessageUtils
// Dependencies: [2178, 8847, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 12341 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 2178 */;
import UserOfferStore from "UserOfferStore" /* 8847 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/premium/native/referrals/ReferralMessageUtils.tsx");

export function canOpenPremiumPlanDirectlyForReferralTrial() {
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
}
