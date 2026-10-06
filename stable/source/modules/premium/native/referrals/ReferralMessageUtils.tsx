// Module ID: 11166
// Function ID: 11167
// Name: ReferralMessageUtils
// Dependencies: [4497, 6874, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 11166 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 4497 */;
import UserOfferStore from "UserOfferStore" /* 6874 */;
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
