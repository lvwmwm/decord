// Module ID: 11667
// Function ID: 11668
// Name: useGiftStyles
// Dependencies: [1390, 2]
// Exports: useGiftStyles

// Module 11667 (useGiftStyles)
import PremiumConstants from "PremiumConstants" /* 1390 */;
import size from "module_2" /* 2 */;

const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const result = size.fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
}
