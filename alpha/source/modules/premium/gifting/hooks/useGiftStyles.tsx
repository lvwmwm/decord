// Module ID: 11000
// Function ID: 11001
// Name: useGiftStyles
// Dependencies: [1388, 2]
// Exports: useGiftStyles

// Module 11000 (useGiftStyles)
import PremiumConstants from "PremiumConstants" /* 1388 */;
import size from "module_2" /* 2 */;

const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const result = size.fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
}
