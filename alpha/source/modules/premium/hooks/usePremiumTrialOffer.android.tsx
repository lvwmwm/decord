// Module ID: 7163
// Function ID: 7164
// Name: usePremiumTrialOffer
// Dependencies: [558, 7164, 2]
// Exports: usePremiumTrialOffer

// Module 7163 (usePremiumTrialOffer)
import useAndroidAndLegacyIOSPremiumTrialOfferCandidates from "useAndroidAndLegacyIOSPremiumTrialOfferCandidates" /* 7164 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/premium/hooks/usePremiumTrialOffer.android.tsx");

export const usePremiumTrialOffer = function usePremiumTrialOffer(arg0) {
  const obj = useAndroidAndLegacyIOSPremiumTrialOfferCandidates;
  return obj.useAndroidAndLegacyIOSPremiumTrialOfferCandidates(arg0);
};
