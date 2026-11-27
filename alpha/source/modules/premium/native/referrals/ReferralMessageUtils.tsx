// Module ID: 12401
// Function ID: 12402
// Name: ReferralMessageUtils
// Dependencies: [2179, 9140, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 12401 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 2179 */;
import UserOfferStore from "UserOfferStore" /* 9140 */;
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
