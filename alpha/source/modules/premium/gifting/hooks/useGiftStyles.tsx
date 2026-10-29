// Module ID: 10520
// Function ID: 10521
// Name: useGiftStyles
// Dependencies: [1391, 2]
// Exports: useGiftStyles

// Module 10520 (useGiftStyles)
import PremiumConstants from "PremiumConstants" /* 1391 */;
import size from "module_2" /* 2 */;

const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const result = size.fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
}
