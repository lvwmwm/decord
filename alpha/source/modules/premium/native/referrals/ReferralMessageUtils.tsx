// Module ID: 13191
// Function ID: 13192
// Name: ReferralMessageUtils
// Dependencies: [2053, 7623, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 13191 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 2053 */;
import UserOfferStore from "UserOfferStore" /* 7623 */;
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
