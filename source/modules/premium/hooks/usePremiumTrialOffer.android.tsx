// Module ID: 6222
// Function ID: 55653
// Name: usePremiumTrialOffer
// Dependencies: [6223, 2]
// Exports: usePremiumTrialOffer

// Module 6222 (usePremiumTrialOffer)
const result = require("set").fileFinishedImporting("modules/premium/hooks/usePremiumTrialOffer.android.tsx");

export const usePremiumTrialOffer = function usePremiumTrialOffer(arg0) {
  return require(6223) /* useGetTrialOffer */.useAndroidAndLegacyIOSPremiumTrialOfferCandidates(arg0);
};
