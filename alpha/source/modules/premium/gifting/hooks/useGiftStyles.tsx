// Module ID: 10430
// Function ID: 10431
// Name: useGiftStyles
// Dependencies: [1394, 2]
// Exports: useGiftStyles

// Module 10430 (useGiftStyles)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import size from "module_2" /* 2 */;

const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const result = size.fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export const useGiftStyles = function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
};
