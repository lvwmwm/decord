// Module ID: 10565
// Function ID: 10566
// Name: useGiftStyles
// Dependencies: [1385, 2]
// Exports: useGiftStyles

// Module 10565 (useGiftStyles)
import PremiumConstants from "PremiumConstants" /* 1385 */;
import size from "module_2" /* 2 */;

const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const result = size.fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
}
