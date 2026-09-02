// Module ID: 7201
// Function ID: 7202
// Name: usePremiumTrialOffer
// Dependencies: [7202, 2]
// Exports: usePremiumTrialOffer

// Module 7201 (usePremiumTrialOffer)
import set from "set" /* 2 */;
import useAndroidAndLegacyIOSPremiumTrialOfferCandidates from "useAndroidAndLegacyIOSPremiumTrialOfferCandidates" /* 7202 */;

const result = set.fileFinishedImporting("modules/premium/hooks/usePremiumTrialOffer.android.tsx");

export const usePremiumTrialOffer = function usePremiumTrialOffer(arg0) {
  return useAndroidAndLegacyIOSPremiumTrialOfferCandidates.useAndroidAndLegacyIOSPremiumTrialOfferCandidates(arg0);
};
