// Module ID: 10045
// Function ID: 10046
// Name: getTrialCtaOverride
// Dependencies: [2176, 2]
// Exports: getTrialCtaOverride

// Module 10045 (getTrialCtaOverride)
import PremiumUtils from "PremiumUtils" /* 2176 */;
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
