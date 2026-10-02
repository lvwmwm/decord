// Module ID: 10204
// Function ID: 10205
// Name: useGiftStyles
// Dependencies: [1380, 2]
// Exports: useGiftStyles

// Module 10204 (useGiftStyles)
import PremiumConstants from "PremiumConstants" /* 1380 */;
import size from "module_2" /* 2 */;

const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const result = size.fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export const useGiftStyles = function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
};
