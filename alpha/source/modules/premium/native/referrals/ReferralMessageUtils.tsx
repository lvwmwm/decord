// Module ID: 13474
// Function ID: 13475
// Name: ReferralMessageUtils
// Dependencies: [2176, 7706, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 13474 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 2176 */;
import UserOfferStore from "UserOfferStore" /* 7706 */;
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
