// Module ID: 7506
// Function ID: 7507
// Name: usePremiumTrialOffer
// Dependencies: [558, 7507, 2]
// Exports: usePremiumTrialOffer

// Module 7506 (usePremiumTrialOffer)
import useAndroidAndLegacyIOSPremiumTrialOfferCandidates from "useAndroidAndLegacyIOSPremiumTrialOfferCandidates" /* 7507 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/premium/hooks/usePremiumTrialOffer.android.tsx");

export const usePremiumTrialOffer = function usePremiumTrialOffer(arg0) {
  const obj = useAndroidAndLegacyIOSPremiumTrialOfferCandidates;
  return obj.useAndroidAndLegacyIOSPremiumTrialOfferCandidates(arg0);
};
