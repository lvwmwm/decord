// Module ID: 11292
// Function ID: 11293
// Name: ReferralMessageUtils
// Dependencies: [4494, 6870, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 11292 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 4494 */;
import UserOfferStore from "UserOfferStore" /* 6870 */;
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
