// Module ID: 10999
// Function ID: 11000
// Name: useGiftStyles
// Dependencies: [1378, 2]
// Exports: useGiftStyles

// Module 10999 (useGiftStyles)
import PremiumConstants from "PremiumConstants" /* 1378 */;
import size from "module_2" /* 2 */;

const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const result = size.fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export const useGiftStyles = function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
};
