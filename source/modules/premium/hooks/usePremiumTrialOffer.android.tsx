// Module ID: 7120
// Function ID: 7121
// Name: usePremiumTrialOffer
// Dependencies: [7121, 2]
// Exports: usePremiumTrialOffer

// Module 7120 (usePremiumTrialOffer)
import set from "set" /* 2 */;
import useAndroidAndLegacyIOSPremiumTrialOfferCandidates from "useAndroidAndLegacyIOSPremiumTrialOfferCandidates" /* 7121 */;

const result = set.fileFinishedImporting("modules/premium/hooks/usePremiumTrialOffer.android.tsx");

export const usePremiumTrialOffer = function usePremiumTrialOffer(arg0) {
  return useAndroidAndLegacyIOSPremiumTrialOfferCandidates.useAndroidAndLegacyIOSPremiumTrialOfferCandidates(arg0);
};
