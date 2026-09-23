// Module ID: 12149
// Function ID: 12150
// Name: ReferralMessageUtils
// Dependencies: [4487, 7778, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 12149 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 4487 */;
import UserOfferStore from "UserOfferStore" /* 7778 */;

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
