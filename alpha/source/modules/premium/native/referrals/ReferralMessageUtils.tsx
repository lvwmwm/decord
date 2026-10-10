// Module ID: 11368
// Function ID: 11369
// Name: ReferralMessageUtils
// Dependencies: [4775, 7172, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 11368 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 4775 */;
import UserOfferStore from "UserOfferStore" /* 7172 */;
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
