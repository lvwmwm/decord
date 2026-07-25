// Module ID: 10941
// Function ID: 85014
// Name: canOpenPremiumPlanDirectlyForReferralTrial
// Dependencies: [3783, 6157, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 10941 (canOpenPremiumPlanDirectlyForReferralTrial)
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
