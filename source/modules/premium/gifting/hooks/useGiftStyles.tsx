// Module ID: 9472
// Function ID: 9473
// Name: useGiftStyles
// Dependencies: [1876, 2]
// Exports: useGiftStyles

// Module 9472 (useGiftStyles)
import { PremiumGiftStyles } from "GuildFeatures";

const result = require("set").fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export const useGiftStyles = function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
};
