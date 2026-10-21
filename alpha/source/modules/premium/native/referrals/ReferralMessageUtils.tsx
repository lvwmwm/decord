// Module ID: 12647
// Function ID: 12648
// Name: ReferralMessageUtils
// Dependencies: [2058, 7537, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 12647 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 2058 */;
import UserOfferStore from "UserOfferStore" /* 7537 */;
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
