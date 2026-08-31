// Module ID: 7160
// Function ID: 7161
// Name: usePremiumTrialOffer
// Dependencies: [7161, 2]
// Exports: usePremiumTrialOffer

// Module 7160 (usePremiumTrialOffer)
import set from "set" /* 2 */;
import useAndroidAndLegacyIOSPremiumTrialOfferCandidates from "useAndroidAndLegacyIOSPremiumTrialOfferCandidates" /* 7161 */;

const result = set.fileFinishedImporting("modules/premium/hooks/usePremiumTrialOffer.android.tsx");

export const usePremiumTrialOffer = function usePremiumTrialOffer(arg0) {
  return useAndroidAndLegacyIOSPremiumTrialOfferCandidates.useAndroidAndLegacyIOSPremiumTrialOfferCandidates(arg0);
};
