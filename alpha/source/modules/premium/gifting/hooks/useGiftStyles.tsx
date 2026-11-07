// Module ID: 10684
// Function ID: 10685
// Name: useGiftStyles
// Dependencies: [1387, 2]
// Exports: useGiftStyles

// Module 10684 (useGiftStyles)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import size from "module_2" /* 2 */;

const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const result = size.fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
}
