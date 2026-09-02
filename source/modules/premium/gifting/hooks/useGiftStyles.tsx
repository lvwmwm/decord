// Module ID: 10699
// Function ID: 10700
// Name: useGiftStyles
// Dependencies: [1923, 2]
// Exports: useGiftStyles

// Module 10699 (useGiftStyles)
import set from "set" /* 2 */;
import GuildFeatures from "GuildFeatures" /* 1923 */;

const PremiumGiftStyles = GuildFeatures.PremiumGiftStyles;
const result = set.fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export const useGiftStyles = function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
};
