// Module ID: 12212
// Function ID: 12213
// Name: ReferralMessageUtils
// Dependencies: [2177, 8727, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 12212 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 2177 */;
import UserOfferStore from "UserOfferStore" /* 8727 */;
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
