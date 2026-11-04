// Module ID: 19321
// Function ID: 19322
// Name: useNitroFileUploadMarketingEligible
// Dependencies: [1387, 11605, 5202, 2]
// Exports: useNitroFileUploadAnnouncementEligible, useNitroFileUploadUpsellEligible

// Module 19321 (useNitroFileUploadMarketingEligible)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import NitroFileUploadExperiments from "NitroFileUploadExperiments" /* 5202 */;
import useIsPremiumSubscriber from "useIsPremiumSubscriber" /* 11605 */;
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
