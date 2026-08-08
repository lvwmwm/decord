// Module ID: 9583
// Function ID: 9584
// Name: useGiftStyles
// Dependencies: [1905, 2]
// Exports: useGiftStyles

// Module 9583 (useGiftStyles)
import { PremiumGiftStyles } from "GuildFeatures";

const result = require("set").fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export const useGiftStyles = function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
};
