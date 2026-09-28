// Module ID: 10165
// Function ID: 10166
// Name: useGiftStyles
// Dependencies: [1374, 2]
// Exports: useGiftStyles

// Module 10165 (useGiftStyles)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import size from "module_2" /* 2 */;

const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const result = size.fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export const useGiftStyles = function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
};
