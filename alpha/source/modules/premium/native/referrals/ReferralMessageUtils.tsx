// Module ID: 12698
// Function ID: 12699
// Name: ReferralMessageUtils
// Dependencies: [2058, 7545, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 12698 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 2058 */;
import UserOfferStore from "UserOfferStore" /* 7545 */;
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
