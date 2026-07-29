// Module ID: 8776
// Function ID: 8777
// Name: useGiftStyles
// Dependencies: [1876, 2]
// Exports: useGiftStyles

// Module 8776 (useGiftStyles)
import { PremiumGiftStyles } from "GuildFeatures";

const result = require("set").fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export const useGiftStyles = function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
};
