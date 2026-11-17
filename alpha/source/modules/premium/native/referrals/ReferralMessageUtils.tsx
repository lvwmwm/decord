// Module ID: 12970
// Function ID: 12971
// Name: ReferralMessageUtils
// Dependencies: [2179, 9307, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 12970 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 2179 */;
import UserOfferStore from "UserOfferStore" /* 9307 */;
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
