// Module ID: 10958
// Function ID: 10959
// Name: getTrialCtaOverride
// Dependencies: [2174, 2]
// Exports: getTrialCtaOverride

// Module 10958 (getTrialCtaOverride)
import PremiumUtils from "PremiumUtils" /* 2174 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/premium/getTrialCtaOverride.tsx");

export function getTrialCtaOverride(premiumTrialOffer, TIER_2) {
  let result = null;
  if (null != TIER_2) {
    let isReferralTrial;
    if (premiumTrialOffer != null) {
      isReferralTrial = premiumTrialOffer.isReferralTrial;
    }
    result = null;
    if (true === isReferralTrial) {
      const obj = PremiumUtils;
      result = obj.formatTrialCtaIntervalDurationFromTrialOffer(premiumTrialOffer, TIER_2);
    }
  }
  return result;
}
