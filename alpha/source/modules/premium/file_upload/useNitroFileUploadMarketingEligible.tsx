// Module ID: 19648
// Function ID: 19649
// Name: useNitroFileUploadMarketingEligible
// Dependencies: [1387, 15358, 8781, 2]
// Exports: useNitroFileUploadAnnouncementEligible, useNitroFileUploadUpsellEligible

// Module 19648 (useNitroFileUploadMarketingEligible)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import NitroFileUploadExperiments from "NitroFileUploadExperiments" /* 8781 */;
import useIsPremiumSubscriber from "useIsPremiumSubscriber" /* 15358 */;
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
