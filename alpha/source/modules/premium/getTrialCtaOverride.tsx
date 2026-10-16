// Module ID: 9639
// Function ID: 9640
// Name: getTrialCtaOverride
// Dependencies: [9640, 4828, 2]
// Exports: getTrialCtaOverride

// Module 9639 (getTrialCtaOverride)
import ReferralTrialCtaExperiment from "ReferralTrialCtaExperiment" /* 9640 */;
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
      const obj = ReferralTrialCtaExperiment;
      const tmp4 = require;
      if (obj.getReferralTrialCtaExperimentEnabled()) {
        const tmp4Result = tmp4(4828);
        result = tmp4Result.formatTrialCtaIntervalDurationFromTrialOffer(premiumTrialOffer, TIER_2);
      }
    }
  }
  return result;
};
