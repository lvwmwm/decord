// Module ID: 16750
// Function ID: 16751
// Name: useNitroFileUploadMarketingEligible
// Dependencies: [1374, 10607, 5435, 2]
// Exports: useNitroFileUploadAnnouncementEligible, useNitroFileUploadUpsellEligible

// Module 16750 (useNitroFileUploadMarketingEligible)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import NitroFileUploadExperiments from "NitroFileUploadExperiments" /* 5435 */;
import useIsPremiumSubscriber from "useIsPremiumSubscriber" /* 10607 */;
import size from "module_2" /* 2 */;

const PremiumTypes = PremiumConstants.PremiumTypes;
const result = size.fileFinishedImporting("modules/premium/file_upload/useNitroFileUploadMarketingEligible.tsx");

export const useNitroFileUploadAnnouncementEligible = function useNitroFileUploadAnnouncementEligible(MainViewTooltipActionSheets) {
  let isPremiumSubscriber = useIsPremiumSubscriber.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  if (isPremiumSubscriber) {
    isPremiumSubscriber = obj2.useNitroFileUploadRolloutEnabled(MainViewTooltipActionSheets);
  }
  return isPremiumSubscriber;
};
export const useNitroFileUploadUpsellEligible = function useNitroFileUploadUpsellEligible(MainViewTooltipActionSheets) {
  const isPremiumSubscriber = useIsPremiumSubscriber.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  return NitroFileUploadExperiments.useNonNitroFileUploadMarketingEnabled(MainViewTooltipActionSheets) && !isPremiumSubscriber;
};
