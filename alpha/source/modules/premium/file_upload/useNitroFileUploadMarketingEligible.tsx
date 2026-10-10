// Module ID: 17674
// Function ID: 17675
// Name: useNitroFileUploadMarketingEligible
// Dependencies: [1392, 558, 10535, 7760, 2]

// Module 17674 (useNitroFileUploadMarketingEligible)
import PremiumConstants from "PremiumConstants" /* 1392 */;
import NitroFileUploadExperiments from "NitroFileUploadExperiments" /* 7760 */;
import useIsPremiumSubscriber from "useIsPremiumSubscriber" /* 10535 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const PremiumTypes = PremiumConstants.PremiumTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useNitroFileUploadAnnouncementEligible(arg0) {
  const obj = useIsPremiumSubscriber;
  let isPremiumSubscriber = obj.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  const obj2 = NitroFileUploadExperiments;
  if (isPremiumSubscriber) {
    isPremiumSubscriber = obj2.useNitroFileUploadRolloutEnabled(arg0);
  }
  return isPremiumSubscriber;
}) : (function useNitroFileUploadAnnouncementEligible(arg0) {
  const obj = useIsPremiumSubscriber;
  let isPremiumSubscriber = obj.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  const obj2 = NitroFileUploadExperiments;
  if (isPremiumSubscriber) {
    isPremiumSubscriber = obj2.useNitroFileUploadRolloutEnabled(arg0);
  }
  return isPremiumSubscriber;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useNitroFileUploadUpsellEligible(arg0) {
  const obj = useIsPremiumSubscriber;
  const isPremiumSubscriber = obj.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  const obj2 = NitroFileUploadExperiments;
  const tmp2 = obj2.useNonNitroFileUploadMarketingEnabled(arg0) && !isPremiumSubscriber;
  return tmp2;
}) : (function useNitroFileUploadUpsellEligible(arg0) {
  const obj = useIsPremiumSubscriber;
  const isPremiumSubscriber = obj.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  const obj2 = NitroFileUploadExperiments;
  const tmp2 = obj2.useNonNitroFileUploadMarketingEnabled(arg0) && !isPremiumSubscriber;
  return tmp2;
});
const result = size.fileFinishedImporting("modules/premium/file_upload/useNitroFileUploadMarketingEligible.tsx");

export const useNitroFileUploadAnnouncementEligible = tmp2;
export const useNitroFileUploadUpsellEligible = tmp3;
