// Module ID: 12097
// Function ID: 12098
// Name: ReferralMessageUtils
// Dependencies: [4452, 7724, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 12097 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 4452 */;
import UserOfferStore from "UserOfferStore" /* 7724 */;

const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/referrals/ReferralMessageUtils.tsx");

export const canOpenPremiumPlanDirectlyForReferralTrial = function canOpenPremiumPlanDirectlyForReferralTrial() {
  const premiumTypeSubscription = SubscriptionStore.getPremiumTypeSubscription(false);
  let result = SubscriptionStore.hasFetchedSubscriptions();
  if (result) {
    result = null == premiumTypeSubscription;
  }
  if (result) {
    result = !isFetchingOfferResult;
  }
  return result;
};
