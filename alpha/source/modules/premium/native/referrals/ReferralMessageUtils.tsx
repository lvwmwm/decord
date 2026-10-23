// Module ID: 12717
// Function ID: 12718
// Name: ReferralMessageUtils
// Dependencies: [2058, 7558, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 12717 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 2058 */;
import UserOfferStore from "UserOfferStore" /* 7558 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/premium/native/referrals/ReferralMessageUtils.tsx");

export const canOpenPremiumPlanDirectlyForReferralTrial = function canOpenPremiumPlanDirectlyForReferralTrial() {
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
};
