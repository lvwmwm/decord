// Module ID: 12435
// Function ID: 12436
// Name: ReferralMessageUtils
// Dependencies: [4831, 7389, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 12435 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 4831 */;
import UserOfferStore from "UserOfferStore" /* 7389 */;
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
