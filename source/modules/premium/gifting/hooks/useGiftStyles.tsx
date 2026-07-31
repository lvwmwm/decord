// Module ID: 8785
// Function ID: 8786
// Name: useGiftStyles
// Dependencies: [1876, 2]
// Exports: useGiftStyles

// Module 8785 (useGiftStyles)
import { PremiumGiftStyles } from "GuildFeatures";

const result = require("set").fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export const useGiftStyles = function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
};
