// Module ID: 8708
// Function ID: 69076
// Name: useGiftStyles
// Dependencies: [1852, 2]
// Exports: useGiftStyles

// Module 8708 (useGiftStyles)
import { PremiumGiftStyles } from "GuildFeatures";

const result = require("set").fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export const useGiftStyles = function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
};
