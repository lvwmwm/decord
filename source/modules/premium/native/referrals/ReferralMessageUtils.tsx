// Module ID: 11000
// Function ID: 11001
// Name: canOpenPremiumPlanDirectlyForReferralTrial
// Dependencies: [3841, 6208, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 11000 (canOpenPremiumPlanDirectlyForReferralTrial)
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
