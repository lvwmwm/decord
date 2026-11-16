// Module ID: 13506
// Function ID: 13507
// Name: ReferralMessageUtils
// Dependencies: [2176, 7739, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 13506 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 2176 */;
import UserOfferStore from "UserOfferStore" /* 7739 */;
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
