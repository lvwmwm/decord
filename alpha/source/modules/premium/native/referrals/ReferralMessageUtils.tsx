// Module ID: 12566
// Function ID: 12567
// Name: ReferralMessageUtils
// Dependencies: [2059, 7506, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 12566 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 2059 */;
import UserOfferStore from "UserOfferStore" /* 7506 */;
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
