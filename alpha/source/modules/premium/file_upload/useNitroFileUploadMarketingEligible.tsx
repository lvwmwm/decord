// Module ID: 19003
// Function ID: 19004
// Name: useNitroFileUploadMarketingEligible
// Dependencies: [1386, 11380, 5070, 2]
// Exports: useNitroFileUploadAnnouncementEligible, useNitroFileUploadUpsellEligible

// Module 19003 (useNitroFileUploadMarketingEligible)
import PremiumConstants from "PremiumConstants" /* 1386 */;
import NitroFileUploadExperiments from "NitroFileUploadExperiments" /* 5070 */;
import useIsPremiumSubscriber from "useIsPremiumSubscriber" /* 11380 */;
import size from "module_2" /* 2 */;

const PremiumTypes = PremiumConstants.PremiumTypes;
const result = size.fileFinishedImporting("modules/premium/file_upload/useNitroFileUploadMarketingEligible.tsx");

export function useNitroFileUploadAnnouncementEligible(MainViewTooltipActionSheets) {
  const obj = useIsPremiumSubscriber;
  let isPremiumSubscriber = obj.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  const obj2 = NitroFileUploadExperiments;
  if (isPremiumSubscriber) {
    isPremiumSubscriber = obj2.useNitroFileUploadRolloutEnabled(MainViewTooltipActionSheets);
  }
  return isPremiumSubscriber;
}
export function useNitroFileUploadUpsellEligible(MainViewTooltipActionSheets) {
  const obj = useIsPremiumSubscriber;
  const isPremiumSubscriber = obj.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  const obj2 = NitroFileUploadExperiments;
  const tmp2 = obj2.useNonNitroFileUploadMarketingEnabled(MainViewTooltipActionSheets) && !isPremiumSubscriber;
  return tmp2;
}
