// Module ID: 8820
// Function ID: 69596
// Name: useGiftStyles
// Dependencies: [1851, 2]
// Exports: useGiftStyles

// Module 8820 (useGiftStyles)
import { PremiumGiftStyles } from "GuildFeatures";

const result = require("set").fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export const useGiftStyles = function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
};
