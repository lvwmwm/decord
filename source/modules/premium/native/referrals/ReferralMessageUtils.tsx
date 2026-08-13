// Module ID: 11264
// Function ID: 11265
// Name: canOpenPremiumPlanDirectlyForReferralTrial
// Dependencies: [4013, 6961, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 11264 (canOpenPremiumPlanDirectlyForReferralTrial)
import reset from "reset";
import emitChanges from "emitChanges";

let result = require("set").fileFinishedImporting("modules/premium/native/referrals/ReferralMessageUtils.tsx");

export const canOpenPremiumPlanDirectlyForReferralTrial = function canOpenPremiumPlanDirectlyForReferralTrial() {
  const premiumTypeSubscription = reset.getPremiumTypeSubscription(false);
  let result = reset.hasFetchedSubscriptions();
  if (result) {
    result = null == premiumTypeSubscription;
  }
  if (result) {
    result = !isFetchingOfferResult;
  }
  return result;
};
