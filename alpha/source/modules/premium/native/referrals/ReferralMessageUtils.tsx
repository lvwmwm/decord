// Module ID: 13226
// Function ID: 13227
// Name: ReferralMessageUtils
// Dependencies: [2052, 7630, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 13226 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 2052 */;
import UserOfferStore from "UserOfferStore" /* 7630 */;
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
