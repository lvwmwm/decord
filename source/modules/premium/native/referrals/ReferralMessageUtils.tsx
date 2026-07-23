// Module ID: 10959
// Function ID: 85209
// Name: canOpenPremiumPlanDirectlyForReferralTrial
// Dependencies: [3782, 6688, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 10959 (canOpenPremiumPlanDirectlyForReferralTrial)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let result = require("set").fileFinishedImporting("modules/premium/native/referrals/ReferralMessageUtils.tsx");

export const canOpenPremiumPlanDirectlyForReferralTrial = function canOpenPremiumPlanDirectlyForReferralTrial() {
  const premiumTypeSubscription = _isNativeReflectConstruct.getPremiumTypeSubscription(false);
  let result = _isNativeReflectConstruct.hasFetchedSubscriptions();
  if (result) {
    result = null == premiumTypeSubscription;
  }
  if (result) {
    result = !isFetchingOfferResult;
  }
  return result;
};
