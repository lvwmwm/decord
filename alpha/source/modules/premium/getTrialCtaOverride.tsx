// Module ID: 8870
// Function ID: 8871
// Name: getTrialCtaOverride
// Dependencies: [8871, 4518, 2]
// Exports: getTrialCtaOverride

// Module 8870 (getTrialCtaOverride)
import ReferralTrialCtaExperiment from "ReferralTrialCtaExperiment" /* 8871 */;
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
        result = tmp4(4518).formatTrialCtaIntervalDurationFromTrialOffer(premiumTrialOffer, TIER_2);
        const tmp4Result = tmp4(4518);
      }
      obj = ReferralTrialCtaExperiment;
      tmp4 = require;
    }
  }
  return result;
};
