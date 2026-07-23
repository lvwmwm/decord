// Module ID: 8781
// Function ID: 69381
// Name: useGiftStyles
// Dependencies: [1851, 2]
// Exports: useGiftStyles

// Module 8781 (useGiftStyles)
import { PremiumGiftStyles } from "GuildFeatures";

const result = require("set").fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export const useGiftStyles = function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
};
