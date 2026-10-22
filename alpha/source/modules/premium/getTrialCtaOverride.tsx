// Module ID: 9778
// Function ID: 9779
// Name: getTrialCtaOverride
// Dependencies: [9779, 2053, 2]
// Exports: getTrialCtaOverride

// Module 9778 (getTrialCtaOverride)
import ReferralTrialCtaExperiment from "ReferralTrialCtaExperiment" /* 9779 */;
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
        const tmp4Result = tmp4(2053);
        result = tmp4Result.formatTrialCtaIntervalDurationFromTrialOffer(premiumTrialOffer, TIER_2);
      }
    }
  }
  return result;
};
