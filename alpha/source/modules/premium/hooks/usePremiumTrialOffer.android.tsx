// Module ID: 6969
// Function ID: 6970
// Name: usePremiumTrialOffer
// Dependencies: [558, 6970, 2]
// Exports: usePremiumTrialOffer

// Module 6969 (usePremiumTrialOffer)
import useAndroidAndLegacyIOSPremiumTrialOfferCandidates from "useAndroidAndLegacyIOSPremiumTrialOfferCandidates" /* 6970 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/premium/hooks/usePremiumTrialOffer.android.tsx");

export const usePremiumTrialOffer = (arg0) => {
  const obj = useAndroidAndLegacyIOSPremiumTrialOfferCandidates;
  return obj.useAndroidAndLegacyIOSPremiumTrialOfferCandidates(arg0);
};
