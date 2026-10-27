// Module ID: 12771
// Function ID: 12772
// Name: ReferralMessageUtils
// Dependencies: [2055, 7561, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 12771 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 2055 */;
import UserOfferStore from "UserOfferStore" /* 7561 */;
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
