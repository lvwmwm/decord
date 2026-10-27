// Module ID: 10455
// Function ID: 10456
// Name: useGiftStyles
// Dependencies: [1391, 2]
// Exports: useGiftStyles

// Module 10455 (useGiftStyles)
import PremiumConstants from "PremiumConstants" /* 1391 */;
import size from "module_2" /* 2 */;

const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const result = size.fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export const useGiftStyles = function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
};
