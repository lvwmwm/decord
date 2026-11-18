// Module ID: 9374
// Function ID: 9375
// Name: useGiftStyles
// Dependencies: [1390, 2]
// Exports: useGiftStyles

// Module 9374 (useGiftStyles)
import PremiumConstants from "PremiumConstants" /* 1390 */;
import size from "module_2" /* 2 */;

const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const result = size.fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
}
