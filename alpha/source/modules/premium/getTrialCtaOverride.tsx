// Module ID: 9565
// Function ID: 9566
// Name: getTrialCtaOverride
// Dependencies: [9566, 4483, 2]
// Exports: getTrialCtaOverride

// Module 9565 (getTrialCtaOverride)
import ReferralTrialCtaExperiment from "ReferralTrialCtaExperiment" /* 9566 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/premium/getTrialCtaOverride.tsx");

export const getTrialCtaOverride = function getTrialCtaOverride(premiumTrialOffer, TIER_2) {
  let result = null;
  if (null != TIER_2) {
    let isReferralTrial;
    if (premiumTrialOffer != null) {
      isReferralTrial = premiumTrialOffer.isReferralTrial;
    }
    result = null;
    if (true === isReferralTrial) {
      result = null;
      if (obj.getReferralTrialCtaExperimentEnabled()) {
        result = tmp4(4483).formatTrialCtaIntervalDurationFromTrialOffer(premiumTrialOffer, TIER_2);
        const tmp4Result = tmp4(4483);
      }
      obj = ReferralTrialCtaExperiment;
      tmp4 = require;
    }
  }
  return result;
};
