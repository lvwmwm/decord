// Module ID: 9518
// Function ID: 9519
// Name: useGiftStyles
// Dependencies: [1905, 2]
// Exports: useGiftStyles

// Module 9518 (useGiftStyles)
import { PremiumGiftStyles } from "GuildFeatures";

const result = require("set").fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export const useGiftStyles = function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
};
