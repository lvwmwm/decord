// Module ID: 11370
// Function ID: 11371
// Name: ReferralMessageUtils
// Dependencies: [4775, 7168, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 11370 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 4775 */;
import UserOfferStore from "UserOfferStore" /* 7168 */;
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
