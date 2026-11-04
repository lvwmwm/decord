// Module ID: 13462
// Function ID: 13463
// Name: ReferralMessageUtils
// Dependencies: [2181, 7770, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 13462 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 2181 */;
import UserOfferStore from "UserOfferStore" /* 7770 */;
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
