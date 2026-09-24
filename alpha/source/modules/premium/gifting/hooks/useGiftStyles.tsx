// Module ID: 11049
// Function ID: 11050
// Name: useGiftStyles
// Dependencies: [1374, 2]
// Exports: useGiftStyles

// Module 11049 (useGiftStyles)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import size from "module_2" /* 2 */;

const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const result = size.fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export const useGiftStyles = function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
};
