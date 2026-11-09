// Module ID: 10036
// Function ID: 10037
// Name: getTrialCtaOverride
// Dependencies: [2171, 2]
// Exports: getTrialCtaOverride

// Module 10036 (getTrialCtaOverride)
import PremiumUtils from "PremiumUtils" /* 2171 */;
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
