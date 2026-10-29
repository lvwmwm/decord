// Module ID: 13039
// Function ID: 13040
// Name: ReferralMessageUtils
// Dependencies: [2056, 7618, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 13039 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 2056 */;
import UserOfferStore from "UserOfferStore" /* 7618 */;
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
