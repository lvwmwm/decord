// Module ID: 12244
// Function ID: 12245
// Name: ReferralMessageUtils
// Dependencies: [2178, 8998, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 12244 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 2178 */;
import UserOfferStore from "UserOfferStore" /* 8998 */;
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
