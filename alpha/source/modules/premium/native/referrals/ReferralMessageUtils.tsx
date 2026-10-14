// Module ID: 12202
// Function ID: 12203
// Name: ReferralMessageUtils
// Dependencies: [4777, 7179, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 12202 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 4777 */;
import UserOfferStore from "UserOfferStore" /* 7179 */;
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
