// Module ID: 18980
// Function ID: 18981
// Name: useNitroFileUploadMarketingEligible
// Dependencies: [1388, 14082, 8323, 2]
// Exports: useNitroFileUploadAnnouncementEligible, useNitroFileUploadUpsellEligible

// Module 18980 (useNitroFileUploadMarketingEligible)
import PremiumConstants from "PremiumConstants" /* 1388 */;
import NitroFileUploadExperiments from "NitroFileUploadExperiments" /* 8323 */;
import useIsPremiumSubscriber from "useIsPremiumSubscriber" /* 14082 */;
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
