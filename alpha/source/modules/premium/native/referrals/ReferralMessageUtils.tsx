// Module ID: 12343
// Function ID: 12344
// Name: ReferralMessageUtils
// Dependencies: [2178, 9097, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 12343 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 2178 */;
import UserOfferStore from "UserOfferStore" /* 9097 */;
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
