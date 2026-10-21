// Module ID: 7534
// Function ID: 7535
// Name: usePremiumTrialOffer
// Dependencies: [558, 7535, 2]
// Exports: usePremiumTrialOffer

// Module 7534 (usePremiumTrialOffer)
import useAndroidAndLegacyIOSPremiumTrialOfferCandidates from "useAndroidAndLegacyIOSPremiumTrialOfferCandidates" /* 7535 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/premium/hooks/usePremiumTrialOffer.android.tsx");

export const usePremiumTrialOffer = function usePremiumTrialOffer(arg0) {
  const obj = useAndroidAndLegacyIOSPremiumTrialOfferCandidates;
  return obj.useAndroidAndLegacyIOSPremiumTrialOfferCandidates(arg0);
};
