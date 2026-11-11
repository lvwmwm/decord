// Module ID: 14010
// Function ID: 14011
// Name: ReferralMessageUtils
// Dependencies: [2176, 9232, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 14010 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 2176 */;
import UserOfferStore from "UserOfferStore" /* 9232 */;
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
