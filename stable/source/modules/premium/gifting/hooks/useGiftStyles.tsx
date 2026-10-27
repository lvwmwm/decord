// Module ID: 10357
// Function ID: 10358
// Name: useGiftStyles
// Dependencies: [1394, 2]
// Exports: useGiftStyles

// Module 10357 (useGiftStyles)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import size from "module_2" /* 2 */;

const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const result = size.fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export const useGiftStyles = function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
};
