// Module ID: 10701
// Function ID: 10702
// Name: useGiftStyles
// Dependencies: [1387, 2]
// Exports: useGiftStyles

// Module 10701 (useGiftStyles)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import size from "module_2" /* 2 */;

const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const result = size.fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
}
