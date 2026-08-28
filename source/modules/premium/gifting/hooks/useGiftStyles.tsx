// Module ID: 10415
// Function ID: 10416
// Name: useGiftStyles
// Dependencies: [1925, 2]
// Exports: useGiftStyles

// Module 10415 (useGiftStyles)
import set from "set" /* 2 */;
import GuildFeatures from "GuildFeatures" /* 1925 */;

const PremiumGiftStyles = GuildFeatures.PremiumGiftStyles;
const result = set.fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export const useGiftStyles = function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
};
