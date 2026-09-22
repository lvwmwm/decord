// Module ID: 17070
// Function ID: 17071
// Name: useNitroFileUploadMarketingEligible
// Dependencies: [1373, 11294, 5211, 2]
// Exports: useNitroFileUploadAnnouncementEligible, useNitroFileUploadUpsellEligible

// Module 17070 (useNitroFileUploadMarketingEligible)
import PremiumConstants from "PremiumConstants" /* 1373 */;
import NitroFileUploadExperiments from "NitroFileUploadExperiments" /* 5211 */;
import useIsPremiumSubscriber from "useIsPremiumSubscriber" /* 11294 */;
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
