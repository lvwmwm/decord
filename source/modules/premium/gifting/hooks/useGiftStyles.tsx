// Module ID: 9643
// Function ID: 9644
// Name: useGiftStyles
// Dependencies: [1924, 2]
// Exports: useGiftStyles

// Module 9643 (useGiftStyles)
import { PremiumGiftStyles } from "GuildFeatures";

const result = require("set").fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export const useGiftStyles = function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
};
