// Module ID: 9730
// Function ID: 9731
// Name: useGiftStyles
// Dependencies: [1924, 2]
// Exports: useGiftStyles

// Module 9730 (useGiftStyles)
import set from "set" /* 2 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;

const PremiumGiftStyles = GuildFeatures.PremiumGiftStyles;
const result = set.fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export const useGiftStyles = function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
};
