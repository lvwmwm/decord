// Module ID: 11327
// Function ID: 11328
// Name: ReferralMessageUtils
// Dependencies: [4734, 7166, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 11327 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 4734 */;
import UserOfferStore from "UserOfferStore" /* 7166 */;
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
