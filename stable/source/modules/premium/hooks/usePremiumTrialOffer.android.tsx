// Module ID: 7165
// Function ID: 7166
// Name: usePremiumTrialOffer
// Dependencies: [558, 7166, 2]
// Exports: usePremiumTrialOffer

// Module 7165 (usePremiumTrialOffer)
import useAndroidAndLegacyIOSPremiumTrialOfferCandidates from "useAndroidAndLegacyIOSPremiumTrialOfferCandidates" /* 7166 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/premium/hooks/usePremiumTrialOffer.android.tsx");

export const usePremiumTrialOffer = function usePremiumTrialOffer(arg0) {
  const obj = useAndroidAndLegacyIOSPremiumTrialOfferCandidates;
  return obj.useAndroidAndLegacyIOSPremiumTrialOfferCandidates(arg0);
};
